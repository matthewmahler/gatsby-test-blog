import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Header from "./header";
import Archive from "./archive";
import "./layout.css";
import { Spring } from "react-spring/renderprops";

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  margin: 1rem auto;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Spring
          from={{ height: location.pathname === "/" ? 100 : 200 }}
          to={{ height: location.pathname === "/" ? 200 : 100 }}
        >
          {styles => (
            <div
              style={{
                overflow: "hidden",
                ...styles
              }}
            >
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>

        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

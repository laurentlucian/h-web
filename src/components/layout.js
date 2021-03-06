import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./normalize.css";
import { Global, css } from "@emotion/core";
const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Global
            styles={css`
              body {
                font-family: "Nunito", -apple-system, BlinkMacSystemFont, Segoe UI,
                  Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
                  Segoe UI Symbol;
              }
              ::selection {
                background: #fff300;
                color: #000;
                text-shadow: none;
              }
              /* ghosting */
              /* * {
                background: #000 !important;
                color: #0f0 !important;
                outline: solid #f00 1px !important;
              } */

              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translate3d(0, 20%, 0);
                }

                to {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }

              @keyframes fadeInDown {
                from {
                  opacity: 0;
                  transform: translate3d(0, -20%, 0);
                }

                to {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
            `}
          />
          <Header siteTitle={data.site.siteMetadata.title} />

          <main>{children}</main>
          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

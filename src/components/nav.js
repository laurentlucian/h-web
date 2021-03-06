import React, { useEffect, useCallback, useState } from "react";
import _throttle from "lodash.throttle";
import { css } from "@emotion/core";
import Button from "./../components/button";
import { NavLink } from "./typography";
import { goTo } from "../routerUtils";

/* Feature detection */
var passiveIfSupported = false;

try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      // eslint-disable-next-line getter-return
      get: function() {
        passiveIfSupported = { passive: true };
      },
    })
  );
} catch (err) {}

const isInViewport = function(elem) {
  const rect = elem.getBoundingClientRect();
  // should be visible at least half of the screen
  const winH = window.innerHeight / 2;
  const scrollTop =
    document.documentElement.scrollTop ||
    document.body.parentNode.scrollTop ||
    document.body.scrollTop;
  const scrollBottom = scrollTop + winH;
  const elTop = rect.top + scrollTop;
  const elBottom = elTop + elem.offsetHeight;

  return elTop < scrollBottom && elBottom > scrollTop;
};

const useActiveRouter = () => {
  const [activeRouter, setActiveRouter] = useState();

  const checkActiveSection = useCallback(
    _throttle(() => {
      const sections = document.querySelectorAll("[data-router-section]");
      sections.forEach(element => {
        if (!isInViewport(element)) return;
        const name = element.id;

        setActiveRouter(name);
      });
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", checkActiveSection, passiveIfSupported);
    return window.removeEventListener("onscroll", checkActiveSection, passiveIfSupported);
  }, []);

  return activeRouter;
};

const Nav = props => {
  const activeRouter = useActiveRouter();

  return (
    <nav
      css={css`
        margin-left: auto;
        @media only screen and (max-width: 720px) {
          margin: 5px auto;
        }
        @media screen and (max-width: 360px) {
          & a {
            font-size: 13px;
          }
        }
      `}
    >
      <span>
        <NavLink onClick={goTo("about")} href="#about" active={activeRouter === "about"}>
          WHAT WE DO
        </NavLink>
        <NavLink
          onClick={goTo("clients")}
          href="#clients"
          active={activeRouter === "clients"}
        >
          CLIENTS
        </NavLink>
        <NavLink
          onClick={goTo("talents")}
          href="#talents"
          active={activeRouter === "talents"}
        >
          TALENTS
        </NavLink>
      </span>
      <Button
        onClick={goTo("contact")}
        href="#contact"
        raised={!props.isFixed}
        primary={props.isFixed}
        style={css`
          margin-left: 54px;
          @media only screen and (max-width: 720px) {
            position: absolute;
            top: 10px;
            right: 20px;
            text-align: center;
            padding: 10px 15px;
            font-size: 14px;
          }
        `}
        shadow={
          props.isFixed &&
          css`
            &:hover {
              box-shadow: 0 2px 15px 0 rgba(77, 18, 38, 0.56);
            }
          `
        }
      >
        Let's Talk
      </Button>
    </nav>
  );
};
export default React.memo(Nav);

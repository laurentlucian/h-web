import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import { Paragraph, SubHeading } from "../components/typography";
import AboutGirlSvg from "../vectors/about-girl";
import AboutBoySvg from "../vectors/about-boy";
import RouterAnchor from "../components/routerAnchor";
import { goTo } from "../routerUtils";
import Grid from "../components/grid";
import TrailAnimate, { Recipes } from "../components/trailanimate";

export default () => (
  <section
    css={css`
      position: relative;
    `}
  >
    <RouterAnchor name="about">
      <Content>
        <Grid.Area
          css={css`
            align-items: center;
            margin: 100px auto;
            width: 100%;
            @media only screen and (max-width: 700px) {
              flex-flow: column nowrap;
            }
          `}
        >
          <Grid.Text
            css={css`
              @media only screen and (max-width: 700px) {
                margin: 0 auto;
              }
            `}
          >
            <TrailAnimate recipe={Recipes.fadeInLeft}>
              <SubHeading red>For Talents</SubHeading>
              <Paragraph>
                We understand content.{" "}
                <a href="#talents" onClick={goTo("talents")}>
                  Our team supports you
                </a>{" "}
                by combining hands-on strategic experience using industry leading tools to
                maximize your content monetization potential and building lasting brand
                relationships.
              </Paragraph>
            </TrailAnimate>
          </Grid.Text>
          <div
            css={css`
              width: 100%;
              @media only screen and (max-width: 700px) {
                width: 50%;
              }
            `}
          >
            <TrailAnimate recipe={Recipes.fadeInRight}>
              <AboutGirlSvg />
            </TrailAnimate>
          </div>
        </Grid.Area>
        <Grid.Area
          css={css`
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            @media only screen and (max-width: 700px) {
              flex-flow: column wrap;
            }
          `}
        >
          <div
            css={css`
              width: 100%;
              @media only screen and (max-width: 700px) {
                order: 1;
                width: 50%;
              }
            `}
          >
            <TrailAnimate recipe={Recipes.fadeInLeft}>
              <AboutBoySvg />
            </TrailAnimate>
          </div>
          <Grid.Text
            css={css`
              margin-right: 0;
              margin-left: 60px;
              @media only screen and (max-width: 700px) {
                margin: 0 auto;
              }
            `}
          >
            <TrailAnimate recipe={Recipes.fadeInRight}>
              <SubHeading red>For Clients</SubHeading>
              <Paragraph>
                Hiiyar makes it easy by providing end-to-end influencer services for your
                brand. From planning and casting to executing and reporting,{" "}
                <a href="#clients" onClick={goTo("clients")}>
                  our end-to-end service
                </a>{" "}
                delivers your brand’s unique campaign objectives across all channels.
                <br /> <br />
                Our mission to tap into first-to-market territories have cemented us as
                the go-to for clients.
              </Paragraph>
            </TrailAnimate>
          </Grid.Text>
        </Grid.Area>
      </Content>
    </RouterAnchor>
  </section>
);

import React from "react";
import { css } from "@emotion/core";
import Content from "./../components/content";

import { Heading1, Paragraph } from "./../components/typography";
import Button from "./../components/button";
import { goTo } from "../routerUtils";

import { FirstCurve as FirstCurveSvg } from "../vectors/curves";
import WhiteLogoSvg from "../vectors/white-logo";
import JumpingGuySvg from "../vectors/jumping-guy";
import JumpingGirlSvg from "../vectors/jumping-girl";

import WordSlider from "../components/wordslider";
import RouterAnchor from "../components/routerAnchor";

export default () => {
  return (
    <section
      css={css`
        width: 100%;
        /* height: 750px; */
        background-size: 100%;
        object-fit: contain;
        background-image: linear-gradient(354deg, #8f1840, #8f1840 52%, #4d1226);
        position: relative;
      `}
    >
      <RouterAnchor name="hero">
        <Content
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 150px 0 150px 0;
            @media only screen and (max-width: 600px) {
              padding-bottom: 50px;
            }
          `}
        >
          <WhiteLogoSvg
            css={css`
              width: 128px;
              animation: fadeInUp both 1s;
              animation-delay: 300ms;
            `}
          />
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              animation: "fadeInUp 0.5s both",
              animationDelay: "600ms",
            }}
          >
            <WordSlider>
              <Heading1>Hi, have we met?</Heading1>
              <Heading1>We're Hiiyar!</Heading1>
              <Heading1>Let's do something amazing</Heading1>
              <Heading1>Work with us!</Heading1>
            </WordSlider>
          </div>
          <Paragraph white center fadeIn={"1000ms"}>
            Great storytelling runs in our DNA. We come from a background of game
            developers, game marketers and industry influencers. Our expertise combines
            powerful creative with metric-driven leads to create compelling content with
            measurable results.
          </Paragraph>

          <div
            css={css`
              width: 350px;
              margin: 20px 0;
              display: flex;
              justify-content: space-between;
              animation: fadeInUp both 1s;
              animation-delay: 1200ms;
              @media screen and (max-width: 360px) {
                flex-direction: column;
                align-items: center;
                width: auto;
                & button {
                  flex-grow: 0;
                  margin: 5px;
                }
              }
            `}
          >
            <Button onClick={goTo("talents")}>For Talents</Button>
            <Button onClick={goTo("clients")} ghosted>
              For Clients
            </Button>
          </div>
        </Content>
      </RouterAnchor>

      <FirstCurveSvg
        css={css`
          fill: white;
          position: absolute;
          pointer-events: none;
          bottom: 0;
          transform: translateY(50%);
        `}
      />
      <JumpingGuySvg
        css={css`
          position: absolute;
          left: 10%;
          top: 34%;
          width: 350px;
          @media only screen and (max-width: 1500px) {
            left: 4%;
            top: 40%;
            width: 290px;
          }
          @media only screen and (max-width: 1100px) {
            display: none;
          }
        `}
      />
      <JumpingGirlSvg
        css={css`
          position: absolute;
          right: 10%;
          top: 18%;
          width: 380px;
          @media only screen and (max-width: 1500px) {
            right: 4%;
            top: 25%;
            width: 310px;
          }
          @media only screen and (max-width: 1100px) {
            display: none;
          }
        `}
      />
    </section>
  );
};

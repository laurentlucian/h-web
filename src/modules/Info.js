import React, { useState } from "react";
import { css } from "@emotion/core";
import Content from "../components/content";
import { Heading2, SubHeading2 } from "../components/typography";
import InfoYoutubeSvg from "../vectors/info-youtube";
import InfoTwitchSvg from "../vectors/info-twitch";
import InfoStarSvg from "../vectors/info-star";
import { ForthCurve as ForthCurveSvg } from "../vectors/curves";

import Button from "../components/button";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Numbers from "../components/numbers";

export default () => (
  <section
    css={css`
      position: relative;
      background-image: linear-gradient(68deg, #a11846, #4d1226);
      width: 100%;
      height: 720px;
      object-fit: contain;
      padding-top: 200px;
      /* & * {
        border: 1px solid white;
      } */
    `}
  >
    <ForthCurveSvg
      css={css`
        position: absolute;
        top: -90px;
        pointer-events: none;
        /* background-color: blue; */
      `}
    />
    <Content
      css={css`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      `}
    >
      <Heading2 white style={{ fontWeight: "bold" }}>
        {`Our ${22} Influencers have Accumulated`}
      </Heading2>
      <Content
        css={css`
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          `}
        >
          <InfoTwitchSvg
            css={css`
              margin-bottom: 24px;
            `}
          />
          <SubHeading2 style={{ fontSize: "25px", lineHeight: 1.35 }}>
            Views on Twitch
          </SubHeading2>
          <Numbers />
        </div>
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          `}
        >
          <InfoYoutubeSvg
            css={css`
              height: 63px;
              width: 84px;
              margin-bottom: 30.8px;
            `}
          />
          <SubHeading2 style={{ fontSize: "26px", lineHeight: 1.36 }}>
            Views on Youtube
          </SubHeading2>
          <VisibilitySensor>
            <CountUp
              start={0}
              end={22290634}
              duration={3.74}
              separator=","
              style={{
                fontSize: "53px",
                fontWeight: "bold",
                lineHeight: 1.38,
                color: "#ffffff",
                width: "283px",
              }}
            />
          </VisibilitySensor>
        </div>
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          `}
        >
          <InfoStarSvg
            css={css`
              margin-bottom: 20.5px;
            `}
          />
          <SubHeading2 style={{ fontSize: "27px", lineHeight: 1.37 }}>
            Total Reach
          </SubHeading2>
          <CountUp
            end={31303565}
            duration={4.5}
            separator=","
            style={{
              fontSize: "53px",
              fontWeight: "bold",
              lineHeight: 1.38,
              color: "#ffffff",
              width: "283px",
            }}
          />
        </div>
      </Content>
    </Content>
  </section>
);
import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import TalentBoySvg from "../vectors/talent-boy";
import { Heading3, Paragraph, SubHeading2 } from "../components/typography";
import TalentRocketSvg from "../vectors/talent-rocket";
import TalentSpeakerSvg from "../vectors/talent-speaker";
import TalentGraphSvg from "../vectors/talent-graph";
import { ThirdCurve as ThirdCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";
import Grid from "../components/grid";
import TrailAnimate, { Recipes } from "../components/trailanimate";

export default () => (
  <section
    css={css`
      position: relative;
      width: 100%;
      object-fit: contain;
      padding-bottom: 100px;
    `}
  >
    <ThirdCurveSvg
      css={css`
        position: absolute;
        top: 1px;
        transform: translateY(-100%);
      `}
    />

    <RouterAnchor name="talents">
      <Content
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <div style={{ margin: "0 auto" }}>
          <Heading3 red style={{ margin: 0, textAlign: "center" }}>
            Solutions for Talents
          </Heading3>
          <Paragraph heading center>
            As a technology focused company, Hiiyar gives its talents the framework and
            tools to create better and reach higher.
          </Paragraph>
        </div>
        <Grid.Area>
          <Grid.Text
            css={css`
              & > div {
                margin: 15px 0;
              }
            `}
          >
            <TrailAnimate recipe={Recipes.fadeInLeft}>
              <div
                css={css`
                  display: flex;
                  align-items: flex-start;
                `}
              >
                <TalentRocketSvg
                  css={css`
                    width: 50px;
                    margin-right: 25px;
                    flex-shrink: 0;
                  `}
                />
                <div>
                  <SubHeading2 red>Management</SubHeading2>
                  <Paragraph>
                    Land sponsorships without the headache, create content under your own
                    terms and build relationships and experiences with the companies you
                    support.
                    {/* Our goal is to support creators leaving them to do what they do
                  best, Hiiyar’s internal staff is on-hand when needed to further explore
                  where content can go. */}
                  </Paragraph>
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  align-items: flex-start;
                `}
              >
                <TalentSpeakerSvg
                  css={css`
                    width: 50px;
                    margin-right: 25px;
                    flex-shrink: 0;
                  `}
                />
                <div>
                  <SubHeading2 red>Content</SubHeading2>
                  <Paragraph red>
                    Access our design and production team to produce anything that you may
                    need to better elevate your messaging. We create assets, videos,
                    infographics, landers and other marketing initiatives to better suit
                    your needs.
                  </Paragraph>
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  align-items: flex-start;
                `}
              >
                <TalentGraphSvg
                  css={css`
                    width: 50px;
                    margin-right: 25px;
                    flex-shrink: 0;
                  `}
                />
                <div>
                  <SubHeading2 red>Performance</SubHeading2>
                  <Paragraph as="div">
                    Work with our team to drive maximum potential to your brand growth.
                    Within any aspect of your business we’re able to support strategies
                    for growth, monetization, and audience insights.
                    {/* Check out our featured
                  Influencers below to see how our work has helped our talent grow! */}
                  </Paragraph>
                </div>
              </div>
            </TrailAnimate>
          </Grid.Text>
          <div style={{ width: "100%" }}>
            <TrailAnimate recipe={Recipes.fadeInRight}>
              <TalentBoySvg
                css={css`
                  @media only screen and (max-width: 700px) {
                    display: none;
                  }
                `}
              />
            </TrailAnimate>
          </div>
        </Grid.Area>
        {/* <div
          css={css`
            display: flex;
            justify-content: center;
            padding-top: 50px;
          `}
        >
          <Button CTA style={{ width: "160px" }}>
            Let's Talk
          </Button> 
        </div>  */}
      </Content>
    </RouterAnchor>
  </section>
);

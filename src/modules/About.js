import React from "react";
import AboutGirlSvg from "../vectors/about-girl";
import { css } from "@emotion/core";
import Content from "../components/content";
import { Paragraph, SubHeading } from "../components/typography";
import Button from "../components/button";

export default () => (
  <section
    css={css`
      position: relative;
      z-index: 2;
      margin: 250px 0 0 0;
    `}
  >
    <Content
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 450px;
          align-items: flex-start;
          margin-right: 60px;
        `}
      >
        <SubHeading>For Talents</SubHeading>
        <Paragraph style={{ marginBottom: "17px" }}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </Paragraph>
        <Button>Let's Talk</Button>
      </div>
      <AboutGirlSvg />
    </Content>
  </section>
);

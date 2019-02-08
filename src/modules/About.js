import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import Button from "../components/button";
import { Paragraph, SubHeading } from "../components/typography";
import AboutGirlSvg from "../vectors/about-girl";
import AboutBoySvg from "../vectors/about-boy";

export default () => (
  <section
    css={css`
      position: relative;
      padding: 150px 0 10px;
    `}
  >
    <Content>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          margin-top: 50px;
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
          <SubHeading red>For Talents</SubHeading>
          <Paragraph style={{ marginBottom: "17px" }}>
            We understand content. Our team supports you by combining hands-on strategic
            experience using industry leading tools to maximize your content monetization
            potential and building lasting brand relationships.
            <br /> <br />
          </Paragraph>
          <Button CTA style={{ margin: "10px 0" }}>
            Learn More
          </Button>
        </div>
        <AboutGirlSvg />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          margin-top: 150px;
        `}
      >
        <AboutBoySvg
          css={css`
            margin-top: 8px;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 450px;
            align-items: flex-start;
            margin-left: 60px;
          `}
        >
          <SubHeading red>For Clients</SubHeading>
          <Paragraph style={{ marginBottom: "17px" }}>
            Hiiyar makes it easy by providing end-to-end influencer services for your
            brand. From planning and casting to executing and reporting, our end-to-end
            service delivers your brand’s unique campaign objectives across all channels.{" "}
            <br /> <br />
            Our mission to tap into first-to-market territories have cemented us as the
            go-to for clients
          </Paragraph>
          <Button CTA style={{ margin: "10px 0" }}>
            Learn More
          </Button>
        </div>
      </div>
    </Content>
  </section>
);

import * as React from 'react';

import {
  Factoid,
  Image,
  Intro,
  Link,
  LinkWrapper,
  Links,
  Number,
  Primary,
  Wrapper,
} from './styled';
import Section, { SectionKind } from '../Section';
import { StaticQuery, graphql } from 'gatsby';

import { GraphqlImage } from '../../types';

interface AboutSectionData {
  talkImage: GraphqlImage;
}

interface AboutSectionProps {
  data: AboutSectionData;
}

const AboutSection = ({ data }: AboutSectionProps) => (
  <Section title="About us" sectionKind={SectionKind.VERTICAL}>
    <Wrapper>
      <Primary>
        <Intro>
          PSpades software solution has the vision of delivering unparalleled
          customer experience for our customers. The goal of our company is to
          help digitalise small businesses. We provide business automation
          solutions using artificial intelligence, web development, mobile
          applications. We, at Spades software solution truly believe in make in
          India, sell to the world. Digitalisation of business is an important
          step towards that goal. Reach out to us to take your business digital
          and sell your products for the world.
        </Intro>
        <Image imageData={data.talkImage.childImageSharp.gatsbyImageData} />
      </Primary>
      <Links>
        <LinkWrapper>
          <Link href="https://twitter.com/iamakulov">Twitter</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="https://github.com/iamakulov">Open-source work</Link>
        </LinkWrapper>
        <Factoid>
          <Number>340K</Number> reads of Ivan’s perf content
        </Factoid>
      </Links>
    </Wrapper>
  </Section>
);

const AboutSectionWithQuery = () => (
  <StaticQuery
    query={graphql`
      {
        talkImage: file(
          relativePath: { eq: "HomeSectionAbout/talk_cropped.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 727
              placeholder: NONE
              layout: CONSTRAINED
              formats: [AUTO]
            )
          }
        }
      }
    `}
    render={(data: AboutSectionData) => <AboutSection data={data} />}
  />
);

export default AboutSectionWithQuery;

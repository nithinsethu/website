import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { GraphqlImage } from '../../types';
import Image from '../Image';
import { Container, Item, ItemLink, Label, LabelWrapper } from './styled';

const stuffToPromote = [
  {
    imageKey: 'webPerf101',
    title: 'Web Performance 101',
    href: '/talks/web-perf-101/',
  },
  {
    imageKey: 'content',
    title: 'Case studies, guides, and open-source tools',
    href: '/content',
  },

  {
    imageKey: 'services',
    title: 'Make your site or web app fast',
    href: '/#services',
  },
];

interface BlogFooterAccordionProps {
  className?: string;
}

const BlogFooterAccordion = ({ className }: BlogFooterAccordionProps) => (
  <StaticQuery
    query={graphql`
      {
        webPerf101: file(
          relativePath: { eq: "BlogFooterAccordion/web-perf-101.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 130
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        services: file(
          relativePath: { eq: "BlogFooterAccordion/services.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 130
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        content: file(
          relativePath: { eq: "BlogFooterAccordion/content-views.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 130
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
      }
    `}
    render={(data: { [key: string]: GraphqlImage }) => (
      <Container className={className}>
        {stuffToPromote.map((i) => (
          <Item key={i.imageKey}>
            <ItemLink href={i.href}>
              <Image
                alt=""
                imageData={data[i.imageKey].childImageSharp.gatsbyImageData}
              />
              <LabelWrapper>
                <Label>{i.title}</Label>
              </LabelWrapper>
            </ItemLink>
          </Item>
        ))}
      </Container>
    )}
  />
);

export default BlogFooterAccordion;

import * as React from 'react';

import {
  ActionButton,
  Blockquote,
  BlockquoteFooter,
  BlockquoteImage,
  BlockquoteName,
  BlockquoteTextWrapper,
  Column,
  Columns,
  DesktopImage,
  H3,
  ImageText,
  MobileImage,
  MobileImageWrapper,
  Note,
  Section,
  SvgMask,
  Text,
} from './styled';
import { StaticQuery, graphql } from 'gatsby';

import { GraphqlImage } from '../../types';
import { SectionKind } from '../Section';

interface ServicesSectionProps {
  className?: string;
  data: {
    auditDesktop: GraphqlImage & {
      childImageSharp: { gatsbyImageData: { height: number } };
    };
    optimizationDesktop: GraphqlImage & {
      childImageSharp: { gatsbyImageData: { height: number } };
    };
    auditMobile: GraphqlImage;
    optimizationMobile: GraphqlImage;
    workshopMobile: GraphqlImage;
    workshopDesktop: GraphqlImage & {
      childImageSharp: { fixed: { height: number } };
    };
    davidAvatar: GraphqlImage;
    nicolasAvatar: GraphqlImage;
    piotrAvatar: GraphqlImage;
  };
}

const ServicesSection = ({ className = '', data }: ServicesSectionProps) => (
  <Section
    title="Let’s digitalise your business&nbsp;🚀"
    className={className}
    sectionKind={SectionKind.VERTICAL}
  >
    <SvgMask>
      <clipPath id="serviceMobileMask">
        <path d="M0 112C0 0.139999 0.139999 0 112 0C223.86 0 224 0.139999 224 112C224 223.86 223.86 224 112 224C0.139999 224 0 223.86 0 112Z"></path>
      </clipPath>
    </SvgMask>
    <ImageText
      id="audit"
      direction="forward"
      desktopImageHeight={
        data.auditDesktop.childImageSharp.gatsbyImageData.height
      }
    >
      <MobileImageWrapper>
        <MobileImage
          imageData={data.auditMobile.childImageSharp.gatsbyImageData}
        />
      </MobileImageWrapper>
      <DesktopImage
        imageData={data.auditDesktop.childImageSharp.gatsbyImageData}
      />
      <Text>
        <H3>Machine learning Applications;🔬</H3>
        <p>
          <strong>What:</strong> We provide end to end machine learning
          applications, from data extraction, transformation, modelling and
          analytics.
        </p>
        <p>
          <strong>Great when:</strong> automation is the need of the hour, we
          can build machine learning applications to automate complex tasks.
        </p>
        <Blockquote>
          <BlockquoteTextWrapper>
            <p>
              Automation of business activities using machine learning
              applications helps to scale the business. Business using
              Artificial intelligence have a big edge over their competition.
            </p>
          </BlockquoteTextWrapper>
          {/* <BlockquoteFooter>
            <BlockquoteImage
              imageData={data.piotrAvatar.childImageSharp.gatsbyImageData}
            />
            <BlockquoteName>Piotr Krawiec</BlockquoteName> · Product Engineer @
            Framer
          </BlockquoteFooter> */}
        </Blockquote>
        {/* <Note>
          <strong>Want an example?</strong> See this{' '}
          <a href="/blog/notion/">public Notion case study</a>.
        </Note> */}
      </Text>
    </ImageText>
    <ImageText
      id="optimize"
      direction="reverse"
      desktopImageHeight={
        data.optimizationDesktop.childImageSharp.gatsbyImageData.height
      }
    >
      <MobileImageWrapper>
        <MobileImage
          imageData={data.optimizationMobile.childImageSharp.gatsbyImageData}
        />
      </MobileImageWrapper>
      <DesktopImage
        imageData={data.optimizationDesktop.childImageSharp.gatsbyImageData}
      />
      <Text>
        <H3>Mobile application;🛠</H3>
        <p>
          <strong>What:</strong> we build cross platform applications that run
          on IOS and Android. Mobile application provide customised solutions
          for various business needs.
        </p>
        <p>
          <strong>Great when:</strong> you need a personalised way to reach your
          end customer.
        </p>
        <Blockquote>
          <BlockquoteTextWrapper>
            <p>
              Artificial intelligence on edge devices is deemed to be the next
              big thing. Edge devices such as mobile provide valuable
              information about the user. This enables to build smart mobile
              application that provide unprecedented value to the user.
            </p>
          </BlockquoteTextWrapper>
          {/* <BlockquoteFooter>
            <BlockquoteName>
              <BlockquoteImage
                imageData={data.davidAvatar.childImageSharp.gatsbyImageData}
              />
              David Sigley
            </BlockquoteName>{' '}
            · Head of Engineering @ Castor
          </BlockquoteFooter> */}
        </Blockquote>
      </Text>
    </ImageText>
    <ImageText
      id="workshop"
      direction="forward"
      desktopImageHeight={
        data.workshopDesktop.childImageSharp.gatsbyImageData.height
      }
    >
      <MobileImageWrapper>
        <MobileImage
          imageData={data.workshopMobile.childImageSharp.gatsbyImageData}
        />
      </MobileImageWrapper>
      <DesktopImage
        imageData={data.workshopDesktop.childImageSharp.gatsbyImageData}
      />
      <Text>
        <H3>Grow The Team&nbsp;🧑‍💻</H3>
        <p>
          <strong>What:</strong> web application have taken the business
          universe by storm. We build interactive, effective web applications
          for our clients.
        </p>
        <p>
          <strong>Great when:</strong> you need to interact with your clients
          via the internet.
        </p>
        <Blockquote>
          <BlockquoteTextWrapper>
            <p>
              Web applications have become a necessity for business. 4-5% of the
              world’s transactions are done through web applications. A fast and
              interactive Web applications is an unique selling point for
              businesses in today’s world.
            </p>
          </BlockquoteTextWrapper>
          {/* <BlockquoteFooter>
            <BlockquoteName>
              <BlockquoteImage
                imageData={data.nicolasAvatar.childImageSharp.gatsbyImageData}
              />
              Nicolás Delfino
            </BlockquoteName>{' '}
            · Lead consultant & Performance competence lead @ 1337
          </BlockquoteFooter> */}
        </Blockquote>
        {/* <Note>
          <strong>Format:</strong> Online or offline&nbsp;· For either Junior or
          Senior engineers&nbsp;· Takes 12-16 hours
        </Note>
        <Note>
          <strong>32% of all respondents</strong> so far told the workshop was
          “even better than expected”
        </Note> */}
      </Text>
    </ImageText>
    {/* <Columns>
      <Column>
        <H3>Open Source&nbsp;💛</H3>
        <p>
          Are you a non-commercial open-source project? Our work wouldn’t be
          possible without open-source tools. Reach out, and, if we have
          capacity, we’ll be glad to help for free.
        </p>
      </Column>
      <Column>
        <H3>Something Else&nbsp;🎁</H3>
        <p>
          Want something custom? We’ll be glad to help. Reach us, and let’s
          figure out how our experience can be relevant.
        </p>
      </Column>
    </Columns> */}
    <ActionButton href="#contact">Get a quote</ActionButton>
  </Section>
);

const ServicesSectionWithQuery = () => (
  <StaticQuery
    query={graphql`
      {
        auditDesktop: file(
          relativePath: { eq: "HomeSectionServices/audit-desktop.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 900
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        optimizationDesktop: file(
          relativePath: { eq: "HomeSectionServices/optimization-desktop.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 900
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        workshopDesktop: file(
          relativePath: { eq: "HomeSectionServices/workshop-desktop.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 900
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        auditMobile: file(
          relativePath: { eq: "HomeSectionServices/audit-mobile.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 224
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        optimizationMobile: file(
          relativePath: { eq: "HomeSectionServices/optimization-mobile.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 224
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
        workshopMobile: file(
          relativePath: { eq: "HomeSectionServices/workshop-mobile.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 224
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }

        davidAvatar: file(
          relativePath: { eq: "HomeSectionServices/david.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 20
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }

        nicolasAvatar: file(
          relativePath: { eq: "HomeSectionServices/nicolas.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 20
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }

        piotrAvatar: file(
          relativePath: { eq: "HomeSectionServices/piotr.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              height: 20
              placeholder: NONE
              layout: FIXED
              formats: [AUTO]
            )
          }
        }
      }
    `}
    render={(data: ServicesSectionProps['data']) => (
      <ServicesSection data={data} />
    )}
  />
);

export default ServicesSectionWithQuery;

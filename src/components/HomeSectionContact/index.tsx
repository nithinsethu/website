import * as React from 'react';

import {
  Contact,
  ContactImage,
  Container,
  Dot,
  Link,
  Prompt,
  PromptContainer,
} from './styled';
import { StaticQuery, graphql } from 'gatsby';

import { GraphqlImage } from '../../types';

interface ContactSectionData {
  iamakulov: GraphqlImage;
}

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({
  className = '',
  data,
}: ContactSectionProps & { data: ContactSectionData }) => (
  <div className={className}>
    <Container>
      <Link href="mailto:spadessoftwares@gmail.com" fontSize="42px">
        spadessoftwares@gmail<Dot>.</Dot>com
      </Link>
      <PromptContainer>
        <Prompt>
          Interested? We’d be glad to help. Drop us an email, and{' '}
          <Contact>Spades</Contact> will get back to you in 24 hours.
        </Prompt>
      </PromptContainer>
    </Container>
  </div>
);

const ContactSectionWithQuery = (props: ContactSectionProps) => (
  <StaticQuery
    query={graphql`
      fragment ContactImage on File {
        childImageSharp {
          gatsbyImageData(
            width: 24
            height: 24
            quality: 75
            placeholder: NONE
            layout: FIXED
            formats: [AUTO]
          )
        }
      }

      {
        iamakulov: file(
          sourceInstanceName: { eq: "shared" }
          relativePath: { eq: "iamakulov.jpg" }
        ) {
          ...ContactImage
        }
      }
    `}
    render={(data: ContactSectionData) => (
      <ContactSection data={data} {...props} />
    )}
  />
);

export default ContactSectionWithQuery;

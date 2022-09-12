import * as React from 'react';

import { Container, Credentials, Legal, LicenseName } from './styled';

import { JSXChildrenProp } from '../../types';
import Link from '../Link';

interface FooterProps {
  className?: string;
  linkToHome?: boolean;
  license?: JSXChildrenProp | false;
  useLicenseFontSpacing?: boolean;
  extraContent?: JSXChildrenProp;
  legalDetails?: string;
  showPaymentDetails?: boolean;
}

const Footer = ({
  className,
  linkToHome = true,
  license = (
    <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a>
  ),
  useLicenseFontSpacing = true,
  extraContent,
}: FooterProps) => (
  <Container className={className}>
    <Credentials>
      <span>
        {linkToHome ? (
          <Link href="/">Spades Software Solutions Private Limited</Link>
        ) : (
          'Spades Software Solutions Private Limited'
        )}
        {license && (
          <span>
            {' '}
            · License:{' '}
            <LicenseName useFontSpacing={useLicenseFontSpacing}>
              {license}
            </LicenseName>
          </span>
        )}
        {extraContent}
      </span>
      <span>🖤</span>
    </Credentials>
    <Legal>
      1, Ramachandrapuram, Southveli street Madurai-625001.
      <br />
      CIN: U72901TN2022PTC154975 <br />
      <a href="mailto:spadessoftwares@gmail.com">spadessoftwares@gmail.com</a>.
      <br />
      Ph no: 9789585127; 8754159989
    </Legal>
  </Container>
);

export default Footer;

import * as React from 'react';

import {
  BlockLink,
  Container,
  ImageWrapper,
  Items,
  ItemsWrapper,
  Logo,
  NavKind,
  PrimaryItem,
  SecondaryItem,
} from './styled';

import { LogoKind } from '../Logo';

export interface NavBaseProps {
  className?: string;
  primaryItems?: Array<{
    title: string;
    href: string;
  }>;
  secondaryItems?: Array<{
    title: string;
    href: string;
  }>;
  logoKind?: LogoKind;
  navKind?: NavKind;
  logoLinksToHome?: boolean;
  isLogoPlayful?: boolean;
}

const NavBase = ({
  className,
  logoKind,
  primaryItems,
  secondaryItems,
  navKind = NavKind.Dark,
  logoLinksToHome = true,
  isLogoPlayful,
}: NavBaseProps) => (
  <Container className={className}>
    {logoLinksToHome ? (
      <BlockLink href="/">
        <Logo logoKind={logoKind} isPlayful={isLogoPlayful} />
      </BlockLink>
    ) : (
      <Logo logoKind={logoKind} isPlayful={isLogoPlayful} />
    )}
    <ItemsWrapper>
      <Items>
        {primaryItems &&
          primaryItems.map((item) => (
            <PrimaryItem key={item.href} href={item.href} navKind={navKind}>
              {item.title}
            </PrimaryItem>
          ))}
        {secondaryItems &&
          secondaryItems.map((item) => (
            <SecondaryItem key={item.href} href={item.href} navKind={navKind}>
              {item.title}
            </SecondaryItem>
          ))}
      </Items>
    </ItemsWrapper>
  </Container>
);

export { NavKind };

export default NavBase;

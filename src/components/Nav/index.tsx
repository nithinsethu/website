import * as React from 'react';
import NavBase, { NavBaseProps } from '../NavBase';

const Nav = (props: NavBaseProps) => (
  <NavBase
    primaryItems={[
      { title: 'Services', href: '/#services' },
      { title: 'Client Stories', href: '/#clients' },
      { title: 'Perf Guides', href: '/content' },
      { title: 'About Us', href: '/#about' },
    ]}
    secondaryItems={[
      {
        title: 'spadessoftwares@gmail.com',
        href: 'mailto:spadessoftwares@gmail.com',
      },
    ]}
    {...props}
  />
);

export default Nav;

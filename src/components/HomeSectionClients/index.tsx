import * as React from 'react';

import {
  AppsmithLogo,
  BairavaMotorsLogo,
  CasesItemsContainer,
  CastorLogo,
  Content,
  ElElyonLogo,
  FinderLogo,
  FramerLogo,
  GoogleLogo,
  HugoLogo,
  LogoText,
  Mark,
  Tag,
  TagContainer,
} from './styled';
import Section, { SectionKind } from '../Section';

const ClientsSection = () => (
  <Section title="Cases" sectionKind={SectionKind.VERTICAL}>
    <CasesItemsContainer>
      <Content>
        <LogoText>
          <GoogleLogo />
          <TagContainer>
            <Tag>Automation system</Tag>
          </TagContainer>
        </LogoText>
        <p>
          We worked with fishnet, on building a monitoring system, with Machine
          learning. Fishnet was able to monitor it’s employees, thereby
          exponentially increasing their company’s productivity.
        </p>
        {/* <ul>
          <li>
            <a href="https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size">
              A guide to making web apps faster with webpack
            </a>{' '}
          </li>
          <li>
            <a href="https://github.com/GoogleChromeLabs/webpack-libs-optimizations">
              A list of tricks
            </a>{' '}
            to optimize dependencies
          </li>
          <li>
            <a href="https://github.com/GoogleChromeLabs/webpack-training-project">
              A training project
            </a>{' '}
            to practice optimization strategies
          </li>
        </ul> */}

        <blockquote>
          <p>
            Employee management and monitoring was a cumbersome task prior
            Spade’s. Now we have Systematics tool, to deal with that problem.
          </p>
          <footer>Siddharth, MD @ Fishnet pvt limited</footer>
        </blockquote>
      </Content>

      <Content>
        <LogoText>
          <HugoLogo />
          <TagContainer>
            <Tag>OCR</Tag>
            <Tag>Digitalisation</Tag>
          </TagContainer>
        </LogoText>
        <p>
          The management team at JKT Agro Foods were finding it difficult to
          track and categorise their physical expense bills.
        </p>
        <p>
          We at Spades, used the Optical Character Recognition (OCR) technology
          to convert these bills (images) to text, thereby making the entire
          process digital. Now the company is able to track their expenses with{' '}
          <Mark>100% precision.</Mark>{' '}
        </p>
        <blockquote>
          <p>
            We were more than satisfied working with Spade’s. Now we are able
            digitalise our Business.{' '}
            <Mark>The results are visible in our Balance sheets.</Mark>
          </p>
          <footer>Kannan, Md @ JKT Agrofoods</footer>
        </blockquote>
      </Content>

      <Content>
        <LogoText>
          <ElElyonLogo />
          <p>El elyon group of companies are into construction.</p>
          <TagContainer>
            <Tag>core web vitals</Tag>
          </TagContainer>
        </LogoText>
        <p>
          In today’s digital world, website is a company’s identity. It’s really
          important for companies to have a good impression. We at spade’s have
          developed a website for el elyon.
        </p>
        <blockquote>
          <p>
            The website is our new identity, we have been able to connect with
            clients across the globe. Our digital presence have increased our
            revenue, thanks to spade’s.
          </p>
          <footer>Sales team @ el elyon group of companies.</footer>
        </blockquote>
      </Content>

      <Content>
        <LogoText>
          <BairavaMotorsLogo />
          <p>Bairava motors are a vechile retail company.</p>
          <TagContainer>
            <Tag>react performance</Tag>
            <Tag>core web vitals</Tag>
          </TagContainer>
        </LogoText>
        <p>
          Bairava motors reached out to us for a digital attendance application.
          They had tried and tested various products available in the market but
          weren’t comfortable with any.
        </p>
        <p>
          We at Spade’s designed a flutter app, that uses bio-recognition and
          geo-location to track attendance of employees, provide attendance
          analytics to the management. Bairava motors are now able to register
          attendance of their geographically distributed service engineers.
        </p>
        <blockquote>
          <p>
            Our service engineers go all over the place to service vechiles,
            previously it was a tedious task to track employee attendance, now
            with spade’s attendance software, we are able to track employee
            attendance with ease.
          </p>
          <footer>Management @ Bairava</footer>
        </blockquote>
      </Content>

      <Content>
        <LogoText>
          <AppsmithLogo />
          <p>Kash Agro foods deals with agriculture commodities.</p>
          <TagContainer>
            <Tag> Flutter</Tag>
            <Tag>Notification</Tag>
            <Tag>Utility Application</Tag>
          </TagContainer>
        </LogoText>
        <p>
          We worked with Kash Agro foods on a notification application. There
          was communication cap between Kash Agro foods and their clients on
          changing commodity prices.
        </p>
        <p>
          We designed an application with an user friendly interface that would
          update clients about changing commodity prices. This helped Kash Agro
          foods <Mark>increase their revenue by 25% in FY2021-2022.</Mark>
        </p>
        <blockquote>
          <p>
            We are very satisfied by working with spades software solutions.
            They service was very friendly. The project was completed before the
            planned deadline. The application they have built for us has a
            direct impact on our bottom line.
          </p>
          <footer>Akash MD @Kash Agro Foods</footer>
        </blockquote>
      </Content>

      {/* <Content>
        <LogoText>
          <FramerLogo />
          <p>
            <a href="https://framer.com/">Framer</a> is an interface prototyping
            product.
          </p>
          <TagContainer>
            <Tag>react performance</Tag>
            <Tag>build performance</Tag>
            <Tag>core web vitals</Tag>
          </TagContainer>
        </LogoText>
        <p>
          We worked with Framer to perfect loading speed of Framer Web, Framer
          Desktop and Framer Sites.
        </p>
        <p>
          By working together,{' '}
          <Mark>
            we reduced Speed Index and First CPU Idle of Framer Web by 40-45%
          </Mark>
          . We also set up tooling around runtime perf – to help Framer keep
          &amp; maintain achieved results in the future.
        </p>
        <blockquote>
          <p>
            We’ve been very satisfied by working with Ivan! Ivan helped us to
            improve loading performance, runtime performance, and tooling around
            it.{' '}
            <Mark>
              The quality of his work, approach, documentation, etc. has been
              outstanding.
            </Mark>
          </p>
          <footer>
            <a href="https://twitter.com/eelco">Eelco Lempsink</a>, CTO @ Framer
          </footer>
        </blockquote>
      </Content> */}
    </CasesItemsContainer>
  </Section>
);

export default ClientsSection;

import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import { LogoKind } from '../../components/Logo';
import Script from '../../components/Script';
import WidthWrapper from '../../components/WidthWrapper';
import {
  BlogFooterAccordion,
  Content,
  Footer,
  Header,
  MailchimpSubscribe,
  TopMeta,
  BottomMeta,
  Nav,
  Title,
} from './styled';

interface ComponentProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        twitterId: string;
        siteUrl: string;
      };
    };
    markdownRemark: {
      id: string;
      excerpt: string;
      html: string;
      fields: {
        slug: string;
        readingTime: {
          text: string;
        };
      };
      frontmatter: {
        title: string;
        alternativeTitles?: {
          social: string;
          seo: string;
        };
        description: string;
        date: {
          published: string;
          formattedPublished: string;
          modified: string;
          formattedModified: string;
        };
        socialImage: {
          facebook: {
            publicURL: string;
          };
          twitter: {
            publicURL: string;
          };
        };
        author: {
          name: string;
          link: string;
          twitterId: string;
          facebookId: string;
        };
      };
    };
  };
}

const Component = ({ data }: ComponentProps) => {
  const siteMetadata = data.site.siteMetadata;
  const page = data.markdownRemark;
  const articleMeta = page.frontmatter;
  const authorDetails = articleMeta.author;

  const visibleTitle = articleMeta.title;
  const socialTitle = articleMeta.alternativeTitles?.social || visibleTitle;
  const seoTitle = articleMeta.alternativeTitles?.seo || visibleTitle;

  return (
    <Layout>
      <WidthWrapper>
        <Helmet>
          <title>
            {seoTitle} · {siteMetadata.title}
          </title>
          <meta name="description" content={articleMeta.description} />
          {articleMeta.socialImage.facebook && (
            <meta
              name="image"
              content={
                siteMetadata.siteUrl +
                articleMeta.socialImage.facebook.publicURL
              }
            />
          )}
          <meta itemProp="name" content={seoTitle} />
          <meta itemProp="description" content={articleMeta.description} />
          {articleMeta.socialImage.facebook && (
            <meta
              itemProp="image"
              content={
                siteMetadata.siteUrl +
                articleMeta.socialImage.facebook.publicURL
              }
            />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={socialTitle} />
          <meta name="twitter:description" content={articleMeta.description} />
          <meta name="twitter:site" content={`@${siteMetadata.twitterId}`} />
          <meta
            name="twitter:creator"
            content={`@${authorDetails.twitterId}`}
          />
          {articleMeta.socialImage.twitter && (
            <meta
              name="twitter:image:src"
              content={
                siteMetadata.siteUrl + articleMeta.socialImage.twitter.publicURL
              }
            />
          )}
          <meta name="og:title" content={socialTitle} />
          <meta name="og:description" content={articleMeta.description} />
          {articleMeta.socialImage.facebook && (
            <meta
              name="og:image"
              content={
                siteMetadata.siteUrl +
                articleMeta.socialImage.facebook.publicURL
              }
            />
          )}
          <meta name="og:site_name" content={siteMetadata.title} />
          <meta name="fb:admins" content={authorDetails.facebookId} />
          <meta name="og:type" content="article" />
          <meta
            name="article:published_time"
            content={articleMeta.date.published}
          />
          <meta name="article:author" content={authorDetails.name} />
          <meta
            name="article:modified_time"
            content={articleMeta.date.modified}
          />
          <link
            rel="canonical"
            href={siteMetadata.siteUrl + page.fields.slug}
          />
        </Helmet>
        <Nav logoKind={LogoKind.Black} />
        <Header>
          <Title>{visibleTitle}</Title>
          <TopMeta>
            {page.fields.readingTime.text} · Author:{' '}
            <a href={authorDetails.link} rel="author">
              {authorDetails.name}
            </a>
          </TopMeta>
        </Header>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Content>
        <BottomMeta>
          {articleMeta.date.modified === articleMeta.date.published ? (
            <>
              Published{' '}
              <time dateTime={articleMeta.date.published}>
                {articleMeta.date.formattedPublished}
              </time>
            </>
          ) : (
            [
              `Published ${articleMeta.date.formattedPublished} · Last updated `,
              <time dateTime={articleMeta.date.modified} key="modified">
                {articleMeta.date.formattedModified}
              </time>,
            ]
          )}
        </BottomMeta>
        <MailchimpSubscribe
          text="Performance articles, case studies, and more. A new email every few weeks (or less). Subscribe:"
          buttonText="Grow my perf skills"
        />
        <BlogFooterAccordion />
        <Footer />
        {/* Inserting the Twitter script manually
         * since we’re disabling Gatsby JS with gatsby-plugin-no-javascript */}
        <Script async src="https://platform.twitter.com/widgets.js" />
      </WidthWrapper>
    </Layout>
  );
};

export default Component;

// The `$slug` parameter is inserted by the `context` option of `createPage`
// in `gatsby-node.js`
export const pageQuery = graphql`
  query BlogPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        twitterId
        siteUrl
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        alternativeTitles {
          social
          seo
        }
        description
        date {
          published
          formattedPublished: published(formatString: "D MMMM YYYY")
          modified
          formattedModified: modified(formatString: "D MMMM YYYY")
        }
        socialImage {
          facebook {
            publicURL
          }
          twitter {
            publicURL
          }
        }
        author {
          name
          link
          twitterId
          facebookId
        }
      }
    }
  }
`;

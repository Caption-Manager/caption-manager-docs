import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export default function Seo({ title, description, pathname, children }: Props) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <React.Fragment>
      <title>{seo.title}</title>

      {/* The tag below serves to verify the domain of the website without having to pay
      a custom domain */}
      <meta
        name="google-site-verification"
        content="ZI1ESuHMWS-bwSyKBIn8-3N1won6rDxz9ggeIr4v4iY"
      />
      <meta id="description" name="description" content={seo.description} />
      <meta id="image" name="image" content={seo.image} />
      {children}
    </React.Fragment>
  );
}

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);
  return data?.site?.siteMetadata || {};
};

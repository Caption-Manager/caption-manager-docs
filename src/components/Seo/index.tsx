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

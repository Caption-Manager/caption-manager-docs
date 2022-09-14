import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

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
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <React.Fragment>
      <title>{seo.title}</title>

      {/* The meta tag below serves to verify the domain of the website without having to pay
      a custom domain. */}
      <meta
        name="google-site-verification"
        content="ZI1ESuHMWS-bwSyKBIn8-3N1won6rDxz9ggeIr4v4iY"
      />
      <meta id="description" name="description" content={seo.description} />
      {children}
    </React.Fragment>
  );
}

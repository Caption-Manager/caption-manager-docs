import * as React from "react";
import HeaderMenu from "./HeaderMenu";
import Footer from "./Footer";
import { Segment } from "semantic-ui-react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    // Flexbox solution to keep footer on bottom based on
    // https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b
    <div
      style={{
        height: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderMenu />
      {children}

      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}

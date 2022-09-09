import * as React from "react";
import Footer from "./Footer";
import HeaderMenu from "./HeaderMenu";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <HeaderMenu />

      {children}

      {/* <Footer /> */}
    </div>
  );
}

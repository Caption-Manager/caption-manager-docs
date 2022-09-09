import * as React from "react";
import HeaderMenu from "./HeaderMenu";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <HeaderMenu />
      {children}
    </div>
  );
}

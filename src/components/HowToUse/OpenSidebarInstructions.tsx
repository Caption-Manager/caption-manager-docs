import React from "react";
import { List } from "semantic-ui-react";
import OpenAddOnInstructions from "./OpenAddOnInstructions";

export default function OpenSidebarInstructionsList() {
  return (
    <React.Fragment>
      <OpenAddOnInstructions />
      <List.Item>
        Tap on <b>Open sidebar</b>.
      </List.Item>
    </React.Fragment>
  );
}

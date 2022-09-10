import React from "react";
import { List } from "semantic-ui-react";
import OpenAddOnInstructions from "./OpenAddOnInstructions";

export default function OpenSidebarInstructionsList() {
  return (
    <React.Fragment>
      <OpenAddOnInstructions />
      <List.Item>
        Click on the <b>"Open sidebar"</b> button. A sidebar will open on the
        right side of your screen.
      </List.Item>
    </React.Fragment>
  );
}

import * as React from "react";
import { Header, List } from "semantic-ui-react";
import HowToUseTemplate from "./../../templates/HowToUse";
import OpenSidebarInstructions from "../../components/HowToUse/OpenSidebarInstructions";
import Seo from "../../components/Seo";

export function Head() {
  return (
    <Seo
      title="Insert List From Sidebar"
      pathname="how-to-use/insert-list-from-sidebar"
    />
  );
}

export default function InsertListFromSidebar() {
  return (
    <HowToUseTemplate>
      <Header as={"h1"} content="Insert list from sidebar" dividing />
      <Instructions />
    </HowToUseTemplate>
  );
}

function Instructions() {
  return (
    <List ordered>
      <OpenSidebarInstructions />

      <List.Item>
        Open the <b>"Insert a list"</b>
        panel, the second item of the sidebar.
      </List.Item>

      <List.Item>
        Click where you want to insert the list on document.
        <List.Description>
          The list will be inserted on the next paragraph which is part of the
          main structure of the document.
        </List.Description>
      </List.Item>

      <List.Item>
        Select the targeted <b>element type</b> (image, table or equation) of
        your list.
      </List.Item>

      <List.Item>
        Select the targeted <b>list type</b> of your list (how you want the list
        to look).
      </List.Item>

      <List.Item>
        Click on the "<b>Insert list</b>" button.
      </List.Item>
    </List>
  );
}

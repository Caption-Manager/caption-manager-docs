import * as React from "react";
import HowToUseTemplate from "./../../templates/HowToUse";
import { Header, List } from "semantic-ui-react";
import Seo from "../../components/Seo";
import OpenAddOnMenuInstructions from "../../components/HowToUse/OpenAddOnInstructions";

export function Head() {
  return (
    <Seo
      title="Insert List From Add-On Menu"
      pathname="how-to-use/insert-list-from-add-on-menu"
    />
  );
}

export default function InsertListFromAddOnMenu() {
  return (
    <HowToUseTemplate>
      <Header as={"h1"} content="Insert list from the add-on menu" dividing />
      <Instructions />
    </HowToUseTemplate>
  );
}

function Instructions() {
  return (
    <List ordered>
      <OpenAddOnMenuInstructions />

      <List.Item>
        Click where you want to insert the list on document.
        <List.Description>
          The list will be inserted on the next paragraph which is part of the
          main structure of the document.
        </List.Description>
      </List.Item>

      <List.Item>
        Tap on <b>Insert a list</b>.
      </List.Item>

      <List.Item>
        Tap on an <b>element type</b> (image, table or equation).
      </List.Item>

      <List.Item>
        Click on a <b>list type</b> (how you want the list to look) to insert
        the list.
      </List.Item>
    </List>
  );
}

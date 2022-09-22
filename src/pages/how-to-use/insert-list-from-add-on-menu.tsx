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
      <Header as={"h1"} content="Insert List From Add-on Menu" dividing />
      <Instructions />
    </HowToUseTemplate>
  );
}

function Instructions() {
  return (
    <List ordered>
      <OpenAddOnMenuInstructions />

      <List.Item>
        Click where you want to insert the list on the document.
        <List.Description>
          The list will be inserted in the next paragraph which is part of the
          main structure of the document.
        </List.Description>
      </List.Item>

      <OpenAddOnMenuInstructions />

      <List.Item>
        Tap on "<b>Insert list of images</b>" or "<b>Insert list of tables</b>"
        or "<b>Insert list of equations</b>" menu.
      </List.Item>

      <List.Item>
        Click on a <b>list type</b> (default or bookmarked) and wait a few
        seconds.
      </List.Item>
    </List>
  );
}

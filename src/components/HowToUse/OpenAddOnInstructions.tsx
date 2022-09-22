import React from "react";
import { List } from "semantic-ui-react";

export default function OpenAddOnMenuInstructions() {
  return (
    <React.Fragment>
      <List.Item>
        On your computer, open a document in{" "}
        <a
          target={"_blank"}
          href="https://www.google.com/intl/pt-BR/docs/about/"
        >
          Google Docs
        </a>
        <> &rarr;</>. {/* Right arrow HTML entity */}
      </List.Item>

      <List.Item>
        Tap on "<b>Add-ons menu</b>"". Your current add-ons will be listed.
      </List.Item>

      <List.Item>
        Tap on "<b>Caption Manager</b>" menu.
      </List.Item>
    </React.Fragment>
  );
}

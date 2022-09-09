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
        Tap on the{" "}
        <a
          target={"_blank"}
          href="https://support.google.com/docs/answer/2942256?hl=en&co=GENIE.Platform%3DAndroid#zippy=%2Cuse-add-ons"
        >
          add-ons
        </a>{" "}
        menu.
      </List.Item>

      <List.Item>
        Tap on the <b>Caption Manager</b> add-on.
      </List.Item>
    </React.Fragment>
  );
}

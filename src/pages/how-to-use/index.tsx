import * as React from "react";
import { Link } from "gatsby";
import { Header, List, Message } from "semantic-ui-react";
import HowToUseTemplate from "./../../templates/HowToUse";
import Seo from "../../components/Seo";

export function Head() {
  return <Seo title="How to Use" pathname="how-to-use" />;
}

export default function HowToUse() {
  return (
    <HowToUseTemplate>
      <Header as={"h1"} content="How to Use" dividing />
      <Introduction />
    </HowToUseTemplate>
  );
}

function Introduction() {
  return (
    <>
      <Header as={"h2"} content="Introduction" />

      <p>
        Hello there! In the menu on the right side of this page (or, if you are
        on mobile, when you click on the floating button in the lower right
        corner of the screen) you will find a navigation menu for pages that
        teach you how to use the Caption Manager add-on. But before checking
        those pages, please remember:
      </p>

      <List>
        <List.Item>
          <List.Icon name="github" />

          <List.Content>
            <a
              target={"_blank"}
              href="https://github.com/leonardolombardi07/caption-manager"
            >
              <List.Header>Open-Source</List.Header>
            </a>

            <List.Description>
              This is an open-source add-on, so you can check and suggest code
              changes on{" "}
              <a
                target={"_blank"}
                href="https://github.com/leonardolombardi07/caption-manager"
              >
                Github
              </a>
              .
            </List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Icon name="exclamation circle" color="red" />
          <List.Content>
            <Link to="caveats">
              <List.Header>Caveats</List.Header>
            </Link>

            <List.Description>
              There are known usage issues. You can check them out on the{" "}
              <Link to="caveats">Caveats section</Link> of this page.
            </List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Icon name="map" color="green" />
          <List.Content>
            <Link to={"/roadmap"}>
              <List.Header>Roadmap</List.Header>
            </Link>
            <List.Description>
              There are new feature ideas being thought. You can see them on the{" "}
              <Link to={"/roadmap"}>Roadmap page</Link>.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>

      <Message floating positive style={{ marginTop: 30 }}>
        <Message.Header>Good Luck! </Message.Header>
      </Message>
    </>
  );
}

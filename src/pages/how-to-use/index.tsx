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
      {/* <CoreConcepts /> */}
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
        those pages, please remember that:
      </p>

      <List>
        <List.Item>
          <List.Icon name="github" />

          <List.Content>
            <a
              target={"_blank"}
              href="https://github.com/leonardolombardi07/caption-manager"
            >
              <List.Header as="a">Open-Source</List.Header>
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
              <List.Header as="a">Caveats</List.Header>
            </Link>

            <List.Description>
              There are known usage issues. You can check them out or file new
              issues on the <Link to="caveats">Caveats section</Link> on this
              page.
            </List.Description>
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Icon name="map" color="green" />
          <List.Content>
            <Link to={"/roadmap"}>
              <List.Header as="a">Roadmap</List.Header>
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

function CoreConcepts() {
  return (
    <>
      <Header as={"h2"} content="Core Concepts" />
      <p>
        Caption Manager has two main features: editing captions or inserting
        lists. A Caption is a title or brief explanation appended to an element
        (currently limited to a table, image, or equation). A list is an index
        of content that contains the captions arranged in the order they appear
        in the document. Caption Manager helps you for a few reasons:
      </p>

      <List>
        <List.Item>
          1) You don't need to manually number your captions - select an element
          anywhere in the document, save the caption and the rest of your
          captions will be updated accordingly with the right number. 2) You can
          change the label of captions for a given element at any time. If for
          example your image captions have the label "Figure", you can change
          that label to "Image", and when you save the caption, the rest of your
          captions will be updated with the changed label. 3) You can insert
          lists with your captions easily. By selecting an element type (images,
          tables or equations) and a desired list type (with or without
          bookmarks), you can with one click insert a list containing named
          paragraphs and bookmarks referencing the captions in the document.
        </List.Item>
      </List>
    </>
  );
}

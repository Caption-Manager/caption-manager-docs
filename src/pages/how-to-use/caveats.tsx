import * as React from "react";
import { Header } from "semantic-ui-react";
import HowToUseTemplate from "./../../templates/HowToUse";
import Seo from "../../components/Seo";

export function Head() {
  return <Seo title="Caveats" pathname="how-to-use/caveats" />;
}

export default function Caveats() {
  return (
    <HowToUseTemplate>
      <Header as={"h1"} content="Caveats" dividing />
      <Instructions />
    </HowToUseTemplate>
  );
}

function Instructions() {
  return (
    <>
      <Header as="h2">Incorrect caption recognition</Header>
      <p>
        A caption is currently recognized as simply text with the structure "
        <i>
          {"{label}"} {"{number}"} {"{description}"}"
        </i>{" "}
        (like "Figure 1 Pandas on the forest") immediately after a
        captionalizable element (an image, table or equation). So if there
        happens to be some text with the structure mentioned immediately after a
        captionalizable element, it may be incorrectly recongnized as a caption.
        There are plans to add better checks that are independent of text
        structure.
      </p>

      <Header as="h2">No automatic list updates</Header>
      <p>
        When you update your captions or insert a new list, old lists are not
        automatically updated. This follows the behavior of Google Docs Table of
        Contents, but it is important to remember that Caption Manager lists do
        not have their own refresh button/mechanism. Therefore, it is
        recommended to manually delete old lists after creating one.
      </p>
    </>
  );
}

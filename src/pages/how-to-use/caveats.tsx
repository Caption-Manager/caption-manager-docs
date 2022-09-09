import * as React from "react";
import { Header, List, Container } from "semantic-ui-react";
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
        {"{label}"} {"{number}"} {"{description}"}" (like "Figure 1 Pandas on
        the forest") immediately after a captionalizable element (an image,
        table or equation). So if there happens to be some text with the
        structure mentioned immediately after a captionalizable element, it may
        be incorrectly confused with a caption. There are plans to add better
        checks that don't depend on text structure.
      </p>

      <Header as="h2">No automatic list updates</Header>
      <p>
        When you update your captions or insert a new list, the old lists are
        not updated. This follows the behavior of the Google Docs Table of
        Contents, but it is important to remember that Caption Manager lists do
        not have their own refresh button/mechanism. Therefore, it is
        recommended to delay the creation of lists until the document is ready
        and to delete all the old lists before creating a new one.
      </p>
    </>
  );
}

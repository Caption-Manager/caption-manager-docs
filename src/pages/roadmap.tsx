import * as React from "react";
import { Segment, Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export function Head() {
  return (
    <Seo title="Roadmap" pathname="roadmap">
      <script src="https://p.trellocdn.com/embed.min.js"></script>
    </Seo>
  );
}

export default function Roadmap() {
  return (
    <Layout>
      <Segment basic padded textAlign="center">
        <Header content="Check the Trello Board: " />
        <blockquote className="trello-board-compact">
          <a
            target={"_blank"}
            href="https://trello.com/b/WWiBiI8e/caption-manager"
          >
            Trello Board
          </a>
        </blockquote>
      </Segment>
    </Layout>
  );
}

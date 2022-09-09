import * as React from "react";
import { Link } from "gatsby";
import { Segment, Container, Button, Message, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export function Head() {
  return <Seo title="Page Not Found" />;
}

export default function NotFoundPage() {
  return (
    <Layout>
      <Segment basic textAlign="center">
        <Container text>
          <Message negative style={{ padding: 50 }}>
            <Icon
              name="broken chain"
              size="huge"
              style={{ width: "100%", marginBottom: "0.5em" }}
            />
            <Message.Header>This page isn't avaliable.</Message.Header>
            <p>
              The link you followed may be broken, or the page may have been
              removed.
            </p>

            <Link to="/">
              <Button size="huge" style={{ marginTop: 10 }}>
                Go home
              </Button>
            </Link>
          </Message>
        </Container>
      </Segment>
    </Layout>
  );
}

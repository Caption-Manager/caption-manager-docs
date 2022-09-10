import * as React from "react";
import { Link } from "gatsby";
import {
  Container,
  Segment,
  Button,
  Header,
  Icon,
  Grid,
  Image,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
// @ts-ignore: TODO: fix this
import Logo from "../images/Logo.png";

export function Head() {
  return <Seo />;
}

export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <Mission />
    </Layout>
  );
}

function Banner() {
  const mobile = false;

  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 600, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Caption Manager"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em",
          }}
        />
        <Header
          as="h2"
          content="The power of captions, now in Google Docs."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
          }}
        />

        <Link to="/how-to-use">
          <Button primary size="huge" style={{ marginTop: "0.5em" }}>
            Learn How to Use
            <Icon name="arrow right" />
          </Button>
        </Link>
      </Container>
    </Segment>
  );
}

function Mission() {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Manage captions with ease
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              You can now insert or update captions linked to images, tables and
              equations. Select an element, edit your caption and just enjoy: we
              take care of correctly numbering and updating the other captions
              in your document.
            </p>

            <Header as="h3" style={{ fontSize: "2em" }}>
              Insert list of captions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Similarly to what you can do with Google Docs{" "}
              <a
                target={"_blank"}
                href="https://support.google.com/docs/answer/116338?hl=en&co=GENIE.Platform%3DDesktop"
              >
                Table of Contents{" "}
              </a>
              , with Caption Manager you can insert lists with our without
              references to your captions. No need to tediously rewrite or
              bookmark your captions one by one.
            </p>
          </Grid.Column>
          <Grid.Column only="computer" floated="right" width={6}>
            <Image size="large" src={Logo} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

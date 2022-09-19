import * as React from "react";
import { Link } from "gatsby";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "2em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Pages" />
              <List link inverted>
                <List.Item as={Link} to="/">
                  Home
                </List.Item>
                <List.Item as={Link} to="/how-to-use">
                  How to Use
                </List.Item>
                <List.Item as={Link} to="/roadmap">
                  Roadmap
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="More" />
              <List link inverted>
                <List.Item as={Link} to="/privacy-policy">
                  Privacy Policy
                </List.Item>
                <List.Item as={Link} to="/terms-of-service">
                  Terms of Service
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              Made with 💙 by <b>Caption Manager</b>.
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

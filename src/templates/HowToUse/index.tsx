import * as React from "react";
import { Container, Segment, Grid, Button, Popup } from "semantic-ui-react";
import Menu from "./Menu";
import Layout from "../../components/Layout";
import Media from "../../utils/Media";

interface Props {
  children: React.ReactNode;
}

export default function HowToUse({ children }: Props) {
  return (
    <Layout>
      <Container
        fluid
        style={{
          padding: "2em 5em",
          // [Media.lessThan("tablet")]: { padding: "2em 0em" },
        }}
      >
        <Grid stackable columns={2}>
          <Grid.Column computer={12} tablet={11}>
            <Segment padded>{children}</Segment>
          </Grid.Column>

          <DesktopMenu />
          <MobileMenu />
        </Grid>
      </Container>
    </Layout>
  );
}

function DesktopMenu() {
  return (
    <Grid.Column only="computer tablet" computer={4} tablet={5}>
      <Menu />
    </Grid.Column>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Grid.Column only="mobile">
      <Popup
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        trigger={
          <div
            style={{
              position: "fixed",
              bottom: 50,
              right: 25,
            }}
          >
            <Button
              circular
              floated="right"
              color="black"
              size="massive"
              icon={isOpen ? "close" : "list"}
            />
          </div>
        }
        on="click"
        hideOnScroll
      >
        <Menu />
      </Popup>
    </Grid.Column>
  );
}

import * as React from "react";
import { Container, Segment, Grid, Button, Popup } from "semantic-ui-react";
import Menu from "./Menu";
import Layout from "../../components/Layout";

interface Props {
  children: React.ReactNode;
}

// TODO: obviously this is not good
// but downloading a css-in-js package
// just for this is an overkill
const responsive_padding_on_container = `
    .responsive_container {
        padding: 2em 0em;
    }

    @media (min-width: 768px) {
      .responsive_container {
        padding: 2em 5em;
      }
    }
`;

export default function HowToUse({ children }: Props) {
  return (
    <Layout>
      <style>{responsive_padding_on_container}</style>

      <Container className="responsive_container" fluid>
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
    // zIndex to make sure button stays on top of Layout Footer
    <Grid.Column only="mobile" style={{ zIndex: 10 }}>
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
              // Teal to make sure its visible on black AND
              //  white backgrounds
              color="teal"
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

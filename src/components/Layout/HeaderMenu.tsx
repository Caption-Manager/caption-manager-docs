import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import {
  Segment,
  Menu,
  Container,
  Button,
  Popup,
  MenuItemProps as SemanticMenuItemProps,
} from "semantic-ui-react";

export default function HeaderMenu() {
  return (
    <Segment inverted vertical>
      <Menu inverted pointing secondary size="large">
        <Container>
          <LinkedMenuItem to="/">Home</LinkedMenuItem>
          <LinkedMenuItem to="/how-to-use">How to Use</LinkedMenuItem>
          <LinkedMenuItem to="/roadmap">Roadmap</LinkedMenuItem>
          <Popup
            position="bottom center"
            content="Not avaliable yet."
            on="hover"
            trigger={
              <Menu.Item position="right">
                <Button disabled inverted>
                  Download
                </Button>
              </Menu.Item>
            }
          />
        </Container>
      </Menu>
    </Segment>
  );
}

interface LinkedMenuItemProps extends SemanticMenuItemProps {
  to: string;
}

function LinkedMenuItem({ to, children, ...rest }: LinkedMenuItemProps) {
  const location = useLocation();
  const active =
    to === "/" ? location.pathname === to : location.href.includes(to);
  return (
    <Link to={to}>
      <Menu.Item active={active} {...rest}>
        {children}
      </Menu.Item>
    </Link>
  );
}

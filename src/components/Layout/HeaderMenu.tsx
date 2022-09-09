import * as React from "react";
import { Link } from "gatsby";
import {
  Segment,
  Menu,
  Container,
  Button,
  Popup,
  MenuItemProps as SemanticMenuItemProps,
} from "semantic-ui-react";
import getSlugs from "../../utils/getSlugs";

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
  return (
    <Link to={to}>
      <Menu.Item active={isActive(to)} {...rest}>
        {children}
      </Menu.Item>
    </Link>
  );
}

function isActive(to: string) {
  if (location.pathname === to) return true;
  return getSlugs(location.href).includes(to.replace("/", ""));
}

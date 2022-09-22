import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Menu, MenuItemProps } from "semantic-ui-react";

interface SectionItem {
  pathname: string;
  title: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

// TODO: we should somehow generate the sections and
// pathnames automatically
const sections: Section[] = [
  {
    title: "How to Use",
    items: [
      {
        title: "How to Use",
        pathname: "",
      },
    ],
  },
  {
    title: "Manage Captions",
    items: [
      {
        title: "Insert or update a caption",
        pathname: "insert-or-update-caption",
      },
    ],
  },
  {
    title: "Insert Lists",
    items: [
      {
        title: "Insert list from sidebar",
        pathname: "insert-list-from-sidebar",
      },
      {
        title: "Insert list from add-on menu",
        pathname: "insert-list-from-add-on-menu",
      },
    ],
  },
  {
    title: "Edit Caption Styles",
    items: [
      {
        title: "Edit caption styles",
        pathname: "edit-caption-styles",
      },
    ],
  },
  {
    title: "Caveats",
    items: [
      {
        title: "Caveats",
        pathname: "caveats",
      },
    ],
  },
];

export default function Menu_() {
  return (
    <Menu fluid vertical>
      {sections.map((section) => (
        <MenuSection section={section} key={section.title} />
      ))}
    </Menu>
  );
}

interface MenuSectionProps {
  section: Section;
}

function MenuSection({ section }: MenuSectionProps) {
  const { title, items } = section;

  if (items.length === 1) {
    const item = items[0];
    return (
      <LinkedMenuItem
        to={`/how-to-use/${item.pathname}`}
        name={item.title}
        pathname={item.pathname}
      />
    );
  }

  return (
    <Menu.Item>
      {title}
      <Menu.Menu>
        {items.map((item) => (
          <LinkedMenuItem
            to={`/how-to-use/${item.pathname}`}
            name={item.title}
            key={item.pathname}
          />
        ))}
      </Menu.Menu>
    </Menu.Item>
  );
}

interface LinkedMenuItemProps extends MenuItemProps {
  to: string;
}

function LinkedMenuItem({ to, ...menuProps }: LinkedMenuItemProps) {
  const location = useLocation();
  const active =
    to === "/how-to-use/"
      ? location?.pathname === "/how-to-use/" ||
        location?.pathname === "/how-to-use"
      : location?.href?.includes(to);

  return <Menu.Item as={Link} to={to} active={active} {...menuProps} />;
}

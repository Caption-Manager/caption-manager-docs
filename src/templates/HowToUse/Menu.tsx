import * as React from "react";
import { Link } from "gatsby";
import { Menu, MenuItemProps } from "semantic-ui-react";
import getSlugs from "../../utils/getSlugs";

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
    title: "Manage Lists",
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
        active={isActive(item.pathname)}
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
            active={isActive(item.pathname)}
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
  return <Menu.Item as={Link} to={to} {...menuProps} />;
}

function isActive(pathname: string) {
  const slugs = getSlugs(location.href);
  if (slugs.length === 1 && pathname === "") return true;
  return slugs.at(-1) === pathname;
}

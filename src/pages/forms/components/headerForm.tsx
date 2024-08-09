import * as React from 'react';

import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import '../style.sass'

const links = [
  { link: '/about', label: 'Features' },
  {
    link: '#1',
    label: 'Learn',
    links: [
      { link: '/docs', label: 'Documentation' },
      { link: '/resources', label: 'Resources' },
      { link: '/community', label: 'Community' },
      { link: '/blog', label: 'Blog' },
    ],
  },
  { link: '/about', label: 'About' },
  { link: '/pricing', label: 'Pricing' },
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export const HeaderForm = () => {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
      const menuItems = link.links?.map((item) => (
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      ));
  
      if (menuItems) {
        return (
          <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a
                href={link.link}
                className="link"
                onClick={(event) => event.preventDefault()}
              >
                <Center>
                  <span className="linkLabel">{link.label}</span>
                  <IconChevronDown size="0.9rem" stroke={1.5} />
                </Center>
              </a>
            </Menu.Target>
            <Menu.Dropdown>{menuItems}</Menu.Dropdown>
          </Menu>
        );
      }
  
      return (
        <a
          key={link.label}
          href={link.link}
          className="link"
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      );
    });
  
    return (
      <header className="header">
        <Container size="md">
          <div className="inner">
            <MantineLogo size={28} />
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </div>
          <Group gap={3} visibleFrom="sm">
            <a
              href="/edit"
              className="link"
              onClick={() => window.location.href = '/edit'}
            >
              1
            </a>
            <a
              href="/edit#responses"
              className="link"
              onClick={() => window.location.href = '/responses'}
            >
              2
            </a>
            <a
              href="/edit#settings"
              className="link"
              onClick={() => window.location.href = '/settings'}
            >
              3
            </a>
          </Group>
        </Container>
      </header>
    );
}
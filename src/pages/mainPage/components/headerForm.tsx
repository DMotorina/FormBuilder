import * as React from 'react';

import { Menu, Group, Center, Burger, Container, Drawer } from '@mantine/core';
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
    const [opened, { open, close }] = useDisclosure(false);
  
    return (
      <header className="header">
        <Container size="md">
          <div className="inner">
            <Drawer opened={opened} onClose={close} withCloseButton={false}>
              Drawer without header, press escape or click on overlay to close
            </Drawer>
            <Burger opened={opened} onClick={open} size="sm" lineSize={2} />
            <div>FormBuilder</div>
          </div>
        </Container>
      </header>
    );
}
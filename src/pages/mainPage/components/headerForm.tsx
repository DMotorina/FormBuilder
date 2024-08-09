import * as React from 'react';

import { Menu, Group, Center, Burger, Container, Drawer, Input, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconSearch } from '@tabler/icons-react';

import '../style.sass'

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
            <Input placeholder="Search" leftSection={<IconSearch size={16} />} />
            <Avatar name="Kate Kok" color="initials" />

          </div>
        </Container>
      </header>
    );
}
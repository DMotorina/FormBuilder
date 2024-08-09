import * as React from 'react';

import { useAppDispatch } from '../../../hooks';
import { logout } from '../../login/action';

import { Menu, Burger, Container, Drawer, Input, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import '../style.sass'

export const HeaderForm = () => {
    const dispatch = useAppDispatch()

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
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar name="Kate Kok" color="initials" />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => dispatch(logout())}>
                  Log out
                 </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Container>
      </header>
    );
}
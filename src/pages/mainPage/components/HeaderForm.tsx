import '../style.sass';

import React from 'react';

import { logout } from '../../login/action';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { Menu, Burger, Container, Drawer, Input, Avatar } from '@mantine/core';

export const HeaderForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const [opened, { open, close }] = useDisclosure(false);

  const firstName = useAppSelector((state) => state.user.data?.first_name);
  const lastName = useAppSelector((state) => state.user.data?.last_name);

  const fullName = firstName && lastName ? `${firstName} ${lastName}` : 'User'; 
  

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
                <Avatar name={fullName} color="initials" />
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
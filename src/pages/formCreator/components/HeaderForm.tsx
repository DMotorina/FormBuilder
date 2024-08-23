import '../style.sass';

import React from 'react';

import { Menu, Avatar, Input, ThemeIcon, Group, Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../login/action';
import { IconFileText } from '@tabler/icons-react';


export const HeaderForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const firstName = useAppSelector((state) => state.user.data?.first_name);
   const lastName = useAppSelector((state) => state.user.data?.last_name);

  return (
    <header className="header">
          <Group>
            <ThemeIcon 
              color="violet"
              variant="transparent"
              style={{ cursor: 'pointer' }}
            >
              <IconFileText />
            </ThemeIcon>

            <Input size="md" variant="unstyled" placeholder='New form' />
          </Group>

          <Group gap="xl">
            <Button variant="filled" color="violet">Send</Button>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar name={`${firstName} ${lastName}`} color="initials" />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item onClick={() => dispatch(logout())}>
                  Log out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
    </header>
  );
}
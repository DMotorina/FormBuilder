import '../style.sass';

import React from 'react';

import { Menu, Avatar, Input, ThemeIcon, Group, Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logout } from '../../login/action';
import { IconFileText } from '@tabler/icons-react';

interface HeaderFormProps {
  name: string
  defaultIconColor: string
  onSubmit: () => {
    name: string;
    description: string;
    color: string;
    is_active: boolean;
    dashboard_uuid: string;
  } | undefined
  handleCreateName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const HeaderForm: React.FC<HeaderFormProps> = ({ 
  name, 
  defaultIconColor,
  onSubmit, 
  handleCreateName 
}) => {
  const dispatch = useAppDispatch()

  const firstName = useAppSelector((state) => state.user.data?.first_name);
  const lastName = useAppSelector((state) => state.user.data?.last_name);

  return (
    <header className="header">
          <Group>
            <ThemeIcon 
              color={defaultIconColor}
              variant="transparent"
              style={{ cursor: 'pointer' }}
            >
              <IconFileText />
            </ThemeIcon>

            <Input 
              size="md" 
              variant="unstyled" 
              placeholder='New form' 
              value={name}
              onChange={handleCreateName}
            />
          </Group>

          <Group gap="xl">
            <Button 
              variant="filled" 
              color={defaultIconColor} 
              onClick={onSubmit}
            >
              Send
            </Button>

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
import './style.sass';

import React from 'react';

import { Container, Title, Text, Button, Group } from '@mantine/core';

import { Illustration } from '../../assets/Illustration';

export const NotFound: React.FC = () => {
  return (
    <Container  className="notFound">
      <div className="notFound__inner">
        <Illustration className="notFound__image" />
        
        <div className="notFound__content">
          <Title className="notFound__title">Nothing to see here</Title>

          <Text c="dimmed" size="lg" ta="center" className="notFound__description">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            has been moved to another URL. If you think this is an error contact support.
          </Text>

          <Group justify="center">
            <Button 
              component="a"
              size="md"
              href="/"
              onClick={() => window.location.href = '/'}
            >
              Take me back to home page
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
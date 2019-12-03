import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <strong>rgrassi1@gmail.com</strong>
          <Link to='#'>My profile</Link>
        </div>
      </Content>
    </Container>
  )
}

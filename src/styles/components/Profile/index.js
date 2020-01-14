import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container } from './styles';

export default function () {
  return (
    <Section>
      <Container>
        <div>
          <strong>rgrassi1@gmail.com</strong>
          <Link to='#'>My profile</Link>
        </div>
      </Container>
    </Section>
  )
}

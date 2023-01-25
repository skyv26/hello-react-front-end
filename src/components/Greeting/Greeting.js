import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayText, Container } from './Greeting.styled';

const Greeting = () => {
  const state = useSelector((state) => state.greeting);
  const { greeting } = state;
  return (
    <Container>
      <DisplayText>{greeting.length > 0 ? greeting : 'Loading Greeting...'}</DisplayText>
    </Container>
  );
};

export default Greeting;

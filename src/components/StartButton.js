import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';
import Instructions from './Instructions';

const StartButton = ({ callback }) => (
  <div>
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
  <Instructions/>
  </div>
);

export default StartButton;
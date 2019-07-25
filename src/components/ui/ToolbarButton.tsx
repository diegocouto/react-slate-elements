import React from 'react';
import styled from 'styled-components';

import Colors from './styles/Colors';

const ToolbarButton: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <Button {...props} />
)

const Button = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 0.4rem;
  color: ${Colors.grayDark};
  cursor: pointer;
  display: flex;
  padding: 5px;
  margin: 0 2.5px;
  transition: all .2s ease-out;

  &:hover, &:focus {
    background: ${Colors.grayLight};
    outline: none;
  }

  &[aria-pressed="true"] {
    background: ${Colors.primary};
    color: #FFF;

    &:hover, &:focus {
      background: ${Colors.primaryDark};
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export default ToolbarButton;
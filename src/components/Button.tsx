import { type ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isTransparent?: boolean;
  children: ReactNode;
}

const Button = styled.button<Props>`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1rem;
  border: 0;
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: translateY(4%);
  }

  ${({ isTransparent, theme }) =>
    isTransparent === true
      ? css`
          background-color: transparent;
          color: ${theme.colors.lightGray};
        `
      : css`
          background-color: ${theme.colors.marineBlue};
          color: ${theme.colors.white};
        `}
`;

export default Button;

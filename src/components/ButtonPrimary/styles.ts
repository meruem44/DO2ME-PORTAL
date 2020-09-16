import styled, { css } from 'styled-components';
import { colors, metrics } from '../../styles';

interface PropsButton {
  secundary: boolean;
};

export const Button = styled.button<PropsButton>`
  width: 49%;
  height: 32px;
  border-radius: 20px;
  margin-top: 10px;
  background-color:${colors.contrast};

  ${({ secundary }) => secundary && css`
    background-color:${colors.base};
  `}
`;

export const Text = styled.p`
    color: #fff;
    font-size: ${metrics.large};
    text-transform: uppercase;
`;



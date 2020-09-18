import styled, { css } from 'styled-components';

import { colors, metrics } from '../../styles';

interface PropsButton {
    color: string;
}

interface PropsInput {
  error: boolean;
}

export const Container = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: ${metrics.large};
    text-transform: uppercase;
`;

export const Input = styled.input<PropsInput>`
  width: 80%;
  padding: 0 5px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  color: ${colors.light};
  font-size: ${metrics.small};
  border-bottom: 1px solid  ${colors.base};

  ${({ error }) => error && css`
    border-bottom: 1px solid  ${colors.contrast};
  `}
`;

export const Button = styled.button<PropsButton>`
  margin-top: 5px;
  width: 80%;
  height: 52px;
  border-radius: 10px;

  ${({ color }) => color && css`
        background-color: ${color};
  `}
`;

export const ConfirmButton = styled.button`
  margin-top: 5px;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: ${colors.light};
  color: #fff;
  transition: background-color 450ms;

  &:hover {
    background-color: ${colors.base};
  }
`;

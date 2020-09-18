import styled, { css } from 'styled-components';

import { colors, metrics } from '../../../styles';

interface PropsContainer {
  error: boolean;
};

export const Container = styled.div<PropsContainer>`
  width: 100%;
  display: flex;
  border-bottom: 1px solid  ${colors.base};
  align-items: center;
  justify-content: space-between;

  ${({ error }) => error && css`
    border-bottom: 1px solid  ${colors.contrast};
  `}
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: 13px;
    text-transform: uppercase;
`;

export const Input = styled.input`
  width: 30%;
  padding: 0 5px;
  border: 0;
  color: ${colors.light};
  font-size: ${metrics.small};
`;

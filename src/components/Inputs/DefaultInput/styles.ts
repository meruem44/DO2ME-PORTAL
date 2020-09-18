import styled, { css } from 'styled-components';

import { colors, metrics } from '../../../styles';

interface PropsInput {
  error: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: ${metrics.large};
    text-transform: uppercase;
`;

export const Input = styled.input<PropsInput>`
  width: 100%;
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

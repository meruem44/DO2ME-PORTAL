import styled from 'styled-components';

import { colors, metrics } from '../../styles';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: ${metrics.large};
    text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 5px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  color: ${colors.light};
  font-size: ${metrics.small};
  border-bottom: 1px solid  ${colors.base};
`;

import styled from 'styled-components';

import { colors, metrics } from '../../styles';

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: ${metrics.large};
    text-transform: uppercase;
`;

export const Selected = styled.select`
  border-top: 0;
  border-left: 0;
  width: 100%;
  cursor: pointer;
  background-color: #fff;
  border-right: 0;
  color: ${colors.light};
  font-size: ${metrics.small};
  border-bottom: 1px solid  ${colors.base};
  appearance: none;
  position:relative;

  
`;

export const Option = styled.option`
  
  
`;

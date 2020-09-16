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

export const Input = styled.textarea`
  width: 100%;
  padding: 0 5px; 
  color: ${colors.light};
  font-size: ${metrics.small};
  flex: 1;
  border: 1px solid  ${colors.light};
  border-radius: 10px;
  height: 100px;
  resize: none;
  
`;

export const Content = styled.div`
    
`;


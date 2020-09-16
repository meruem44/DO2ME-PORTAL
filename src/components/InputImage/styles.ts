import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.div`
  width: 70%;
  height: 85px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.light};
  border-radius: 10px;
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: ${metrics.large};
    text-transform: uppercase;
`;

export const Button = styled.button`
  position: absolute;
  right: 8.5%;

`;

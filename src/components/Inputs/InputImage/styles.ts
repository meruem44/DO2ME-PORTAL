import styled, { css } from 'styled-components';
import { colors, metrics } from '../../../styles';

interface PropsURl {
  error: boolean;
}

export const Container = styled.div`
  width: 48%;
  height: 85px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  input {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const ContainerImage = styled.div<PropsURl>`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.light};
  border-radius: 10px;

  ${({ error }) => error && css`
    border-bottom: 1px solid  ${colors.contrast};
  `}

`;

export const Image = styled.img`
   width: 100%;
  height: 100%;
  overflow: hidden;
  
`;

export const Label = styled.p`
    color: ${colors.base};
    font-size: ${metrics.large};
    text-transform: uppercase;
`;

export const Button = styled.button`
  position: absolute;
  right: 16%;
  top: -10;

`;

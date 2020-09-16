import styled from 'styled-components';
import { colors } from '../../../styles';

export const Container = styled.div`
  width: 30%;
  max-width: 300px;
  border: 1px solid ${colors.base};
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.h1`
 font-size: 24px;
 color:${colors.base};
`;

export const Footer = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
 `;

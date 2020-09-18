import styled from 'styled-components';
import { colors } from '../../../styles';

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  border: 1px solid ${colors.base};
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
`;

export const Title = styled.h1`
 font-size: 24px;
 color:${colors.base};
`;

export const ContentTax = styled.div` 
    margin: 20px 0;
 `;

export const Footer = styled.div` 
margin-top: 20px;
 display: flex;
 width: 100%;
 justify-content: space-between;
 `;

export const Group = styled.div` 
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;

import React from 'react';

import { Container, Selected, Label, Option } from './styles';

import { AiFillDownCircle } from 'react-icons/ai';
import { colors } from '../../styles';

const Select: React.FC = () => {
  return (
      <Container>
          <Label>Teste</Label>
         
          <Selected>
              <Option>Leandro</Option>
          </Selected>
      </Container>
  );
}

export default Select;
import React from 'react';

import { Container, Input, Label } from './styles';

const DefaultInput: React.FC = () => {
  return (
      <Container>
          <Label>Nomeclatura</Label>
          <Input />
      </Container>
  );
}

export default DefaultInput;
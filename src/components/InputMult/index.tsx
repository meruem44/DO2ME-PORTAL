import React from 'react';

import { Container, Input, Label, Content } from './styles';

interface PropsInputMult {
    placeholder: string;
}

const InputMult: React.FC<PropsInputMult> = ({ placeholder }) => {
  return (
      <Container>
          <Label>{placeholder}</Label>
          <Content>
            <Input 
                draggable={false}
                rows={10}
            />
          </Content>   
      </Container>
  );
}

export default InputMult;
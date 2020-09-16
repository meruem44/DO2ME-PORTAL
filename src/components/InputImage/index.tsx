import React from 'react';

import {
    Container,
    Content,
    Label,
    ContainerImage,
    Button } from './styles';

import { AiFillPlusCircle } from 'react-icons/ai';
import { colors } from '../../styles';

const InputImage: React.FC = () => {

  return (
      <Container>
          <Label>Imagem</Label>
          <Content>
          <ContainerImage>
              <Button>
                  <AiFillPlusCircle 
                    size={25}
                    color={colors.contrast}
                  />
              </Button>
          </ContainerImage>
          </Content>
      </Container>
  );
}

export default InputImage;
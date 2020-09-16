import React from 'react';

import { Container, Title, Footer } from './styles';

import Input from '../../DefaultInput';
import InputImage from '../../InputImage';
import InputMult from '../../InputMult';
import Button from '../../ButtonPrimary';

const CardsEditArea: React.FC = () => {
  return (
      <Container>
        <Title>Area</Title>

        <Input />
        <InputImage />
        <InputMult placeholder="Descrição" />

        <Footer>
          <Button text="Excluir" secundary={true}/>
          <Button text="Salvar" secundary={false}/>
        </Footer>
           
      </Container>
  );
}

export default CardsEditArea;
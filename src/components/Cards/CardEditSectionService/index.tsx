import React, { useState, useCallback } from 'react';

import { 
  Container, 
  Title, 
  Footer, 
 } from './styles';

import Input from '../../Inputs/DefaultInput';
import Button from '../../ButtonPrimary';
import Select from '../../Select';

import { fireStore } from '../../../config/firebase';

const CardEditSectionService: React.FC = () => {

  const [label, setLabel] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [color, setColor] = useState('');
  const [tax, setTax] = useState('');
  const [section, setSection] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(() => {

    // const data = {
    //   label: label,
    //   tax: tax,
    //   color: color,
    //   description: description
    // }

    // if (verify()) {
    //   setError(true);
    //   return;
    // }

    // const areaRef = fireStore.collection('tb_area');
    // areaRef.add({
    //   ...data
    // }).then(ref => {
    //   areaRef.doc(ref.id).update({
    //     idArea: ref.id
    //   }).then(response => {
    //   }).catch(err => {

    //   })
    // }).catch(err => {

    // });
  }, []);

  const verify = (): boolean => {
    
    if (!label) return true;
    if (!description) return true;
    //if (!image) return true;
    if (!tax) return true;
    if (!color) return true;

    return false;
  }

  return (
      <Container>
        <Title>SEÇÃO DE SERVIÇOS</Title>

        <Input 
        label="NomeClatura"
        name={"label"}
        />

        <Select 
          label="VINCULADO A CATEGORIA"
          data={[{ label: 'Beleza' }]}
        />

        <Input 
          label="POSIÇÃO DO ITEM NA ÁREA"
          type="number"
          name="position"
        />

        <Footer>
          <Button text="Excluir" onPress={() => {}} secundary={true}/>
          <Button text="Salvar" onPress={handleSubmit} secundary={false}/>
        </Footer>
           
      </Container>
  );
}

export default CardEditSectionService;
import React, { useState, useCallback } from 'react';

import { 
  Container, 
  Title, 
  Footer, 
  ContentTax,
  Group
 } from './styles';

import Input from '../../Inputs/DefaultInput';
import InputImage from '../../Inputs/InputImage';
import InputMult from '../../Inputs/InputMult';
import InputCheck from '../../Inputs/InputCheck';
import Button from '../../ButtonPrimary';
import PickerColor from '../../PickerColor';
import Select from '../../Select';

import { fireStore } from '../../../config/firebase';

const CardEditCategory: React.FC = () => {

  const [label, setLabel] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [color, setColor] = useState('');
  const [tax, setTax] = useState('');
  const [mensality, setMensality] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(() => {

    // const data = {
    //   label: label,
    //   tax: tax,
    //   color: color,
    //   description: description
    // }

    // console.log(data);

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
        <Title>Categoria</Title>

        <Input 
        label="NomeClatura"
        name="label"
        />
        
        <Group>
          <InputImage 
            error={error}
            value={image}
            onChange={setimage}
          />

          <PickerColor 
            error={error && !color}
            value={color}
            onChange={setColor}
          />

        </Group>

        <InputMult 
        name="description"
        label="Descrição" />

        <ContentTax>
        <InputCheck 
          error={error && !tax}
          label="Taxa App Categoria"
          placeholder="00.0%"
          name="tax"
        />

        <InputCheck 
          error={false}
          label="Mensalidade"
          placeholder="0,00"
          name="mensal"
        />
        </ContentTax>

        <Select 
          label="VINCULADO A ÁREA"
          data={[{ label: 'Beleza' }]}
        />

        <Select 
          label="VINCULADO A Seção da Área"
          data={[{ label: 'Beleza' }]}
        />  

        <Input 
          label="POSIÇÃO DO ITEM NA SEÇÃO DA ÁREA"
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

export default CardEditCategory;
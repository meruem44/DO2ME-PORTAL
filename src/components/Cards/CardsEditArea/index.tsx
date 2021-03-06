import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as yup from 'yup';

import { FormHandles } from '@unform/core';
import getValidationErros from '../../../utils/getValidationErros';

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
import { fireStore } from '../../../config/firebase';

import DefaultInterface from '../../../models/defaultInterface';

interface PropsCardArea {
  handleRefresh(): void;
  idSelected?: string;
  handleSelected?: DefaultInterface;
};

interface Area {
  id: string;
  idArea: string;
  color: string;
  label: string;
  description: string;
  tax: string;
};

const CardsEditArea: React.FC<PropsCardArea> = ({ handleRefresh, idSelected, handleSelected }) => {
  const formRef = useRef<FormHandles>(null);

  console.log(idSelected);

  const [initialData, setInitialData] = useState({});

  const [area, setArea] = useState<Area>({} as Area);
  const [image, setimage] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (idSelected) {
      loadInitial(idSelected);
    }
  }, []);

  const loadInitial = useCallback((id) => {
    fireStore.collection('tb_area').doc(id).get()
    .then(response => {

      const areaValue = {
        id: response.id,
        ...response.data()
      } as Area

      setArea(areaValue)

      setInitialData({
        label: areaValue.label,
        description: areaValue.description,
        tax: areaValue.tax,
      });

      setColor(areaValue.color);

    }).catch(err => {

    })
  }, []);

  const handleSubmit = async (data: any) => {

     const areaRef = fireStore.collection('tb_area');

     const BODY = {
        ...data,
        color
     }

     areaRef.doc().set({
      ...BODY
     }).then(ref => {
      handleRefresh();
     }).catch(err => {

     }); 

    //  areaRef.doc(ref.id).update({
    //   idArea: ref.id
    // }).then(response => {
     
    // }).catch(err => {

    // })
  };

  return (
      <Container initialData={initialData} onSubmit={handleSubmit}>
        <Title>Area</Title>

        <Input 
          name="label"
          label="NomeClatura"
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
          label="Descrição"
          name="description"
        />

        <ContentTax>
        <InputCheck 
          error={false}
          label="Taxa App Área"
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

        <Footer>
          <Button text="Excluir" onPress={() => {}} secundary={true}/>
          <Button text="Salvar" type="submit" onPress={handleSubmit} secundary={false}/>
        </Footer>
           
      </Container>
  );
}

export default CardsEditArea;
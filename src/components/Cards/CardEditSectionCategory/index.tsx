import React, { useState, useCallback, useRef, useEffect } from 'react';

import { 
  Container, 
  Title, 
  Footer, 
  ContentTax,
  Group
 } from './styles';

import Input from '../../Inputs/DefaultInput';
import InputImage from '../../Inputs/InputImage';
import Check from '../../CheckBox';
import Button from '../../ButtonPrimary';
import PickerColor from '../../PickerColor';
import Select from '../../Select';

import { fireStore } from '../../../config/firebase';

import DefaultInterface from '../../../models/defaultInterface';

interface PropsCardArea {
  handleRefresh(): void;
  idSelected?: string;
  handleSelected : DefaultInterface;
};

interface Section {
  id: string;
  idArea: string;
  label: string;
  image: string;
  idSection: string;
};

const CardEditSectionCategory: React.FC<PropsCardArea> = ({ handleRefresh, idSelected, handleSelected }) => {

  const [initialData, setInitialData] = useState({});

  const [area, setArea] = useState<Section>({} as Section);
  const [section, setSection] = useState(false);
  const [image, setimage] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (idSelected) {
      loadInitial(idSelected);
    }
  }, []);

  const loadInitial = useCallback((id) => {
    fireStore.collection('tb_sectionArea').doc(id).get()
    .then(response => {

      const sectionValue = {
        id: response.id,
        ...response.data()
      } as Section

      setArea(sectionValue)

      setInitialData({
        label: sectionValue.label,
        image: sectionValue.image,
      });

    }).catch(err => {

    })
  }, []);

  const handleSubmit = async (data: any) => {

    console.log(data);

     const areaRef = fireStore.collection('tb_sectionArea');
     areaRef.add({
       ...data,
       color,
       idArea: handleSelected.id
     }).then(ref => {
       areaRef.doc(ref.id).update({
         idSection: ref.id
       }).then(response => {
        handleRefresh();
       }).catch(err => {
       })
     }).catch(err => {

     }); 
  };
  return (
      <Container initialData={initialData} onSubmit={handleSubmit}>
        <Title>Seção da Categoria</Title>

        <Check 
        active={section}
        onChange={() => setSection(!section)}
        label={`Posibilitar "Sem Seção da categoria"`} />

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

        <Select 
          label="VINCULADO A ÁREA"
          data={[{ label: handleSelected.label }]}
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

export default CardEditSectionCategory;
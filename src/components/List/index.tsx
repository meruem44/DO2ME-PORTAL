import React from 'react';

import { Container, Header } from './styles';

import ItemList from '../ItemList';
import { AiFillPlusCircle } from 'react-icons/ai';
import { colors } from '../../styles';

import DefaultInterface from '../../models/defaultInterface';

interface DataInterface {
  id: string;
  label?: string;
}

interface PropsList {
    title: string;
    data: DataInterface[];
    active: boolean;
    type: number;
    onPress(item: DefaultInterface):void;
    itemSelected: DataInterface | false;
    handleAdd(type: number): void;
}

const List: React.FC<PropsList> = ({ title, data, active, onPress, itemSelected, handleAdd, type }) => {

  const handleActive = (active: boolean | DataInterface, item: DataInterface) => {
    if (typeof active === 'boolean') return false;

    return active.id === item.id
  };

  return (
      <Container>
          <Header active={active}>
            <p>{title}</p>

           {active && (
              <button onClick={() => handleAdd(type)}>
              <AiFillPlusCircle 
              size={25}
              color={colors.contrast} />
            </button>
           )}
          </Header>


          {data.map(item => (
            <ItemList
            active={handleActive(itemSelected,item )}
            key={item.id}
            item={item}
            onPress={onPress}
            label={item.label || ''} />
          ))}
      </Container>
  );
}

export default List;
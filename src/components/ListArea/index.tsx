import React, { useState, useCallback, useEffect } from 'react';
import { fireStore } from '../../config/firebase';

import { Container } from './styles';

import List from '../List';

interface AreaInterface {
    id: string;
    label: string;
};

interface PropsListArea {
    selectedArea(item: AreaInterface): void;
    active: boolean;
    handleAdd(type: number): void;
    areas: AreaInterface[];
    area: AreaInterface;
};

const ListArea: React.FC<PropsListArea> = ({ selectedArea, active, handleAdd, areas, area }) => {    

  return (
      <Container>
            <List 
            type={0}
            active={active} 
            onPress={selectedArea}
            data={areas}
            handleAdd={handleAdd}
            itemSelected={area} 
            title="Área" />
      </Container>
  );
}

export default ListArea;
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
    area: AreaInterface | false;
};

const ListArea: React.FC<PropsListArea> = ({ selectedArea, active, area }) => {
    const [areas, setAreas] = useState<AreaInterface[] | []>([]);

    const loadAreas = useCallback(() => {
      fireStore.collection('tb_area')
        .get()
        .then(response => {
          const res = response.docs.map(area => ({
            id: area.id,
            ...area.data()
          } as AreaInterface))
    
          setAreas(res)
        }).catch(err => {
    
        })
      }, []);
    
      useEffect(() => {
        loadAreas();
      }, [loadAreas]);

  return (
      <Container>
            <List 
            active={active} 
            onPress={selectedArea}
            data={areas}
            itemSelected={area} 
            title="Área" />
      </Container>
  );
}

export default ListArea;
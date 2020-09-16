import React from 'react';

import { Container } from './styles';

import List from '../List';

interface PlusServiceInterface {
    id: string;
    label: string;
};

interface PropsListSection {
    selectedSection(item: PlusServiceInterface): void;
    plusServices: PlusServiceInterface[] | [];
    active: boolean;
    plusService: PlusServiceInterface | false;
};

const ListSection: React.FC<PropsListSection> = ({ selectedSection, plusServices, active, plusService }) => {


  return (
      <Container>
          <List 
            active={active} 
            onPress={selectedSection}
            data={plusServices} 
            itemSelected={plusService}
            title="Adicional de Serviço" />
      </Container>
  );
}

export default ListSection;
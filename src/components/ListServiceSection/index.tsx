import React from 'react';

import { Container } from './styles';

import List from '../List';

interface SectionInterface {
    id: string;
    label: string;
};

interface PropsListSection {
    selectedServiceSection(item: SectionInterface): void;
    serviceSections: SectionInterface[] | [];
    active: boolean;
    serviceSection: SectionInterface | false;
    handleAdd(type: number): void;
};

const ListSection: React.FC<PropsListSection> = ({ 
    selectedServiceSection,
     serviceSections, 
     active, 
     handleAdd,
     serviceSection }) => {

  return (
      <Container>
          <List 
          type={3}
            handleAdd={handleAdd}
            active={active} 
            onPress={selectedServiceSection}
            itemSelected={serviceSection}
            data={serviceSections} 
            title="Seção de Serviço" />
      </Container>
  );
}

export default ListSection;
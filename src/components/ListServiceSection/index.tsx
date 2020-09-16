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
    serviceSection: SectionInterface | false
};

const ListSection: React.FC<PropsListSection> = ({ 
    selectedServiceSection,
     serviceSections, 
     active, 
     serviceSection }) => {

  return (
      <Container>
          <List 
            active={active} 
            onPress={selectedServiceSection}
            itemSelected={serviceSection}
            data={serviceSections} 
            title="Seção de Serviço" />
      </Container>
  );
}

export default ListSection;
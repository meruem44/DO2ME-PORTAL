import React from 'react';

import { Container } from './styles';

import List from '../List';

interface SectionInterface {
    id: string;
    label: string;
};

interface PropsListSection {
    selectedSection(item: SectionInterface): void;
    sections: SectionInterface[] | [];
    active: boolean;
    section: SectionInterface | false;
};

const ListSection: React.FC<PropsListSection> = ({ selectedSection, sections, active, section }) => {

  return (
      <Container>
          <List 
            active={active} 
            onPress={selectedSection}
            data={sections} 
            itemSelected={section}
            title="Secção de Categoria" />
      </Container>
  );
}

export default ListSection;
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
    handleAdd(type: number): void;

};

const ListSection: React.FC<PropsListSection> = ({ selectedSection, sections, active, section, handleAdd }) => {

  return (
      <Container>
          <List 
            handleAdd={handleAdd}
            active={active} 
            type={1}
            onPress={selectedSection}
            data={sections} 
            itemSelected={section}
            title="Secção de Categoria" />
      </Container>
  );
}

export default ListSection;
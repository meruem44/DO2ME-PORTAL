import React from 'react';

import { Container } from './styles';

import List from '../List';

interface CategoryInterface {
    id: string;
    label: string;
};

interface PropsListSection {
    selectedCategory(item: CategoryInterface): void;
    categorys: CategoryInterface[] | [];
    active: boolean;
    category: CategoryInterface | false
    handleAdd(type: number): void;
};

const ListSection: React.FC<PropsListSection> = ({ selectedCategory, categorys, active, category, handleAdd }) => {

  return (
      <Container>
          <List 
            type={2}
            handleAdd={handleAdd}
            active={active} 
            onPress={selectedCategory}
            data={categorys} 
            itemSelected={category}
            title="Categoria" />
      </Container>
  );
}

export default ListSection;
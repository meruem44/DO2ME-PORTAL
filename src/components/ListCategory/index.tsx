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
};

const ListSection: React.FC<PropsListSection> = ({ selectedCategory, categorys, active, category }) => {

  return (
      <Container>
          <List 
            active={active} 
            onPress={selectedCategory}
            data={categorys} 
            itemSelected={category}
            title="Categoria" />
      </Container>
  );
}

export default ListSection;
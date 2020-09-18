import React from 'react';

import AreaEdit from './CardsEditArea';
import SectionCategoryEdit from './CardEditSectionCategory';
import CategoryEdit from './CardEditCategory';
import SectionServiceEdit from './CardEditSectionService';

import { Container } from './styles';

import DefaultInterface from '../../models/defaultInterface';

interface PropsCardEdit {
  type: number | null;
  handleRefresh(): void;
  idSelected?: string;
  handleSelected: DefaultInterface;
}

const Cards: React.FC<PropsCardEdit> = ({ type, handleRefresh, idSelected, handleSelected }) => {

  return (
     <Container>
       {type === 0 && (
         <AreaEdit 
         handleSelected={handleSelected}
         idSelected={idSelected} 
         handleRefresh={handleRefresh}/>
       ) }
       {type === 1 && (
         <SectionCategoryEdit 
         handleSelected={handleSelected}
         idSelected={idSelected} 
         handleRefresh={handleRefresh} />
       )}
       {type === 2 && <CategoryEdit />}
       {type === 3 && <SectionServiceEdit />}
     </Container>
  );
}

export default Cards;
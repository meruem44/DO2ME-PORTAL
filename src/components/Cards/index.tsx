import React from 'react';

import { Container, Title } from './styles';

import AreaEdit from './CardsEditArea';

interface PropsCardEdit {
  type: number | null;
}

const Cards: React.FC<PropsCardEdit> = ({ type }) => {

  return (
      <>
        {type === 0 && <AreaEdit /> }
      </>
  );
}

export default Cards;
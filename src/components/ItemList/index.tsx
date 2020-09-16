import React from 'react';

import { Container } from './styles';

interface itemInterface {
    id: string;
}

interface PropsItemList {
    label: string;
    onPress(item: itemInterface): void;
    item: itemInterface;
    active: boolean;
}

const ItemList: React.FC<PropsItemList> = ({ label, onPress, item, active}) => {
  return (
      <Container active={active} onClick={() => onPress(item)}>
          <p>{label}</p>
      </Container>
  );
}

export default ItemList;
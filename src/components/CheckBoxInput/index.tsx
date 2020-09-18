import React from 'react';

import { Container } from './styles';

import { AiFillCheckSquare, AiOutlineCheckSquare } from 'react-icons/ai';
import { colors } from '../../styles';

interface PropsCheck {
    active: boolean;
    onChange(): void;
}

const CheckBox: React.FC<PropsCheck> = ({ active, onChange }) => {
  return (
      <Container onClick={onChange}>
        {active ? (
            <AiFillCheckSquare 
                size={30}
                color={colors.base}
            />
        ): (
            <AiOutlineCheckSquare 
            size={30}
            color={colors.base}
        />
        )}
      </Container>
  );
}

export default CheckBox;
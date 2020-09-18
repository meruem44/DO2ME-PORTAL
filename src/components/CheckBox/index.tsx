import React from 'react';

import { Container, Button } from './styles';

import { AiFillCheckSquare, AiOutlineCheckSquare } from 'react-icons/ai';
import { colors } from '../../styles';

interface PropsCheck {
    active: boolean;
    onChange(): void;
    label: string;
};

const CheckBox: React.FC<PropsCheck> = ({ active, onChange, label }) => {
  return (
      <Container>
          <Button>
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
          </Button>

          <p>{label}</p>
      </Container>
  );
};

export default CheckBox;
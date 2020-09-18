import React, { ButtonHTMLAttributes } from 'react';

import { Button, Text } from './styles';

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    secundary: boolean;
    onPress(data?: object): void;
}

const ButtonPrimary: React.FC<PropsButton> = ({ text, secundary, onPress, ...res }) => {
  return (
      <Button {...res} secundary={secundary} onClick={() => onPress()}>
          <Text>{text}</Text>
      </Button>
  );
}

export default ButtonPrimary;
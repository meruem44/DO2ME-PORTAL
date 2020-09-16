import React from 'react';

import { Button, Text } from './styles';

interface PropsButton {
    text: string;
    secundary: boolean ;
}

const ButtonPrimary: React.FC<PropsButton> = ({ text, secundary }) => {
  return (
      <Button secundary={secundary}>
          <Text>{text}</Text>
      </Button>
  );
}

export default ButtonPrimary;
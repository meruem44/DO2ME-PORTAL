import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import { Container, Label, Input, Button, ConfirmButton } from './styles';

interface PropsPickerColor {
  value: string;
  onChange(value: React.SetStateAction<string>): void;
  error: boolean;
}

const PickerColor: React.FC<PropsPickerColor> = ({ value, onChange, error }) => {
  const [viewPicker, setViewPicker] = useState(false);

  const openPicker = () => {
    setViewPicker(true);
  };

  const handleSelectColor = (value: any) => {
    onChange(value.hex);
  };

  return (
      <Container>
        <Label>COR FUNDO</Label>
        <Input
          error={error}
          value={value}
         />

        {viewPicker && (
          <>
            <ChromePicker 
            onChange={handleSelectColor}
            color={value}
          />
          <ConfirmButton onClick={() => setViewPicker(false)}>
            Confirmar
          </ConfirmButton>
          </>
        )}

        {!viewPicker && (
          <Button 
            color={value}
            onClick={openPicker}
          />
        )}

      </Container>
  );
}

export default PickerColor;
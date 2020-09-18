import React,{ InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Input, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const DefaultInput: React.FC<InputProps> = ({ name, label, ...res }) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name:fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName,registerField, ]);

   return (
      <Container>
          <Label>{label}</Label>
          <Input 
            defaultValue={defaultValue}
            name={name}
            error={!!error}
            ref={inputRef}
            {...res}
          />
          {error && <p>{error}</p>}
      </Container>
  );
}

export default DefaultInput;
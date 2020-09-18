import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container, Input, Label, Content } from './styles';

interface PropsInputMult extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    name: string;
}

const InputMult: React.FC<PropsInputMult> = ({ label, name, ...res }) => {

  const inputRef = useRef(null)

  const { fieldName, defaultValue, registerField } = useField(name);

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
          <Content>
            <Input 
                defaultValue={defaultValue}
                ref={inputRef}
                name={name}
                error={false}
                {...res}
                draggable={false}
                rows={10}
            />
          </Content>   
      </Container>
  );
}

export default InputMult;
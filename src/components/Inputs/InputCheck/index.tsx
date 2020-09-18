import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Label, Input } from './styles';

import CheckBox from '../../CheckBoxInput';

interface PropsInputCheck {
    placeholder: string;
    label?: string;
    error: boolean;
    name: string;
}

const InputCheck: React.FC<PropsInputCheck> = ({ placeholder, label, name , error}) => {
    const [check, setCheck] = useState(false);

    const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
        name:fieldName,
        ref: inputRef.current,
        path: 'value'
        });
    }, [fieldName,registerField, ]);

    useEffect(() => {
        setCheck(!!defaultValue)
    }, []);

  return (
      <Container error={error}>
          <CheckBox 
          onChange={() => setCheck(!check)}
          active={check} />
          <Label>{label}</Label>
          <Input 
            defaultValue={defaultValue}
           ref={inputRef}
           name={name}
          placeholder={placeholder}/>
      </Container>
  );
}

export default InputCheck;
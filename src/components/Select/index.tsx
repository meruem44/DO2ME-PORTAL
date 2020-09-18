import React from 'react';

import { Container, Selected, Label, Option } from './styles';

interface PropsSelecte {
    label: string;
    data: any[];
};

const Select: React.FC<PropsSelecte> = ({ label, data }) => {
  return (
      <Container>
          <Label>{label}</Label>
         
          <Selected>
              {data.map(item => (
                  <Option>{item.label}</Option>
              ))}
          </Selected>
      </Container>
  );
}

export default Select;
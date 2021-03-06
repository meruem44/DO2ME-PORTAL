import React from 'react';

import { Container } from './styles';

import List from '../List';

interface ServicesInterface {
    id: string;
    label: string;
};

interface PropsListSection {
    selectedService(item: ServicesInterface): void;
    services: ServicesInterface[] | [];
    active: boolean;
    service: ServicesInterface | false;
    handleAdd(type: number): void;
};

const ListSection: React.FC<PropsListSection> = ({ selectedService, services, active, service, handleAdd }) => {

  return (
      <Container>
          <List 
            type={4}
            handleAdd={handleAdd}
            active={active} 
            onPress={selectedService}
            data={services} 
            itemSelected={service}
            title="Serviço" />
      </Container>
  );
}

export default ListSection;
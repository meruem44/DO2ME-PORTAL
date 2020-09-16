import React, { useState, useCallback, useEffect } from 'react';

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
};

const ListSection: React.FC<PropsListSection> = ({ selectedService, services, active, service }) => {

  return (
      <Container>
          <List 
            active={active} 
            onPress={selectedService}
            data={services} 
            itemSelected={service}
            title="Serviço" />
      </Container>
  );
}

export default ListSection;
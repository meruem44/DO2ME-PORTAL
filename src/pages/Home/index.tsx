import React, { useState } from 'react';
import { fireStore } from '../../config/firebase';

import { Container, ContainerList } from './styles';
import DefaultInterface from '../../models/defaultInterface';

import ListArea from '../../components/ListArea';
import ListSection from '../../components/ListSection';
import ListCategory from '../../components/ListCategory';
import ListServiceSection from '../../components/ListServiceSection';
import ListServices from '../../components/ListServices';
import ListPlusServices from '../../components/ListPlusServices';

import CardEdit from '../../components/Cards';

const Home: React.FC = () => {
  const [page, setPage] = useState(0); // Definir o index da seleção.

  const [areaselected, setAreaSelected] = useState<DefaultInterface>({}  as DefaultInterface);
  const [sectionSelected, setsectionSelected] = useState<DefaultInterface>({} as DefaultInterface);
  const [categorySelected, setCategorySelected] = useState<DefaultInterface>({} as DefaultInterface);
  const [serviceSectionSelected, setServiceSectionSelected] = useState<DefaultInterface>({} as DefaultInterface);
  const [serviceSelected, setServiceSelected] = useState<DefaultInterface>({} as DefaultInterface);
  const [plusServiceSelected, setPlusServiceSelected] = useState<DefaultInterface>({} as DefaultInterface);

  const [sections, setSections] = useState<DefaultInterface[]>([]);
  const [categorys, setCategorys] = useState<DefaultInterface[]>([]);
  const [serviceSections, setServiceSections] = useState<DefaultInterface[]>([]);
  const [services, setServices] = useState<DefaultInterface[]>([]);
  const [plusServices, setPlusServices] = useState<DefaultInterface[]>([]);

  

  // Escolhendo a Área
  const selectedArea = (area: DefaultInterface) => {
    setAreaSelected(area);
    setPage(1);

    setServices([]);
    setPlusServices([]);
    setServiceSections([]);
    setCategorys([]);
    setSections([]);

    fireStore.collection('/tb_sectionArea')
    .where('idArea', '==', area.id)
    .get()
    .then(response => {
      setSections(response.docs.map(section => ({
        id: section.id,
        ...section.data()
      } as DefaultInterface)))

    }).catch(err => {

    });
  };

  const selectedSection = (section: DefaultInterface) => {
    setsectionSelected(section);

    setPage(2);

    setServices([]);
    setPlusServices([]);
    setServiceSections([]);
    setCategorys([]);

    fireStore.collection('/tb_category')
    .where('idArea', '==', areaselected.id)
    .where('idSection', '==', section.id)
    .get()
    .then(response => {
      setCategorys(response.docs.map(category => ({
        id: category.id,
        ...category.data()
      } as DefaultInterface)))

    }).catch(err => {

    });
  };

  const selectedCategory = (category: DefaultInterface) => {
    setCategorySelected(category);
    setPage(3);

    setServices([]);
    setPlusServices([]);
    setServiceSections([]);

    fireStore.collection('/tb_serviceSection')
    .where('idCategory', '==', category.id)
    .get()
    .then(response => {
      setServiceSections(response.docs.map(serviceSection => ({
        id: serviceSection.id,
        ...serviceSection.data()
      } as DefaultInterface)))

    }).catch(err => {

    });
  };

  const selectedServiceSection = (serviceSection: DefaultInterface ) => {
    setServiceSectionSelected(serviceSection);
    setPage(4);

    setServices([]);
    setPlusServices([]);

    fireStore.collection('/tb_ServiceItem')
    .where('idServiceSection', '==', serviceSection.id)
    .get()
    .then(response => {
      setServices(response.docs.map(serviceSection => ({
        id: serviceSection.id,
        ...serviceSection.data()
      } as DefaultInterface)))

    }).catch(err => {

    });
  };

  const selectedService = (service: DefaultInterface) => {
    setPage(5);

    setServiceSelected(service);
    setPlusServices([]);

    fireStore.collection('/tb_itemPlus')
    .where('idServiceItem', '==', service.id)
    .get()
    .then(response => {
      setPlusServices(response.docs.map(servicePlus => ({
        id: servicePlus.id,
        ...servicePlus.data()
      } as DefaultInterface)))

    }).catch(err => {

    });
  };

  return (
      <Container>
          <ContainerList>
            <ListArea 
              selectedArea={selectedArea}
              active={true}
              area={areaselected}
            />

            <ListSection 
              selectedSection={selectedSection}
              sections={sections}
              active={page > 0}
              section={sectionSelected}
            />

            <ListCategory 
              selectedCategory={selectedCategory}
              categorys={categorys}
              active={page > 1}
              category={categorySelected}
            />

            <ListServiceSection 
              selectedServiceSection={selectedServiceSection}
              serviceSections={serviceSections}
              active={page > 2}
              serviceSection={serviceSectionSelected}
            />

            <ListServices 
              selectedService={selectedService}
              services={services}
              active={page > 3}
              service={serviceSelected}
            />

          <ListPlusServices 
              selectedSection={selectedSection}
              active={page > 4}
              plusServices={plusServices}
              plusService={plusServiceSelected}
            />
          </ContainerList>

          <CardEdit type={0}/>
      </Container>
  );
}

export default Home;
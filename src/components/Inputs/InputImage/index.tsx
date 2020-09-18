import React, { useRef, useState } from 'react';

import {
    Container,
    Content,
    Label,
    ContainerImage,
    Image,
    Button } from './styles';

import { AiFillPlusCircle } from 'react-icons/ai';
import { colors } from '../../../styles';

interface PropsInputImage {
    onChange(value: React.SetStateAction<any>): void;
    value: string;
    error: boolean;
};


    const InputImage: React.FC<PropsInputImage> = ({ onChange, value, error }) => {

    const [url, setUrl] = useState<ArrayBuffer | null | undefined | string>(null);

    const inputFile = useRef<HTMLInputElement>(null);

    const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.item(0);
       
        const reader = new FileReader();
        reader.readAsDataURL(file as Blob)

        console.log(file)
        console.log('File')

        reader.onload = function(event: ProgressEvent<FileReader>) {
            setUrl(event.target?.result)
            console.log(event.target?.result)
        }
    };

  return (
      <Container>
          <input onChange={handleSelectImage} ref={inputFile} type="file" />
          <Label>Imagem</Label>
          <Content>
            {!url && (
                <ContainerImage 
                error={error}
                />
            )}

        {url && <Image src={String(url)} />}
          </Content>

         
          <Button onClick={() => inputFile.current?.click()}>
                  <AiFillPlusCircle 
                    size={25}
                    color={colors.contrast}
                  />
              </Button>
      </Container>
  );
}

export default InputImage;
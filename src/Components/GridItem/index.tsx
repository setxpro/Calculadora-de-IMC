import React from 'react';
import { LevelImc } from '../../types/imc';
import UpImage from '../../images/up.png';
import DownImage from '../../images/down.png';

import { Container, GridAreaIcon, GridAreaInfo, GridAreaTitle } from './styles';

type Props = {
    item: LevelImc;
}


const GridItem: React.FC<Props> = ({ item }) => {
  return (
      <Container mode={item.color}>

          <GridAreaIcon>
                <img src={ 
                  
                  item.icon === "up" 
                  ? UpImage 
                  : DownImage
                  
                  } alt={
                    
                    item.icon === "up" 
                    ? 'up' 
                    : 'down'
                    
                    } width={30}
                />
          </GridAreaIcon>
          <GridAreaTitle>{item.title}</GridAreaTitle>
          <GridAreaInfo>
              <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
              </>
          </GridAreaInfo>

      </Container>
  );
}

export default GridItem;
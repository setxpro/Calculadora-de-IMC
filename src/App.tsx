import React, { useState } from 'react';
import * as C from './styles/AppStyle';

import logo from './images/powered.png';
import { calculateImc, Levels } from './helpers/imc';
import GridItem from './Components/GridItem';
import { LevelImc } from './types/imc';

import ArrowLeftImage from './images/leftarrow.png';

const App: React.FC = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const [showSingleLevel, setShowSingleLevel] = useState<LevelImc | null>(null)

  function handleCalculateImc() {
    if (heightField && weightField) {
      setShowSingleLevel(calculateImc(heightField, weightField))
    } 
    else {
      alert('Insira ao menos uma altura e peso.')
    }


  }

  function handleBackButton() {
    setShowSingleLevel(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <C.Container>
        <C.Header>
          <C.HeaderContainer>
            <img src={logo} alt="logo" width={150}/>
          </C.HeaderContainer>
        </C.Header>
        <C.Content>
            <C.ContentLeftSide>
              <h1>Calcule o seu IMC.</h1>
              <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela (OMS) Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>

              <input 
              type="number"
              placeholder="Digite a sua Altura. Ex 1.5 (em metros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
              />

              <input 
                type="number"
                placeholder="Digite o seu peso. Ex 65.3 (Em KG)"
                value={weightField > 0 ? weightField : ''}
                onChange={e => setWeightField(parseFloat(e.target.value))}
              />

              <button onClick={handleCalculateImc}>Calcular IMC</button>
            </C.ContentLeftSide>
            <C.ContentRightSide>
              {!showSingleLevel && 
                <C.GridRightSide>
                  {Levels.map((item, index) => (
                    <GridItem
                      key={index}
                      item={item}
                    />
                  ))}
                </C.GridRightSide>
              }
              {showSingleLevel && 
              <C.ContentRightSideBig>
                <C.ContentArrowLeftIcon onClick={handleBackButton}>
                  <img src={ArrowLeftImage} alt="goback" width={25}/>
                </C.ContentArrowLeftIcon>
                  <GridItem item={showSingleLevel}/>
                </C.ContentRightSideBig>}
            </C.ContentRightSide>
        </C.Content>
    </C.Container>
  );
}

export default App;
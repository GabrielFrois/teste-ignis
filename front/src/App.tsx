import React, { useState } from 'react';
import Header from './components/Header';
import Abas from './components/Abas';
import FiltroMapa from './components/FiltroMapa';
import FiltroGrafico from './components/FiltroGrafico';
import styled from 'styled-components';

const App: React.FC = () => {
  const [ativo, setAtivo] = useState('mapa');

  const handleClick = (tipo: string) => {
    setAtivo(tipo);
  };

  return (
    <AppContainer>
      <Header /> {/* Cabeçalho */}
      <ContentContainer>
        <Abas onClick={handleClick} ativo={ativo} />
        {ativo === 'mapa' ? <FiltroMapa /> : <FiltroGrafico />}
      </ContentContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const ContentContainer = styled.div`
  flex-grow: 1;     /* Preenche o restante da tela */
  display: flex;
  flex-direction: column;
  overflow: auto;    /* Permite rolar o conteúdo */
`;

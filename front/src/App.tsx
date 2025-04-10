// App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Abas from './components/Abas';
import FiltroMapa from './components/FiltroMapa';
import FiltroGrafico from './components/FiltroGrafico';
import Mapa from './components/Mapa';  // Componente Mapa
import Grafico from './components/Grafico';  // Componente Grafico
import styled from 'styled-components';

const App: React.FC = () => {
  const [ativo, setAtivo] = useState('mapa'); // Estado para controlar a aba ativa

  const handleClick = (tipo: string) => {
    setAtivo(tipo); // Atualiza o estado para exibir o conteúdo correto
  };

  return (
    <AppContainer>
      <Header /> {/* Cabeçalho */}
      <MainContent>
        <ContentContainer>
          <Abas onClick={handleClick} ativo={ativo} /> {/* Abas para alternar entre Mapa e Grafico */}
          {ativo === 'mapa' ? <FiltroMapa /> : <FiltroGrafico />} {/* Filtros */}
        </ContentContainer>
        {ativo === 'mapa' ? <Mapa /> : <Grafico />} {/* Exibe Mapa ou Grafico com base na aba ativa */}
      </MainContent>
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

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden; /* Impede o conteúdo de ultrapassar os limites */
`;

const ContentContainer = styled.div`
  flex-grow: 1; /* Preenche o restante da tela */
  display: flex;
  flex-direction: column;
  overflow: auto; /* Permite rolar o conteúdo */
`;

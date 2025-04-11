// App.tsx

// Importação das dependências e componentes
import React, { useState } from 'react'; // React e useState para gerenciamento de estado
import Header from './components/Header'; // Componente de Cabeçalho
import Abas from './components/Abas'; // Componente de Abas para alternar entre Mapa e Gráfico
import FiltroMapa from './components/FiltroMapa'; // Componente de Filtro para o Mapa
import FiltroGrafico from './components/FiltroGrafico'; // Componente de Filtro para o Gráfico
import Mapa from './components/Mapa'; // Componente do Mapa
import Grafico from './components/Grafico'; // Componente do Gráfico
import styled from 'styled-components'; // Biblioteca para estilização de componentes

// Componente principal do App
const App: React.FC = () => {
  // Estado para controlar qual aba está ativa: "mapa" ou "grafico"
  const [ativo, setAtivo] = useState('mapa'); // "mapa" é o valor inicial

  // Função para alterar a aba ativa ao clicar nas Abas
  const handleClick = (tipo: string) => {
    setAtivo(tipo); // Atualiza o estado com o tipo da aba clicada
  };

  return (
    // Container principal do aplicativo
    <AppContainer>
      <Header /> {/* Componente de Cabeçalho do App */}
      <MainContent>
        <ContentContainer>
          {/* Componente de Abas que alterna entre Mapa e Gráfico */}
          <Abas onClick={handleClick} ativo={ativo} /> 
          {/* Condicionalmente renderiza o filtro com base na aba ativa */}
          {ativo === 'mapa' ? <FiltroMapa /> : <FiltroGrafico />} 
        </ContentContainer>
        {/* Renderiza o componente Mapa ou Gráfico com base na aba ativa */}
        {ativo === 'mapa' ? <Mapa /> : <Grafico />} 
      </MainContent>
    </AppContainer>
  );
};

export default App; // Exporta o componente App para ser usado em outros lugares

// Estilização do componente App com styled-components
const AppContainer = styled.div`
  height: 100vh;  // Define a altura como 100% da altura da janela
  width: 100vw;  // Define a largura como 100% da largura da janela
  display: flex; // Utiliza o layout flexbox
  flex-direction: column; // Organiza os itens de cima para baixo
  box-sizing: border-box; // Inclui padding e bordas no cálculo do tamanho total
  margin: 0;  // Remove margens externas
  padding: 0;  // Remove o padding
`;

const MainContent = styled.div`
  display: flex; // Utiliza o flexbox
  flex-grow: 1; // Faz o conteúdo crescer para preencher o espaço disponível
  overflow: hidden; // Impede o conteúdo de ultrapassar os limites
`;

const ContentContainer = styled.div`
  flex-grow: 1; // Preenche o restante da tela
  display: flex; // Utiliza o flexbox
  flex-direction: column; // Organiza os itens de cima para baixo
  overflow: auto; // Permite que o conteúdo seja rolável se for maior que o container
`;
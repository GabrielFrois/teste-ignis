// Grafico.tsx
import React from 'react';  // Importa o React para usar o JSX
import styled from 'styled-components';  // Importa a biblioteca styled-components para estilização

// Componente principal de gráfico
const Grafico: React.FC = () => {
  return (
    <GraficoContainer>
      <p>Conteúdo do Gráfico</p>  {/* Exibe um texto indicando que o conteúdo do gráfico será aqui */}
      {/* Adicione o conteúdo do gráfico aqui */}
    </GraficoContainer>
  );
};

export default Grafico;  // Exporta o componente para ser usado em outras partes do aplicativo

// Estilo para o contêiner do gráfico com styled-components
const GraficoContainer = styled.div`
  width: 153vh;  /* Define a largura do gráfico baseada na altura da tela (usar 'vh' significa que a largura é proporcional à altura da tela) */
  height: 90vh;  /* Define a altura do gráfico (90% da altura da tela) */
  padding: 20px;  /* Espaçamento interno de 20px em todos os lados */
  border-radius: 8px;  /* Arredonda as bordas do gráfico */
  box-sizing: border-box;  /* Inclui o padding no cálculo do tamanho do contêiner */
  overflow-y: auto;  /* Permite a rolagem vertical se o conteúdo exceder a altura do gráfico */
  background-color: gray;  /* Cor de fundo do gráfico */
  border-top-right-radius: 8px;  /* Aplica borda arredondada na parte superior direita */
  z-index: 1;  /* Define o índice z para que o gráfico seja exibido sobre outros elementos se necessário */
  margin-top: 0.5%;  /* Define um pequeno espaço (0.5%) do topo da tela */
  margin-left: 22%;  /* Desloca o gráfico 22% para a direita da tela */
  position: fixed;  /* Fixa o gráfico na tela, mantendo-o no mesmo lugar enquanto a página rola */
`;

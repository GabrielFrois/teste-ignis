// Grafico.tsx
import React from 'react';
import styled from 'styled-components';

const Grafico: React.FC = () => {
  return (
    <GraficoContainer>
      <p>Conteúdo do Gráfico</p>
      {/* Adicione o conteúdo do gráfico aqui */}
    </GraficoContainer>
  );
};

export default Grafico;

const GraficoContainer = styled.div`
  width: 153vh; /* Largura baseada na altura da tela (igual ao Mapa) */
  height: 90vh; /* Altura do gráfico (igual ao Mapa) */
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow-y: auto; /* Permite rolar o conteúdo */
  background-color: gray; /* Cor de fundo (igual ao Mapa) */
  border-top-right-radius: 8px;
  z-index: 1;
  margin-top: 0.5%; /* Espaço do topo */
  margin-left: 22%; /* Deslocamento da esquerda */
  position: fixed; /* Fixa o componente na tela enquanto rola */
`;

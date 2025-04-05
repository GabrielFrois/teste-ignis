import React from 'react';
import styled from 'styled-components';

const FiltroGrafico: React.FC = () => {
  return (
    <FiltroGraficoContainer>
      <FiltroContainer>
        <h1>Disponível em Breve!</h1>
      </FiltroContainer>
    </FiltroGraficoContainer>
  );
};

export default FiltroGrafico;

// Contêiner pai com altura de 100% da tela
const FiltroGraficoContainer = styled.div`
  height: 100vh; /* Altura total da tela */
  display: flex;
`;

const FiltroContainer = styled.div`
  padding: 20px;
  background-color: #d32f2f;
  height: 100vh;
  width: 350px;
  border-top-right-radius: 8px;
`;

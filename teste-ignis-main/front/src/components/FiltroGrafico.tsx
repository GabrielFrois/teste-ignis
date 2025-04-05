// Importa o React e a biblioteca styled-components para estilização com CSS-in-JS
import React from 'react';
import styled from 'styled-components';

// Define o componente funcional FiltroGrafico
const FiltroGrafico: React.FC = () => {
  return (
    <FiltroGraficoContainer>
      {/* Container interno com a mensagem */}
      <FiltroContainer>
        <h1>Disponível em Breve!</h1> {/* Mensagem de placeholder */}
      </FiltroContainer>
    </FiltroGraficoContainer>
  );
};

export default FiltroGrafico;

// Container externo que ocupa a altura total da tela
const FiltroGraficoContainer = styled.div`
  height: 100vh;       // Ocupa 100% da altura da janela
  display: flex;       // Define um layout em linha (flex container)
`;

// Container lateral estilizado que aparece como um painel
const FiltroContainer = styled.div`
  padding: 20px;                // Espaçamento interno
  background-color: #d32f2f;    // Cor de fundo (vermelho escuro)
  height: 100vh;                // Ocupa 100% da altura da tela
  width: 350px;                 // Largura fixa
  border-top-right-radius: 8px; // Arredonda o canto superior direito
`;

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #212121;
  width: 100%;  /* Ocupa toda a largura da tela */
  height: 60px; /* Tamanho da barra */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-left: -10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra */
  position: sticky;
  top: 0;  /* Coloca o header no topo da tela */
  left: 0;  /* Garantir que o header ocupe toda a largura da tela */
  z-index: 1;
`;

const Title = styled.h1`
  color: white; /* Cor do texto */
  margin: 0; /* Remover margem */
  font-size: 1.5rem; /* Tamanho da fonte */
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Projeto Ignis</Title>
    </HeaderWrapper>
  );
};

export default Header;

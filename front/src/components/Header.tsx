// Importa o React para usar JSX e criar o componente funcional
import React from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados
import styled from 'styled-components';

// Cria um componente estilizado para o header da página
const HeaderWrapper = styled.header`
  background-color: #212121; // Define a cor de fundo do header (um tom escuro de cinza)
  width: 100%;  /* Ocupa toda a largura da tela */
  height: 60px; /* Define a altura do header */
  display: flex; // Usa Flexbox para alinhar os itens de forma flexível
  justify-content: space-between; // Distribui os itens de forma espaçada (caso tenha mais no futuro)
  align-items: center; // Alinha os itens verticalmente no centro
  padding: 0 20px; // Espaçamento interno nas laterais do header (20px à esquerda e direita)
  margin-left: -10px; // Compensa qualquer deslocamento externo à esquerda
  margin-top: -10px; // Compensa qualquer deslocamento externo no topo
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra sutil ao header para destacá-lo */
  position: sticky; // Faz com que o header fique fixo no topo da tela ao rolar a página
  top: 0;  /* Define a posição do header no topo da tela */
  left: 0;  /* Garante que o header ocupe toda a largura da tela, mesmo com os deslocamentos */
  z-index: 10; // Garante que o header fique acima de outros elementos da página (em caso de sobreposição)
`;

// Cria um componente estilizado para o título dentro do header
const Title = styled.h1`
  color: white; /* Define a cor do texto como branca */
  margin: 0; /* Remove qualquer margem padrão ao redor do título */
  font-size: 1.5rem; /* Define o tamanho da fonte como 1.5rem (relativo ao tamanho da fonte base) */
`

// Define o componente funcional Header
const Header = () => {
  return (
    // Renderiza o wrapper do header, que contém todo o layout do cabeçalho
    <HeaderWrapper>
      {/* Renderiza o título dentro do header */}
      <Title>Projeto Ignis</Title>
    </HeaderWrapper>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default Header;

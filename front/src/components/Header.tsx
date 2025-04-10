// Importa o React para usar JSX e criar o componente funcional
import React from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados
import styled from 'styled-components';

// Cria um componente estilizado para o header da página
const HeaderWrapper = styled.header`
  background-color: #212121; // Define a cor de fundo do header
  width: 100%;  /* Ocupa toda a largura da tela */
  height: 60px; /* Define a altura da barra */
  display: flex; // Usa Flexbox para alinhar os itens
  justify-content: space-between; // Espaça os itens igualmente (caso tenha mais no futuro)
  align-items: center; // Alinha verticalmente ao centro
  padding: 0 20px; // Espaçamento interno nas laterais
  margin-left: -10px; // Compensa algum deslocamento externo
  margin-top: -10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra para destacar o header */
  position: sticky; // Faz com que o header fique fixo no topo ao rolar a página
  top: 0;  /* Define a posição no topo da tela */
  left: 0;  /* Garante que o header ocupe toda a largura, mesmo com deslocamentos */
  z-index: 10; // Garante que o header fique acima de outros elementos
`;

// Cria um componente estilizado para o título dentro do header
const Title = styled.h1`
  color: white; /* Cor do texto */
  margin: 0; /* Remove qualquer margem padrão */
  font-size: 1.5rem; /* Define o tamanho da fonte */
`

// Define o componente funcional Header
const Header = () => {
  return (
    // Renderiza o wrapper do header
    <HeaderWrapper>
      {/* Renderiza o título dentro do header */}
      <Title>Projeto Ignis</Title>
    </HeaderWrapper>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default Header;

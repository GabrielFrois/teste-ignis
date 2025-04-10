// Importa o React e o tipo ReactNode para permitir passar elementos JSX como filhos
import React, { ReactNode } from 'react';
// Importa a biblioteca styled-components para estilização com CSS-in-JS
import styled from 'styled-components';

// Define os tipos esperados pelas props do componente Abas
type AbasProps = {
  onClick: (tipo: string) => void; // Função para lidar com cliques nas abas
  ativo: string; // Indica qual aba está ativa ('mapa' ou 'grafico')
  children?: ReactNode; // Permite passar componentes/elementos como filhos
};

// Componente funcional que recebe as props e renderiza as abas
const Abas: React.FC<AbasProps> = ({ onClick, ativo, children }) => {
  return (
    <AbasContainer>
      {/* Botão da aba "Mapa" */}
      <Button
        ativo={ativo === 'mapa'} // Define se o botão está ativo, verificando se a aba ativa é 'mapa'
        onClick={() => onClick('mapa')} // Ao clicar, ativa a aba 'mapa'
      >
        Mapa
      </Button>

      {/* Botão da aba "Gráfico" */}
      <Button
        ativo={ativo === 'grafico'} // Define se o botão está ativo, verificando se a aba ativa é 'grafico'
        onClick={() => onClick('grafico')} // Ao clicar, ativa a aba 'grafico'
      >
        Gráfico
      </Button>

      {/* Renderiza qualquer conteúdo passado como filho do componente Abas */}
      <div>{children}</div>
    </AbasContainer>
  );
};

export default Abas; // Exporta o componente para ser usado em outros lugares

// Container principal que organiza os botões das abas
const AbasContainer = styled.div`
  display: flex;            // Exibe os botões das abas em linha
  gap: 5px;                 // Adiciona um pequeno espaçamento entre os botões
  justify-content: flex-start; // Alinha os botões à esquerda
  width: 80%;               // Define a largura do container como 80% da largura disponível
  max-width: 350px;         // Define uma largura máxima de 350px
  margin-top: 10px;         // Adiciona um espaço superior de 10px
  z-index: 1;               // Define a prioridade de sobreposição dos elementos (garante que as abas fiquem acima de outros componentes)
  margin-top: 0.5%;         // Ajusta a margem superior para um pequeno valor percentual
  position: fixed;          // Define a posição como fixa na tela
`;

// Estilização do botão com base na prop 'ativo' (que indica se a aba está ativa ou não)
const Button = styled.button<{ ativo: boolean }>`
  padding: 8px 15px;               // Define o espaçamento interno do botão
  border: none;                    // Remove a borda padrão do botão
  cursor: pointer;                 // Altera o cursor para um ponteiro (indicando que é clicável)
  font-weight: bold;                // Deixa o texto do botão em negrito
  border-radius: 8px 8px 0 0;       // Define bordas arredondadas no topo do botão
  transition: background-color 0.3s, color 0.3s; // Suaviza a transição das mudanças de cor

  // Cor de fundo muda de acordo com o estado 'ativo'
  background-color: ${(props) => (props.ativo ? '#d32f2f' : '#ff9595')};

  // Cor ao passar o mouse também muda conforme o estado 'ativo'
  &:hover {
    background-color: ${(props) => (props.ativo ? '#c62828' : '#ff6f6f')};
  }
`;

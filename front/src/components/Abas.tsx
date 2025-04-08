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
        ativo={ativo === 'mapa'} // Define se o botão está ativo
        onClick={() => onClick('mapa')} // Ao clicar, ativa a aba 'mapa'
      >
        Mapa
      </Button>

      {/* Botão da aba "Gráfico" */}
      <Button
        ativo={ativo === 'grafico'} // Define se o botão está ativo
        onClick={() => onClick('grafico')} // Ao clicar, ativa a aba 'grafico'
      >
        Gráfico
      </Button>

      {/* Renderiza qualquer conteúdo passado como filho do componente Abas */}
      <div>{children}</div>
    </AbasContainer>
  );
};

export default Abas;

// Container principal que organiza os botões das abas
const AbasContainer = styled.div`
  display: flex;            // Exibe os elementos em linha
  gap: 5px;                 // Espaçamento entre os botões
  justify-content: flex-start;
  width: 80%;
  max-width: 350px;
  margin-top: 10px;

`;

// Estilização do botão com base na prop 'ativo'
const Button = styled.button<{ ativo: boolean }>`
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px 8px 0 0; // Borda arredondada no topo
  transition: background-color 0.3s, color 0.3s;

  // Cor de fundo muda de acordo com o estado 'ativo'
  background-color: ${(props) => (props.ativo ? '#d32f2f' : '#ff9595')};

  // Cor ao passar o mouse também muda conforme o estado
  &:hover {
    background-color: ${(props) => (props.ativo ? '#c62828' : '#ff6f6f')};
  }
`;

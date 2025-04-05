// Importa o React e o hook useState, que permite criar estados dentro de componentes funcionais
import React, { useState } from 'react';

// Importa os componentes utilizados na aplicação
import Header from './components/Header';
import Abas from './components/Abas';
import FiltroMapa from './components/FiltroMapa';
import FiltroGrafico from './components/FiltroGrafico';

// Define o componente funcional principal da aplicação
const App: React.FC = () => {
  // Cria um estado chamado 'ativo' com valor inicial 'mapa'
  // 'setAtivo' é a função usada para atualizar esse estado
  const [ativo, setAtivo] = useState('mapa');

  // Função que será chamada quando o usuário clicar em uma aba
  // Atualiza o estado 'ativo' com o valor da aba clicada
  const handleClick = (tipo: string) => {
    setAtivo(tipo);
  };

  // JSX que define o que será renderizado na tela
  return (
    <div className="App">
      {/* Renderiza o cabeçalho da aplicação */}
      <Header />

      {/* Renderiza o componente de abas, passando a aba ativa e a função de clique como props */}
      <Abas onClick={handleClick} ativo={ativo} />

      {/* Condicional para exibir o conteúdo da aba:
          - Se a aba ativa for 'mapa', renderiza o componente FiltroMapa
          - Caso contrário, renderiza o componente FiltroGrafico */}
      {ativo === 'mapa' ? <FiltroMapa /> : <FiltroGrafico />}
    </div>
  );
}

// Exporta o componente App para ser utilizado em outros arquivos
export default App;

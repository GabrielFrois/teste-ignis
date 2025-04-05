import React, { useState } from 'react';
import Header from './components/Header';
import Abas from './components/Abas';
import FiltroMapa from './components/FiltroMapa';
import FiltroGrafico from './components/FiltroGrafico';  // Importando o novo componente de gráfico

const App: React.FC = () => {
  const [ativo, setAtivo] = useState('mapa'); // Aba inicializada como 'mapa'

  const handleClick = (tipo: string) => {
    setAtivo(tipo); // Muda a aba ativa
  };

  return (
    <div className="App">
      <Header />
      <Abas onClick={handleClick} ativo={ativo} />
      {ativo === 'mapa' ? <FiltroMapa /> : <FiltroGrafico />} {/* Alterando a exibição para FiltroGrafico */}
    </div>
  );
}

export default App;

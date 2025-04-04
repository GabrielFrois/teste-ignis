import React from 'react';

type AbasProps = {
  onClick: (tipo: string) => void;
  ativo: string;
};

const Abas: React.FC<AbasProps> = ({ onClick, ativo }) => {
  return (
    <div className="abas-container">
      <button
        className={`aba ${ativo === 'mapa' ? 'ativa' : ''}`}
        onClick={() => onClick('mapa')}
      >
        Mapa
      </button>
      <button
        className={`aba ${ativo === 'grafico' ? 'ativa' : ''}`}
        onClick={() => onClick('grafico')}
      >
        Gráfico
      </button>
    </div>
  );
};

export default Abas;

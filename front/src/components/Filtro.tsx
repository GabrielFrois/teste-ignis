import React, { useState } from 'react';

const Filtro: React.FC = () => {
  const [index, setIndex] = useState(0);

  const estados = ['Focos', 'Área de Calor', 'Riscos'];
  const cores = ['#4CAF50', '#FF9800', '#D32F2F'];

  const atualizarEstado = () => {
    return (
      <div className="slider" style={{ backgroundColor: cores[index] }}>
        <div className="slider-thumb" style={{ transform: `translateX(${index * 100}px)` }}></div>
      </div>
    );
  };

  return (
    <div className="filtro-container">
      <div className="filtros">
        <div className="toggle-labels">
          <span>Focos</span>
          <span>Área de Calor</span>
          <span>Riscos</span>
        </div>
        <div className="slider-container" onClick={() => setIndex((index + 1) % estados.length)}>
          {atualizarEstado()}
        </div>

        <label htmlFor="estado">Estados</label>
        <select id="estado" name="estado">
          <option value="">Selecione um estado</option>
          {/* Adicionar opções de estados aqui */}
        </select>

        <label htmlFor="bioma">Biomas</label>
        <select id="bioma" name="bioma">
          <option value="">Selecione um bioma</option>
          {/* Adicionar opções de biomas aqui */}
        </select>

        <div className="datas">
          <label>Datas:</label>
          <div className="input-group">
            <div>
              <label htmlFor="inicio">Início:</label>
              <input type="date" id="inicio" name="inicio" />
            </div>
            <div>
              <label htmlFor="fim">Fim:</label>
              <input type="date" id="fim" name="fim" />
            </div>
          </div>
        </div>

        <button className="btn-aplicar">Aplicar</button>
      </div>
    </div>
  );
};

export default Filtro;

import React from 'react';
import styled from 'styled-components';
import { LatLngExpression } from 'leaflet';
import MapComponent from './MapComponent'; // Importe o novo componente de mapa

const Mapa: React.FC = () => {
  // Definindo a posição inicial do mapa (latitude e longitude) e bioma
  const latitude = -15.7801;  // Exemplo de latitude para Brasília
  const longitude = -47.9292; // Exemplo de longitude para Brasília
  const bioma = 'Cerrado';    // Exemplo de bioma

  return (
    <MapaContainer>
      {/* Usando o MapComponent com latitude, longitude e bioma */}
      <MapComponent latitude={latitude} longitude={longitude} bioma={bioma} />
    </MapaContainer>
  );
};

export default Mapa;

// Estilo do mapa
const MapaContainer = styled.div`
  width: 153vh; /* Largura com base na altura da tela */
  height: 90vh; /* Altura do mapa */
  border-radius: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: gray;
  border-top-right-radius: 8px;
  z-index: 1;
  margin-top: 0.5%;
  margin-left: 22%;
  position: fixed;
`;

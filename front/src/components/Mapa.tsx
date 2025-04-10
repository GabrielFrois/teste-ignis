// Mapa.tsx
import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importando o CSS necessário

const Mapa: React.FC = () => {
  // Definindo a posição inicial do mapa (latitude e longitude)
  const position: LatLngExpression = [51.505, -0.09]; // Posição central (Londres, por exemplo)
  const zoom = 13; // Nível de zoom

  return (
    <MapaContainer>
      <MapContainer center={position} zoom={zoom} style={{ width: '100%', height: '100%' }}>
        {/* Usando o TileLayer para carregar o mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Adicionando um marcador */}
        <Marker position={position}>
          <Popup>Você está aqui!</Popup>
        </Marker>
      </MapContainer>
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

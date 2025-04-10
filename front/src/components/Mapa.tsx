// Importa o React para criar o componente funcional
import React from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados
import styled from 'styled-components';
// Importa o tipo LatLngExpression da biblioteca leaflet (não utilizado diretamente aqui, mas pode ser útil no MapComponent)
import { LatLngExpression } from 'leaflet';
// Importa o componente MapComponent, que será usado para renderizar o mapa
import MapComponent from './MapComponent'; // Importe o novo componente de mapa

// Componente funcional Mapa
const Mapa: React.FC = () => {
  // Definindo a posição inicial do mapa (latitude e longitude) e bioma
  const latitude = -15.7801;  // Exemplo de latitude para Brasília
  const longitude = -47.9292; // Exemplo de longitude para Brasília
  const bioma = 'Cerrado';    // Exemplo de bioma

  return (
    // Contêiner estilizado para o mapa
    <MapaContainer>
      {/* Usando o MapComponent com latitude, longitude e bioma */}
      <MapComponent latitude={latitude} longitude={longitude} bioma={bioma} />
    </MapaContainer>
  );
};

// Exporta o componente Mapa para ser utilizado em outras partes da aplicação
export default Mapa;

// Estilo do mapa usando styled-components
const MapaContainer = styled.div`
  width: 153vh; /* Largura do mapa com base na altura da tela (proporcional) */
  height: 90vh; /* Altura do mapa, ocupando 90% da altura da tela */
  border-radius: 10px; // Define o arredondamento dos cantos do mapa
  box-sizing: border-box; // Garante que o padding e border sejam considerados no cálculo do tamanho
  overflow-y: auto; // Permite rolagem vertical caso o conteúdo ultrapasse a altura
  background-color: gray; // Cor de fundo (aqui, um cinza) para o contêiner do mapa
  border-top-right-radius: 8px; // Define o arredondamento do canto superior direito
  z-index: 1; // Define o índice de sobreposição, garantindo que o mapa fique visível acima de outros elementos
  margin-top: 0.5%; // Espaço do topo da tela
  margin-left: 22%; // Desloca o mapa para a direita da tela (22% da largura da tela)
  position: fixed; // Fixa o mapa na tela para que ele permaneça visível enquanto o usuário rola a página
`;

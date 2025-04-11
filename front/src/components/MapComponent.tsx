// Importa componentes necessários da biblioteca react-leaflet para renderizar e interagir com o mapa
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Importa os estilos padrão do leaflet para o mapa
import "leaflet/dist/leaflet.css";
// Importa a biblioteca leaflet para manipulação do mapa
import L from "leaflet";

// Importa o ícone personalizado para o marcador do mapa
import markerIcon from "../img/pin.png"; // Alterando para o caminho correto do ícone

// Configuração do ícone do marcador do mapa
const customIcon = new L.Icon({
  iconUrl: markerIcon, // Caminho para o ícone personalizado
  iconSize: [25, 26], // Tamanho do ícone (largura e altura)
  iconAnchor: [12, 41], // Posição do ponto de ancoragem do ícone (onde o marcador ficará posicionado em relação à imagem)
  popupAnchor: [1, -34], // Posição do ponto de ancoragem do popup (onde o texto do popup será mostrado)
});

// Tipagem das props que o componente MapComponent receberá
interface MapProps {
  latitude: number; // Latitude para a posição do marcador
  longitude: number; // Longitude para a posição do marcador
  bioma: string; // Nome do bioma que será exibido no popup do marcador
}

// Limites do Brasil, usado para restringir a visualização do mapa dentro das fronteiras do país
const brasilBounds: L.LatLngBoundsExpression = [
  [-34.0, -74.0], // Coordenadas do canto inferior esquerdo do Brasil
  [5.3, -32.4],   // Coordenadas do canto superior direito do Brasil
];

// Componente MapComponent que recebe latitude, longitude e bioma como props
const MapComponent: React.FC<MapProps> = ({ latitude, longitude, bioma }) => {
  return (
    // Componente MapContainer que define o container do mapa
    <MapContainer
      center={[latitude, longitude]} // Define a posição inicial do centro do mapa com base nas props de latitude e longitude
      zoom={5} // Define o nível de zoom inicial
      minZoom={4} // Define o nível de zoom mínimo permitido
      maxZoom={10} // Define o nível de zoom máximo permitido
      style={{ height: "100%", width: "100%" }} // Define o estilo do mapa para ocupar toda a altura e largura do contêiner
      maxBounds={brasilBounds} // Limita o mapa para não sair dos limites do Brasil
      maxBoundsViscosity={1.0} // Impede que o mapa ultrapasse os limites definidos, ajustando a "viscosidade" das bordas
    >
      {/* Componente TileLayer para carregar o mapa com tiles do OpenStreetMap */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Componente Marker para criar um marcador no mapa, com a posição definida pelas props de latitude e longitude */}
      <Marker position={[latitude, longitude]} icon={customIcon}>
        {/* Componente Popup que exibe um texto quando o marcador é clicado */}
        <Popup>Você está no bioma {bioma}! 🌿</Popup>
      </Marker>
    </MapContainer>
  );
};

// Exporta o componente MapComponent para ser usado em outras partes da aplicação
export default MapComponent;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ícone do marcador
import markerIcon from "../pin.png"; // Alterando para o caminho correto do ícone

// Configuração do ícone do marcador
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 26],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Tipagem das props
interface MapProps {
  latitude: number;
  longitude: number;
  bioma: string;
}

// Limites do Brasil
const brasilBounds: L.LatLngBoundsExpression = [
  [-34.0, -74.0],
  [5.3, -32.4],
];

const MapComponent: React.FC<MapProps> = ({ latitude, longitude, bioma }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={5}
      minZoom={4}
      maxZoom={10}
      style={{ height: "100%", width: "100%" }}
      maxBounds={brasilBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Marcador para o bioma */}
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>Você está no bioma {bioma}! 🌿</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

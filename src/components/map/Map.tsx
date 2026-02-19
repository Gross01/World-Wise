import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../images/marker-icon.png'
import markerShadow from '../../images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [0, -30],
  shadowSize: [30, 30],
  shadowAnchor: [10, 30],
})

L.Marker.prototype.options.icon = DefaultIcon

type Props = {
    latlng: number[]
}

const Map = ({ latlng }: Props) => {
    if (!latlng || latlng.length !== 2) return null;

    const [lat, lng] = latlng;

    const mapStyles = {
        height: '200px',
        width: '100%',
        borderRadius: '10px',
    }

    return (
        <MapContainer center={[lat, lng]} zoom={5} scrollWheelZoom={false} style={mapStyles}>
            <TileLayer
                attribution=''
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[lat, lng]}></Marker>
        </MapContainer>
    );
};

export default Map;

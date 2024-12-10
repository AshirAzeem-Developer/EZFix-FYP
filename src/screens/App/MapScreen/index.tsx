import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {Map, SearchIcon} from 'lucide-react-native';
import useStyles from './style';
import {WebSocketService} from '../../../services/WebSocketService';
import {Socket} from 'socket.io-client';
import {useSelector} from 'react-redux';

const MapScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markerPosition, setMarkerPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const {styles, colors, sizes} = useStyles();
  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const userId = useSelector((state: any) => state.user?.user?.user?.id);

  const mapRef = useRef<MapView>(null);

  const handleLocationFocus = () => {
    mapRef.current?.animateToRegion(
      {
        ...region,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      1000,
    );
  };
  useEffect(() => {
    let socket: Socket;

    const connectWebSocket = async () => {
      if (userToken) {
        socket = WebSocketService(userToken);
        console.log('socket');
        socket.on('connect', () => {
          console.log('Connected to WebSocket');
        });

        socket.on('location:create', location => {
          console.log(
            'Received Location ----------- >> :',
            JSON.stringify(location, null, 2),
          );
          if (
            location &&
            location?.data?.attributes?.lat != null &&
            location?.data?.attributes?.long != null
          ) {
            setRegion(prev => ({
              ...prev,
              latitude: location?.data?.attributes?.lat,
              longitude: location?.data?.attributes?.long,
            }));

            setMarkerPosition({
              latitude: location?.data?.attributes?.lat,
              longitude: location?.data?.attributes?.long,
            });
          } else {
            console.error('Invalid location data:', location);
          }
        });
      }
    };
    connectWebSocket();

    return () => {
      if (socket) {
        socket.off('location:create');
        socket.disconnect();
      }
    };
  }, [userToken]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}>
        {markerPosition && (
          <Marker coordinate={markerPosition} title="Current Location" />
        )}
      </MapView>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon color="#333" size={24} />
          <Text style={styles.searchText}>Search Location</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.locationButton}
        onPress={handleLocationFocus}>
        <Map color="#fff" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;

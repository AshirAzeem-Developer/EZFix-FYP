import React, {useState, useRef} from 'react';
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

const {width, height} = Dimensions.get('window');

const MapScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const {styles, colors, sizes} = useStyles();

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

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Current Location"
        />
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

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

const usersMap = props => {
    let userLocationMarker = null;

    if(props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
    }
    const usersMarkers = props.userPlaces.map(userPlace => (
        <MapView.Marker coordinate={userPlace} key={userPlace.id} /> 
    ));
    return (
        <View style={styles.mapContainer}>
            <MapView
            provider="google"
             style={styles.map} 
            initialRegion={{
                latitude: 6.4377,
                longitude: 3.4718,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0421
              }}
              region={props.userLocation}
              >
                {userLocationMarker}
                {usersMarkers}
              </MapView>

        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;
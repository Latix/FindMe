import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

const usersMap = props => {
    return (
        <View style={styles.mapContainer}>
            <MapView
            provider="google"
             style={styles.map} 
            region={{
                latitude: 54.68818489999999,
                longitude: 25.274744000000055,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;
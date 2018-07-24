import React from 'react';
import { Button } from 'react-native';

const fetchLocation = props => {
    return (
        <Button title="Get Location Snapshot" onPress={props.onGetLocation} />
    );
}

export default fetchLocation;
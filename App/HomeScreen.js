import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Permiso dijo el petiso</Text>
      <Button onPress={() => props.navigation.navigate('Details')} title="Chorizo" />
    </View>
  );
}



export default HomeScreen;
import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(AppNavigator);

export default function App () {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <AppContainer />
    </View>
  );
}


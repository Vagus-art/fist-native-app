import React from 'react';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import Purchases from './Purchases';
import Sales from './Sales';

export default createBottomTabNavigator({
    Sales,Purchases
  },
  {tabBarOptions: {
    labelStyle: {
      fontSize: 18,
    }
  }}
  );
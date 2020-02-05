import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";
import Purchases from "./purchases/";
import Sales from "./sales/";

export default createBottomTabNavigator(
  {
    Sales: {
      screen: Sales,
      navigationOptions: {
        title:"Ventas",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="attach-money" color={tintColor} size={30} />
        )
      }
    },
    Purchases: {
      screen: Purchases,
      navigationOptions: {
        title:"Compras",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 16
      },
      style: {
        height: 60
      }
    }
  }
);

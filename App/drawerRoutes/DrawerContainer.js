import { createAppContainer } from 'react-navigation';
import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from "react-native-elements";
import Trades from "./trades/";
import Clients from "./clients/";
import Providers from "./providers/";
import Stock from "./stock/";
import Balance from "./balance/";


const DrawerNavigator = createDrawerNavigator({
    Trades:{
      screen:Trades,
      navigationOptions: {
        title: "Intercambios",
        drawerIcon: ({tintColor}) => (<Icon name="swap-vert" color={tintColor} />)
      }
    },
    Stock:{
      screen:Stock,
      navigationOptions: {
        title: "Inventario",
        drawerIcon: ({tintColor}) => (<Icon name="book" color={tintColor} />)
      }
    },
    Clients:{
      screen:Clients,
      navigationOptions: {
        title: "Clientes",
        drawerIcon: ({tintColor}) => (<Icon name="people" color={tintColor} />)
      }
    },
    Providers:{
      screen:Providers,
      navigationOptions: {
        title: "Proveedores",
        drawerIcon: ({tintColor}) => (<Icon name="local-shipping" color={tintColor} />)
      }
    },
    Balance:{
      screen:Balance,
      navigationOptions: {
        title: "Balance",
        drawerIcon: ({tintColor}) => (<Icon name="account-balance" color={tintColor} />)
      }
    }
  }, {
    initialRouteName: 'Trades'
  });
  
export default createAppContainer(DrawerNavigator)
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Trades from "./trades/";
import Clients from "./clients/";
import Providers from "./providers/";

const DrawerNavigator = createDrawerNavigator({
    Trades,Clients,Providers
  }, {
    initialRouteName: 'Trades',
    contentOptions: {  
      activeTintColor: '#e91e63',
    },
  });
  
export default createAppContainer(DrawerNavigator)
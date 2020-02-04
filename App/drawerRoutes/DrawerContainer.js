import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Trades from "./trades/Trades";
import Clients from "./clients/ClientContainer";
import Providers from "./providers/ProviderContainer";

const DrawerNavigator = createDrawerNavigator({
    Trades,Clients,Providers
  }, {
    initialRouteName: 'Trades',
    contentOptions: {  
      activeTintColor: '#e91e63',
    },
  });
  
export default createAppContainer(DrawerNavigator)
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Trades from "./trades/";
import Clients from "./clients/";
import Providers from "./providers/";
import Stock from "./stock/";
import Balance from "./balance/";


const DrawerNavigator = createDrawerNavigator({
    Trades,Stock,Clients,Providers,Balance
  }, {
    initialRouteName: 'Trades'
  });
  
export default createAppContainer(DrawerNavigator)
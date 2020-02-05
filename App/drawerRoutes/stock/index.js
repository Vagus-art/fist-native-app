import { createStackNavigator } from "react-navigation-stack";
import Stock from "./Stock";
import { withNavigation } from "../methods";

export default createStackNavigator(
  {
    Stock: {
      screen:withNavigation(Stock),
      navigationOptions: {
        title: "Inventario"
      }
    }
  },
  {
    initialRouteName: "Stock"
  }
);

import { createBottomTabNavigator } from "react-navigation-tabs";
import Purchases from "./purchases/";
import Sales from "./sales/";

export default createBottomTabNavigator(
  {
    Sales,
    Purchases,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 18
      }
    }
  }
);

import { createStackNavigator } from "react-navigation-stack";
import Sales from "./Sales";
import { withNavigation } from "../../methods";

export default createStackNavigator(
  {
    Sales: {
      screen: withNavigation(Sales),
      navigationOptions: {
        title: "Ventas"
      }
    }
  },
  {
    initialRouteName: "Sales"
  }
);

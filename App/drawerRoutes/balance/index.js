import { createStackNavigator } from "react-navigation-stack";
import Balance from "./Balance";
import { withNavigation } from "../methods";

export default createStackNavigator(
  {
    Balance: {
      screen:withNavigation(Balance),
      navigationOptions: {
        title: "Balance"
      }
    }
  },
  {
    initialRouteName: "Balance"
  }
);

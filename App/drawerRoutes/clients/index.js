import { createStackNavigator } from "react-navigation-stack";
import Clients from "./Clients";
import { withNavigation } from "../methods";

export default createStackNavigator(
  {
    Clients: withNavigation(Clients)
  },
  {
    initialRouteName: "Clients"
  }
);

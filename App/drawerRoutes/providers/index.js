import { createStackNavigator } from "react-navigation-stack";
import Providers from "./Providers";
import { withNavigation } from "../methods";

export default createStackNavigator(
  {
    Providers: {
      screen:withNavigation(Providers),
      navigationOptions: {
        title: "Proveedores"
      }
    }
  },
  {
    initialRouteName: "Providers"
  }
);

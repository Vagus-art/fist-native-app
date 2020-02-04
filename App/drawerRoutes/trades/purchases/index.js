import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Purchases from "./Purchases";
import { withNavigation } from "../../methods";

export default createStackNavigator(
  {
    Purchases: withNavigation(Purchases)
  },
  {
    initialRouteName: "Purchases"
  }
);

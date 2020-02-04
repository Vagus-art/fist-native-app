import React from "react";
import { View, Text, Button } from "react-native";
import DrawerContainer from "./drawerRoutes/DrawerContainer";

export default function App(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <DrawerContainer />
    </View>
  );
}

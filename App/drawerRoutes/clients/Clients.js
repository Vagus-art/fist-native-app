import React from "react";
import { View } from "react-native";
import ClientTemplate from "./ClientTemplate";

export default Clients = props => {
  return (
    <View>
      <ClientTemplate name="Pizzeria" phone="2262154568" adress="Av 10 3882" debt={25} />
      <ClientTemplate name="Pollería" phone="2262154485" adress="Av 2 350" />
    </View>
  );
};

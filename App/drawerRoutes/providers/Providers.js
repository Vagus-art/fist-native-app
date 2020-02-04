import React from "react";
import { View } from "react-native";
import PersonTemplate from "../PersonTemplate";

export default Providers = props => {
  return (
    <View>
      <PersonTemplate
        name="Crunchitos"
        phone="2262154568"
        adress="Mar del Plata"
      />
      <PersonTemplate name="Especias" phone="2262154485" adress="Buenos Aires" />
    </View>
  );
};

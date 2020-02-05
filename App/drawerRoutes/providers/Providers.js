import React from "react";
import { View, StyleSheet } from "react-native";
import PersonTemplate from "../PersonTemplate";
import ActionButton from "../ActionButton";

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  }
});

export default Providers = props => {
  return (
    <View style={styles.MainContainer}>
      <ActionButton touch={() => alert("Add provider")} />
      <PersonTemplate
        name="Crunchitos"
        phone="2262154568"
        adress="Mar del Plata"
      />
      <PersonTemplate
        name="Especias"
        phone="2262154485"
        adress="Buenos Aires"
      />
    </View>
  );
};

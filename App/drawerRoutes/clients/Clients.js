import React from "react";
import { View, StyleSheet } from "react-native";
import PersonTemplate from "../templates/PersonTemplate";
import ActionButton from "../interfaceItems/ActionButton";

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  }
});

export default Clients = props => {
  return (
    <View style={styles.MainContainer}>
      <ActionButton touch={() => alert("Add client")} />
      <PersonTemplate
        name="Pizzeria"
        phone="2262154568"
        adress="Av 10 3882"
        debt={25}
      />
      <PersonTemplate name="Pollería" phone="2262154485" adress="Av 2 350" />
    </View>
  );
};

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemTemplate from "../templates/ItemTemplate";
import ActionButton from "../interfaceItems/ActionButton";

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  }
});

export default Stock = props => {
  return (
    <View style={styles.MainContainer}>
      <ActionButton touch={()=>alert("Add Item")}/>
      <ItemTemplate name="Maní" quantity="10" unity="1kg" />
      <ItemTemplate name="Palitos" quantity="25" unity="1kg" />
    </View>
  );
};

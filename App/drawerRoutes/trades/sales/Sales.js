import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "../../interfaceItems/ActionButton";
import TradeTemplate from "../../templates/TradeTemplate";


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  }
});

export default Sales = props => {
  return (
    <View style={styles.MainContainer}>
      <ActionButton touch={() => alert("Add sale")} />
      <TradeTemplate person="Pizzeria" sum="160" item="2 Maní 1kg" />
    </View>
  );
};

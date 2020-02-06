import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "../../interfaceItems/ActionButton";
import TradeTemplate from "../../templates/TradeTemplate";

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  }
});

export default Purchases = props => {
  return (
    <View style={styles.MainContainer}>
      <ActionButton touch={()=>alert("Add purchase")} />
      <TradeTemplate person="Especias" sum="160" item="2 Orégano 1kg" />
    </View>
  );
};

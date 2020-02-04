import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";

export default ClientTemplate = props => {
  return (
    <ListItem
      title={props.name}
      rightTitle={props.phone}
      subtitle={
        <View>
          <Text>{props.adress}</Text>
          {props.debt && <Text style={{ color: "red" }}>${props.debt}</Text>}
        </View>
      }
      onPress={() => alert("something")}
      bottomDivider
    />
  );
};

import React from "react";
import { View, Text } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { Header, Icon } from "react-native-elements";

export default Purchases = props => {
  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="menu"
            onPress={() =>
              props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
            color="white"
          />
        }
        centerComponent={{ text: 'Trades', style: { color: '#fff' } }}
      />
      <Text>Compras</Text>
    </View>
  );
};

import React from 'react';
import { View, Text } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { Header, Icon } from "react-native-elements";

export default Providers = (props) => {
    return(
      <View>
        <Header
          leftComponent={<Icon name="menu" color="#fff" onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>}
          centerComponent={{ text: "Providers", style: { color: "#fff" } }}
        />
        <Text>Ventas</Text>
      </View>
    )
  }
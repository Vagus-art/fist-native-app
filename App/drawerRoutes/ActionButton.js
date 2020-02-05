import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
     
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1858cd'
      },
});

export default ActionButton = props => {
  return (
    <TouchableOpacity style={styles.TouchableOpacityStyle} activeOpacity={0.7} onPress={props.touch}>
      <View style={styles.FloatingButtonStyle} >
        <Icon name="add" color='#ffffff'/>
      </View>
    </TouchableOpacity>
  );
};

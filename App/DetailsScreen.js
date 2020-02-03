import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const DetailsScreen = props => {
    const [notes,setNotes] = useState([]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {notes && notes.map((note,index)=><Text key={index}>{note}</Text>)}
      <Button
        onPress={() => setNotes([...notes,"note no ".concat(notes.length)])}
        title="Petiso"
      />
    </View>
  );
};

export default DetailsScreen;

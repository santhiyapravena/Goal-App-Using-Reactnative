import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal,Image } from "react-native";

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    if (goalText.trim().length === 0) return;
    onAddGoal(goalText);
    setGoalText(""); 
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('./assets/images/goal.jpg')}/>
        <TextInput 
          value={goalText} 
          onChangeText={goalInputHandler} 
          style={styles.textInput}
          placeholder="Type your goal"
        />
        <View style={styles.buttonContainer}>
          
          <Button title="Cancel" color="red" onPress={onCancel} />
          <Button onPress={addGoalHandler} title="Add Goal" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 24,
    backgroundColor: '#bff1f4'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#465455',
    width: '80%',
    padding: 8,
    marginBottom: 10,
    borderRadius:6,
    backgroundColor:'#b1d0f5'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  image:
  {
    width:100,
    height:100,
    margin:20
  }
});

export default GoalInput;

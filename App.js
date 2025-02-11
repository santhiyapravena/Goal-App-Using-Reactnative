import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModelVisible, setIsModelVisible] = useState(false);

  function addGoalHandler(goalText) {
    if (goalText.trim().length === 0) return;
    setGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), text: goalText }]);
    setIsModelVisible(false); // Close modal after adding
  }

  function deleteitem(id) {
    setGoals((currentGoals) => currentGoals.filter(goal => goal.id !== id));
  }

  function startAddGoalHandler() {
    setIsModelVisible(true);
  }

  function endAddGoalHandler() {
    setIsModelVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#0045ab" onPress={startAddGoalHandler} />
      <GoalInput visible={isModelVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} onDelete={() => deleteitem(itemData.item.id)} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#bff1f4'
  },
  goalsContainer: {
    flex: 4,
  }
});

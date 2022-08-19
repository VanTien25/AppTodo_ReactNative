import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';

import Task from './component/Task';
import styles from './App.components.style';
import Form from './component/Form';

export default function App() {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    // Add Task
    setTaskList([...taskList,task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Thông báo",
      "Bạn có chắc chắn muốn xóa?",
      [
        {
          text: "Cancel",
          onPress: () => {}
        },
        { text: "OK", onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        } }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.header.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
        
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
  );
}

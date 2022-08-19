import { View, Text, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from './style';

const Form = (props) => {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task.length === 0) {
      alert('Bạn vui lòng nhập hộ tôi phát!')
      return false;
    }
    props.onAddTask(task);
    setTask('')
    Keyboard.dismiss();
  }

  return (
    <View style={styles.addTask}>
        <TextInput
          value={task}
          onChangeText={(text) => setTask(text)} 
          placeholder='Your Task' style={styles.input}
        />

        <TouchableOpacity
          onPress={handleAddTask}
        >
          <View style={styles.iconWrapper}>
              <Text style={styles.icon}>+</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default Form;
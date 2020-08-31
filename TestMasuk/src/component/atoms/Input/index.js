//import liraries
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

// create a component
const Input = ({label, onChangeText, placeholder, isSecure = false, value}) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input(isFocus)}
        onChangeText={(val) => onChangeText(val)}
        secureTextEntry={isSecure}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        placeholder={placeholder}></TextInput>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  text: {
    color: '#7D8797',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    marginBottom: 8,
  },
  input: (isFocus) => ({
    borderColor: isFocus ? '#0BCAD4' : '#E9E9E9',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  }),
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Input;

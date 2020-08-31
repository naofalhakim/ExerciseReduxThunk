//import liraries
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// create a component
const Button = ({text, type, action}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={action}>
      <Text style={styles.text(type)}>{text}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  text: (type) => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: type === 'secondary' ? '#FFFFFF' : '#000000',
  }),
  container: (type) => ({
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: type === 'secondary' ? '#0BCAD4' : '#FFFFFF',
  }),
});

//make this component available to the app
export default Button;

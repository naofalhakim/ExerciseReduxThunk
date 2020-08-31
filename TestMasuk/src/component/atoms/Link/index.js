//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Link = ({label, fontSize, align, action}) => {
  return (
    <TouchableOpacity style={styles.container(align)} onPress={action}>
      <Text style={styles.text(fontSize)}>{label}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: (align) => ({
    flex: 1,
    alignItems: align,
  }),
  text: (size) => ({
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
  }),
});

export default Link;

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles[props.type] || styles.button}>
      <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03A9F4',
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 20,
  },
  danger: {
    backgroundColor: '#C70039',
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#21E571',
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
  },
});

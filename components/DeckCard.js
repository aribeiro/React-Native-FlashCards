import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';

function DeckCard(props) {
  const {title, cards, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.cards}>{cards} cards</Text>
      <Button onPress={onPress} title="VIEW" />
    </View>
  );
}

export default DeckCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  header: {
    alignSelf: 'center',
    fontSize: 30,
    paddingBottom: 10,
  },
  cards: {
    alignSelf: 'center',
    color: '#ccc',
    fontSize: 20,
    paddingBottom: 10,
  },
});

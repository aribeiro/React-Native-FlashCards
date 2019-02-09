import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';

import {MaterialHeaderButtons, Item} from './HeadersButtons';
import DeckCard from './DeckCard';
import * as API from '../api/api';

class DeckList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'FlashCards',
    headerRight: (
      <MaterialHeaderButtons>
        <Item
          title="add"
          iconName="add"
          onPress={() => navigation.navigate('AddDeck')}
        />
      </MaterialHeaderButtons>
    ),

    headerStyle: {
      backgroundColor: '#6002ee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  openDeck = index => {
    this.props.navigation.navigate('Deck', {deckId: index});
  };

  state = {decks: [], loading: true};

  componentDidMount() {
    API.getDecks().then(data => {
      this.setState({
        decks: Object.entries(data).map(([key, value]) => ({key, value})),
        loading: false,
      });
    });
  }

  render() {
    const {decks, loading} = this.state;
    console.log('Deck List', decks);
    return (
      <View style={{flex: 1, width: '100%'}}>
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          <ScrollView>
            {decks.map(deck => (
              <DeckCard
                key={deck.key}
                title={deck.value.title}
                cards={deck.value.questions.length}
                onPress={() => this.openDeck(deck.key)}
              />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default DeckList;

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Button from './Button';
import * as API from '../api/api';

class DeckCards extends Component {
  static navigationOptions = {
    title: 'Deck',

    headerStyle: {
      backgroundColor: '#6002ee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {loading: true, deck: null};

  addCard = () => {
    const {navigation} = this.props;
    const {deckId} = this.props.navigation.state.params;
    navigation.navigate('AddCard', {deckId: deckId});
  };

  startQuiz = () => {
    const {navigation} = this.props;
    const {deckId} = this.props.navigation.state.params;
    navigation.navigate('Quiz', {deckId: deckId});
  };

  componentDidMount() {
    API.getDeck(this.props.navigation.state.params.deckId).then(data =>
      this.setState({deck: data, loading: false}),
    );
  }

  render() {
    console.log(this.state);
    const {loading, deck} = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {deck && (
          <React.Fragment>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.subTitle}>{deck.questions.length} cards</Text>

            <Button onPress={this.startQuiz} text="START QUIZ" />
            <Button onPress={this.addCard} text="ADD CARD" type="link" />
          </React.Fragment>
        )}
      </View>
    );
  }
}

export default DeckCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: '#000000',
    alignItems: 'center',
    fontSize: 30,
    paddingBottom: 15,
  },
  subTitle: {
    color: '#ccc',
    alignItems: 'center',
    fontSize: 20,
    paddingBottom: 30,
  },
});

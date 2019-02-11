import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Button from './Button';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleGetDeck} from '../actions/decks';

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

  render() {
    const {loading, deck} = this.props;

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

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.navigation.state.params;
  return {
    loading: state.loading,
    deck: state.decks[deckId],
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleGetDeck,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckCards);

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

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import QuizResult from './QuizResult';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleGetDeck} from '../actions/decks';

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz',

    headerStyle: {
      backgroundColor: '#6002ee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

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

  state = {
    loading: true,
    deck: {},
    cards: [],
    cardIndex: 0,
    correct: 0,
    displayAnswer: false,
  };

  onDisplayAnswer = () => {
    this.setState({
      displayAnswer: !this.state.displayAnswer,
    });
  };

  onCorrect = () => {
    this.setState({
      displayAnswer: !this.state.displayAnswer,
      correct: this.state.correct + 1,
      cardIndex: this.state.cardIndex + 1,
    });
  };

  onWrong = () => {
    this.setState({
      displayAnswer: !this.state.displayAnswer,
      cardIndex: this.state.cardIndex + 1,
    });
  };

  onBackToDeck = () => {
    const {deckId} = this.props.navigation.state.params;
    this.props.navigation.navigate('Deck', {deckId});
  };

  onRestartQuiz = () => {
    this.setState({
      cardIndex: 0,
      correct: 0,
      displayAnswer: false,
    });
  };

  componentDidMount() {
    this.setState({
      deck: this.props.deck,
      cards: this.props.deck.questions,
      loading: false,
    });
  }

  displayCardNumber = () => {
    const {cardIndex, cards} = this.state;
    const cardTotal = cards.length;
    return (
      <Text style={styles.page}>
        Card {cardIndex + 1} of {cardTotal}
      </Text>
    );
  };

  displayPartialScore = () => {
    const {correct, cards} = this.state;
    const cardTotal = cards.length;
    return (
      <Text style={styles.score}>
        Current Score: {correct} out of {cardTotal}
      </Text>
    );
  };
  render() {
    const {
      loading,
      deck,
      cardIndex,
      cards,
      displayAnswer,
      correct,
    } = this.state;
    const currentCard = cards[this.state.cardIndex];

    if (loading)
      return (
        <View style={styles.container}>
          <Text>Loading ...</Text>
        </View>
      );

    if (cardIndex < cards.length) {
      return (
        <View style={styles.container}>
          {!displayAnswer && (
            <React.Fragment>
              {this.displayCardNumber()}
              <View>
                <Text style={styles.header}>{deck.title}</Text>

                <Text style={styles.question}>{currentCard.question}</Text>
              </View>

              {this.displayPartialScore()}
              <View style={styles.buttonsContainer}>
                <Button onPress={this.onDisplayAnswer} title="SHOW ANSWER" />
              </View>
            </React.Fragment>
          )}

          {displayAnswer && (
            <React.Fragment>
              {this.displayCardNumber()}
              <View>
                <Text style={styles.header}>{deck.title}</Text>

                <Text style={styles.question}>{currentCard.question}</Text>
                <Text style={styles.answer}>{currentCard.answer}</Text>
              </View>

              {this.displayPartialScore()}
              <View style={styles.buttonsContainer}>
                <Button onPress={this.onCorrect} title="CORRECT" />
                <Button color={'red'} onPress={this.onWrong} title="WRONG" />
              </View>
            </React.Fragment>
          )}
        </View>
      );
    } else {
      return (
        <QuizResult
          deckTitle={deck.title}
          correct={correct}
          cardsLength={cards.length}
          onBackToDeck={this.onBackToDeck}
          onRestartQuiz={this.onRestartQuiz}
        />
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  const {deckId} = ownProps.navigation.state.params;
  return {
    loading: state.loading,
    deck: state.decks[deckId],
    notifications: state.notifications,
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
)(Quiz);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  header: {
    alignSelf: 'center',
    fontSize: 30,
    paddingBottom: 30,
  },
  question: {
    color: '#e01c1c',
    alignSelf: 'center',
    fontSize: 25,
    paddingBottom: 30,
  },
  answer: {
    color: '#7d7d7d',
    alignSelf: 'center',
    fontSize: 20,
    paddingBottom: 10,
  },
  score: {
    alignSelf: 'flex-end',
    fontSize: 15,
    paddingBottom: 10,
  },
  buttonsContainer: {
    alignSelf: 'baseline',
    flex: 2,
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 80,
  },
});

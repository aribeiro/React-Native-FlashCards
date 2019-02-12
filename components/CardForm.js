import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from './Button';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleAddCardToDeck} from '../actions/decks';
import {isNullOrWhiteSpace} from '../utils';

class CardForm extends Component {
  static navigationOptions = {
    title: 'New Card',

    headerStyle: {
      backgroundColor: '#6002ee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    question: null,
    answer: null,
    error: null,
  };

  onChange = (value, key) => {
    this.setState({[key]: value});
  };

  onPressButton = () => {
    const {navigation} = this.props;
    const {deckId} = navigation.state.params;
    const {question, answer} = this.state;

    if (!isNullOrWhiteSpace(question) && !isNullOrWhiteSpace(answer)) {
      this.props.handleAddCardToDeck({question, answer}, deckId)
      navigation.navigate('Deck', {deckId: deckId});
      this.setState({error: null});

    } else {
      this.setState({
        error: 'you need to add a question and answer for the New Card',
      });
    }
  };

  render() {
    const {question, answer, error} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add New Card</Text>

        <TextInput
          placeholder="Question"
          style={styles.textInput}
          value={question}
          onChangeText={question => this.onChange(question, 'question')}
        />

        <TextInput
          placeholder="Answer"
          style={styles.textInput}
          value={answer}
          onChangeText={answer => this.onChange(answer, 'answer')}
        />
        {error && <Text style={styles.error}>{error}</Text>}

        <Button onPress={this.onPressButton} text="CREATE" />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleAddCardToDeck,
    },
    dispatch,
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(CardForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    alignItems: 'center',
    fontSize: 30,
    paddingBottom: 30,
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 24,
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  button: {
    width: '100%',
  },
});

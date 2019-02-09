import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import  Button from './Button'
import * as API from '../api/api'
import { submitDeck } from '../api/api'

class DeckForm extends Component {
  static navigationOptions = {
    title: 'Add New Deck',

    headerStyle: {
      backgroundColor: '#6002ee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  state = { name: '', created: false, error: null }

  changeName = (name) => {
    this.setState({ name })
  }

	onPressButton = () => {
    const { name } = this.state
    if(this.state.name){
      // Generating KEY for AsyncStorage
      const key = (new Date().valueOf());

      API.saveDeckTitle({title: name, key: key})

      this.props.navigation.navigate('Deck', {deckId: key});

		} else {
    	this.setState({ error: 'you need to add a name for your New Deck' })
		}
	}

  render() {
    const { name, error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add New Deck</Text>
        <TextInput
          placeholder='New deck name'
          style={styles.textInput}
          value={name}
          onChangeText={name => this.changeName(name) }
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button onPress={this.onPressButton} text='CREATE' />
      </View>
    );
  }
}

export default DeckForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
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
    borderBottomWidth: 1
  },
  btnText: {
    color: '#fff'
  },
  error: {
    color: 'red'
  }
});

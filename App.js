import React from 'react';
import {StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {Constants} from 'expo';
import DeckList from './components/DeckList';
import DeckForm from './components/DeckForm';

import CardForm from './components/CardForm';
import DeckCards from './components/DeckCards';
import Quiz from './components/Quiz';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import middleware from './middleware'

const store = createStore(reducers, middleware)

const StackNavigator = createStackNavigator({
  Home: DeckList,
  AddDeck: DeckForm,
  Deck: DeckCards,
  Quiz: Quiz,
  AddCard: CardForm,
});
const Stack = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
        {/* <FlashCardStatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle="light-content" /> */}
        <Stack />
    </Provider>
    );
  }
}

import AsyncStorage from 'react-native'
const FLASHCARDS_STORAGE_KEY = "@FLASHCARDS_APP:decks" 

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
function setInitialState(){
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialState))
  return initialState;
}

export function decksResults (results) {
  return results === null
    ? setInitialState()
    : JSON.parse(results)
}
export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(decksResults)
}

export function getDeck(key){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, key)
    .then(decksResults[key])
}

export function saveDeck(title) {
  // Check this API
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[title]: title: [title]}), () => {
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
      return JSON.parse(result);
    });
  })
}

export function addCardToDeck(deck, card) {
  // Check this API
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[deck]: {questions: card}}), () => { 
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
      return JSON.parse(result);
    });
  }
}

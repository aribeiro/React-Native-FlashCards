import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Card as RNECard, Button} from 'react-native-elements';

class DeckList extends Component {
  render() {
    return (
      <View style={{flex: 1, width:'100%'}}>
        <ScrollView>

          <RNECard title={'Javascript'} >
            <Text style={{marginBottom: 10}}>Decks for Javascript</Text>
            <Button
              icon={{name: 'play-arrow', color: 'white'}}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="START QUIZ"
            />
          </RNECard>

          <RNECard title={'Ruby on Rails'}>
            <Text style={{marginBottom: 10}}>Decks for Ruby on Rails</Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="START QUIZ"
            />
          </RNECard>

          <RNECard title={'Python'}>
            <Text style={{marginBottom: 10}}>Decks for Python</Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="START QUIZ"
            />
          </RNECard>

          <RNECard title={'React'}>
            <Text style={{marginBottom: 10}}>Decks for React</Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="START QUIZ"
            />
          </RNECard>

          <RNECard title={'React Native'}>
            <Text style={{marginBottom: 10}}>Decks for React Native</Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="START QUIZ"
            />
          </RNECard>

        </ScrollView>
      </View>
    );
  }
}

export default DeckList;

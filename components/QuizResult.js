import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  handleResetNotification,
} from '../actions/notifications';

class QuizResult extends Component {

  componentDidMount() {
    this.props.handleResetNotification();
  }

  percentageScore = () => {
    const {correct, cardsLength} = this.props;
    return parseFloat((correct / cardsLength) * 100).toFixed(2);
  };

  render() {
    const {correct, cardsLength, deckTitle} = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.header}>{deckTitle}</Text>

          <Text style={styles.endScore}>
            You scored {correct} out of {cardsLength} points.
          </Text>
          <Text style={styles.endScore}>{this.percentageScore()}%.</Text>
        </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleResetNotification,
    },
    dispatch,
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(QuizResult);

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
  endScore: {
    alignSelf: 'center',
    fontSize: 30,
    paddingBottom: 30,
  },
});
import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    }
    this.handleTouch = this.handleTouch.bind(this);
    this.zeraCounter = this.zeraCounter.bind(this);
  }

  handleTouch = ({ target }) => {
    this.setState((ps) => ({
      number: ps.number + 1,
    }))
  }

  zeraCounter = () => {
    this.setState({ number: 0 })
  }

  render() {
    const { number } = this.state;
    return (
      <View style={{ backgroundColor: 'red' }}>
        <TouchableHighlight
          onPress={ (e) => this.handleTouch(e) }
          onLongPress={ (e) => this.zeraCounter(e) }
        >
          <Text
            style={{ fontSize: 80, color: 'white' }}
          >
            { number }
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

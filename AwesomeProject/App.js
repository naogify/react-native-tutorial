import React, { Component } from "react";
import { Text, View } from "react-native";

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>
          Hello {this.props.name}! I'm {this.props.age} year's old.
        </Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", top: 550 }}>
        <Greeting name="Rexxar" age="19" />
        <Greeting name="Jaina" age="21" />
        <Greeting name="Valeera" age="22" />
      </View>
    );
  }
}

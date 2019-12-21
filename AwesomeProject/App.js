import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export default class PizzaTranslator extends Component {
  //コストラクタ。初期化された時に呼び出される。
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ top: 300, height: 40 }}
          placeholder="Type here to translate!"
          //入力された文字をtextに保存。
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            //splitで" "ごとに分割して配列を作成。
            .split(" ")
            //各値がtrueであればピザ変換した配列を作成。
            .map(word => word && "🍕")
            //半角スペースで結合し、文字列に変換。
            .join(" ")}
        </Text>
      </View>
    );
  }
}

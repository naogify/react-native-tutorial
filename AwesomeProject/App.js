import React, { Component } from "react";
import { Text, View } from "react-native";

class Blink extends Component {
  //コンポートがマウント（treeに挿入）された時呼び出される関数。
  componentDidMount() {
    // Toggle the state every second
    setInterval(
      () =>
        //previousStateを引数としてとり、isShowingTextに previousState.isShowingText と反対の値を保存する。
        this.setState(
          previousState => (
            console.log(previousState),
            {
              isShowingText: !previousState.isShowingText
            }
          )
        ),
      //それを1秒ごとに実行。
      1000
    );
  }

  //state object
  //コンポートが初期化（最初に呼び出された時）、isShowingTextをtrueに設定。
  state = { isShowingText: true };

  render() {
    //this.state.isShowingTextの値が、true でなければ null を返す。
    if (!this.state.isShowingText) {
      return null;
    }

    //true だったらpropsで渡されたテキストを表示。
    return <Text>{this.props.text}</Text>;
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}

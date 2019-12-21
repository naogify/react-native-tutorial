// import React, { Component } from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           //dataで与えたデータを、
//           data={[
//             { key: "Devin" },
//             { key: "Dan" },
//             { key: "Dominic" },
//             { key: "Jackson" },
//             { key: "James" },
//             { key: "Joel" },
//             { key: "John" },
//             { key: "Jillian" },
//             { key: "Jimmy" },
//             { key: "Julie" }
//           ]}
//           //renderItemで指定した形式でレンダリングする。
//           renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// });

import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            //titleでヘッダーコンテンツを指定、dataでデータを指定。
            { title: "D", data: ["Devin", "Dan", "Dominic"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie"
              ]
            }
          ]}
          //renderItemでdataのレンダリング方法を指定。
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          //renderSectionHeaderでヘッダーのレンダリング方法を指定。
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          //dataのindexをkeyExtractorで取得できる。
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

import { StyleSheet, Text, TextInput, View } from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "gold" }}></View>
      <View style={{ flex: 2, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
    </View>
  );
};
const FlexboxExample2 = ({ yoonseok }: { yoonseok: any }) => {
  return (
    <View style={{ flex: yoonseok.wow, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "gold" }}></View>
      <View style={{ flex: 2, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <FlexboxExample />
      <FlexboxExample />
      <FlexboxExample2 yoonseok={{ wow: 9 }} />
    </View>
  );
};

export default App;
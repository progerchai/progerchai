/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainViewStyle}>
          <Text>RN app</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainViewStyle: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
  },
});

export default App;

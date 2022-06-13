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
  Image,
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
          <Image
            style={{ width: 200, height: 200, borderRadius: 50 }}
            source={{ uri: 'https://avatars1.githubusercontent.com/u/31467572?s=460&u=2d7bff135af371274a2623e917be73f257752c17&v=4' }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainViewStyle: {
    width: 200,
    height: 200,
  },
});

export default App;

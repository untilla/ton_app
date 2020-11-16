import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ViewStyle } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import EditProfile from './app/screens/EditProfile';
import { STATUS_BAR_HEIGHT } from './app/constants/globals';

const App: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const loadResources = async (): Promise<any> => Promise.all([
    Font.loadAsync({
      'PT_Root_UI_Bold': require('./assets/fonts/PT_Root_UI_Bold.ttf'),
      'PT_Root_UI_Light': require('./assets/fonts/PT_Root_UI_Light.ttf'),
      'PT_Root_UI_Medium': require('./assets/fonts/PT_Root_UI_Medium.ttf'),
      'PT_Root_UI_Regular': require('./assets/fonts/PT_Root_UI_Regular.ttf'),
    }),
  ]);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={(): void => setLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <EditProfile/>
      <View style={styles.statusBar}/>
    </View>
  );
};

interface IStyle {
  container: ViewStyle,
  statusBar: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'white',
  }
});

export default App;

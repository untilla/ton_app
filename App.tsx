import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './app/screens/EditProfile';
import BackButton from './app/screens/EditProfile/components/BackButton';

const Stack = createStackNavigator();

const App: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const AppTheme = useMemo((): Theme => ({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255, 255, 255)',
    },
  }), []);
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
    <NavigationContainer theme={AppTheme}>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName={'EditProfile'}
        >
          <Stack.Screen
            name={'EditProfile'}
            component={EditProfile}
            options={{
              header: () => <BackButton onPress={() => {}}/>
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

interface IStyle {
  container: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

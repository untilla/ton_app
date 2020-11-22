import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ViewStyle, View } from 'react-native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './app/screens/EditProfile';
import BackButton from './app/screens/EditProfile/components/BackButton';

const Stack = createStackNavigator();

const App: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
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
    <View style={[styles.container, { backgroundColor: AppTheme.colors.background }]}>
      <NavigationContainer theme={AppTheme}>
        <SafeAreaView style={styles.container}>
          <StatusBar style={'auto'}/>
          <Stack.Navigator
            initialRouteName={'EditProfile'}
          >
            <Stack.Screen
              name={'EditProfile'}
              component={EditProfile}
              options={{
                header: () => (<BackButton onPress={() => {}}/>),
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
};

interface IStyle {
  container: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
  },
});

export default App;

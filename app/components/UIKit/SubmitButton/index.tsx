import React from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
  Text,
} from 'react-native';
import { ISubmitButtonProps } from './types';

const SubmitButton: React.FC<ISubmitButtonProps> =
  ({
     onPress,
     title,
     disabled = false,
     containerStyle= {},
   }): JSX.Element => {
    return (
      <View style={containerStyle}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  };

interface IStyle {
  container: ViewStyle,
  title: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    backgroundColor: '#0088CC',
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontFamily: 'PT_Root_UI_Medium',
    textAlign: 'center',
    color: '#EBEDEE',
  },
});

export default SubmitButton;

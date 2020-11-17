import React, { useState } from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
  Text, TouchableWithoutFeedback,
} from 'react-native';
import { COLOR_ACTIVE, COLOR_DISABLED, COLOR_PRESSED, ISubmitButtonProps } from './types';

const SubmitButton: React.FC<ISubmitButtonProps> =
  ({
     onPress,
     title,
     disabled = false,
     containerStyle = {},
   }): JSX.Element => {
    const [backgroundColor, setColor] = useState<string>(disabled ? COLOR_DISABLED : COLOR_ACTIVE);
    return (
      <View style={containerStyle}>
        <TouchableWithoutFeedback
          onPressIn={() => !disabled ? setColor(COLOR_PRESSED) : null}
          onPressOut={() => !disabled ? setColor(COLOR_ACTIVE) : null}
          onPress={() => !disabled ? onPress() : null}
        >
          <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

interface IStyle {
  container: ViewStyle,
  title: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
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

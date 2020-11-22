import React, { useState } from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { COLOR_ACTIVE, COLOR_DISABLED, COLOR_PRESSED, ISubmitButtonProps } from './types';

const SubmitButton: React.FC<ISubmitButtonProps> =
  ({
     onPress,
     title,
     disabled = false,
     containerStyle = {},
   }): JSX.Element => {
    const [pressed, setPressed] = useState<boolean>(false);
    return (
      <View style={containerStyle}>
        <TouchableWithoutFeedback
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={() => !disabled ? onPress() : null}
        >
          <View
            style={
              [
                styles.container,
                {
                  backgroundColor: disabled ? COLOR_DISABLED : pressed ? COLOR_PRESSED : COLOR_ACTIVE
                },
              ]
            }
          >
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

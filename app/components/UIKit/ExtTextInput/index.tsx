import React, { useState } from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
  Text,
  TextInput,
} from 'react-native';
import { IExtTextInputProps, INPUT_BLUR_COLOR, INPUT_FOCUS_COLOR } from './types';

const ExtTextInput: React.FC<IExtTextInputProps> =
  ({
     onChangeText,
     value,
     placeholder,
     keyboardType = 'default',
     containerStyle = {},
     extra,
   }): JSX.Element => {
    const [borderColor, setBorderColor] = useState<string>(INPUT_BLUR_COLOR);
    return (
      <View style={containerStyle}>
        <View
          style={[styles.container, { borderColor }]}
        >
          <Text style={styles.hint}>{!!value.length ? placeholder : ' '}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              onFocus={(): void => setBorderColor(INPUT_FOCUS_COLOR)}
              onBlur={(): void => setBorderColor(INPUT_BLUR_COLOR)}
              keyboardType={keyboardType}
            />
            {
              extra &&
              (<View style={styles.extraContainer}>{extra}</View>)
            }
          </View>
        </View>
      </View>
    );
  };

interface IStyle {
  container: ViewStyle,
  hint: TextStyle,
  inputContainer: ViewStyle,
  textInput: TextStyle,
  extraContainer: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    borderBottomWidth: 1,
  },
  hint: {
    fontSize: 12,
    fontFamily: 'PT_Root_UI_Medium',
    letterSpacing: 0.5,
    color: '#96A1A7',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    marginTop: 2,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'PT_Root_UI_Regular',
    marginBottom: 8,
    flex: 1,
  },
  extraContainer: {
    paddingLeft: 8,
    justifyContent: 'center',
  },
});

export default ExtTextInput;

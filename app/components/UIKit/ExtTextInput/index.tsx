import React, { useState, forwardRef } from 'react';
import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
  Text,
  TextInput, NativeSyntheticEvent, TextInputFocusEventData,
} from 'react-native';
import { IExtTextInputProps, INPUT_BLUR_COLOR, INPUT_FOCUS_COLOR } from './types';

const ExtTextInput = forwardRef<React.RefObject<TextInput> | any, IExtTextInputProps>(
  ({
     onChangeText,
     value,
     placeholder,
     keyboardType = 'default',
     containerStyle = {},
     extra,
     returnKeyType,
     onSubmitEditing,
     autoFocus,
     error= false,
     onBlur = () => {},
   }: IExtTextInputProps, ref?) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
      <View style={containerStyle}>
        <View
          style={[styles.container, { borderColor: focused ? INPUT_FOCUS_COLOR : error ? 'red' : INPUT_BLUR_COLOR }]}
        >
          <Text style={styles.hint}>{!!value.length ? placeholder : ' '}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              onFocus={(): void => setFocused(true)}
              onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>): void => {
                setFocused(false);
                onBlur(e);
              }}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              ref={ref}
              autoFocus={autoFocus}
            />
            {
              extra &&
              (<View style={styles.extraContainer}>{extra}</View>)
            }
          </View>
        </View>
      </View>
    );
  });

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

import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions, TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  ViewStyle
} from 'react-native';
import { ReactNode } from 'react';

export interface IExtTextInputProps {
  value: string,
  placeholder: string,
  onChangeText: (text: string) => void,
  keyboardType?: KeyboardTypeOptions,
  containerStyle?: ViewStyle,
  extra?: string | ReactNode,
  returnKeyType?: ReturnKeyTypeOptions,
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void,
  autoFocus?: boolean,
  error?: boolean,
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
}

export const INPUT_FOCUS_COLOR = '#000000';
export const INPUT_BLUR_COLOR = '#DDE1E2';

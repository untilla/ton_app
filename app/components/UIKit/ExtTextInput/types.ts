import { KeyboardTypeOptions, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface IExtTextInputProps {
  value: string,
  placeholder: string,
  onChangeText: (text: string) => void,
  keyboardType?: KeyboardTypeOptions,
  containerStyle?: ViewStyle,
  extra?: string | ReactNode,
}

export const INPUT_FOCUS_COLOR = '#000000';
export const INPUT_BLUR_COLOR = '#DDE1E2';

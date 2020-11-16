import { KeyboardTypeOptions, ViewStyle } from 'react-native';

export interface IExtTextInputProps {
  value: string,
  placeholder: string,
  onChangeText: (text: string) => void,
  keyboardType?: KeyboardTypeOptions,
  containerStyle?: ViewStyle,
}

export const INPUT_FOCUS_COLOR = '#000000';
export const INPUT_BLUR_COLOR = '#DDE1E2';

import { ViewStyle } from 'react-native';

export interface ISubmitButtonProps {
  title: string,
  onPress: () => void,
  disabled?: boolean,
  containerStyle?: ViewStyle,
}

export const COLOR_PRESSED = '#094571';
export const COLOR_ACTIVE = '#0088CC';
export const COLOR_DISABLED = '#C3C9CD';

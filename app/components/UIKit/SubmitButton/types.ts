import { ViewStyle } from 'react-native';

export interface ISubmitButtonProps {
  title: string,
  onPress: () => void,
  disabled?: boolean,
  containerStyle?: ViewStyle,
}

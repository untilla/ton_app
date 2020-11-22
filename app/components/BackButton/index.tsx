import React from 'react';
import {
  StyleSheet,
  Image,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import { IBackButtonProps } from './types';

const BackButton: React.FC<IBackButtonProps> = ({ onPress }): JSX.Element => (
  <TouchableOpacity onPress={onPress}>
    <Image source={require('./assets/images/backBtn.png')} style={styles.button}/>
  </TouchableOpacity>
);

interface IStyle {
  button: ImageStyle,
}

const styles = StyleSheet.create<IStyle>({
  button: {
    width: 56,
    height: 56,
  },
});

export default BackButton;

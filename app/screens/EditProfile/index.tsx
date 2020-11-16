import React, { useState } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  TextStyle,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import BackButton from './components/BackButton';
import { STATUS_BAR_HEIGHT } from '../../constants/globals';
import UserPhoto from './components/UserPhoto';
import ExtTextInput from '../../components/UIKit/ExtTextInput';
import SubmitButton from '../../components/UIKit/SubmitButton';

const EditProfile: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.container}
      behavior={'position'}
      enabled
    >
      <BackButton onPress={() => {}}/>
      <Text style={styles.title}>
        Edit profile
      </Text>
      <UserPhoto/>
      <View style={styles.inputsContainer}>
        <ExtTextInput
          placeholder={'First Name'}
          onChangeText={setFirstName}
          value={firstName}
          containerStyle={{ marginBottom: 18 }}
        />
        <ExtTextInput
          placeholder={'Last Name'}
          onChangeText={setLastName}
          value={lastName}
          containerStyle={{ marginBottom: 18 }}
        />
        <ExtTextInput
          placeholder={'Phone'}
          onChangeText={setPhone}
          value={phone}
          keyboardType={'phone-pad'}
          containerStyle={{ marginBottom: 18 }}
        />
        <ExtTextInput
          placeholder={'Email'}
          onChangeText={setEmail}
          value={email}
          keyboardType={'email-address'}
          containerStyle={{ marginBottom: 18 }}
        />
        <ExtTextInput
          placeholder={'Telegram'}
          onChangeText={setTelegram}
          value={telegram}
          keyboardType={'twitter'}
          containerStyle={{ marginBottom: 18 }}
        />
      </View>
      <SubmitButton
        containerStyle={styles.submitContainer}
        onPress={() => {}}
        title={'Save'}
      />
    </KeyboardAvoidingView>
  );
};

interface IStyle {
  container: ViewStyle,
  title: TextStyle,
  inputsContainer: ViewStyle,
  submitContainer: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flexDirection: 'column',
    marginTop: STATUS_BAR_HEIGHT,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'PT_Root_UI_Bold',
    color: 'black',
  },
  inputsContainer: {
    marginLeft: 16,
    marginTop: 36,
    marginRight: 16,
  },
  submitContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  }
});

export default EditProfile;

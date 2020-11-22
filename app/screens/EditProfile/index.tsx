import React, { useState, useCallback, useRef } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  TextStyle,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TextInput,
} from 'react-native';
import { EMAIL_RULE, PHONE_RULE, STR_RULE, TG_RULE } from '../../constants/globals';
import UserPhoto from './components/UserPhoto';
import ExtTextInput from '../../components/UIKit/ExtTextInput';
import SubmitButton from '../../components/UIKit/SubmitButton';

const EditProfile: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [telegramError, setTelegramError] = useState<boolean>(false);

  const lastNameInput = useRef<React.RefObject<TextInput>>();
  const phoneInput = useRef<React.RefObject<TextInput>>();
  const emailInput = useRef<React.RefObject<TextInput>>();
  const telegramInput = useRef<React.RefObject<TextInput>>();

  const validate = useCallback((): boolean => {
    return (
      EMAIL_RULE.test(email) &&
      PHONE_RULE.test(phone) &&
      TG_RULE.test(telegram) &&
      STR_RULE.test(firstName) &&
      STR_RULE.test(lastName)
    );
  }, [firstName, lastName, email, telegram, phone]);
  const focusInput = useCallback((inputRef): void => {
    if (inputRef && inputRef.current)
      inputRef.current.focus();
  }, []);

  const submitHandler = useCallback((): void => Keyboard.dismiss(), []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      onScroll={Keyboard.dismiss}
      scrollEventThrottle={16}
    >
      <KeyboardAvoidingView
        behavior={'position'}
        enabled
        keyboardVerticalOffset={96}
      >
        <Text style={styles.title}>
          Edit profile
        </Text>
        <UserPhoto/>
        <View style={styles.inputsContainer}>
          <ExtTextInput
            placeholder={'First Name'}
            onChangeText={setFirstName}
            value={firstName}
            containerStyle={styles.inputContainer}
            returnKeyType={'next'}
            onSubmitEditing={() => focusInput(lastNameInput)}
            error={firstNameError}
            onBlur={() => setFirstNameError(!STR_RULE.test(firstName))}
          />
          <ExtTextInput
            placeholder={'Last Name'}
            onChangeText={setLastName}
            value={lastName}
            containerStyle={styles.inputContainer}
            returnKeyType={'next'}
            ref={lastNameInput}
            onSubmitEditing={() => focusInput(phoneInput)}
            error={lastNameError}
            onBlur={() => setLastNameError(!STR_RULE.test(lastName))}
          />
          <ExtTextInput
            placeholder={'Phone'}
            onChangeText={setPhone}
            value={phone}
            keyboardType={'phone-pad'}
            containerStyle={styles.inputContainer}
            returnKeyType={'done'}
            ref={phoneInput}
            onSubmitEditing={() => focusInput(emailInput)}
            error={phoneError}
            onBlur={() => setPhoneError(!PHONE_RULE.test(phone))}
          />
          <ExtTextInput
            placeholder={'Email'}
            onChangeText={setEmail}
            value={email}
            keyboardType={'email-address'}
            containerStyle={styles.inputContainer}
            returnKeyType={'next'}
            ref={emailInput}
            onSubmitEditing={() => focusInput(telegramInput)}
            error={emailError}
            onBlur={() => setEmailError(!EMAIL_RULE.test(email))}
          />
          <ExtTextInput
            placeholder={'Telegram'}
            onChangeText={setTelegram}
            value={telegram}
            containerStyle={styles.inputContainer}
            extra={(
              <TouchableOpacity>
                <Text style={styles.connect}>Connect</Text>
              </TouchableOpacity>
            )}
            ref={telegramInput}
            error={telegramError}
            onBlur={() => setTelegramError(!TG_RULE.test(telegram))}
          />
        </View>
      </KeyboardAvoidingView>
      <SubmitButton
        containerStyle={styles.submitContainer}
        onPress={submitHandler}
        title={'Save'}
        disabled={!validate()}
      />
    </ScrollView>
  );
};

interface IStyle {
  container: ViewStyle,
  title: TextStyle,
  inputsContainer: ViewStyle,
  submitContainer: ViewStyle,
  connect: TextStyle,
  inputContainer: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
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
  inputContainer: {
    marginBottom: 18,
  },
  submitContainer: {
    marginLeft: 16,
    marginRight: 16,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  connect: {
    fontFamily: 'PT_Root_UI_Medium',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#0088CC',
  },
});

export default EditProfile;

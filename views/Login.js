import React from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import {login, register} from '../hooks/APIhooks';
import useSignUpForm from '../hooks/LoginHooks';

const Login = (props) => {
  const {handleUsernameChange, handleEmailChange, handleFullnameChange, handlePasswordChange, inputs} = useSignUpForm();
  const signInAsync = async () => {
    try {
      const user = await login(inputs);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('user', JSON.stringify(user.user));
      if (user.token) props.navigation.navigate('App');
    } catch (e) {
      console.log(e);
    }
  };
  const signUpAsync = async () => {
    try {
      const result = await register(inputs);
      console.log(result)
      if (!result.error) signInAsync();
      else MediaStreamError(result.error);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
      }} >
      {/*Login*/}
      <View>
        <Text>Login</Text>
        <View>
          <FormTextInput
            autoCapitalize='none'
            placeholder='username'
            onChangeText={handleUsernameChange}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='password'
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
          <Button title="Sign in!" onPress={signInAsync} />
        </View>
      </View >
      {/*register*/}
      <View>
        <Text>Register</Text>
        <View>
          <FormTextInput
            autoCapitalize='none'
            placeholder='username'
            onChangeText={handleUsernameChange}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='email'
            onChangeText={handleEmailChange}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='fullname'
            onChangeText={handleFullnameChange}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='password'
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
          <Button title="Sign up!" onPress={signUpAsync} />
        </View>
      </View >
    </View >
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
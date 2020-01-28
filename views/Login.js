import React from 'react';
import {AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
{/* is this really useless now? import FormTextInput from '../components/FormTextInput'; */}
import {login, register} from '../hooks/APIhooks';
import useSignUpForm from '../hooks/LoginHooks';
import {Container, Content, Form, Item, Input, Label, Text, Button} from 'native-base';

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
    <Container>
      <Content>
        {/*Login*/}
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Login</Text>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input
              autoCapitalize={'none'}
              onChangeText={handleUsernameChange}
            />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input
              autoCapitalize={'none'}
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
            />
          </Item>
          <Button onPress={signInAsync}>
            <Text>Sign in</Text>
          </Button>
        </Form>

        {/*Register*/}
        <Text style={{marginTop: 25, textAlign: 'center', fontWeight: 'bold'}}>Register</Text>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input
              autoCapitalize={'none'}
              onChangeText={handleUsernameChange}
            />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize={'none'}
              onChangeText={handleEmailChange}
            />
          </Item>
          <Item stackedLabel>
            <Label>Full name</Label>
            <Input
              autoCapitalize={'words'}
              onChangeText={handleFullnameChange}
            />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input
              autoCapitalize={'none'}
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
            />
          </Item>
          <Button onPress={signUpAsync}>
            <Text>Sign up</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
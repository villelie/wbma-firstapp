import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import {login, register} from '../hooks/APIhooks';
import useSignUpForm from '../hooks/LoginHooks';
import {Container, Content, Form, Item, Label, Text, Button} from 'native-base';

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
  let [formToggle, setFormToggle] = useState(true);
  const changeForm = () => setFormToggle(!formToggle)
  return (
    <Container>
      <Content>
        {/*Login*/}
        {formToggle &&
          <Form>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Login</Text>
            <Item stackedLabel>
              <Label>Username</Label>
              <FormTextInput
                autoCapitalize={'none'}
                value={inputs.username}
                onChangeText={handleUsernameChange}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <FormTextInput
                autoCapitalize={'none'}
                secureTextEntry={true}
                value={inputs.password}
                onChangeText={handlePasswordChange}
              />
            </Item>
            <Button full onPress={signInAsync}>
              <Text>Sign in!</Text>
            </Button>
            <Button transparent onPress={changeForm}>
              <Text>No account yet? Sign up!</Text>
            </Button>
          </Form>
        }
        {/*Register*/}
        {!formToggle &&
          <Form>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Register</Text>
            <Item stackedLabel>
              <Label>Username</Label>
              <FormTextInput
                autoCapitalize={'none'}
                value={inputs.username}
                onChangeText={handleUsernameChange}
              //onEndEditing={checkUsername}
              //error={errors.username}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <FormTextInput
                autoCapitalize={'none'}
                value={inputs.email}
                onChangeText={handleEmailChange}
              />
            </Item>
            <Item stackedLabel>
              <Label>Full name</Label>
              <FormTextInput
                autoCapitalize={'words'}
                value={inputs.fullname}
                onChangeText={handleFullnameChange}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <FormTextInput
                autoCapitalize={'none'}
                secureTextEntry={true}
                value={inputs.password}
                onChangeText={handlePasswordChange}
              />
            </Item>
            <Button full onPress={signUpAsync}>
              <Text>Sign up!</Text>
            </Button>
            <Button transparent onPress={changeForm}>
              <Text>Already registered? Sign in!</Text>
            </Button>
          </Form>
        }
      </Content>
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
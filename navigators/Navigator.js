import Home from '../views/Home';
import Profile from '../views/Profile';
import Upload from '../views/Upload';
import Single from '../views/Single';
import AuthLoading from '../views/AuthLoading';
import Login from '../views/Login';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {Icon} from 'native-base';

const TabNavigator = createBottomTabNavigator(
    {
        Home,
        Profile,
        Upload,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: () => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'home';
                } else if (routeName === 'Profile') {
                    iconName = 'person';
                } else if (routeName === 'Upload') {
                    iconName = 'beer';
                }

                // You can return any component that you like here!
                return <Icon
                    name={iconName}
                    size={25}
                />;
            },
        }),
    }
);

const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                headerMode: 'none', // this will hide the header
            },
        },
        Single: {
            screen: Single,
        },
        Logout: {
            screen: Login,
        },
    },
);

const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: StackNavigator,
        Auth: Login,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(Navigator);
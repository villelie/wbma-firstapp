import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile',
            },
        },
    },
    {
        initialRouteName: 'Home',
    },
);

const Navigator = createStackNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                headerMode: 'none',
            },
        },
        Single: {
            screen: Single,
        },
    },
);

export default createAppContainer(Navigator);
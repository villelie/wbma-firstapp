import Home from '../views/Home';
import Profile from '../views/Profile';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Navigator = createBottomTabNavigator(
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
        tabBarOptions: {
            scrollEnabled: true,
        },
    },
);

export default createAppContainer(Navigator);
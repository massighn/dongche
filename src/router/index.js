import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';
import GetStarted from '../screens/GetStarted';

const Navigator = createStackNavigator(Screens);

export default createAppContainer(
  createSwitchNavigator(
    {
      GetStarted: {screen: GetStarted},
      Navigator: Navigator,
    },
    {
      initialRouteName: 'GetStarted',
    },
  ),
);

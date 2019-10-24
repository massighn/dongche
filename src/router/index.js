import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

const Navigator = createStackNavigator(Screens, {
  initialRouteName: 'GetStarted',
});

export default createAppContainer(Navigator);

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screens from '../screens';

const Navigator = createStackNavigator(
  Screens,
  {
    initialRouteName: 'GetStarted',
  },
  {
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
);

export default createAppContainer(Navigator);

import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';

const width = Dimensions.get('window');

const GetStarted = ({navigation}) => {
  const {startStyle, textStyle, container} = styles;

  let animatedRoutate = new Animated.Value(0);

  spin = () => {
    Animated.timing(animatedRoutate, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  return (
    <ImageBackground
      source={require('../../assets/image/dongche.png')}
      style={container}>
      <Animated.Image
        source={require('../../assets/image/coin.png')}
        style={{
          width: 60,
          height: 60,
          resizeMode: 'contain',
          marginBottom: 280,
          transform: [
            {
              rotate: animatedRoutate.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
      <TouchableOpacity
        style={startStyle}
        onPress={() => {
          setTimeout(() => {
            navigation.navigate('DongScreen');
          }, 3000);
          spin();
        }}>
        <Text style={textStyle}>بزن بریم!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  startStyle: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#39819c',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    marginBottom: 50,
  },
  textStyle: {
    fontSize: 18,
    color: '#39819c',
    fontWeight: 'bold',
    fontFamily: 'IRANYekanWeb',
  },
});

GetStarted.navigationOptions = {
  header: null,
};

export default GetStarted;

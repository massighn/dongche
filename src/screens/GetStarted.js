import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window');

const GetStarted = ({navigation}) => {
  const {startStyle, textStyle, container} = styles;
  return (
    <ImageBackground
      source={require('../../assets/image/blue.png')}
      style={container}>
      <TouchableOpacity
        style={startStyle}
        onPress={() => {
          navigation.navigate('DongScreen');
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
    justifyContent: 'center',
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
    marginBottom: 100,
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

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window');
const height = Dimensions.get('window');

const GetStarted = ({navigation}) => {
  const {startStyle, textStyle, container} = styles;
  return (
    <ImageBackground
      source={require('../../asset/image/background.png')}
      style={container}>
      <TouchableOpacity
        style={startStyle}
        onPress={() => {
          navigation.navigate('DongScreen');
        }}>
        <Text style={textStyle}>شروع کنید</Text>
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
    backgroundColor: '#e9b5d2',
    borderWidth: 2,
    borderColor: '#393e46',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    marginTop: 400,
  },
  textStyle: {
    fontSize: 18,
  },
});

GetStarted.navigationOptions = {
  header: null,
};

export default GetStarted;

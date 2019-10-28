import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import ItemStore from '../redux/store/ItemStore';
import {validate} from '@babel/types';

const DongScreen = ({navigation, addItems, calculate, items}) => {
  const {
    textInputStyle,
    buttonStyleCalc,
    buttonStyleView,
    backGround,
    container,
    textButton,
  } = styles;
  const [price, setPrice] = useState('');
  const [person, setPerson] = useState('');
  const [groupname, setGroupname] = useState('');

  calculateDong = () => {
    calculate(parseFloat(price / person));
  };

  showResult = () => {
    addItems(groupname, price, person);
    calculateDong();
    navigation.navigate('ResultDongScreen', {
      price: price,
      groupname: groupname,
    });
  };

  return (
    <ImageBackground
      style={backGround}
      source={require('../../asset/image/blue2.png')}>
      <View style={container}>
        <TextInput
          style={textInputStyle}
          value={groupname}
          onChangeText={text => setGroupname(text)}
          placeholder={'اسم گروهمون'}
          placeholderTextColor="#39819c"
        />

        <TextInput
          style={textInputStyle}
          value={price}
          onChangeText={text => setPrice(text)}
          placeholder={'چندتومنه؟'}
          placeholderTextColor="#39819c"
          keyboardType={'numeric'}
        />

        <TextInput
          style={textInputStyle}
          value={person}
          onChangeText={text => setPerson(text)}
          placeholder={'چندنفریم؟'}
          placeholderTextColor="#39819c"
          keyboardType={'numeric'}
        />
      </View>

      <TouchableOpacity style={buttonStyleCalc} onPress={showResult}>
        <Text style={[textButton, {color: 'white'}]}>ببینیم چقدر میشه</Text>
      </TouchableOpacity>

      {items.length > 0 ? (
        <TouchableOpacity
          style={buttonStyleView}
          onPress={() => navigation.navigate('ResultDongScreen')}>
          <Text style={[textButton, {color: '#39819c'}]}>نمایش</Text>
        </TouchableOpacity>
      ) : null}
    </ImageBackground>
  );
};

DongScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#39819c',
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'IRANYekanweb',
  },
  buttonStyleView: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#39819c',
    borderRadius: 15,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  backGround: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 10,
    marginTop: 10,
  },
  textInputStyle: {
    fontSize: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: '#39819c',
    borderRadius: 15,
    width: 300,
    marginBottom: 10,
    //backgroundColor: 'white',
    //opacity: 0.7,
  },
  buttonStyleCalc: {
    borderRadius: 15,
    backgroundColor: '#39819c',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    calculate: payload => dispatch({type: 'CALCULATE', payload}),
    addItems: (groupname, price, person) =>
      dispatch({type: 'ADD_ITEM', payload: {groupname, price, person}}),
  };
};

const mapStateToProps = state => {
  return {
    titleResult: state.ResultReducer,
    items: state.ItemReducer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DongScreen);

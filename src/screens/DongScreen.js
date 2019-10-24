import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

const DongScreen = ({navigation, calcResult, addItems}) => {
  const {textStyle, textInputStyle, buttonStyle} = styles;
  const [price, setPrice] = useState('');
  const [person, setPerson] = useState('');
  const [groupname, setGroupname] = useState('');

  calculateDong = () => {
    calcResult(parseFloat(price / person));
  };

  showResult = () => {
    addItems({groupname, price, person});
    navigation.navigate('ResultDongScreen', {
      result: calculateDong(),
      price: price,
      groupname: groupname,
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginTop: 90}}>
        <Text style={textStyle}>نام گروه:</Text>
        <TextInput
          style={textInputStyle}
          value={groupname}
          onChangeText={text => setGroupname(text)}
        />

        <Text style={textStyle}>چندتومنه؟</Text>
        <TextInput
          style={textInputStyle}
          placeholder={'عدد وارد کن'}
          value={price}
          onChangeText={text => setPrice(text)}
          keyboardType="numeric"
        />

        <Text style={textStyle}>چند نفرین؟</Text>
        <TextInput
          style={textInputStyle}
          placeholder={'عدد وارد کن'}
          value={person}
          onChangeText={text => setPerson(text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <TouchableOpacity style={buttonStyle} onPress={showResult}>
          <Text style={textStyle}>ببینیم چقدر میشه</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textInputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    width: 300,
    marginBottom: 15,
  },
  buttonStyle: {
    borderRadius: 15,
    backgroundColor: 'pink',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    calcResult: payload => dispatch({type: 'CALCULATE', payload}),
    addItems: payload => dispatch({type: 'ADD_ITEM', payload}),
  };
};

const mapStateToProps = state => {
  return {
    titleResult: state.ResultReducer.result,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DongScreen);

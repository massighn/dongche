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

  showResult = () => {
    if (!groupname.trim() || !price.trim() || !person.trim()) {
      alert('err');
      return;
    }

    addItems(groupname, price, person);
    setPrice('');
    setPerson('');
    setGroupname('');
    navigation.navigate('ResultDongScreen');
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
    addItems: (groupname, price, person, result) =>
      dispatch({type: 'ADD_ITEM', payload: {groupname, price, person, result}}),
  };
};

const mapStateToProps = state => {
  return {
    items: state.ItemReducer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DongScreen);

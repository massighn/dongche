import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import '../props';
import {connect} from 'react-redux';
import images from '../images';

const DongScreen = ({navigation, addItems, items}) => {
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
  const [hasError, setHasError] = useState(false);

  showResult = () => {
    if (
      !groupname.trim() ||
      !price.trim() ||
      !person.trim() ||
      person < 2 ||
      price.length < 4
    ) {
      setHasError(true);
      return;
    }

    addItems(groupname, price, person);
    setPrice('');
    setPerson('');
    setGroupname('');
    setHasError(false);
    navigation.navigate('ResultDongScreen');
  };

  return (
    <ImageBackground style={backGround} source={images.backgroundDongScreen}>
      <View style={container}>
        <TextInput
          style={[
            textInputStyle,
            hasError && {borderBottomColor: 'red', borderBottomWidth: 2.5},
          ]}
          value={groupname}
          onChangeText={text => setGroupname(text)}
          placeholder={'اسم گروهمون:'}
          placeholderTextColor="#39819c"
        />

        <TextInput
          style={[
            textInputStyle,
            hasError && {borderBottomColor: 'red', borderBottomWidth: 2.5},
          ]}
          value={price.toPersian()}
          onChangeText={text => {
            const intText = parseInt(text.toEnglish());
            if (!text || (intText >= 0 && intText !== NaN)) setPrice(text);
            console.log(intText);
          }}
          placeholder={'چندتومنه؟'}
          placeholderTextColor="#39819c"
          keyboardType={'numeric'}
          maxLength={9}
        />

        <TextInput
          style={[
            textInputStyle,
            hasError && {borderBottomColor: 'red', borderBottomWidth: 2.5},
          ]}
          value={person.toPersian()}
          onChangeText={text => {
            const intText = parseInt(text.toEnglish());
            if (!text || (intText >= 0 && intText !== NaN)) setPerson(text);
          }}
          placeholder={'چندنفریم؟'}
          placeholderTextColor="#39819c"
          keyboardType={'numeric'}
          maxLength={3}
        />
      </View>

      <TouchableOpacity style={buttonStyleCalc} onPress={showResult}>
        <Text style={[textButton, {color: 'white'}]}>ببینیم چقدر میشه</Text>
      </TouchableOpacity>

      {items.length > 0 ? (
        <TouchableOpacity
          style={buttonStyleView}
          onPress={() => navigation.navigate('ResultDongScreen')}>
          <Text style={[textButton, {color: '#39819c'}]}>لیست</Text>
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
  headerLeft: null,
  title: 'محاسبه دونگمون',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Iranyekanwebregular',
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
    borderBottomColor: '#1e3f53',
    borderRadius: 15,
    width: 300,
    marginBottom: 10,
    textAlign: 'right',
  },
  buttonStyleCalc: {
    borderRadius: 15,
    backgroundColor: '#39819c',
    //backgroundColor: '#f4db27',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    addItems: (groupname, price, person, result, date) =>
      dispatch({
        type: 'ADD_ITEM',
        payload: {groupname, price, person, result, date},
      }),
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

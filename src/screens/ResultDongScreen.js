import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

const ResultDongScreen = ({navigation, items, deleteItem, result}) => {
  const {container, textGname, textPrice, textResult, buttonStyleBack} = styles;
  console.log(items);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={container}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={textGname}>{item.groupname}</Text>
                </View>
                <View>
                  <Text style={textResult}>{result}</Text>
                  <Text style={textPrice}>{item.price}</Text>
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Feather name="trash" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={buttonStyleBack}
          onPress={() => navigation.navigate('DongScreen')}>
          <Text style={{fontSize: 18, color: 'white'}}>جدید</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ResultDongScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#39819c',
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#39819c',
    width: 300,
    height: 100,
    marginTop: 15,
  },
  textGname: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'IRANYekanweb',
  },
  textResult: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'IRANYekanweb',
    //textAlign: 'center',
  },
  textPrice: {
    fontSize: 15,
    color: 'gray',
  },
  buttonStyleBack: {
    borderRadius: 15,
    backgroundColor: '#39819c',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    items: state.ItemReducer,
    result: state.ResultReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: payload => dispatch({type: 'DELETE_ITEM', payload}),
    calculate: payload => dispatch({type: 'CALCULATE', payload}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultDongScreen);

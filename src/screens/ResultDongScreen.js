import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';

const ResultDongScreen = ({navigation, items, titleResult, deleteItem}) => {
  const {container, textGname, textPrice, textResult} = styles;

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
                  <Text style={textResult}>{titleResult}</Text>
                  <Text style={textPrice}>{item.price}</Text>
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        //style={}
        onPress={() => navigation.navigate('DongScreen')}>
        <Text style={{color: '#39819c'}}>جدید</Text>
      </TouchableOpacity>
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
});

const mapStateToProps = state => {
  return {
    items: state.ItemReducer,
    titleResult: state.ResultReducer.result,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: payload => dispatch({type: 'DELETE_ITEM', payload}),
    calcResult: () => dispatch({type: 'CALCULATE'}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultDongScreen);

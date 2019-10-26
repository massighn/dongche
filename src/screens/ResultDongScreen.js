import React from 'react';
import {View, Text, FlatList, ImageBackground, StyleSheet} from 'react-native';
import Card from '../component/resultComponent';
import {connect} from 'react-redux';

const ResultDongScreen = ({navigation, result, items, deleteItem}) => {
  const price = navigation.getParam('price');
  const groupname = navigation.getParam('groupname');
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => {
          return (
            <Card
              groupname={groupname}
              priceDong={price}
              resultDong={result}
              onPressd={() => deleteItem(item.id)}
            />
          );
        }}
      />
    </View>
  );
};

ResultDongScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#39819c',
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    result: state.ResultReducer.result,
    items: state.ItemReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch({type: 'DELETE_ITEM', payload: id}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultDongScreen);

import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from '../component/resultComponent';
import {connect} from 'react-redux';

const ResultDongScreen = ({navigation, result, items, deleteItem}) => {
  const price = navigation.getParam('price');
  const groupname = navigation.getParam('groupname');
  console.log(items);
  return (
    <View>
      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item, i) => i.toString()}
          renderItem={() => {
            return (
              <Card
                groupname={groupname}
                priceDong={price}
                resultDong={result}
                onPressd={() => deleteItem()}
              />
            );
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    result: state.ResultReducer.result,
    items: state.ItemReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: payload => dispatch({type: 'DELETE_ITEM', payload}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultDongScreen);

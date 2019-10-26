import React from 'react';
import {View, Text, TouchableOpacity, idDong, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const resultComponenet = ({
  priceDong,
  resultDong,
  groupname,
  onPressd,
  items,
  navigation,
}) => {
  const {textDoStyle, textPrStyle, textGroupname, container} = styles;
  return (
    <View style={{alignItems: 'center'}}>
      <View style={container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={textGroupname}>{groupname}</Text>
          <Text style={textPrStyle}>{priceDong}</Text>
        </View>
        <Text style={textDoStyle}>{resultDong}</Text>
      </View>
      <TouchableOpacity onPress={onPressd}>
        <Text>حذف</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    width: 300,
    height: 100,
    margin: 20,
  },
  textPrStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDoStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  textGroupname: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: payload => dispatch({type: 'DELETE_ITEM', payload}),
    toggleItem: payload => dispatch({type: 'TOGGLE_ITEM', payload}),
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
)(resultComponenet);

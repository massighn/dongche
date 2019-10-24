import React from "react";
import { View, Text, TouchableOpacity, idDong, StyleSheet } from "react-native";
import { connect } from "react-redux";

const ResultComponenet = ({
  priceDong,
  resultDong,
  groupname,
  onPressd,
  items,
  navigation
}) => {
  const { textDoStyle, textPrStyle, textGroupname, container } = styles;
  //console.log(deleteItem());
  return (
    <View style={{ alignItems: "center" }}>
      <View style={container}>
        <Text style={textGroupname}>{groupname}</Text>
        <Text style={textPrStyle}>{priceDong}</Text>
        <Text style={textDoStyle}>{resultDong}</Text>
        <Text style={textDoStyle}>{idDong}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPressd}>
          <Text>حذف</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    width: 300,
    height: 100,
    margin: 20
  },
  textPrStyle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  textDoStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray"
  },
  textGroupname: {
    fontSize: 22,
    fontWeight: "bold",
    color: "blue"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: payload => dispatch({ type: "DELETE_ITEM", payload })
  };
};

const mapStateToProps = state => {
  return {
    items: state.ItemReducer.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultComponenet);

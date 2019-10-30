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
import '../props';
import {connect} from 'react-redux';

const ResultDongScreen = ({navigation, items, deleteItem}) => {
  const {
    backGround,
    container,
    textGname,
    textPrice,
    textResult,
    buttonStyleBack,
    deleteStyle,
  } = styles;
  //console.log(items);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{height: 400}}
        data={items}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => {
          console.log(item);
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={container}>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    //backgroundColor: '#1e3f53',
                    borderRadius: 15,
                  }}>
                  <Text style={textGname}>{item.groupname}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      fontFamily: 'IRANYekanWeb',
                    }}>
                    دونگ هر نفر:
                  </Text>
                  <Text style={textResult}>{item.result} تومان</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                  }}>
                  <Text>مبلغ کل:</Text>
                  <Text style={textPrice}>{item.price.toPersian()} تومان</Text>

                  <Text>تعداد:</Text>
                  <Text style={textPrice}>{item.person.toPersian()} نفر</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={deleteStyle}
                    onPress={() => deleteItem(item.id)}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      حذف
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
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
  backGround: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#1e3f53',
    width: 300,
    height: 110,
    marginTop: 15,
  },
  textGname: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'IRANYekanWeb',
    color: '#1e3f53',
  },
  textResult: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'IRANYekanWeb',
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
  deleteStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 50,
    height: 20,
    borderRadius: 5,
  },
});

const mapStateToProps = state => {
  return {
    items: state.ItemReducer,
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

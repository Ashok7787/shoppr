import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCartProductList} from '../CartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProductList = (props) => {
  useEffect(() => {
    const final = async () => {JSON.stringify(await AsyncStorage.getItem('cartId'))}
    
      if (final !== null) {
        final.cartId && props.getCartProductList(final.cartId);
      }
  }, []);
  return (
    <View>
      {!props.cart.storeCart ? (
        <Text>No Data</Text>
      ) : (
        <View>          
          <View><Text>new2</Text></View>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = ({cart}) => ({
  cart: cart.cart,
  contactId: cart.productInfo.contactId,
  shopName: cart.shopName,
  fetchingCartList: cart.fetchingCartList,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getCartProductList}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

const styles = StyleSheet.create({});

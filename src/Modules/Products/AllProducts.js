import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Button,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import externalStyle from '../../style/externalStyle';
import {getCategory} from '../Quiz/QuizAction';
import {getAllProducts} from './ProductAction';
import {base_url} from '../../Config/Auth';
import SingleProduct from './SingleProduct';
import Swiper from 'react-native-swiper';
import {addProductToCart} from './ProductAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AllProducts(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [colour, setColour] = useState('');
  useEffect(() => {
    props.getAllProducts();
    const value = JSON.stringify(AsyncStorage.getItem('cartId'));
    const final = JSON.parse(value);
    if (final !== null) {
      final.cartId && props.getAllProducts(final.cartId);
    }
    //  props.getCategory();
    props.getAllProducts();
  }, []);
  const addCart =  (productId, merchantDetailsId, shopLink) => {
    const value = JSON.stringify( AsyncStorage.getItem('cartId'));
    const str = shopLink;

    const final = JSON.parse(value);
    console.log(typeof value, value);
    const finalcartId = final !== null ? final.cartId : null;
    const finalshopName = final !== null ? final.shopName : null;
    let data = {
      //   productName:this.props.customer.length && this.props.customer[0].name || "",

      itemId: productId,
      cartId: str === finalshopName ? finalcartId : null,
      colour: colour,
      size: size,
      identifierType: '',
      quantity: quantity,
      storeTerminal: {
        storeId: merchantDetailsId,
      },
    };
    console.warn(data);
    props.addProductToCart(data, str);
  };
  //  console.warn(props.products);
  return (
    <>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View>
        {props.products.map(item => {
          return (
            <>
              <View
                style={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#b5f5ef',
                  padding: 10,
                  alignItems: 'center',
                  borderColor: 'orange',
                  borderWidth: 2,
                  height: Dimensions.get('window').height * 0.07,
                }}>
                <Text style={{fontSize: 24}}>{item.category || ''}</Text>
              </View>
              <Swiper containerStyle={styles.wrapper} 
             // showsButtons={true}
              >
                {item.products
                  .filter(
                    pdct => pdct.instockInd === true && pdct.openInd === true,
                  )
                  .map((prds, id) => {
                    return (
                      <View
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        key={id}>
                        <SingleProduct 
                        size={size}
                        colour={colour}
                        quantity={quantity}
                          item={prds}
                          isAdded={isAdded}
                          addCart={addCart}
                        />
                      </View>
                    );
                  })}
              </Swiper>
            </>
          );
        })}
      </View>
      {/* </ScrollView> */}
    </>
  );
}
const mapStateToProps = ({products, quiz}) => ({
  // category: quiz.category,
  products: products.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //  getCategory,
      addProductToCart,
      getAllProducts,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height * 0.5,
  },
});

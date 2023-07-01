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
import {getShopName, getCartProductList} from '../Cart/CartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrencySymbol from '../../Components/Elements/CurrencySymbol';

import {Picker} from '@react-native-picker/picker';
import {Card} from 'react-native-elements';

function AllProducts(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [colour, setColour] = useState('');
  useEffect(() => {
    props.getAllProducts();
    const final = async () => {
      JSON.stringify(await AsyncStorage.getItem('cartId'));
    };

    if (final !== null) {
      final.cartId && props.getCartProductList(final.cartId);
    }

    // return () => {
    //   // this now gets called when the component unmounts
    // };
  }, []);
  // useEffect( () => {
  // //  props.getShopName(window.location.pathname);
  //   const value = JSON.stringify( AsyncStorage.getItem('cartId'));
  //   const final = JSON.parse(value);
  //   if (final !== null) {
  //     final.cartId && props.getAllProducts(final.cartId);
  //   }

  // }, []);

  const addCart = async (productId, merchantDetailsId, shopLink) => {
    const value = JSON.stringify(await AsyncStorage.getItem('cartId'));
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
              <Swiper
                containerStyle={styles.wrapper}
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
                        {/* <SingleProduct
                          size={size}
                          setSize={setSize}
                          colour={colour}
                          setColour={setColour}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          item={prds}
                          isAdded={isAdded}
                          addCart={addCart}
                        /> */}
                        <View>
                          <Card containerStyle={styles.containerStyleC}>
                            <Text style={{fontSize: 24}}>
                              {prds.name || ''}
                            </Text>
                            {prds.imageId ? (
                              <Image
                                style={externalStyle.imagesize}
                                source={{
                                  uri: `${base_url}/image/${prds.imageId}`,
                                }}
                                alt={prds.imageId}
                              />
                            ) : (
                              <Text>Image Not Available</Text>
                            )}
                            <View>
                              {prds.discountedPrice === 0 ? (
                                <Text>{prds.price}</Text>
                              ) : (
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',

                                    width: Dimensions.get('window').width / 1.5,
                                  }}>
                                  <Text style={{fontSize: 15, color: 'black'}}>
                                    Price
                                  </Text>
                                  <CurrencySymbol
                                    currencyType={prds.currencyName}
                                  />
                                  <Text
                                    style={{
                                      textDecorationLine: 'line-through',
                                    }}>
                                    {prds.price}
                                  </Text>
                                  <CurrencySymbol
                                    currencyType={prds.currencyName}
                                  />
                                  <Text style={{color: 'black'}}>
                                    {prds.discountedPrice}
                                  </Text>
                                </View>
                              )}
                            </View>
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: 5,
                              }}>
                              <View
                                style={{
                                  borderWidth: 1.6,
                                  borderColor: 'orange',
                                  borderRadius: 4,
                                  margin: 2,
                                  width: Dimensions.get('window').width / 2.8,
                                  height:
                                    Dimensions.get('window').height * 0.06,
                                }}>
                                {prds.colourDTO &&
                                prds.colourDTO.length &&
                                prds.colourDTO[0].colour === '' ? (
                                  <Picker
                                    selectedValue={colour}
                                    style={{height: 30, width: 140}}
                                    onValueChange={(itemValue, itemIndex) =>
                                      setColour(itemValue)
                                    }>
                                    <Picker.Item
                                      label="No Option"
                                      value="No Option"
                                    />
                                  </Picker>
                                ) : (
                                  <Picker
                                    selectedValue={colour}
                                    style={{height: 30, width: 140}}
                                    onValueChange={(itemValue, itemIndex) =>
                                      setColour(itemValue)
                                    }>
                                    {prds.colourDTO &&
                                      prds.colourDTO.length &&
                                      prds.colourDTO.map(item => {
                                        return (
                                          <Picker.Item
                                            label={item.colour}
                                            value={item.colour}
                                          />
                                        );
                                      })}
                                  </Picker>
                                )}
                              </View>
                              <View
                                style={{
                                  borderWidth: 1.6,
                                  borderColor: 'orange',
                                  borderRadius: 4,
                                  margin: 2,
                                  width: Dimensions.get('window').width / 2.8,
                                  height:
                                    Dimensions.get('window').height * 0.06,
                                }}>
                                {prds.sizeDTO &&
                                prds.sizeDTO.length &&
                                prds.sizeDTO[0].productSize === '' ? (
                                  <Picker
                                    selectedValue={size}
                                    style={{height: 30, width: 140}}
                                    onValueChange={(itemValue, itemIndex) =>
                                      setSize(itemValue)
                                    }>
                                    <Picker.Item
                                      label="No Option"
                                      value="No Option"
                                    />
                                  </Picker>
                                ) : (
                                  <Picker
                                    selectedValue={size}
                                    style={{height: 30, width: 140}}
                                    onValueChange={(itemValue, itemIndex) =>
                                      setSize(itemValue)
                                    }>
                                    {prds.sizeDTO &&
                                      prds.sizeDTO.length &&
                                      prds.sizeDTO.map(item => {
                                        return (
                                          <Picker.Item
                                            label={item.productSize}
                                            value={item.productSize}
                                          />
                                        );
                                      })}
                                  </Picker>
                                )}
                              </View>
                            </View>
                            {/* {isAdded ? (
            <Button
              title="Remove to cart"
              // onPress={() => handleRemoveFromCart(item)}
            />
          ) : ( */}
                            <Button
                              title="Add to cart"
                              onPress={() => {
                                addCart(
                                  prds.productId,
                                  prds.merchantDetailsId,
                                  prds.shopLink,
                                );
                              }}
                            />
                            {/* )} */}
                          </Card>
                        </View>
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
      getShopName,
      addProductToCart,
      getAllProducts,
      getCartProductList,
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

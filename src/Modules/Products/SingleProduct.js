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
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import externalStyle from '../../style/externalStyle';
import {base_url} from '../../Config/Auth';
import {Card} from 'react-native-elements';
import {addProductToCart} from './ProductAction';

function SingleProduct(props) {
  useEffect(() => {}, []);
  const [isAdded, setIsAdded] = useState(props.isAdded);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [colour, setColour] = useState('');
  const itemId = props.item.productId;

  const addCart = (productId, merchantDetailsId) => {
    // const value = localStorage.getItem("cartId");
    // const shopName = this.props.shopName.shopLink;
    // const str = shopName && shopName.replace(/ +/g, "");
    // const finalstr=`/${str}/home`
    //console.log(value);
    // const final = JSON.parse(value);
    // const finalcartId = final !== null ? final.cartId : null;
    // const finalshopName = final !== null ? final.shopName : null;
    setSize();
    setQuantity();
    const cartId = store.getState('cartId');
    props.addProductToCart({
      cartId: cartId,
      colour: colour,
      identifierType: '',
      itemId,
      quantity: quantity,
      size: size,
      storeTerminal: {storeId: props.item.merchantDetailsId},
    });
  };
  return (
    <>
      <View>
        <Card containerStyle={styles.containerStyleC}>
          <Text style={{fontSize: 24}}>{props.item.name || ''}</Text>
          {props.item.imageId ? (
            <Image
              style={externalStyle.imagesize}
              source={{uri: `${base_url}/image/${props.item.imageId}`}}
              alt={props.item.imageId}
            />
          ) : (
            <Text>Image Not Available</Text>
          )}
          <View>
            {props.item.discountedPrice === 0 ? (
              <Text>{props.item.price}</Text>
            ) : (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent:'space-evenly',

                  width: Dimensions.get('window').width / 1.5,
                }}>
                <Text style={{fontSize: 15,color:'black'}}>Price</Text>
                <Text style={{textDecorationLine: 'line-through'}}>
                  {props.item.price}
                </Text>
                <Text style={{color:'black'}}>{props.item.discountedPrice}</Text>
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
                height: Dimensions.get('window').height * 0.06,
              }}>
              {props.item.colourDTO &&
              props.item.colourDTO.length &&
              props.item.colourDTO[0].colour === '' ? (
                <Picker
                  selectedValue={colour}
                  style={{height: 30, width: 140}}
                  onValueChange={(itemValue, itemIndex) =>
                    setColour(itemValue)
                  }>
                  <Picker.Item label="No Option" value="No Option" />
                </Picker>
              ) : (
                <Picker
                  selectedValue={colour}
                  style={{height: 30, width: 140}}
                  onValueChange={(itemValue, itemIndex) =>
                    setColour(itemValue)
                  }>
                  {props.item.colourDTO &&
                    props.item.colourDTO.length &&
                    props.item.colourDTO.map(item => {
                      return (
                        <Picker.Item label={item.colour} value={item.colour} />
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
                height: Dimensions.get('window').height * 0.06,
              }}>
              {props.item.sizeDTO &&
              props.item.sizeDTO.length &&
              props.item.sizeDTO[0].productSize === '' ? (
                <Picker
                  selectedValue={size}
                  style={{height: 30, width: 140}}
                  onValueChange={(itemValue, itemIndex) => setSize(itemValue)}>
                  <Picker.Item label="No Option" value="No Option" />
                </Picker>
              ) : (
                <Picker
                  selectedValue={size}
                  style={{height: 30, width: 140}}
                  onValueChange={(itemValue, itemIndex) => setSize(itemValue)}>
                  {props.item.sizeDTO &&
                    props.item.sizeDTO.length &&
                    props.item.sizeDTO.map(item => {
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
          {isAdded ? (
            <Button
              title="Remove to cart"
              // onPress={() => handleRemoveFromCart(item)}
            />
          ) : (
            <Button title="Add to cart" onPress={() => addCart()} />
          )}
        </Card>
      </View>
    </>
  );
}
const mapStateToProps = ({products, quiz}) => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({addProductToCart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
const styles = StyleSheet.create({
  containerStyleC: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.4,
    elevation: 4,
    padding: 10,
    // margin: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6949FD',
    shadowOpacity: 0.2,
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height * 0.4,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
});

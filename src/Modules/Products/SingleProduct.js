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
    props.addProductToCart({
      cartId: '1600',
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
          <Image
            style={externalStyle.imagesize}
            source={{uri: `${base_url}/image/${props.item.imageId}`}}
            alt={props.item.imageId}
          />

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
    borderWidth: 1.5,
    elevation: 4,
    padding: 10,
    // margin: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6949FD',
    shadowOpacity: 0.2,
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height * 0.42,
  },
});

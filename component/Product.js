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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';
const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if(result.length){
      setIsAdded(true)
    }else{
      setIsAdded(false)
    }
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach(element => {
    //     if (element.name === item.name) {
    //       setIsAdded(true);
    //     }
    //   });
    // }
  }, [cartItems]);
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove to cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;

import React, {useRef, useEffect, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Badge} from 'react-native-elements';
import Product from './Product';
import {getProductList} from './ProductAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const ProductWrapper = (props) => {
 

  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    // setCartItems(cardData.length);
    getProductList();
  }, []);
  // const products = [
  //   {
  //     name: 'samsung',
  //     color: 'white',
  //     price: '12000',
  //     image:
  //       'https://www.reliancedigital.in/medias/Samsung-A14-5G-Mobile-Phone-493664920-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTUwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDEzLzk5NTE1NjExMjE4MjIuanBnfDcyOTYyNGQzYzJlNzRhY2QyMDc0ODQ0MDFjNGZjNmU2YjEzNjA1NTcyZjA4OWJkNTViODE1MWMzN2U3MmU0M2Q',
  //   },
  //   {
  //     name: 'Vivo',
  //     color: 'black',
  //     price: '42000',
  //     image: 'https://cdn1.smartprix.com/rx-i9lW2ZbX5-w1200-h1200/9lW2ZbX5.jpg',
  //   },
  //   {
  //     name: 'Oppo',
  //     color: 'red',
  //     price: '22000',
  //     image:
  //       'https://www.thechennaimobiles.com/image/cache/catalog/140375-600x600.jpg',
  //   },
  //   {
  //     name: 'Applo',
  //     color: 'gray',
  //     price: '102000',
  //     image: 'https://cdn1.smartprix.com/rx-iVyp4t2Vm-w1200-h1200/Vyp4t2Vm.jpg',
  //   },
  //   {
  //     name: 'samsung',
  //     color: 'white',
  //     price: '12000',
  //     image:
  //       'https://www.reliancedigital.in/medias/Samsung-A14-5G-Mobile-Phone-493664920-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTUwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDEzLzk5NTE1NjExMjE4MjIuanBnfDcyOTYyNGQzYzJlNzRhY2QyMDc0ODQ0MDFjNGZjNmU2YjEzNjA1NTcyZjA4OWJkNTViODE1MWMzN2U3MmU0M2Q',
  //   },
  //   {
  //     name: 'Vivo',
  //     color: 'black',
  //     price: '42000',
  //     image: 'https://cdn1.smartprix.com/rx-i9lW2ZbX5-w1200-h1200/9lW2ZbX5.jpg',
  //   },
  //   {
  //     name: 'Oppo',
  //     color: 'red',
  //     price: '22000',
  //     image:
  //       'https://www.thechennaimobiles.com/image/cache/catalog/140375-600x600.jpg',
  //   },
  //   {
  //     name: 'Applo',
  //     color: 'gray',
  //     price: '102000',
  //     image: 'https://cdn1.smartprix.com/rx-iVyp4t2Vm-w1200-h1200/Vyp4t2Vm.jpg',
  //   },
  // ];
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <View style={styles.container}>
          {/* <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        /> */}
          {/* <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text> */}
          <Button
            title="Go to user list"
            onPress={() => navigation.navigate('User')}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: 'orange',
              padding: 10,
            }}>
            {/* <Button title="Open" onPress={() => drawer.current.openDrawer()} /> */}

            <Avatar
              rounded
              size="large"
              onPress={() => drawer.current.openDrawer()}
              source={{
                uri: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Allu-Arjun-3.jpg?impolicy=Medium_Widthonly&w=1280&h=900',
              }}
            />

            <View style={{padding: 10}}>
              <Icon name="shopping-cart" size={30} color="black" />
              <Badge
                size="large"
                value={cartItems}
                containerStyle={{position: 'absolute', top: -4, right: -4}}
              />
            </View>
            {/* <Text style={{fontSize: 30, padding: 10}}>{cartItems}</Text> */}
          </View>

          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {props.products.map(item => (
              <Product item={item} />
            ))}
          </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    </>
  );
};


const mapStateToProps = ({product}) => ({
  products: product.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProductList,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    //  justifyContent: 'center',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
import React from 'react';
import AllProducts from '../Products/AllProducts';
import MainHeader from '../../Navigation/MainHeader';
import CategoryHeader from '../Products/Category/CategoryHeader';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import HomePageData from './HomePageData';

function NewHome() {
  return (
    <>
     <StatusBar backgroundColor={'#f0aa4f'} barStyle="light-content" />
   
    <View style={{
      flex:1 ,
      marginBottom:0     
    }}>
      <MainHeader />

      <CategoryHeader />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{
          padding: 10        
        }}>
          <HomePageData />
        </View>
        <View style={{
          padding: 10        
        }}>
          <AllProducts />
        </View>
      </ScrollView>
    </View>
    </>
  );
}

export default NewHome;

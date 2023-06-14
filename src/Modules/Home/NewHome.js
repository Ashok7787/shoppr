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
import LogInForm from './LogInForm';

function NewHome() {
  return (
    <>
      <StatusBar backgroundColor={'#f0aa4f'} barStyle="light-content" />

      <View
        style={{
          flex: 1,
          marginBottom: 0,
        }}>
        <View>
          <MainHeader />
        </View>

        <View
        style=
        {{
         
          height: Dimensions.get('window').height * 0.2,
        }}
        >
          <CategoryHeader />
        </View>

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View
            style={{
              padding: 10,
            }}>
            <HomePageData />
          </View>
          <View>
            <AllProducts />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default NewHome;

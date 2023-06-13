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
import {getHomePageData} from '../Products/ProductAction';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import externalStyle from '../../style/externalStyle';
import {base_url} from '../../Config/Auth';
import { useNavigation } from '@react-navigation/native';
function HomePageData(props) {
  const navigation = useNavigation();
  useEffect(() => {
    //  props.getCategory();
    props.getHomePageData();
  }, []);
  const homePage = props.homePage;
  return (
    <>
      <View
        style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View
          style={{
            padding: 10,
          }}>
          <Image
            style={styles.imagesize}
            source={{uri: `${base_url}/image/${homePage.imageId}`}}
            alt={homePage.imageId}
          />
          <View
            style={{
              padding: 10,
            }}>
            <Button
              title="Create your Webstore"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
          <View
            style={{
              padding: 10,
            }}>
            <Button
              title="Log In"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <Image
            style={styles.imagesize}
            source={{uri: `${base_url}/image/${homePage.imageId2}`}}
            alt={homePage.imageId2}
          />
          <Button
            title="Browse Categories"
            //  onPress={() => addCart()}
          />
        </View>
        <Text style={{fontSize: 30, color: 'blue'}}>
          {homePage.heading1 || ''}
        </Text>
        <Card style={styles.containerStyleH}>
          <Text style={{fontSize: 15, color: 'blue'}}>
            {homePage.text1 || ''}
          </Text>
        </Card>

        <Text style={{fontSize: 30, color: 'blue'}}>
          {homePage.heading2 || ''}
        </Text>
        <Card style={styles.containerStyleH}>
          <Text style={{fontSize: 15, color: 'blue'}}>
            {homePage.text2 || ''}
          </Text>
        </Card>

        <Text style={{fontSize: 30, color: 'blue'}}>
          {homePage.heading3 || ''}
        </Text>
        <Card style={styles.containerStyleH}>
          {/* <Image
            style={styles.imagesize}
            source={{uri: `${base_url}/image/${homePage.imageId3}`}}
            alt={homePage.imageId3}
          /> */}
          <Text style={{fontSize: 15, color: 'blue'}}>
            {homePage.text3 || ''}
          </Text>
        </Card>
      </View>
    </>
  );
}
const mapStateToProps = ({products, quiz}) => ({
  homePage: products.homePage,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getHomePageData,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomePageData);
const styles = StyleSheet.create({
  containerStyleH: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    elevation: 4,
    padding: 10,
    shadowColor: '#6949FD',
    shadowOpacity: 0.2,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height * 0.5,
  },
  titleText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'red',
  },
  imagesize: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height * 0.3,
  },
});

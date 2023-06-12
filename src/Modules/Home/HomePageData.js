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
function HomePageData(props) {
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
        <Text style={{fontSize: 30, color: 'blue'}}>
          {homePage.heading1 || ''}
        </Text>
        <Card style={styles.containerStyleH}>
          <Image
            style={styles.imagesize}
            source={{uri: `${base_url}/image/${homePage.imageId}`}}
            alt={homePage.imageId}
          />
          <Text style={{fontSize: 15, color: 'blue'}}>
            {homePage.text1 || ''}
          </Text>
        </Card>

        <Text style={{fontSize: 30, color: 'blue'}}>
          {homePage.heading2 || ''}
        </Text>
        <Card style={styles.containerStyleH}>
          <Image
            style={styles.imagesize}
            source={{uri: `${base_url}/image/${homePage.imageId2}`}}
            alt={homePage.imageId2}
          />
          <Text style={{fontSize: 15, color: 'blue'}}>
            {homePage.text2 || ''}
          </Text>
        </Card>

        <Text style={{fontSize: 30, color: 'blue'}}>
          {homePage.heading3 || ''}
        </Text>
        <Card style={styles.containerStyleH}>
          <Image
            style={styles.imagesize}
            source={{uri: `${base_url}/image/${homePage.imageId3}`}}
            alt={homePage.imageId3}
          />
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

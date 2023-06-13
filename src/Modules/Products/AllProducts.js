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
import { base_url } from '../../Config/Auth';
import SingleProduct from './SingleProduct';
import Swiper from 'react-native-swiper'
function AllProducts(props) {
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    //  props.getCategory();
    props.getAllProducts();
  }, []);
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
                }}
                >
                <Text style={{fontSize: 24}}>{item.category || ''}</Text>
               
              </View>
              <Swiper containerStyle={styles.wrapper} showsButtons={true}>
              {item.products.filter(
                    pdct => pdct.instockInd === true && pdct.openInd === true,
                  )
                  .map(prds => {
                    return (
                      <View style={{justifyContent: 'center',
                      alignItems: 'center',}}>
                        <SingleProduct item={prds} isAdded={isAdded}/>
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
  
})
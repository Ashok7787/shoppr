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
import {Avatar} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import externalStyle from '../../../style/externalStyle';
import {getAllProducts} from '../ProductAction';
import {Card} from 'react-native-elements';
function AllProducts(props) {
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    //  props.getCategory();
    props.getAllProducts();
  }, []);
  //  console.warn(props.products);
  return (
    <>
      <View>
        <ScrollView horizontal={true}>
          {props.products.map((item,id) => {
            return (
              <>
                <View key={id}>
                  <Card containerStyle={styles.containerStyleC}>
                    <View 
                    style={{
                      marginTop:-40
                    }}
                    >
                      <Avatar.Image
                        size={70}
                        source={{
                          uri: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Allu-Arjun-3.jpg?impolicy=Medium_Widthonly&w=1280&h=900',
                        }}
                        // source={require('../assets/avatar.png')}
                      />
                    </View>

                    <Text style={{fontSize: 15}}>{item.category || ''}</Text>
                  </Card>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
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
  containerStyleC: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    marginLeft: 5,
    elevation: 4,
    marginTop:Dimensions.get('window').height * 0.04,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height * 0.15,
    shadowColor: '#6949FD',
    shadowOpacity: 0.2,
    backgroundColor: '#b0f5ae',
  },
});

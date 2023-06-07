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
import { Card } from 'react-native-elements';

function SingleProduct(props) {
    const [isAdded, setIsAdded] = useState(props.isAdded);
  return (
    <>
      <View >
      <Card containerStyle={styles.containerStyleC}>
        <Text style={{fontSize: 24}}>{props.item.name || ''}</Text>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: `${base_url}/image/${props.item.imageId}`}}
          alt={props.item.imageId}
        />

        {isAdded ? (
          <Button
            title="Remove to cart"
            // onPress={() => handleRemoveFromCart(item)}
          />
        ) : (
          <Button
            title="Add to cart"
            // onPress={() => handleAddToCart(item)}
          />
        )}
        </Card>
      </View>
    </>
  );
}
const mapStateToProps = ({products, quiz}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
const styles = StyleSheet.create({
  containerStyleC: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1.5,   
    elevation: 4,padding:10,
    height: 50,
    width:100,
    shadowColor: '#6949FD',
    shadowOpacity: 0.2,
    width: Dimensions.get('window').width / 1.09,
    height: Dimensions.get('window').height * 0.3,}
});

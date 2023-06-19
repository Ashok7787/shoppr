import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const Payment = (props) => {
  useEffect(() => {
   
  }, []);
  return (
    <View>
      <Text>Payment</Text>
    </View>
  )
}
const mapStateToProps = ({cart}) => ({
 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Payment);


const styles = StyleSheet.create({})
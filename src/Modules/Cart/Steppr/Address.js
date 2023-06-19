import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const Address = (props) => {
  useEffect(() => {
   
  }, []);
  return (
    <View>
      <Text>Address</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Address);
 

const styles = StyleSheet.create({})
import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './Product/ProductAction';

function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.reducer)
  useEffect(()=>{
    // dispatch(getUserList())
  },[])
  console.warn("in component",userList);
  return (
    <View styles={styles.container}>
        <Text>User list</Text>
    </View>
  )
}

export default UserList;
const styles = StyleSheet.create({
    container: {
      flex: 1,     
    }
  });
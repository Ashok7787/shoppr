import React from 'react'
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

function UserList() {
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
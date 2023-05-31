import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Header = () => {


  return (


    <View
      styles={styles.container}
    >
      <Text style={{ fontSize: 30 }}>Header</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Header;

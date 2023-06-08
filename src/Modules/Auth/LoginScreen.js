import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import externalStyle from '../../style/externalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginScreen extends Component {
  state = {
    username: 'sushil@tekorero.com',
    password: 'Orange123$',
  };

  handleLogin = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#f0aa4f'} barStyle="light-content" />
        {/* Container start */}
        <ScrollView
          style={{flex: 1, backgroundColor: '#FFFFFF'}}
          showsVerticalScrollIndicator={false}>
          {/* Logo View */}
          <ImageBackground
            source={require('../../../assets/images/home.png')}
            style={{
              height: Dimensions.get('window').height / 2.3,
              backgroundColor: '#e6eff5',
            }}>
            {/* <View >
              <Image
                style={externalStyle.logoLP}
               // source={require('../../../assets/images/logo.png')}
              />
            </View> */}
          </ImageBackground>
          {/* Bottom View */}
          <View style={externalStyle.bottomViewLP}>
            {/* Welcome View */}
            <View>
              <View style={styles.downContainer}>
                <MaterialCommunityIcons name="cart" color="black" size={100} />
                <Text
                  style={{
                    fontSize: 50,
                    color: 'black',
                    alignSelf: 'center',
                    fontFamily: 'roboto',
                  }}
                  // style={externalStyle.welcomeLP}
                >
                  Shoppr
                </Text>
              </View>
              {/* Login Button */}
              <View
                style={{
                  height: Dimensions.get('window').height * 0.44,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  title={'Login with Facebook'}
                  titleStyle={externalStyle.titleStyleLB}
                  containerStyle={externalStyle.containerStyleLB}
                  buttonStyle={externalStyle.buttonStyleLBB}
                  onPress={() => this.handleLogin()}
                />
                <Button
                  title={'Login with Google'}
                  titleStyle={externalStyle.titleStyleLB}
                  containerStyle={externalStyle.containerStyleLB}
                  buttonStyle={externalStyle.buttonStyleLBG}
                  onPress={() => this.handleLogin()}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  downContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 35,
    marginTop: '6%',
  },
});

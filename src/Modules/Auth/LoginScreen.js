import React, { Component } from 'react';
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
        <StatusBar backgroundColor={'#6949FD'} barStyle="light-content" />
        {/* Container start */}
        <ScrollView
          style={{flex: 1, backgroundColor: '#FFFFFF'}}
          showsVerticalScrollIndicator={false}>
          {/* Logo View */}
          <ImageBackground
            style={{
              height: Dimensions.get('window').height / 2.5,
              backgroundColor: '#6949FD',
            }}>
            <View >
              <Image
                style={externalStyle.logoLP}
               // source={require('../../../assets/images/logo.png')}
              />
            </View>
          </ImageBackground>
          {/* Bottom View */}
          <View style={externalStyle.bottomViewLP}>
            {/* Welcome View */}
            <View>
              <Text style={externalStyle.welcomeLP}>Welcome</Text>
              {/* Login Button */}
              <View
                style={{
                  height: 'auto',
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


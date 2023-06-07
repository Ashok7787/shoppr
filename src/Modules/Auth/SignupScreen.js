import React from 'react';
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
import { Input, Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = ({ props }) => {

    const navigation = useNavigation();

    return (
        <>
            <StatusBar backgroundColor={'#6949FD'} barStyle='light-content' />
            {/* Container start */}
            <ScrollView
                style={{ flex: 1, backgroundColor: '#FFFFFF' }}
                showsVerticalScrollIndicator={false}
            >

                {/* Logo View */}
                <ImageBackground
                    style={{
                        height: Dimensions.get('window').height / 3.5,
                        backgroundColor: '#6949FD'
                    }}
                >
                    <View style={styles.logoView}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/images/logo.png')}
                        />
                    </View>
                </ImageBackground>

                {/* Bottom View */}
                <View style={styles.bottomView}>

                    {/* Welcome View */}
                    <View style={{ padding: 28 }}>

                        {/* Form View */}
                        <View style={{ marginTop: 5 }}>
                            <Input
                                label="Email"
                                placeholder='Email Address'
                                inputContainerStyle={{ borderBottomColor: '#6949FD' }}
                              //  leftIcon={{ type: 'font-awesome', name: 'envelope', size: 24 }}
                            />

                            <Input
                                label="Password"
                                placeholder='Password'
                                secureTextEntry={true}
                                inputContainerStyle={{ borderBottomColor: '#6949FD' }}
                              //  leftIcon={{ type: 'font-awesome', name: 'unlock-alt', size: 30 }}
                            />

                            <Input
                                label="Confirm Password"
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                                inputContainerStyle={{ borderBottomColor: '#6949FD' }}
                              //  leftIcon={{ type: 'font-awesome', name: 'lock', size: 30 }}
                            />
                        </View>

                        {/* Signup Button */}
                        <View
                            style={{
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                title={'Sign Up'}
                                titleStyle={{
                                    color: '#FFFFFF',
                                    letterSpacing: 1,
                                    //textTransform: 'uppercase',
                                    fontSize: 19,
                                    fontFamily: 'roboto',
                                }}
                                containerStyle={{
                                    alignSelf: 'center',
                                    width: Dimensions.get('window').width / 1.7,
                                }}
                                buttonStyle={{
                                    backgroundColor: '#6949FD',
                                    borderRadius: 20,
                                }}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', color: '#000000', marginTop: '7%' }}>
                                or Signup with
                            </Text>

                            {/* Social Buttons View */}
                            <View style={styles.buttonFacebook}>
                                <Button
                                    title={'Register with Facebook'}
                                    containerStyle={{
                                        width: 220,
                                        marginHorizontal: 50,
                                        marginVertical: 10,
                                    }}
                                    // icon={{
                                    //     name: 'facebook',
                                    //     type: 'font-awesome',
                                    //     size: 15,
                                    //     color: 'white',
                                    // }}
                                />
                            </View>

                            <View style={styles.buttonGoogle}>
                                <Button
                                    title={'Register with Google'}
                                    buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                                    containerStyle={{
                                        width: 220,
                                        marginHorizontal: 50,
                                        marginVertical: 10,
                                    }}
                                    // icon={{
                                    //     name: 'google',
                                    //     type: 'font-awesome',
                                    //     size: 15,
                                    //     color: 'white',
                                    // }}
                                />
                            </View>

                        </View>

                        {/* AlreadyUser View */}
                        <Text style={{ color: '#000000', marginTop: 9, textAlign: 'center' }}>Already have an account?
                            <Text
                                style={styles.already}
                                onPress={() => navigation.navigate('Login')}
                            >
                                Signin now
                            </Text>
                        </Text>

                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    logo: {
        width: 260,
        height: 250,
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#FFFFFF',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    welcome: {
        color: '#6949FD',
        fontSize: 30,
        fontFamily: 'roboto',
    },
    register: {
        color: '#6949FD',
        fontSize: 15,
        fontFamily: 'UbuntuMono-BoldItalic',
    },
    socialLoginButtons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly',
    },
    buttonFacebook: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonGoogle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    already: {
        color: '#6949FD',
        fontSize: 15,
        fontFamily: 'UbuntuMono-BoldItalic',
    },
});
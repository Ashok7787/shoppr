import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Drawer } from 'react-native-paper';
import { Avatar, Image } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

function AppNavigator(props) {

    const navigation = useNavigation();

    const [active, setActive] = React.useState('');

    return (
        <>
            <View style={{ marginLeft: '5%' }}>
                <Avatar
                    size={38}
                    rounded
                  //  icon={{ name: 'user', type: 'font-awesome' }}
                    containerStyle={{ backgroundColor: '#32167C' }}
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'roboto', marginTop: '1%', marginLeft: 10 }}>
                Oystein
            </Text>

            <View style={{ marginTop: '10%' }}>
                <Drawer.Section>
                    <Drawer.Item
                        // icon={({ color, size }) => (
                        //     <Icon
                        //         name="home"
                        //         size={17}
                        //         color="#6949FD"
                        //     />
                        // )}
                        label="Home"
                        active={active === 'first'}
                        onPress={() => setActive('first')}
                    />
                    <Drawer.Item
                        // icon={({ color, size }) => (
                        //     <Icon
                        //         name="puzzle-piece"
                        //         size={17}
                        //         color="#6949FD"
                        //     />
                        // )}
                        label="Quiz"
                        active={active === 'second'}
                        onPress={() => setActive('second')}
                    />
                </Drawer.Section>
            </View>

            <View
                style={{
                    marginTop: '165%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />

            <View style={{ flexDirection: 'row' }}>
                {/* <Icon
                    name='sign-out-alt'
                    size={17}
                    color='#000000'
                    style={{
                        marginTop: '10%',
                        marginLeft: '5%',
                    }}
                /> */}
                <Text
                    style={{
                        color: '#000000',
                        fontSize: 15,
                        fontFamily: 'roboto',
                        marginTop: '10%',
                        marginLeft: '5%',
                        //textTransform: 'uppercase',
                        letterSpacing: 1,
                    }}
                    onPress={() => navigation.navigate('Login')}
                >
                    Log Out
                </Text>
            </View>
        </>
    );
}

export default AppNavigator;

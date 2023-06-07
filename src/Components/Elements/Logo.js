import React from "react";
//import { Icon, Avatar, Image } from 'react-native-elements';
import { Text, StyleSheet, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';

function Logo(props) {
    // //console.log("inside logo", props.user);
    // const navigation = useNavigation();

    return (
        <View>
            <Avatar
                size={38}
                rounded
              //  icon={{ name: 'user', type: 'font-awesome' }}
                containerStyle={{ backgroundColor: '#32167C' }}
                // onPress={() => navigation.openDrawer()}
            />
        </View>
    );
}

export default Logo;
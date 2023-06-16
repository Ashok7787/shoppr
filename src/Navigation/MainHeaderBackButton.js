import React from 'react';
import { View, Button, Text } from 'react-native';
//import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import OpportunityStages from '../Module/Opportunity/Child/OpportunityDetails/OpportunityStages';

function MainHeaderBackbutton(props) {

    function onhandleClick() { }

    return (
        <View
            style={{
                justifyContent: 'space-between',
                border: '5px solid green',
                backgroundColor: 'white',
                height: '8%',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: '1%',
                }}>
                {props.onhandleBackClick && (
                    <TouchableOpacity>
                        {/* <Icon
                            name="arrowleft"
                            size={28}
                            containerStyle={{ marginTop: '25%' }}
                            type="antdesign"
                            color="black"
                            onPress={
                                props.onhandleBackClick
                                    ? props.onhandleBackClick
                                    : onhandleClick
                            }
                        /> */}
                    </TouchableOpacity>
                )}

                <Text
                    style={{
                        marginTop: '2.5%',
                        fontSize: 22,
                        fontFamily: 'UbuntuMono-BoldItalic',
                        marginLeft: '2%',
                        color: 'black',
                    }}>
                    {props.headerText || ''}
                </Text>
                {/* {props.OppportunityStagesShow && <OpportunityStages />} */}
            </View>
        </View>
    );
}
export default MainHeaderBackbutton;

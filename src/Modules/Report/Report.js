import React, {useEffect} from 'react';
import {View,ScrollView } from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-paper';
import {bindActionCreators} from 'redux';
import {Card, Input, Button, Text,withTheme} from 'react-native-elements';
import MainHeader from '../.././Navigation/MainHeader';
import externalStyle from '../../style/externalStyle';
import { addBugReport } from './ReportAction';

function Report(props) { 
 
  
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{          
          description: "",        
          quizHostId: "QH4472404666122022",         
        }}       
        onSubmit={(values,{resetForm}) => {
          //alert(JSON.stringify(values));         
          props.addBugReport(values)
          resetForm();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <View style={externalStyle.firstView}>
            <ScrollView>
            <View>            
                <Card containerStyle={externalStyle.mainCardPlayQuiz}>
                <TextInput
                  name="description"
                  onChangeText={handleChange('description')}
                  style={externalStyle.textinputbox}
                  placeholder="Bug Description"
                />                 
                <Button
                title={'File Bug'}
                titleStyle={externalStyle.titleStyleLB}
                containerStyle={externalStyle.containerStyleLB}
                buttonStyle={externalStyle.buttonStyleHP}
                onPress={handleSubmit}
                /> 
                <Text style={externalStyle.access}>Box</Text>
                        <Card
                            containerStyle={externalStyle.resultCardO}
                        >
                                                                            
                        </Card>             
              </Card>              
              </View>           
              </ScrollView>            
          </View>
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({
  addingReportDescription:quiz.addingReportDescription,
  addingReportDescriptionError:quiz.addingReportDescriptionError,

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      addBugReport
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Report);

import React, {useEffect} from 'react';
import {View,ScrollView } from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-paper';
import {bindActionCreators} from 'redux';
import {Card, Input, Button, Text,withTheme} from 'react-native-elements';
import MainHeader from '../../Navigation/MainHeader';
import {addQuizName} from './QuizAction';
import * as Yup from "yup";
import externalStyle from '../../style/externalStyle';

const QuizNameSchema = Yup.object().shape({
  quizName: Yup.string().required("Input needed!"),
  duration: Yup.string().required("Enter a valid duration"),
});

function QuizName(props) { 
 
  function handeleCallBack(data) {
    if(data==="success"){props.navigation.navigate('Quiz')}
    else{alert("Wrong")}
 }; 
  
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          duration: "",
          quizName: "",        
          quizHostId: "QH4472404666122022",         
        }}
        validationSchema={QuizNameSchema}
        onSubmit={(values,{resetForm}) => {
          //alert(JSON.stringify(values));         
          props.addQuizName(values,handeleCallBack)
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
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.textinputbox}
                  placeholder="Enter Quiz Name"
                />
                 <TextInput
                  name="duration"
                  onChangeText={handleChange('duration')}
                  style={externalStyle.textinputbox}
                  placeholder="Enter Response time per question"
                />
                 <TextInput                 
                 // onChangeText={handleChange('quizName')}
                  defaultValue="Standard"
                  style={externalStyle.textinputbox}
                  />
                <Button
                title={'Add Quiz'}
                titleStyle={externalStyle.titleStyleLB}
                containerStyle={externalStyle.containerStyleLB}
                buttonStyle={externalStyle.buttonStyleHP}
                onPress={handleSubmit}
               // onPress={() => props.navigation.navigate('Quiz')}
                />
                {/* <AntIcon name="enter" color="green" size={40} /> */}
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
  addingQuizName: quiz.addingQuizName,
  addingQuizNameError: quiz.addingQuizNameError,  
  quizName: quiz.quizName, 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      addQuizName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizName);

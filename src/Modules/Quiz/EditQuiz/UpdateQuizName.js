import React, {useEffect} from 'react';
import {View,ScrollView } from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TextInput} from 'react-native-paper';
import {Card,Button} from 'react-native-elements';
import MainHeader from '../../../Navigation/MainHeader';
import {updateQuizNameByQuizId,getQuizName} from '../QuizAction';
import externalStyle from '../../../style/externalStyle';

function UpdateQuizName(props) { 
  useEffect(()=>{
    props.getQuizName(props.route.params.quizId);   
   },[])
  function handeleCallBack(data) {
    if(data==="success"){
   // alert("success")
   props.navigation.navigate('Edit Quiz')
  }
   // else{alert("Wrong")}
 }
 // const duration=props.showQuiz&&props.showQuiz.duration;
  
  console.log("quiz",props.showQuiz)
  return (
    <>
      <MainHeader />
      <Formik
      enableReinitialize
        initialValues={{
          duration: props.showQuiz&&props.showQuiz.duration,
          quizName: props.showQuiz&&props.showQuiz.quizName,                
        }}
        onSubmit={(values) => {     
         // alert(values)
          props.updateQuizNameByQuizId({
            ...values,
          },
          props.showQuiz&&props.showQuiz.quizId,
          (data)=>handeleCallBack(data))
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
            
            <View style={externalStyle.container}>
            <ScrollView>
                <Card containerStyle={externalStyle.mainCardPlayQuiz}>
                <TextInput
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.textinputbox}
                  value={`${values.quizName}`}
                  placeholder="Enter Quiz Name"
                />
                 <TextInput
                  name="duration"
                  onChangeText={handleChange('duration')}
                  style={externalStyle.textinputbox}
                  value={`${values.duration}`}
                  placeholder="Enter Response time per question"
                />
                 
                 {/* <TextInput                 
                 // onChangeText={handleChange('quizName')}
                  defaultValue="Standard"
                  style={externalStyle.textinputbox}
                  />                                    */}
                 
                <Button
                title={'Update Quiz'}
                titleStyle={externalStyle.titleStyleLB}
                containerStyle={externalStyle.containerStyleLB}
                buttonStyle={externalStyle.buttonStyleHP}
                onPress={handleSubmit}
                />
              </Card>
              </ScrollView>
              </View>           
           
            
          </View>
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({
  updateQuizNameQuizId:quiz.updateQuizNameQuizId,
  updateQuizNameQuizIdError:quiz.updateQuizNameQuizIdError,
  showQuiz: quiz.showQuiz, 
  fetchingQuizName:quiz.fetchingQuizName,
 // quizId:quiz.showQuiz.quizId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      updateQuizNameByQuizId,
      getQuizName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuizName);

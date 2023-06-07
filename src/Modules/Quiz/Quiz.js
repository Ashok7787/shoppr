import React, {useEffect,useState } from 'react';
import {
  View,
  Text,

  // Picker,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TextInput} from 'react-native-paper';
import * as Yup from "yup";
import {Card, Input, Button, withTheme} from 'react-native-elements';
import MainHeader from '../../Navigation/MainHeader';
import {deleteQuestion,addQuestion,getQuizName,getCategory,clearQuizNameDetails} from './QuizAction';
import externalStyle from '../../style/externalStyle';

const QuizSchema = Yup.object().shape({
  question: Yup.string().required("Input needed!"),
  option1: Yup.string().required("Input needed!"),
  option2: Yup.string().required("Input needed!"),
  
});

function Quiz(props) {
  const [count, setCount] = useState(1);
  const [selectedCategory,setSelectedCategory]= useState("");
  const handleCount = () => setCount(count + 1); 
  const handleCategory = (id) => setSelectedCategory(id); 
  
  function handleCallBack(data,resetForm) {
     if(data==="success"){
     setSelectedCategory(""),
      resetForm(),
      handleCount()
     }
     else{console.log("Wrong")}
  };  

  
   useEffect(()=>{
    props.getCategory();
    return()=>{
     props.clearQuizNameDetails();
    }
   },[]) 
  const navigate = props.navigation.navigate;

  const navigation = props;

  const onhandleClick = () => {
    props.navigation.navigate('home');
  };   
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
         // duration: "",
           quizName: props.showQuiz.quizName,
          quizHostId: "QH4472404666122022",
          quizId:props.showQuiz&&props.showQuiz.quizId,
          categoryId: selectedCategory,
          //categoryId:"CAT33389270105262022",
          question:"",
          option1:"",
          option2:"",
          option3:"",
          option4:"",
          number: count,
        }}
        validationSchema={QuizSchema}
        onSubmit={(values,{resetForm}) => {
        //  alert(JSON.stringify(values));
          props.addQuestion({
            ...values,
             quizId:props.showQuiz&&props.showQuiz.quizId,
            categoryId: selectedCategory,
            number: count
          },(data)=>handleCallBack(data,resetForm))        
          // resetForm();
          // handleCount();
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
              <View style={{alignItems: 'center'}}>
               <Text style={externalStyle.headplayquizhost}>{props.showQuiz&&props.showQuiz.quizName}</Text>          
              </View>
              <View>
                <Button
                    title={'Finalize Quiz'}
                    titleStyle={externalStyle.titleStyle}
                    buttonStyle={externalStyle.buttonStyleFinalB}
                    onPress={() => props.navigation.navigate('Finalize Quiz')}
                /></View>
              {/* Container */}
              <View>
                <Card containerStyle={externalStyle.mainCard}>
                  <Card.Title style={{fontSize: 22, alignSelf:'center'}}>
                    <Text > Question {count || null}</Text>
                  </Card.Title>

                  <TouchableOpacity>
                    <SafeAreaView>
                      <TextInput
                        multiline
                        numberOfLines={3}
                        value={values.question}                    
                        placeholder="Question"
                        name="question"                  
                        style={externalStyle.question}
                        onChangeText={handleChange('question')}
                      />
                    </SafeAreaView>
                  </TouchableOpacity>
              
                  <TouchableOpacity              
                  >
                    <TextInput                    
                    value={values.option1}
                      placeholder="Correct answer"
                      name="option1" 
                     style={externalStyle.viewOption}
                      onChangeText={handleChange('option1')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TextInput                    
                    value={values.option2}
                      placeholder="Option 2"
                      name="option2"                      
                      style={externalStyle.viewOption}
                      onChangeText={handleChange('option2')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TextInput                    
                    value={values.option3}
                      placeholder="Option 3"
                      name="option3"
                      style={externalStyle.viewOption}
                      onChangeText={handleChange('option3')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TextInput                    
                    value={values.option4}
                      placeholder="Option 4"
                      name="option4"
                      style={externalStyle.viewOption}
                      onChangeText={handleChange('option4')}
                    />
                  </TouchableOpacity>

                  <View style={{ flexDirection: 'row',flexWrap:"wrap",alignSelf:'center' }}> 
                  {!!props.category.length&&props.category.map((item)=>{
                    return(
                      <View>
                      <Card key={item.categoryId} containerStyle={externalStyle.containerStyleC}>
                      <Text
                          style={{
                              textAlign: 'center',
                              fontSize:14,
                              color:item.categoryId===selectedCategory?"red":'#6949FD'
                          }}
                          onPress={() => handleCategory(item.categoryId)}
                      >{item.categoryName}</Text>
                  </Card>
                  </View> 
                    )
                  })}                           
                </View>
                       
                </Card>
              </View>

              {/* Buttons */}

              <View
                style={{
                  flexDirection: 'row',
                  margin:5,
                  alignSelf: 'center'
                }}>
                <Button
                        title={'Delete'}
                        titleStyle={externalStyle.titleStyle}
                        buttonStyle={externalStyle.buttonStyleDelete}
                        onPress={() => props.navigation.navigate('Swipecard')}
                    />

                <Button
                    title={'Update'}
                    titleStyle={externalStyle.titleStyle}
                    buttonStyle={externalStyle.buttonStyleFinal}
                   // onPress={() => props.navigation.navigate('Finalize Quiz')}
                />

                <Button
                  title={'Add'}
                  titleStyle={externalStyle.titleStyle}
                  buttonStyle={externalStyle.buttonStyleAdd}
                  onPress={handleSubmit}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                />
              </View>
           
            </ScrollView>
          </View>
        )}
      </Formik>
     
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({  
  fetchingQuizName: quiz.fetchingQuizName,
  fetchingQuizNameError: quiz.fetchingQuizNameError,
  showQuiz: quiz.showQuiz, 
  quizId:quiz.showQuiz.quizId,
  category: quiz.category,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {     
      deleteQuestion,
      addQuestion,
      getQuizName,
      getCategory,
      clearQuizNameDetails,      
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
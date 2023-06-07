import React, {useEffect,useState } from 'react';
import {  View,Text,TouchableOpacity,Pressable,ScrollView,SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TextInput} from 'react-native-paper';
import {Card,Button} from 'react-native-elements';
import { getQuestionList,updateQuestionsInQuiz,deleteQuestion} from '../QuizAction';
import externalStyle from '../../../style/externalStyle';
import AddModal from './AddModal';

function Quiz(props) {
  const [count, setCount] = useState(props.i);
  const [selectedCategory,setSelectedCategory]= useState("");
   const handleCount = () => setCount(count + 1); 
  const handleCategory = (id) => setSelectedCategory(id); 
  const [modalVisible, setModalVisible] = useState(false);
  function handleCallBack(data,resetForm) {
     if(data==="success"){
     alert("Question updated successfully")
     setSelectedCategory("")
     resetForm()
      handleCount()
     }
     else{console.log("Wrong")}
  }
   useEffect(()=>{
    setCount(props.i)
   },[props.i])
  return (
    <>     
      <Formik
        initialValues={{
          quizHostId: "QH4472404666122022",
          quizId:props.item.quizId,
          categoryId: props.item.categoryId,
          question:props.item.question,
          option1:props.item.option1,
          option2:props.item.option2,
          option3:props.item.option3,
          option4:props.item.option4,

         
        }}
        onSubmit={(values,{resetForm}) => {
           alert(JSON.stringify(values))          
          props.updateQuestionsInQuiz({
            ...values,           
          },props.item.id,(data)=>handleCallBack(data,resetForm)) 
        }}>
        {({
          handleChange,
          handleBlur,         
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <View 
         // style={externalStyle.firstView}
          >
                       <ScrollView>

              {/* Container */}
              <View>
                <Card containerStyle={externalStyle.mainCard}>
                  <Card.Title style={{fontSize: 22, alignSelf:'center'}}>
                    <Text>Question</Text><Text>{count ? count : null}</Text>
                  </Card.Title>

                  <TouchableOpacity>
                    <SafeAreaView>
                      <TextInput
                        multiline
                        numberOfLines={3}
                        value={`${values.question}`}                    
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
                    value={`${values.option1}`}
                      placeholder="Correct answer"
                      name="option1" 
                     style={externalStyle.viewOption}
                      onChangeText={handleChange('option1')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TextInput                    
                    value={`${values.option2}`}
                      placeholder="Option 2"
                      name="option2"                      
                      style={externalStyle.viewOption}
                      onChangeText={handleChange('option2')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TextInput                    
                    value={`${values.option3}`}
                      placeholder="Option 3"
                      name="option3"
                      style={externalStyle.viewOption}
                      onChangeText={handleChange('option3')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TextInput                    
                    value={`${values.option4}`}
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
                          // style={{
                          //     textAlign: 'center',
                          //     fontSize:14,
                          //     color:item.categoryId===selectedCategory?"red":'#6949FD'
                          // }}
                          onPress={() => handleCategory(item.categoryId)}
                      >{item.categoryName ?categoryName :null}</Text>
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
          margin: 5,
          alignSelf: 'center',
        }}>
        <Button
          title={'Delete'}
          titleStyle={externalStyle.titleStyle}
          buttonStyle={externalStyle.buttonStyleDelete}
           onPress={() => props.deleteQuestion(props.item.id)}
        />
        <Button
          title={'Update'}
          titleStyle={externalStyle.titleStyle}
          buttonStyle={externalStyle.buttonStyleFinal}
          onPress={handleSubmit}
        />
        <Button
          title={'Add'}
          titleStyle={externalStyle.titleStyle}
          buttonStyle={externalStyle.buttonStyleAdd}
          onPress={() => setModalVisible(true)}
          // onPress={() => props.navigation.navigate('Quiz Addquestions')}
        />
        {/* <Pressable
        // style={[styles.button, styles.buttonOpen]}
        
      >
        <Text>Show Modal</Text>
      </Pressable> */}
      </View>
        <AddModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        item={props.item}
        />  
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
      getQuestionList,
      updateQuestionsInQuiz ,
      deleteQuestion
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

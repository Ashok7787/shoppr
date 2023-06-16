import React, {useEffect} from 'react';
import Swiper from 'react-native-swiper';
import UpdateQuiz from './UpdateQuiz';
import {Container} from './Style';
import MainHeader from '../../../Navigation/MainHeader';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-native-elements';
import externalStyle from '../../../style/externalStyle';
import {getQuestionList,clearQuizNameDetails} from '../QuizAction';
function EditQuizS(props) {
  console.log("quiz page",props)
  useEffect(() => {
    props.getQuestionList(props.showQuiz && props.showQuiz.quizId);
    return()=>{
      props.clearQuizNameDetails();
 
     }
  }, []);
  if(props.fetchingQuestionList){
    alert("Hello")
    return(
      <View></View>
    )
  }
  console.log("component lebel",props.questionList)
  return (
    <>
      <MainHeader />
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={externalStyle.headplayquizhost}>{props.showQuiz&&props.showQuiz.quizName}</Text>
      </View>
      {/* <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <Button
          title={'Finalize Quiz'}
          titleStyle={externalStyle.titleStyle}
          buttonStyle={externalStyle.buttonStyleFinalB}
          onPress={() => props.navigation.navigate('Finalize Quiz')}
        />
      </View> */}
      <View>
      <Swiper showsPagination={false} showsButtons>
        {props.questionList.length &&
          props.questionList.map((item, i) => {
            return (
              
              <Container key={item.id}>
                <View>
                <UpdateQuiz item={item} i={i + 1} />
                </View>
              </Container>
              
            );
          })}
      </Swiper>    
      </View>  
    </>
  );
}
const mapStateToProps = ({auth, quiz}) => ({
  showQuiz: quiz.showQuiz,
  questionList: quiz.questionList,
  fetchingQuestionList:quiz.fetchingQuestionList,
  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getQuestionList,
      clearQuizNameDetails,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditQuizS);

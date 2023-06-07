import React, {useEffect,useState } from 'react';
import { View,Text,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import { Button, Card } from 'react-native-elements';
import {Formik} from 'formik';
import {bindActionCreators} from 'redux';
import MainHeader from '../../Navigation/MainHeader';
import externalStyle from '../../style/externalStyle';
import QuizNameList from './child/QuizNameList';
import QuizDetails from './child/QuizDetails';
import {getQuizNameDetails,getFeedback,} from '.././Quiz/QuizAction';

function OngoingPage(props) {
  const [item,setItem]=useState(undefined)
  function handleGetQuizData(data){
    setItem(data);
   // alert(data); 
   props.getQuizNameDetails(data); 
   props.getFeedback(data);  
   
   }
  return (
    <>
      <MainHeader />
      <ScrollView>
      <Formik>
      <View style={externalStyle.firstView}>        
        <View style={{alignItems: 'center',alignSelf:"center"}}>
         <QuizNameList handleGetQuizData={handleGetQuizData} item={item}/>
         <QuizDetails item={item}/>        
        </View>        
      </View>
      </Formik>
      </ScrollView>
    </>
  );
}
const mapStateToProps = (quiz) => ({   
 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {     
      getQuizNameDetails ,
      getFeedback
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(OngoingPage);

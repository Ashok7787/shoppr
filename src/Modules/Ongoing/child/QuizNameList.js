import React, {useEffect} from 'react';
import { View,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getQuizNameList,clearQuizNameDetails} from '../../Quiz/QuizAction'
import { Picker } from '@react-native-picker/picker';

function QuizNameList(props) {
  
  
  //  function handleCloseQuiz(data){
  //   setItem(data);
  //  props.getQuizNameDetails(data); 
  //  props.getFeedback(data);  
   
  //  }
    useEffect(()=>{
      props.getQuizNameList("QH4472404666122022");
      return () => {
         props.clearQuizNameDetails()
       };
     },[])
  return (
    <>     
          <View style={{alignItems: 'center',flexDirection:'row',display:'flex',width:'100%'}}>
               <Picker
                style={{
                    height: Dimensions.get('window').height * 0.06,
                    width: Dimensions.get('window').width * 0.70,
                }}
                mode="dropdown"
                name="quizName"
                selectedValue={props.item}
                onValueChange={itemValue =>
                   props.handleGetQuizData(itemValue)
                }
            >
                <Picker.Item label="Select Quiz Name" value="" />
                {props.quizNameList.map((item, key) => (
                    <Picker.Item
                        style={{
                            height: Dimensions.get('window').height * 0.06,
                            width: Dimensions.get('window').width * 0.40,
                        }}
                        label={`${item.quizName || ''}`}
                        value={`${item.quizId || ''}`}
                        key={key}
                    />
                ))}
            </Picker>
          </View> 
    </>
  );
}
const mapStateToProps = ({quiz}) => ({  
  quizNameList:quiz.quizNameList,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {    
       getQuizNameList,        
       clearQuizNameDetails
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizNameList);

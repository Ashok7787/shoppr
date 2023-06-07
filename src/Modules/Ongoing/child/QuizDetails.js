import React from 'react';
import {View, Text, ScrollView, Share} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import externalStyle from '../../../style/externalStyle';
import {closeQuiz,hostQuiz} from '../../Quiz/QuizAction';
import QuizDetailsPlayerTable from './QuizDetailsPlayerTable';
import FeedbackTable from '../FeedbackTable';
import {useNavigation} from '@react-navigation/native';

function QuizDetails(props) {
  const shareMessage = () => {
    Share.share({
      message: `http://player.quizledge.no${
        props.quizNameDetails.quizLink || ''
      }`,
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };
  const navigation = useNavigation();

  const viewData = props.quizNameDetails.playerViewDTOs;
  const viewmessage = props.quizNameDetails.message;
  const ID = props.quizNameDetails.quizId;

  return (
    <>
      <ScrollView>
        <View style={externalStyle.container}>
          <Card
            containerStyle={externalStyle.mainCardPlayQuizOg}
            // containerStyle={styles.mainCard}
          >
            <Text style={externalStyle.headplayquiz}>You are hosting</Text>
            <Text style={externalStyle.headplayquizhost}>{`${props.quizNameDetails.quizName || ''}`}{' '}</Text>

            <Text style={externalStyle.access}>
              Share URL for others to access.
            </Text>
            <Card
              containerStyle={{
                borderColor: '#32167C',
                width: '96%',
                marginLeft: '3%',
                height: 70,
              }}>
              <Text style={externalStyle.firstCardText}>{`http://player.quizledge.no${props.quizNameDetails.quizLink ||''}`}</Text>
            </Card>
            <Button
              title={'Share This Url'}
              titleStyle={externalStyle.titleStyle}
              containerStyle={externalStyle.containerStyleLB}
              buttonStyle={externalStyle.buttonStyleCopyCode}
              onPress={shareMessage}
            />
            <Text style={externalStyle.access}>Who is playing your quiz?</Text>
            <Card containerStyle={externalStyle.resultCardO}>
              {/* <PlayersTable data={dataTable} column={column}/> */}
              {viewData === null ? (
                <Text>{viewmessage}</Text>
              ) : (
                <QuizDetailsPlayerTable data={props.quizNameDetails} />
              )}
            </Card>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: '5%',
              }}>
              <Button
                title={'Close Quiz'}
                titleStyle={externalStyle.titleStyleFP}
                containerStyle={externalStyle.containerStyleFP}
                buttonStyle={externalStyle.buttonStyleHP}
                // onPress={closeQuiz}
                onPress={() => {
                  props.closeQuiz(props.item, navigation.navigate('home'));
                }}
              />
              <Button
                title={'Edit This Quiz'}
                titleStyle={externalStyle.titleStyleFP}
                containerStyle={externalStyle.containerStyleFP}
                buttonStyle={externalStyle.buttonStyleHP}
                onPress={() => {
                  navigation.navigate('Update Quiz Name', {quizId: props.item});
                }}
              />
            </View>
            <Button
              title={'Host This Quiz'}
              titleStyle={externalStyle.titleStyleLB}
              containerStyle={externalStyle.containerStyleLB}
              buttonStyle={externalStyle.buttonStyleHP}
              onPress={hostQuiz}
            />
            <Text style={externalStyle.access}>Player feedback</Text>
            <Card containerStyle={externalStyle.resultCardO}>
              <FeedbackTable data={props.feedback} />
            </Card>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
const mapStateToProps = ({quiz}) => ({
  quizNameDetails: quiz.quizNameDetails,
  fetchingFeedback: quiz.fetchingFeedback,
  feedback: quiz.feedback,
  fetchingFeedbackErrot: quiz.fetchingFeedbackErrot,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeQuiz,
      hostQuiz
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails);

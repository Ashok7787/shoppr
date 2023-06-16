import React,{Component } from 'react';
import {getPlayersDetails,getQuizNameDetails} from '../../QuizAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { ScrollView, StyleSheet, View } from "react-native";
import { List } from 'react-native-paper';
import { Table, Row, Rows } from "react-native-table-component";

 class PlayersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["userName", "Score", "Status"]
    };
  }
componentDidMount(){
    this.props.getQuizNameDetails(this.props.quizId);
}
  render() {
    const state = this.state;
    return (
      <ScrollView>
      <View style={styles.container}>
        {/* <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={this.props.quizNameDetails} />
        </Table> */}
        {this.props.quizNameDetails.map((item)=>
        {
          return(
            <List.Item
            title={`${item.playerName}`}
            description={`score- ${item.score}   status- ${item.status}`}
            //left={props => <List.Icon {...props} icon="folder" />}
            />
          )
        })}        
      </View>
      </ScrollView>
    );
  }
}


const mapStateToProps = ({auth, quiz}) => ({      
  quizId:quiz.showQuiz.quizId,
 // playersDetails: quiz.playersDetails,
  quizNameDetails: quiz.quizNameDetails,
  fetchingQuizNameDetails: quiz.fetchingQuizNameDetails,
  fetchingQuizNameDetailsError: quiz.fetchingQuizNameDetailsError,
  showQuiz: quiz.showQuiz, 
  quizId:quiz.showQuiz.quizId,
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      { 
        getQuizNameDetails  
      },
      dispatch,
    );  
  export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable);


  const styles = StyleSheet.create({
    container: {
      width: 300,
      height:200,
      overflow:'scroll',
      backgroundColor: "#fff"
    },
    head: {
      height: 40,
      backgroundColor: "blue",
      textAlign: "center"
    },
    text: { margin: 0, color: "white",alignSelf:'center' }
  });
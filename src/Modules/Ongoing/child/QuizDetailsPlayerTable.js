import React,{Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { ScrollView, StyleSheet, View } from "react-native";
import { List } from 'react-native-paper';
import { Table, Row, Rows } from "react-native-table-component";

 class QuizDetailsPlayerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["userName", "Score", "Status"]
    };
  }
  render() {
    const state = this.state;
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.props.data.quizName&&
        this.props.data.playerViewDTOs.length
        &&
        this.props.data.playerViewDTOs.map((item)=>
        {
          return(
            <List.Item
            title={`${item.playerName}`}
            description={`Score- ${item.score}   Status- ${item.status}`}
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

  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {        
      },
      dispatch,
    );  
  export default connect(mapStateToProps, mapDispatchToProps)(QuizDetailsPlayerTable);


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
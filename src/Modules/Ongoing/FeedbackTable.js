import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

class FeedbackTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['userName', 'Score', 'Status'],
    };
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        
          {this.props.data.map((item,i) => {
            return (
              <List.Item
              key={i}
                title={`${item.player}`}
                description={`${item.feedBack}`}
              />
            );
          })}
        
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({auth, quiz}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackTable);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    overflow: 'scroll',
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: 'blue',
    textAlign: 'center',
  },
  text: {margin: 0, color: 'white', alignSelf: 'center'},
});

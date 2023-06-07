// // import { Formik } from 'formik';
// // import React from 'react';
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   View,
// //   Text,
// //   StatusBar,
// //   FlatList,
// // } from 'react-native';
// // import Swipeable from 'react-native-gesture-handler/Swipeable';
// // const todoList = [
// //   { id: '1', text: 'Learn JavaScript' },
// // //   { id: '2', text: 'Learn React' },
// // //   { id: '3', text: 'Learn TypeScript' },
// // ];
// // const Separator = () => <View style={styles.itemSeparator} />;
// // const LeftSwipeActions = () => {
// //   return (
// //     <View
// //       style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
// //     >
// //       <Text
// //         style={{
// //           color: '#40394a',
// //           paddingHorizontal: 10,
// //           fontWeight: '600',
// //           paddingHorizontal: 30,
// //           paddingVertical: 20,
// //         }}
// //       >
// //         Bookmark
// //       </Text>
// //     </View>
// //   );
// // };
// // const rightSwipeActions = () => {
// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         backgroundColor: '#ff8303',
// //         justifyContent: 'center',
// //         alignItems:'center'
// //       }}
// //     >
// //         <Formik>
// //       <Text
// //         style={{
// //           color: '#1b1a17',
// //         //  paddingHorizontal: 10,
// //           fontWeight: '600',
// //          // paddingHorizontal: 30,
// //         //  paddingVertical: 20,
// //         }}
// //       >
// //         Delete
// //       </Text>
// //       </Formik>
// //     </View>
// //   );
// // };

// // const ListItem = ({ text }) => (
// //   <Swipeable
// //     renderLeftActions={LeftSwipeActions}
// //     renderRightActions={rightSwipeActions}
// //   >
// //     <View
// //       style={{
// //         paddingHorizontal: 30,
// //         paddingVertical: 20,
// //         backgroundColor: 'white',
// //       }}
// //     >
// //       <Text style={{ fontSize: 24 }} >
// //         {text}
// //       </Text>
// //     </View>
// //   </Swipeable>
// // );
// // const SwipeGesture = () => {
// //   return (
// //     <>
// //       <StatusBar />
// //       <SafeAreaView style={styles.container}>
// //         <Text style={{ textAlign: 'center', marginVertical: 20 }}>
// //           Swipe right or left
// //         </Text>
// //         <FlatList
// //           data={todoList}
// //           keyExtractor={(item) => item.id}
// //           renderItem={({ item }) => <ListItem {...item} />}
// //           ItemSeparatorComponent={() => <Separator />}
// //         />
// //       </SafeAreaView>
// //     </>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   itemSeparator: {
// //     flex: 1,
// //    // height: 1,
// //     backgroundColor: '#444',
// //   },
// // });
// // export default SwipeGesture;
// import { Formik } from 'formik';
// import React, { Component ,useEffect,useState } from 'react';
// import {
//   View,
//   Animated,
//   PanResponder,
//   Text
// } from 'react-native';
// //const [count, setCount] = useState(1);
// //const handleCount = () => setCount(count + 1); 
// const A = 65
// export default class SwipeGesture extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state = {
//           justClicked: null,
//           letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
//         };
//   componentWillMount = () => {
//     this.PanResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onPanResponderRelease: (evt, gestureState) => {
//         let x = gestureState.dx;
//         let y = gestureState.dy;
        

//         if (Math.abs(x) > Math.abs(y)) {
//           if (x >= 0) {
//             this.props.onSwipePerformed('right')
//           }
//           else {
//             this.props.onSwipePerformed('left')
//           }
//         }
//         else {
//           if (y >= 0) {
//             this.props.onSwipePerformed('down')
//           }
//           else {
//             this.props.onSwipePerformed('up')
//           }
//         }
//       }
//     })
//   }}
// //   handleCount(count) {
// //     this.setCount({count});
// //   }
// handleClick(e) {
//     this.setState({
//       justClicked: e.target.dataset.letter
//     });
//   }
//   render() {
   
//     return (
//       <Animated.View {...this.PanResponder.panHandlers} style={this.props.gestureStyle}>
//        {/* <Formik
//        onSubmit={(values) => { 
//          handleCount();
//       }}
//        > */}
//         <View>
        
//         Just clicked: {this.state.justClicked}
//         <ul>
//           {this.state.letters.map(letter =>
//             <li key={letter} data-letter={letter} onClick={this.handleClick}>
//               {letter}
//             </li>
//           )}
//         </ul>
     
//             {/* <Text>Ashok{count || null}</Text> */}
//             {/* {this.props.children} */}
//         </View>
//         {/* </Formik> */}
//       </Animated.View>
//     )
//   }
// }
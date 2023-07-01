import React from 'react';

import Home from './Home';
import Report from '../Report/Report';
import Quiz from '../Quiz/Quiz';
import QuizUrl from '../Quiz/Child/PlayersQuiz/QuizUrl';
import {createStackNavigator} from '@react-navigation/stack';
import QuizName from '../Quiz/QuizName';
import FinalizeQuiz from '../Quiz/Child/HostQuizes/FinalizeQuiz';
import PlayQuiz from '../Quiz/Child/HostQuizes/PlayQuiz';
import OngoingPage from '../Ongoing/OngoingPage';
import PlayersTable from '../Quiz/Child/HostQuizes/PlayersTable';
import QuizDetails from '../Ongoing/child/QuizDetails';
import QuizNameList from '../Ongoing/child/QuizNameList';
import UpdateQuizName from '../Quiz/EditQuiz/UpdateQuizName';
import UpdateQuiz from '../Quiz/EditQuiz/UpdateQuiz';
import SwipeCard from '../Swipe/SwipeCard';
import FeedbackTable from '../Ongoing/FeedbackTable';
import QuizDetailsPlayerTable from '../Ongoing/child/QuizDetailsPlayerTable';
import EditQuizS from '../Quiz/EditQuiz/EditQuizS';
import AllProducts from '../Products/AllProducts';
import CategoryHeader from '../Products/Category/CategoryHeader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainHeader from '../../Navigation/MainHeader';
import Profile from '../Auth/Profile';
import Notification from './Notification';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function HomeNavigator(props) {
  return (
    
    // <Stack.Navigator
    //     screenOptions={{
    //         headerShown: false,
    //     }}
    //     initialRouteName="home"
    // >
    //      <Stack.Screen name="home" component={Home} />
    //     <Stack.Screen name="bottomtab" component={BottomTabNavigator} />

    //     <Stack.Screen name="products" component={AllProducts} />

    //     <Stack.Screen name="category" component={CategoryHeader} />
    //     <Stack.Screen name="Quiz" component={Quiz} />
    //     <Stack.Screen name="Update Quiz Name" component={UpdateQuizName} />
    //     <Stack.Screen name="Update Quiz" component={UpdateQuiz} />
    //     <Stack.Screen name="Players table" component={PlayersTable} />
    //     <Stack.Screen name="Quiz Details" component={QuizDetails} />
    //     <Stack.Screen name="Quiz Name List" component={QuizNameList} />
    //     <Stack.Screen name="Swipe" component={SwipeCard} />
    //     <Stack.Screen name="Feedback" component={FeedbackTable} />
    //     <Stack.Screen name="Quiz Details Player Table" component={QuizDetailsPlayerTable} />
    //     <Stack.Screen name="Quiz Url" component={QuizUrl} />
    //     <Stack.Screen name="Play Quiz" component={PlayQuiz} />
    //     <Stack.Screen name="Finalize Quiz" component={FinalizeQuiz} />
    //     <Stack.Screen name="Edit Quiz" component={EditQuizS} />
    // </Stack.Navigator>
    <>
    {/* <MainHeader /> */}
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerShown: false,
        }}>
        <Tab.Screen
          name="category"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="products"
          component={Notification}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="user" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </>
  );
}
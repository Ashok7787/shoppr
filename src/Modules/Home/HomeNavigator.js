import React from 'react';
import Home from './Home';
import Report from '../Report/Report';
import Quiz from '../Quiz/Quiz';
import QuizUrl from '../Quiz/Child/PlayersQuiz/QuizUrl';
import { createStackNavigator } from '@react-navigation/stack';
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


const Stack = createStackNavigator();

export default function HomeNavigator(props) {    
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="home"
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="Ongoing Quiz Page" component={OngoingPage} />
            <Stack.Screen name="Quiz Name" component={QuizName} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Update Quiz Name" component={UpdateQuizName} />
            <Stack.Screen name="Update Quiz" component={UpdateQuiz} />
            <Stack.Screen name="Players table" component={PlayersTable} />
            <Stack.Screen name="Quiz Details" component={QuizDetails} />
            <Stack.Screen name="Quiz Name List" component={QuizNameList} />
            <Stack.Screen name="Swipe" component={SwipeCard} />
            <Stack.Screen name="Feedback" component={FeedbackTable} />
            <Stack.Screen name="Quiz Details Player Table" component={QuizDetailsPlayerTable} />
            <Stack.Screen name="Quiz Url" component={QuizUrl} />           
            <Stack.Screen name="Play Quiz" component={PlayQuiz} />           
            <Stack.Screen name="Finalize Quiz" component={FinalizeQuiz} />
            <Stack.Screen name="Edit Quiz" component={EditQuizS} />
        </Stack.Navigator>
    );
}
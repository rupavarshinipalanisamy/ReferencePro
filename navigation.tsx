import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from './src/utils/screenName';
import WelcomePage from './src/pages/authentication/welcomePage';
import LoginEmail from './src/pages/authentication/loginEmail';
import ForgetPassword from './src/pages/authentication/forgetPassword';
import Verification from './src/pages/authentication/verification';
import SignUp from './src/pages/authentication/signUp';
import ChatSettings from './src/pages/chat/chatSettings';
import Chats from './src/pages/chat/Chats';
import ChatView from './src/pages/chatView/chatView';
import UserProfile from './src/pages/chatView/UserProfile';
import Media from './src/pages/Media/Media';
import ImageScreen from './src/pages/Media/Image';
import ImageView from './src/pages/Media/ImageView';
import Video from './src/pages/Media/Video';
import Link from './src/pages/Media/Link'
import VideoView from './src/pages/Media/VideoView';


const Stack = createNativeStackNavigator();

interface NavigationProps {
    initialRouteName: string;
}

const HomeNavigation = (props: NavigationProps) => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={props.initialRouteName}>
            <Stack.Screen name={screenName.ChatSettings} component={ChatSettings} />
            <Stack.Screen name={screenName.WelcomePage} component={WelcomePage} />
            <Stack.Screen name={screenName.LoginEmail} component={LoginEmail} />
            <Stack.Screen name={screenName.ForgetPassword} component={ForgetPassword} />
            <Stack.Screen name={screenName.Verification} component={Verification} />
            <Stack.Screen name={screenName.SignUp} component={SignUp} />
            <Stack.Screen name={screenName.Chats} component={Chats} />
            <Stack.Screen name={screenName.ChatView} component={ChatView} />
            <Stack.Screen name={screenName.UserProfile} component={UserProfile} />
            <Stack.Screen name={screenName.Media} component={Media} />
            <Stack.Screen name={screenName.Image} component={ImageScreen} />
            <Stack.Screen name={screenName.ImageView} component={ImageView} />
            <Stack.Screen name={screenName.Video} component={Video} />
            <Stack.Screen name={screenName.Link} component={Link} />
            <Stack.Screen name={screenName.VideoView} component={VideoView} />






        </Stack.Navigator>
    );
};

interface RootNavigationProps {
    initialRouteName: string;
};

const RootNavigation = (props: RootNavigationProps) => {
    return (
        <NavigationContainer>
            <HomeNavigation initialRouteName={props.initialRouteName} />
        </NavigationContainer>
    );
};

export default RootNavigation;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
import Groups from './src/pages/groups/Groups';
import GroupChatting from './src/pages/groups/GroupChatting';
import GroupChattingAdmin from './src/pages/groups/GroupChattingAdmin';
import GroupInfo from './src/pages/groups/GroupInfo';
import GroupInfoAdmin from './src/pages/groups/GroupInfoAdmin';
import SingleAudioCallRing from './src/pages/calls/SingleAudioCallRing';
import SingleAudioCallAttend from './src/pages/calls/SingleAudioCallAttend';
import Calling from './src/pages/calls/Calling';

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
            <Stack.Screen name={screenName.Group} component={Groups} />
            <Stack.Screen name={screenName.GroupChatting} component={GroupChatting} />
            <Stack.Screen name={screenName.GroupChattingAdmin} component={GroupChattingAdmin} />
            <Stack.Screen name={screenName.GroupInfo} component={GroupInfo} />
            <Stack.Screen name={screenName.GroupInfoAdmin} component={GroupInfoAdmin} />
            <Stack.Screen name={screenName.SingleAudioCallRing} component={SingleAudioCallRing} />
            <Stack.Screen name={screenName.SingleAudioCallAttend} component={SingleAudioCallAttend} />
            <Stack.Screen name={screenName.Calling} component={Calling} />
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
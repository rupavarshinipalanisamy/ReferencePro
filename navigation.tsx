import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from './src/utils/screenName';
import WelcomePage from './src/pages/authentication/welcomePage';
import LoginEmail from './src/pages/authentication/loginEmail';
import ForgetPassword from './src/pages/authentication/forgetPassword';
import Verification from './src/pages/authentication/verification';
import SignUp from './src/pages/authentication/signUp';
import Chats from './src/pages/chat/Chats';
import ChatView from './src/pages/chatView/chatView';
import UserProfile from './src/pages/chatView/UserProfile';
import CreateNewPassword from './src/pages/authentication/createNewPassword';
import AddContact from './src/pages/contact/addContact';
import ContactPage from './src/pages/contact/contactPage';
import SettingsScreen from './src/pages/settings/settingsScreen';
import SocialProfiles from './src/pages/settings/socialProfiles';
import Password from './src/pages/settings/password';

const Stack = createNativeStackNavigator();

interface NavigationProps {
    initialRouteName: string;
}

const HomeNavigation = (props: NavigationProps) => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={props.initialRouteName}>
            <Stack.Screen name={screenName.WelcomePage} component={WelcomePage} />
            <Stack.Screen name={screenName.LoginEmail} component={LoginEmail}  />
            <Stack.Screen name={screenName.ForgetPassword} component={ForgetPassword} />
            <Stack.Screen name={screenName.Verification} component={Verification} />
            <Stack.Screen name={screenName.SignUp} component={SignUp} />
            <Stack.Screen name={screenName.Chats} component={Chats} />
            <Stack.Screen name={screenName.ChatView} component={ChatView} />
            <Stack.Screen name={screenName.UserProfile} component={UserProfile} />
            <Stack.Screen name={screenName.CreateNewPassword} component={CreateNewPassword} />
            <Stack.Screen name={screenName.AddContact} component={AddContact} />
            <Stack.Screen name={screenName.ContactPage} component={ContactPage} />
            <Stack.Screen name={screenName.SettingsScreen} component={SettingsScreen} />
            <Stack.Screen name={screenName.SocialProfiles} component={SocialProfiles} />
            <Stack.Screen name={screenName.Password} component={Password} />


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
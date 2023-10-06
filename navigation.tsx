import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
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
import Groups from './src/pages/groups/Groups';
import GroupChatting from './src/pages/groups/GroupChatting';
import GroupChattingAdmin from './src/pages/groups/GroupChattingAdmin';
import GroupInfo from './src/pages/groups/GroupInfo';
import GroupInfoAdmin from './src/pages/groups/GroupInfoAdmin';
import SingleAudioCallRing from './src/pages/calls/SingleAudioCallRing';
import SingleAudioCallAttend from './src/pages/calls/SingleAudioCallAttend';
import Calling from './src/pages/calls/Calling';
import SingleVideoCallAttend from './src/pages/calls/SingleVideoCallAttend';
import GroupAudioCallAttend from './src/pages/calls/GroupAudioCallAttend';
import GroupVideoCallAttend from './src/pages/calls/GroupVideoCallAttend';
import Media from './src/pages/Media/Media';
import ImageScreen from './src/pages/Media/Image';
import ImageView from './src/pages/Media/ImageView';
import Video from './src/pages/Media/Video';
import Link from './src/pages/Media/Link'
import VideoView from './src/pages/Media/VideoView';
import StarredMessages from './src/pages/starredMessages';
import Privacy from './src/pages/settings/privacy';
import ChatSettings from './src/pages/settings/chatSettings';
import { useTheme } from './src/Theme/ThemeContext';
import VerifyCode from './src/pages/VerifyCode';
import {
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import ChooseWallper from './src/pages/ChooseWallper';

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
            <Stack.Screen name={screenName.LoginEmail} component={LoginEmail} />
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
            <Stack.Screen name={screenName.Group} component={Groups} />
            <Stack.Screen name={screenName.GroupChatting} component={GroupChatting} />
            <Stack.Screen name={screenName.GroupChattingAdmin} component={GroupChattingAdmin} />
            <Stack.Screen name={screenName.GroupInfo} component={GroupInfo} />
            <Stack.Screen name={screenName.GroupInfoAdmin} component={GroupInfoAdmin} />
            <Stack.Screen name={screenName.SingleAudioCallRing} component={SingleAudioCallRing} />
            <Stack.Screen name={screenName.SingleAudioCallAttend} component={SingleAudioCallAttend} />
            <Stack.Screen name={screenName.Calling} component={Calling} />
            <Stack.Screen name={screenName.SingleVideoCall} component={SingleVideoCallAttend} />
            <Stack.Screen name={screenName.GroupAudioCallAttend} component={GroupAudioCallAttend} />
            <Stack.Screen name={screenName.GroupVideoCallAttend} component={GroupVideoCallAttend} />
            <Stack.Screen name={screenName.Media} component={Media} />
            <Stack.Screen name={screenName.Image} component={ImageScreen} />
            <Stack.Screen name={screenName.ImageView} component={ImageView} />
            <Stack.Screen name={screenName.Video} component={Video} />
            <Stack.Screen name={screenName.Link} component={Link} />
            <Stack.Screen name={screenName.VideoView} component={VideoView} />
            <Stack.Screen name={screenName.StarredMsg} component={StarredMessages} />
            <Stack.Screen name={screenName.Privacy} component={Privacy} />
            <Stack.Screen name={screenName.ChatSettings} component={ChatSettings} />
            <Stack.Screen name={screenName.VerifyCode} component={VerifyCode} />
            <Stack.Screen name={screenName.ChooseWallpaper} component={ChooseWallper} />




        </Stack.Navigator>
    );
};

interface RootNavigationProps {
    initialRouteName: string;
};

const RootNavigation = (props: RootNavigationProps) => {
    const { theme } = useTheme(); 
    return (
        <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <HomeNavigation initialRouteName={props.initialRouteName} />
        </NavigationContainer>
    );
};

export default RootNavigation;
import React, { Fragment } from 'react';
import { Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import { FooterChatView, HeaderChatView, SentMessage2, receiveMessage1, receiveMessage2, receiveMessage3, receiveMessage4, sentMessage1, sentMessage2, sentMessage3 } from '../chatView/Messagecomponents/messages';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flexRow, justyfyCenter, ml10, mr10, mv5, pl6, pt10 } from '../../components/commonStyles';
import { MainContainer } from '../../components/commonView';
import { screenName } from '../../utils/screenName';
import { ChatBackgroundImg, Chatimg1Img, Chatimg2Img, Chatimg4Img, Chatimg6Img, Chatimg7Img, Chatimg8Img } from '../../utils/png';
import { labels } from '../../utils/labels';
import { Bluetick, DayDetails } from '../../components/chatViewComponents';
import { isDark, useTheme } from '../../Theme/ThemeContext';
import { H12font400Grey, H14Blackvar2Bold500 } from '../../components/commonText';

export type GroupChattingProps = {

}


const GroupChatting = (props: GroupChattingProps) => {


  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
    const chatMessages = [
        { id: 1, message: receiveMessage1(isDarkTheme), type: "receivemsg", time: "8:16 PM", name: 'Elizabeth sosa', profileImg: Chatimg2Img },
        { id: 2, message: sentMessage1("Good Morning Mam",isDarkTheme), type: "sentmsg", time: "8:17 PM", profileImg: Chatimg1Img, name : 'You' },
        { id: 3, message: receiveMessage2(isDarkTheme), type: "receivemsg", time: "8:16 PM", name: 'james Albert', profileImg: Chatimg6Img },
        { id: 4, message: SentMessage2(isDarkTheme), type: "sentmsg", time: "8:17 PM", profileImg: Chatimg1Img, name : 'You' },
        { id: 5, message: receiveMessage3(isDarkTheme), type: "receivemsg", time: "8:16 PM", name: 'Dina Brown', profileImg: Chatimg7Img },
        { id: 6, message: sentMessage3(isDarkTheme), type: "sentmsg", time: "8:17 PM", profileImg: Chatimg1Img, name : 'You' },
        { id: 7, message: receiveMessage4(isDarkTheme), type: "receivemsg", time: "8:16 PM", name: 'Horacce Keene', profileImg: Chatimg4Img },
        { id: 8, message: sentMessage1("Thank You Mam",isDarkTheme), type: "sentmsg", time: "8:17 PM", profileImg: Chatimg1Img },
    ];
    return (
        <Fragment>
            <MainContainer>
                <HeaderChatView backgroundColor={colors.purpleVar3} groups={true} profileNavigate={screenName.GroupInfo} videoNavigate={screenName.GroupVideoCallAttend} audioNavigate={screenName.GroupAudioCallAttend} title={labels.UIUXDesigner} subTitle={labels.DebraJamesHollis} />
                <ImageBackground
                    source={ChatBackgroundImg}
                    style={{ flex: 1 }}
                    imageStyle={{ opacity: 0.1,backgroundColor: isDark()?'rgba(194, 194, 194,1)':'rgba(220, 198, 224, 0.1)' }}
                >
                    <View style={[{ alignItems: 'center' }, pt10]}>
                        <DayDetails/>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                        {chatMessages.map((message, index) => (
                            <View style={[message.type === 'sentmsg' ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }, { paddingTop: 10, marginHorizontal: 20 }]}
                                key={message.id}>
                                <View style={[{ flexDirection : message.type === 'sentmsg' ? 'row-reverse' : 'row' }, alignItemsCenter, justyfyCenter, mv5]}>
                                    <Image source={message.profileImg} style={[{ height: 30, width: 30, borderRadius: 100 },message.type === 'sentmsg' ? ml10 : mr10]} />
                                    <H14Blackvar2Bold500 style={[ message.type === 'sentmsg' ? ml10 : mr10]}>{message.name}</H14Blackvar2Bold500>
                                    <H12font400Grey style={[message.type === 'sentmsg' ? ml10 : mr10]}>{message.time}</H12font400Grey>
                                    <Text style={[]}> {message.type === 'sentmsg' ? Bluetick() : null}</Text>
                                </View>
                                <Text>{message.message}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <FooterChatView />
                </ImageBackground>
            </MainContainer>
        </Fragment >
    )
}

export default GroupChatting
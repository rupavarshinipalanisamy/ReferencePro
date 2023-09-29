import React, { Fragment } from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { FooterChatView, HeaderChatView, receiveMessage1, receiveMessage2, receiveMessage3, receiveMessage4, sentMessage1, sentMessage2, sentMessage3 } from '../chatView/Messagecomponents/messages';
import { colors } from '../../utils/colors';
import { DayDetails } from '../chatView/chatView';
import { pl6, pt10 } from '../../components/commonStyles';
import { MainContainer } from '../../components/commonView';
import { bluetick } from '../chatView/chatView';
import { screenName } from '../../utils/screenName';
import { ChatBackgroundImg } from '../../utils/png';

export type GroupChattingProps = {

}


const GroupChatting = (props: GroupChattingProps) => {

    const chatMessages = [
        { id: 1, message: receiveMessage1(), type: "receivemsg", time: "8:16 PM", name: 'Elizabeth sosa' },
        { id: 2, message: sentMessage1("Good Morning Mam"), type: "sentmsg", time: "8:17 PM" },
        { id: 3, message: receiveMessage2(), type: "receivemsg", time: "8:16 PM", name: 'james Albert' },
        { id: 4, message: sentMessage2(), type: "sentmsg", time: "8:17 PM" },
        { id: 5, message: receiveMessage3(), type: "receivemsg", time: "8:16 PM", name: 'Dina Brown' },
        { id: 6, message: sentMessage3(), type: "sentmsg", time: "8:17 PM" },
        { id: 7, message: receiveMessage4(), type: "receivemsg", time: "8:16 PM", name: 'Horacce Keene' },
        { id: 8, message: sentMessage1("Thank You Mam"), type: "sentmsg", time: "8:17 PM" },
    ];
    return (
        <Fragment>
            <MainContainer>
                <HeaderChatView backgroundColor={colors.purpleVar3} groups={true} profileNavigate={screenName.GroupInfo} videoNavigate={screenName.GroupVideoCallAttend} audioNavigate={screenName.GroupAudioCallAttend} />
                <ImageBackground
                    source={ChatBackgroundImg}
                    style={{ flex: 1 }}
                    imageStyle={{ opacity: 0.1, backgroundColor: 'rgba(200, 180, 230, 0.5)' }}
                >
                    <View style={[{ alignItems: 'center' }, pt10]}>
                        <DayDetails />
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                        {chatMessages.map((message, index) => (
                            <View style={[message.type === 'sentmsg' ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }, { paddingTop: 10, marginHorizontal: 20 }]}
                                key={message.id}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: colors.black }}>{message.name}</Text>
                                    </View>
                                    <Text style={{ fontSize: 14, color: colors.greyVar4 }}>{message.time}</Text>
                                    <Text style={pl6}> {message.type === 'sentmsg' ? bluetick() : null}</Text>
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
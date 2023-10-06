// import React, { Fragment, useState } from 'react';
// import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
// import { colors } from '../../utils/colors';
// import {  flexRow,pb10, pl15, pl6, pt10,spaceBetween } from '../../components/commonStyles';
// import { H14BlackText, H16BlackText } from '../../components/commonText';
// import {labels} from '../../utils/labels';
// import { FooterChatView, HeaderChatView, receiveMessage1, receiveMessage2, receiveMessage3, receiveMessage4, sentMessage1, sentMessage2, sentMessage3 } from './Messagecomponents/messages';
// import CustomIcon from '../../utils/Icons';
// import Modal from 'react-native-modal';
// import { DevHeight, DevWidth } from '../../utils/device';
// import { screenName } from '../../utils/screenName';
// import { ChatBackgroundImg, ProfileImg } from '../../utils/png';
// import { isDark } from '../../Theme/ThemeContext';

// export type chatViewProps = {
// }


// interface TabControlProps {
//     tabs: { label: string; count?: number }[];
//     activeTab: string;
//     onTabPress: (tab: string) => void;
// }


// export const TabControl: React.FC<TabControlProps> = ({ tabs, activeTab, onTabPress }) => {
//     return (
//         <View style={styles.tabContainer}>
//             {tabs.map((tabInfo) => (
//                 <View style={{ marginLeft: 15 }} key={tabInfo.label}>
//                     <TouchableOpacity
//                         style={[
//                             { borderBottomWidth: activeTab === tabInfo.label ? 3 : 0 },
//                             { borderBottomColor: activeTab === tabInfo.label ? colors.purpleVar3 : "" },
//                         ]}
//                         onPress={() => onTabPress(tabInfo.label)}
//                     >
//                         <View style={[flexRow, pb10]}>
//                             <Text
//                                 style={[
//                                     styles.tabText

//                                     , { color: activeTab === tabInfo.label ? colors.purpleVar3 : colors.purpleVar3 },
//                                 ]}
//                             >
//                                 {tabInfo.label}
//                             </Text>
//                             {tabInfo.count !== undefined && tabInfo.count > 0 && (

//                                 <View
//                                     style={[

//                                         styles.roundNumber, { backgroundColor: 'rgba(128, 0, 128, 0.2)' },
//                                     ]}
//                                 >
//                                     <Text style={styles.roundNumberText}>{tabInfo.count}</Text>
//                                 </View>
//                             )}
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             ))}
//         </View>
//     );
// };

// export const DayDetails = () => {
//     return (
//         <>
//             <View style={{ height: 35, backgroundColor: colors.white, width: 120, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 100 }}>
//                 <H14BlackText>{labels.chatViewToday}</H14BlackText>
//             </View>
//         </>
//     );
// };

// export const bluetick = () => {
//     return (
//         <View>
//             <CustomIcon name='check-all' type="MaterialCommunityIcons" color={colors.blueVar1} size={16} />
//         </View>
//     )
// }
// const ChatView = () => {
//     const [isModalVisible, setModalVisible] = useState(false);
//     const [selectedTab, setSelectedTab] = useState('All');

//     const toggleModal = () => {
//         setModalVisible(!isModalVisible);
//     };
//     const closeModal = () => {
//         setModalVisible(false);
//     };
//     const Reactmsg = () => {
//         return (
//             <TouchableOpacity style={{ paddingTop: 5 }} onPress={toggleModal}>
//                 <View style={{ backgroundColor: colors.white, height: 22, width: 40, borderRadius: 10, justifyContent: "space-evenly", flexDirection: 'row', marginRight: 230 }}>
//                     <H14BlackText>1</H14BlackText>
//                     <H14BlackText>👍</H14BlackText>
//                 </View>
//             </TouchableOpacity>
//         )
//     }
//     const All = () => {

//         return (
//             <View style={{ marginHorizontal: 25, marginTop: 20 }}>
//                 <View style={[flexRow, spaceBetween]}>
//                     <View style={flexRow}>
//                         <Image source={ProfileImg}
//                         />
//                         <View style={[pl15, spaceBetween]}>
//                             <H14BlackText>Horace Keene</H14BlackText>
//                             <Text>Active 4Min Ago</Text>

//                         </View>
//                     </View>
//                     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                         <H16BlackText>👍</H16BlackText>
//                     </View>
//                 </View>

//             </View>
//         )
//     }

//     const chatMessages = [
//         { id: 1, message: receiveMessage1(), type: "receivemsg", time: "8:16 PM" },
//         { id: 2, message: sentMessage1("Good Morning Mam"), type: "sentmsg", time: "8:17 PM", icon: bluetick() },
//         { id: 3, message: receiveMessage2(), type: "receivemsg", time: "8:16 PM" },
//         { id: 4, message: sentMessage2(), type: "sentmsg", time: "8:17 PM", icon: bluetick() },
//         { id: 5, message: receiveMessage3(), type: "receivemsg", time: "8:16 PM" },
//         { id: 6, message: sentMessage3(), type: "sentmsg", time: "8:17 PM", icon: bluetick(), msg: Reactmsg() },
//         { id: 7, message: receiveMessage4(), type: "receivemsg", time: "8:16 PM" },
//         { id: 8, message: sentMessage1("Thank You Mam"), type: "sentmsg", time: "8:17 PM", icon: bluetick() },
//     ];
//     const tabs = [
//         { label: "All", count: 1 },
//         { label: "👍", count: 1 },
//     ];

//     const handleTabPress = (tab: string) => {
//         setSelectedTab(tab);
//     };

//     return (
//         <Fragment>
//             <View style={{flex:1,backgroundColor:isDark()?colors.black:colors.white}}>
//                 {/* <StatusBar backgroundColor={colors.purpleVar3} /> */}
//                 <View style={{ flex: 1 }}>
//                     <HeaderChatView backgroundColor={colors.purpleVar3} profileNavigate={screenName.UserProfile} videoNavigate={screenName.SingleVideoCall} audioNavigate={screenName.SingleAudioCallRing} title={labels.horaceKeene} subTitle={labels.online} />
//                     <ImageBackground
//                         source={ChatBackgroundImg}
//                         style={styles.backgroundImage}
//                         imageStyle={{ opacity: 0.1, backgroundColor: 'rgba(200, 180, 230, 0.5)' }}
//                     >
//                         <View style={[{ alignItems: 'center' }, pt10]}>
//                             <DayDetails />
//                         </View>
//                         <ScrollView style={{ flex: 1 }}>
//                             {chatMessages.map((message, index) => (
//                                 <View style={[message.type === 'sentmsg' ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }, { paddingTop: 10, marginHorizontal: 20 }]}
//                                     key={message.id}>
//                                     <View style={{ flexDirection: 'row' }}>
//                                         <Text style={{ fontSize: 14, color: colors.greyVar4 }}>{message.time}</Text>
//                                         <Text style={pl6}> {message.icon}</Text>
//                                     </View>
//                                     <Text>{message.message}</Text>
//                                     <Text>{message.msg}</Text>
//                                 </View>
//                             ))}
//                         </ScrollView>
//                         <FooterChatView />
//                     </ImageBackground>
//                     <View>
//                         <Modal
//                             style={{ margin: 0, position: 'absolute', bottom: 0, width: '100%' }}
//                             isVisible={isModalVisible}
//                             onBackdropPress={closeModal}
//                         >
//                             <TouchableWithoutFeedback onPress={closeModal}>
//                                 <View style={{ flex: 1 }}>
//                                     <View
//                                         style={{
//                                             height: DevHeight / 3.1,
//                                             backgroundColor: colors.white,
//                                             paddingTop: 40,
//                                             borderTopLeftRadius: 30,
//                                             borderTopRightRadius: 30
//                                         }}
//                                     >
//                                         <View>
//                                             <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
//                                             {selectedTab === "All" && (
//                                                 <All />
//                                             )}
//                                             {selectedTab === "👍" && <All />}
//                                         </View>
//                                     </View>
//                                 </View>
//                             </TouchableWithoutFeedback>
//                         </Modal>
//                     </View>
//                 </View>
//             </View>
//         </Fragment>
//     )
    
// }

// const styles = StyleSheet.create({

//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     receiveMsgCard: {
//         backgroundColor: colors.white,
//         borderTopRightRadius: 8,
//         borderBottomRightRadius: 8,
//         borderBottomLeftRadius: 8,
//         padding: 10
//     },
//     sndMsgCard: {
//         backgroundColor: colors.purpleVar2,
//         borderTopLeftRadius: 8,
//         borderBottomRightRadius: 8,
//         borderBottomLeftRadius: 8,
//         padding: 10
//     },

//     footerView: {
//         backgroundColor: colors.white,
//         height: 100,
//         padding: 10,
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//         overflow: 'hidden',
//         borderTopStartRadius: 10,

//     },
//     sideMenuStyle: {
//         margin: 0,
//         width: DevWidth * 0.65,

//     },
//     modal: {
//         backgroundColor: 'white',
//         height: 200,
//         margin: 0, // This is the important style you need to set
//         alignItems: undefined,
//         justifyContent: undefined,
//     },
//     tabContainer: {
//         flexDirection: 'row',
//         marginHorizontal: 10,
//     },
//     tabText: {
//         fontSize: 18,
//         fontWeight: '500',
//         flexDirection: 'row',

//     },
//     roundNumber: {
//         height: 24,
//         width: 24,
//         borderRadius: 12,
//         marginLeft: 10,
//         backgroundColor: 'rgba(255, 255, 255, 0.5)',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     roundNumberText: {

//         color: colors.greyVar4,
//         fontSize: 12,
//     },

// });



// export default ChatView


import React, { Fragment, useState ,useRef} from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image,Animated,PanResponder } from 'react-native';
import { colors } from '../../utils/colors';
import { flexRow, pb10, pl15, pl6, pt10, spaceBetween } from '../../components/commonStyles';
import { H14BlackText, H16BlackText } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { FooterChatView, HeaderChatView, receiveMessage1, receiveMessage2, receiveMessage3, receiveMessage4, sentMessage1, sentMessage2, sentMessage3 } from './Messagecomponents/messages';
import CustomIcon from '../../utils/Icons';
import Modal from 'react-native-modal';
import { DevHeight, DevWidth } from '../../utils/device';
import { screenName } from '../../utils/screenName';
import { ChatBackgroundImg, ProfileImg } from '../../utils/png';
import { isDark } from '../../Theme/ThemeContext';

export type chatViewProps = {
}

interface TabControlProps {
    tabs: { label: string; count?: number }[];
    activeTab: string;
    onTabPress: (tab: string) => void;
}

export const TabControl: React.FC<TabControlProps> = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={styles.tabContainer}>
            {tabs.map((tabInfo) => (
                <View style={{ marginLeft: 15 }} key={tabInfo.label}>
                    <TouchableOpacity
                        style={[
                            { borderBottomWidth: activeTab === tabInfo.label ? 3 : 0 },
                            { borderBottomColor: activeTab === tabInfo.label ? colors.purpleVar3 : "" },
                        ]}
                        onPress={() => onTabPress(tabInfo.label)}
                    >
                        <View style={[flexRow, pb10]}>
                            <Text
                                style={[
                                    styles.tabText,
                                    { color: activeTab === tabInfo.label ? colors.purpleVar3 : colors.purpleVar3 },
                                ]}
                            >
                                {tabInfo.label}
                            </Text>
                            {tabInfo.count !== undefined && tabInfo.count > 0 && (
                                <View
                                    style={[
                                        styles.roundNumber, { backgroundColor: 'rgba(128, 0, 128, 0.2)' },
                                    ]}
                                >
                                    <Text style={styles.roundNumberText}>{tabInfo.count}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

export const DayDetails = () => {
    return (
        <>
            <View style={{ height:28, backgroundColor: colors.white, width:115, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 100 }}>
                <Text style={{fontSize:12,fontWeight:'400',color:'#0A0A0A'}}>{labels.chatViewToday}</Text>
            </View>
        </>
    );
    

};

export const bluetick = () => {
    return (
        <View>
            <CustomIcon name='check-all' type="MaterialCommunityIcons" color={colors.blueVar1} size={16} />
        </View>
    )
}

// SwipableText component for individual text components
const SwipableText = ({ text, onSwipeRight }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            if (gestureState.dx > 0) {
                Animated.event(
                    [
                        null,
                        {
                            dx: pan.x,
                        },
                    ],
                    { useNativeDriver: false }
                )(event, gestureState);
            }
        },
        onPanResponderRelease: () => {
            if (pan.x._value > 200) {
                onSwipeRight(); // Trigger the "hai" text display
            }

            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
            }).start();
        },
    });

    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }],
            }}
            {...panResponder.panHandlers}
        >
            <Text>{text}</Text>
        </Animated.View>
    );
};

const ChatView = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('All');
    const [isHaiVisible, setHaiVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const Reactmsg = () => {
        return (
            <TouchableOpacity style={{ paddingTop: 5 }} onPress={toggleModal}>
                <View style={{ backgroundColor: colors.white, height: 22, width: 40, borderRadius: 10, justifyContent: "space-evenly", flexDirection: 'row', marginRight: 230 }}>
                    <H14BlackText>1</H14BlackText>
                    <H14BlackText>👍</H14BlackText>
                </View>
            </TouchableOpacity>
        )
    }

    const All = () => {
        return (
            <View style={{ marginHorizontal: 25, marginTop: 20 }}>
                <View style={[flexRow, spaceBetween]}>
                    <View style={flexRow}>
                        <Image source={ProfileImg} />
                        <View style={[pl15, spaceBetween]}>
                            <H14BlackText>Horace Keene</H14BlackText>
                            <Text>Active 4Min Ago</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <H16BlackText>👍</H16BlackText>
                    </View>
                </View>
            </View>
        )
    }

    const chatMessages = [
        { id: 1, message: receiveMessage1(), type: "receivemsg", time: "8:16 PM" },
        { id: 2, message: sentMessage1("Good Morning Mam"), type: "sentmsg", time: "8:17 PM", icon: bluetick() },
        { id: 3, message: receiveMessage2(), type: "receivemsg", time: "8:16 PM" },
        { id: 4, message: sentMessage2(), type: "sentmsg", time: "8:17 PM", icon: bluetick() },
        { id: 5, message: receiveMessage3(), type: "receivemsg", time: "8:16 PM" },
        { id: 6, message: sentMessage3(), type: "sentmsg", time: "8:17 PM", icon: bluetick(), msg: Reactmsg() },
        { id: 7, message: receiveMessage4(), type: "receivemsg", time: "8:16 PM" },
        { id: 8, message: sentMessage1("Thank You Mam"), type: "sentmsg", time: "8:17 PM", icon: bluetick() },
    ];

    const tabs = [
        { label: "All", count: 1 },
        { label: "👍", count: 1 },
    ];

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };

    // Function to show "hai" text
    const showHaiText = () => {
       console.log('hii')
    };

    return (
        <Fragment>
            <View style={{ flex: 1, backgroundColor: isDark() ? colors.black : colors.white }}>
                {/* <StatusBar backgroundColor={colors.purpleVar3} /> */}
                <View style={{ flex: 1 }}>
                    <HeaderChatView backgroundColor={colors.purpleVar3} profileNavigate={screenName.UserProfile} videoNavigate={screenName.SingleVideoCall} audioNavigate={screenName.SingleAudioCallRing} title={labels.horaceKeene} subTitle={labels.online} />
                    <ImageBackground
                        source={ChatBackgroundImg}
                        style={styles.backgroundImage}
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
                                        <Text style={{ fontSize: 12, color: colors.greyVar3,fontWeight:'400' }}>{message.time}</Text>
                                        <Text style={pl6}> {message.icon}</Text>
                                    </View>
                                    {/* Use SwipableText for message.message and message.msg */}
                                    <SwipableText text={message.message} onSwipeRight={showHaiText} />
                                    <SwipableText text={message.msg} onSwipeRight={showHaiText} />
                                </View>
                            ))}
                        </ScrollView>
                        <FooterChatView  onSwipeRight={showHaiText} />

                    </ImageBackground>
                    <View>
                        <Modal
                            style={{ margin: 0, position: 'absolute', bottom: 0, width: '100%' }}
                            isVisible={isModalVisible}
                            onBackdropPress={closeModal}
                        >
                            <TouchableWithoutFeedback onPress={closeModal}>
                                <View style={{ flex: 1 }}>
                                    <View
                                        style={{
                                            height: DevHeight / 3.1,
                                            backgroundColor: colors.white,
                                            paddingTop: 40,
                                            borderTopLeftRadius: 30,
                                            borderTopRightRadius: 30
                                        }}
                                    >
                                        <View>
                                            <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                                            {selectedTab === "All" && (
                                                <All />
                                            )}
                                            {selectedTab === "👍" && <All />}
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                </View>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    receiveMsgCard: {
        backgroundColor: colors.white,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 10
    },
    sndMsgCard: {
        backgroundColor: colors.purpleVar2,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 10
    },
    footerView: {
        backgroundColor: colors.white,
        height: 100,
        padding: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
        borderTopStartRadius: 10,
    },
    sideMenuStyle: {
        margin: 0,
        width: DevWidth * 0.65,
    },
    modal: {
        backgroundColor: 'white',
        height: 200,
        margin: 0, // This is the important style you need to set
        alignItems: undefined,
        justifyContent: undefined,
    },
    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    tabText: {
        fontSize: 18,
        fontWeight: '500',
        flexDirection: 'row',
    },
    roundNumber: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginLeft: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundNumberText: {
        color: colors.greyVar4,
        fontSize: 12,
    },
});

export default ChatView;


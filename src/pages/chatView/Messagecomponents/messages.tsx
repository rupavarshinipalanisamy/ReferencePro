import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../../utils/colors';
import { flex1, flexRow, pt10, pl10, spaceBetween, alignItemsCenter, justyfyCenter, pt5, pl13, p5, mt5, borderRadius10, spaceAround } from '../../../components/commonStyles';
import CustomIcon from '../../..//utils/Icons';
import { H14BlackText, H14blueVar1Text, H15Grey, H16WhiteText, H16fontNormalBlue, H16fontNormalGray, H16fontSemiBoldBluevar4, H16fontSemiBoldGreyvar4, H18WhiteText } from '../../../components/commonText';
import { labels } from '../../../utils/labels';
import { DevHeight, DevWidth } from '../../../utils/device';
import AudioImg from '../../../../assets/images/Audio.svg'
import SendImg1 from '../../../../assets/images/sentMsg.svg'
import SendImg2 from '../../../../assets/images/sendMsg1.svg'
import { useNavigation } from '@react-navigation/native';
import { GroupImg1Img, ProfileImg } from '../../../utils/png';
import { CustomModal } from '../../../components/commonComponents';
import { GroupChatViewModalData } from '../../../utils/data/groupsData';
import { CallThreeDotsOption } from '../../../utils/data/modalData';
import { isDark } from '../../../Theme/ThemeContext';
import { screenName } from '../../../utils/screenName';

const chatViewModalData = [
    {
        id: 1,
        iconName: 'person-circle-outline',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'Ionicons',
        text: labels.ViewContact,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 2,
        iconName: 'photo',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'FontAwesome',
        text: labels.Media,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 3,
        iconName: 'search',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'Feather',
        text: labels.Search,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 4,
        iconName: 'microphone-off',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'MaterialCommunityIcons',
        text: labels.MuteNotification,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 5,
        iconName: 'window-maximize',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'FontAwesome',
        text: labels.Wallpaper,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 6,
        iconName: 'thumbs-down',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'Feather',
        text: labels.Report,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 7,
        iconName: 'block-flipped',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'MaterialIcons',
        text: labels.Block,
        screenName: screenName.ChooseWallpaper,

    },
    {
        id: 8,
        iconName: 'trash-2',
        iconSize: 20,
        iconColor: colors.blackVar1,
        iconType: 'Feather',
        text: labels.ClearChat,
        screenName: screenName.ChooseWallpaper,

    },
]


interface HeaderChatViewProps {
    title: string;
    subTitle: string;
    backgroundColor: string,
    onPress?: () => void;
    profileNavigate: string;
    videoNavigate: string;
    audioNavigate: string;
    threeDotOptionNavigate?: () => void;
    groups?: boolean;
    call?: boolean;
    clearChatopenModal?: any;

}

export const HeaderChatView = (props: HeaderChatViewProps) => {
    const [optionModal, setOptionModal] = useState(false);
    const [groupOptionModal, setGroupOptionModal] = useState(false);
    const [callOptionModal, setCallOptionModal] = useState(false);

    const navigation = useNavigation();

    const handleOptionModal = () => {
        setOptionModal(!optionModal)
    }

    const handleGroupOptionModal = () => {
        setGroupOptionModal(!groupOptionModal);
    }

    const handleCallOptionModal = () => {
        setCallOptionModal(!callOptionModal);
    }

    const OptionModalComponent = () => {
        return (
            <View>
                {
                    chatViewModalData.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}
                                onPress={() => {
                                    if (item.id === 8) {
                                        props.clearChatopenModal(8);
                                    } else {
                                        navigation.navigate(item.screenName as never);
                                    }
                                }}
                            >
                                <View style={flexRow}>
                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H15Grey>{item.text}</H15Grey>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const GroupOptionModalComponent = () => {
        return (
            <View>
                {
                    GroupChatViewModalData.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                                <View style={flexRow}>
                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H15Grey>{item.text}</H15Grey>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const CallOptionModalComponent = () => {
        const navigation = useNavigation();
        return (
            <View>
                {
                    CallThreeDotsOption.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                                <View style={[flexRow]}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H15Grey>{item.name}</H15Grey>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={{ height: DevWidth / 4.2, backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, borderBottomRightRadius: 25, borderBottomLeftRadius: 25, elevation: 1 }}>
            <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                <View style={[flexRow]}>
                    <View style={pt10} >
                        <CustomIcon name='chevron-left' color={colors.black} size={20} type="entypo" />
                    </View>
                    <View style={[flexRow, spaceBetween, flex1]}>
                        <TouchableOpacity style={[pl10, flexRow]} onPress={() => { navigation.navigate(props.profileNavigate as never) }}>
                            {props.groups ? <Image source={GroupImg1Img} /> :
                                <Image source={ProfileImg} />
                            }

                            <View style={pl13}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: colors.black }}>{props.title}</Text>
                                <Text style={{ color: colors.greyVar4, fontSize: 14, fontWeight: '400' }}>{props.subTitle}</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={[flexRow, alignItemsCenter]}>
                            <TouchableOpacity style={pl10} onPress={() => { navigation.navigate(props.videoNavigate as never) }}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={20} color={colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(props.audioNavigate as never)} style={pl10}>
                                <CustomIcon name='phone' type="Feather" size={16} color={colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.groups ? handleGroupOptionModal : (props.call ? handleCallOptionModal : handleOptionModal)} style={pl10}>
                                <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={20} color={colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.47}
                modalData={<OptionModalComponent />}
                marginTop={48}
                onClose={() => setOptionModal(false)}
            />
            <CustomModal
                isVisible={groupOptionModal}
                width={DevWidth * 0.47}
                height={DevHeight * 0.4}
                modalData={<GroupOptionModalComponent />}
                marginTop={48}
                onClose={() => setGroupOptionModal(false)}
            />
            <CustomModal
                isVisible={callOptionModal}
                width={DevWidth * 0.55}
                height={DevHeight * 0.4}
                modalData={<CallOptionModalComponent />}
                marginTop={48}
                onClose={() => setGroupOptionModal(false)}
            />
        </View>
    )

}
export const FooterChatView = () => {
    return (
        <View style={{ backgroundColor: colors.white, alignItems: 'center', height: DevHeight / 9.5, paddingHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: DevWidth / 1.3, height: 40, backgroundColor: 'white', borderColor: colors.greyVar2, borderWidth: 2, borderRadius: 6, marginTop: 30, bottom: 8 }}>
                <View style={{ flexDirection: 'row', width: '80%', height: 40, paddingHorizontal: 2, alignItems: 'center' }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <CustomIcon name='smiley' type="octicons" size={16} color={colors.greyVar4} />
                        <TextInput
                            style={{ flex: 1, marginLeft: 5, color: colors.greyVar4, fontSize: 14, fontWeight: '400' }}
                            placeholder="Type here..."
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 10, transform: [{ rotate: '45deg' }] }}>
                            <CustomIcon name='paperclip' type="Feather" size={18} color={colors.greyVar4} />
                        </View>
                        <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={20} color={colors.greyVar4} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: colors.purpleVar3, height: 40, width: 40, borderRadius: 12, marginLeft: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', bottom: 15 }}>
                <CustomIcon name='paper-plane' type="font-awesome" color={colors.white} size={14} />
            </View>
        </View>
    )
}



export const ReplyFooterView = ({onIconClick}:any) => {
    return (
        <View style={{ backgroundColor: colors.white, alignItems: 'center', height: DevHeight / 5, paddingHorizontal:20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row' }}>
            <View style={{ width: '86%', height: 117, backgroundColor: 'white', borderColor: colors.greyVar2, borderWidth: 2, borderRadius: 10, marginTop: 30, bottom:8}}>
                <View style={{
                    width: '98%', height: 67, backgroundColor: colors.purpleVar1, marginTop: 5, borderRadius: 5,marginHorizontal:3,
                    borderLeftWidth: 1.5, borderLeftColor: colors.purpleVar3
                }}>
                    <View style={{ marginHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text style={{ color: colors.purpleVar3, fontWeight: '500', fontSize: 15, lineHeight: 23 }}>Horace Keene</Text>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}   onPress={() => onIconClick()}  >
                                <CustomIcon name='x' type="Feather" size={16} color={colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 14, color: colors.blackVar1, fontWeight: '400', lineHeight: 20 }}>Hello <Text style={{ color: colors.blueVar1 }}>@Alex</Text> Good Morning</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '80%', height: 40, paddingHorizontal:2, alignItems: 'center'}}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <CustomIcon name='smiley' type="octicons" size={16} color={colors.greyVar4} />
                        <TextInput
                            style={{ flex: 1, marginLeft: 5,color:colors.greyVar4,fontSize:14,fontWeight:'400'}}
                            placeholder="Type here..."
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight:10, transform: [{ rotate: '45deg' }]}}>
                            <CustomIcon name='paperclip' type="Feather" size={18} color={colors.greyVar4} />
                        </View>
                        <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={20} color={colors.greyVar4} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: colors.purpleVar3, height: 40, width: 40, borderRadius: 12, marginLeft: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', bottom:15}}>
                <CustomIcon name='paper-plane' type="font-awesome" color={colors.white} size={14} />
            </View>
        </View>
    );
}

// export const ReplyFooterView = ({ onIconClick }: any) => {
//     return (
//         <View>
//             <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => onIconClick()}  >
//                 <CustomIcon name='x' type="Feather" size={16} color={colors.greyVar4} />
//             </TouchableOpacity>

//         </View>


//     );
// }
export const FooterAdminChatView = () => {
    return (
        <View style={[{ backgroundColor: colors.white, height: DevHeight / 8, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20 }, alignItemsCenter]}>
            <View style={[{ height: DevHeight * 0.06, width: DevWidth * 0.88, backgroundColor: colors.whiteVar1, borderWidth: 1, borderColor: colors.greyVar2 }, mt5, borderRadius10, alignItemsCenter, justyfyCenter]}>
                <H16fontSemiBoldGreyvar4>Only <H16fontSemiBoldBluevar4>Admins</H16fontSemiBoldBluevar4> can send messages</H16fontSemiBoldGreyvar4>
            </View>
        </View>
    )
}


export const receiveMessage1 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={[styles.receiveMsgCard]}>
                <H14BlackText>
                    {labels.helloAlex}
                </H14BlackText>
            </View>
        </View>
    );
};
export const receiveMessage2 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={[styles.receiveMsgCard, flexRow]}>
                <CustomIcon name="play-circle-o" size={20} color={colors.purpleVar3} type="font-awesome" />
                <View style={pl10}>
                    <AudioImg />
                </View>
                <Text style={pl13}>00:30</Text>
            </View>
        </View >
    );
};
export const receiveMessage3 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={styles.receiveMsgCard}>
                <View style={[{ backgroundColor: colors.whiteVar1, alignItems: 'center', padding: 10, width: DevWidth / 1.4, borderRadius: 8 }, flexRow, spaceBetween]}>
                    <View style={[flexRow]}>
                        <View style={justyfyCenter}>
                            <CustomIcon name='document-text-outline' type="Ionicons" color={colors.greyVar4} size={20} />
                        </View>
                        <View style={pl13}>
                            <H14BlackText>Design_Brief.pdf</H14BlackText>
                            <H14BlackText>243 KB</H14BlackText>
                        </View>
                    </View>
                    <CustomIcon name='download' type="Feather" color={colors.greyVar4} size={20} />
                </View>
                <View style={pt5}>
                    <H14BlackText>{labels.checkThisFile}</H14BlackText>
                </View>
            </View>
        </View >

    );
};
export const receiveMessage4 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={styles.receiveMsgCard}>
                <ImageBackground
                    source={require('../../../../assets/images/receivemsg.png')}
                    style={{ height: 180, width: DevWidth / 1.4 }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <CustomIcon name='play' type="Feather" size={20} color={colors.white} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 24, width: 75, borderRadius: 10, alignItems: 'center', justifyContent: "space-evenly", bottom: 10, flexDirection: 'row', marginLeft: 15 }}>
                        <View style={{ marginTop: 3 }}>
                            <CustomIcon name='file-download' type="MaterialIcons" size={14} color={colors.white} />
                        </View>
                        <Text style={{ color: colors.white, fontSize: 12, fontWeight: '400' }}>2.8 MB</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

export const sentMessage1 = (text: string) => {
    return (
        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 20 }}>
            <View style={[styles.sndMsgCard]}>
                <H14BlackText>
                    {text}
                </H14BlackText>
            </View>
        </View >
    );
};
export const sentMessage2 = () => {
    return (
        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 5 }}>
            <View style={[styles.sndMsgCard]}>
                <H14BlackText>
                    This is my new website design
                </H14BlackText>
            </View>
            <View style={pt10}>
                <View style={[styles.sndMsgCard]}>
                    <SendImg1 />
                </View></View>

        </View >
    );
};
export const sentMessage3 = () => {
    return (
        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 5 }}>
            <View style={styles.sndMsgCard}>
                <SendImg2 />
                <H14blueVar1Text style={p5}>{labels.chatLink}</H14blueVar1Text>
            </View>

        </View >
    );
};
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
        backgroundColor: colors.purpleVar1,
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

});
import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Modal as RNModal, Platform } from 'react-native';
import { colors } from '../../../utils/colors';
import { flex1, flexRow, pt10, pl10, spaceBetween, alignItemsCenter, justyfyCenter, pt5, pl13, p5, mt5, borderRadius10, spaceAround, mb20, ml5, pt25, pt15, mt3, pr10, p4, mh10, pv10, ph2, ml15, mr10, p10, mt20, borderRadius20, mv5 } from '../../../components/commonStyles';
import CustomIcon from '../../..//utils/Icons';
import { H12BlackText, H12DefaultGreyVar3, H12GreyVar8, H12font400Grey, H14BlackText, H14GreyVar4Bold400, H14GreyVar4Bold400Text, H14blackVar1bold400Text, H14blueVar1Text, H14font400grey3black2, H15Blackvar2Bold500, H15Grey, H15PurpletoGrey, H16WhiteText, H16fontNormalBlue, H16fontNormalGray, H16fontSemiBoldBluevar4, H16fontSemiBoldGreyvar4, H18WhiteText, H20font600BlackVar2 } from '../../../components/commonText';
import { labels } from '../../../utils/labels';
import { DevHeight, DevWidth } from '../../../utils/device';
import AudioImg from '../../../../assets/images/Audio.svg'
import SendImg1 from '../../../../assets/images/sentMsg.svg'
import SendImg2 from '../../../../assets/images/sendMsg1.svg'
import { useNavigation } from '@react-navigation/native';
import { GroupImg1Img, ProfileImg } from '../../../utils/png';
import { CustomModal } from '../../../components/commonComponents';
import { GroupChatViewModalData } from '../../../utils/data/groupsData';
import { CallThreeDotsOption, HaederChangechatViewModalData, SendMsgModalData, chatViewModalData } from '../../../utils/data/modalData';
import { isDark } from '../../../Theme/ThemeContext';
import { screenName } from '../../../utils/screenName';
import Modal from 'react-native-modal';
import { attachmentData } from '../../../utils/data/chatsData';
import { Bluetick, ForwardView, Tick } from '../../../components/chatViewComponents';
import { EditModal, EditModal2 } from '../../../components/commonModal';
import { ChatViewCommonHeader, FooterFirstView, FooterIconView, FooterSecondView, ReplyFooterSecondView, ReplyFooterThirdView } from '../../../styledComponent/styledComponent';
import { RadioButton, ReceiveMsgCard, RowSpaceAlignCenter, RowSpaceBetween, SendMsgCard } from '../../../components/commonView';



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
                            <TouchableOpacity key={item.id} style={[p4,mh10,pv10]}
                                onPress={() => {
                                    if (item.id === 8) {
                                        setOptionModal(false)
                                        props.clearChatopenModal(8);
                                    } else {
                                        setOptionModal(false)
                                        navigation.navigate(item.screenName as never);
                                    }
                                }}
                            >
                                <View style={flexRow}>
                                    <View style={[alignItemsCenter, justyfyCenter]}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} color={isDark() ? colors.greyVar3 : colors.blackVar1} type={item.iconType} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14blackVar1bold400Text>{item.text}</H14blackVar1bold400Text>
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
                            <TouchableOpacity key={item.id} style={[p4,mh10,pv10]}>
                                <View style={flexRow}>
                                    <View style={[alignItemsCenter, justyfyCenter]}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14blackVar1bold400Text>{item.text}</H14blackVar1bold400Text>
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
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)} style={[p4,mh10,pv10]}>
                                <View style={[flexRow]}>
                                    <View style={[alignItemsCenter, justyfyCenter]}>
                                        <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={isDark() ? colors.greyVar3 : colors.blackVar1} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14blackVar1bold400Text>{item.name}</H14blackVar1bold400Text>
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
        <ChatViewCommonHeader style={{ backgroundColor: isDark() ? colors.darkModeVar1 : colors.white }}>
            <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                <View style={[flexRow]}>
                    <TouchableOpacity style={{ paddingTop: 12 }} onPress={() => { navigation.goBack() }} >
                        <CustomIcon name='chevron-left' color={isDark() ? colors.white : colors.black} size={15} type="entypo" />
                    </TouchableOpacity>
                    <View style={[flexRow, spaceBetween, flex1]}>
                        <TouchableOpacity style={[pl10, flexRow]} onPress={() => { navigation.navigate(props.profileNavigate as never) }}>
                            {props.groups ? <Image source={GroupImg1Img} /> :
                                <Image source={ProfileImg} />
                            }
                            <View style={pl13}>
                                <H15Blackvar2Bold500 style={{ lineHeight: 23 }}>{props.title}</H15Blackvar2Bold500>
                                <H14GreyVar4Bold400Text style={{ lineHeight: 20 }}>{props.subTitle}</H14GreyVar4Bold400Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[flexRow, alignItemsCenter]}>
                            <TouchableOpacity style={pl10} onPress={() => { navigation.navigate(props.videoNavigate as never) }}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(props.audioNavigate as never)} style={pl10}>
                                <CustomIcon name='phone' type="Feather" size={16} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.groups ? handleGroupOptionModal : (props.call ? handleCallOptionModal : handleOptionModal)} style={pl10}>
                                <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.47}
                modalData={<OptionModalComponent />}
                marginTop={Platform.OS === 'ios' ? 100 : 48}
                onClose={() => setOptionModal(false)}
            />
            <CustomModal
                isVisible={groupOptionModal}
                width={DevWidth * 0.47}
                height={DevHeight * 0.4}
                modalData={<GroupOptionModalComponent />}
                marginTop={Platform.OS === 'ios' ? 100 : 48}
                onClose={() => setGroupOptionModal(false)}
            />
            <CustomModal
                isVisible={callOptionModal}
                width={DevWidth * 0.55}
                height={DevHeight * 0.4}
                modalData={<CallOptionModalComponent />}
                marginTop={Platform.OS === 'ios' ? 100 : 48}
                onClose={() => setCallOptionModal(false)}
            />
        </ChatViewCommonHeader>
    )

}


export const LongPressedHaeder = ({ messageType }) => {


    const [optionModal, setOptionModal] = useState(false);

    const [sendMsgMdl, setSendMsgMdl] = useState(false);
    const handleOptionModal = () => {
        if (messageType === 'sentmsg') {
            setSendMsgMdl(!sendMsgMdl);

        }
        else {
            setOptionModal(!optionModal);
        }
    };
    const OptionModalComponent = () => {
        return (
            <View>
                {
                    HaederChangechatViewModalData.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={[p4, mh10, pv10]}>
                                <View style={flexRow}>
                                    <View style={[alignItemsCenter, justyfyCenter]}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} color={isDark() ? colors.greyVar3 : colors.blackVar1} type={item.iconType} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14blackVar1bold400Text>{item.text}</H14blackVar1bold400Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }


    const SendMsgModal = () => {
        const [isdoubleModal, setDoubleModal] = useState(false);

        const navigation = useNavigation()
        const openBothModal = () => {
            setDoubleModal(true)
        }

        return (
            <View>
                {
                    SendMsgModalData.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={[p4, mh10, pv10]}
                                onPress={() => {
                                    if (item.id === 3) {
                                        console.log('opensentmsg modal')

                                        openBothModal()

                                    } else {
                                        setSendMsgMdl(false)
                                        navigation.navigate(screenName.MessageInfo as never);
                                    }
                                }}
                            >
                                <View style={flexRow}>
                                    <View style={[alignItemsCenter, justyfyCenter]}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} color={isDark() ? colors.greyVar3 : colors.blackVar1} type={item.iconType} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14blackVar1bold400Text>{item.text}</H14blackVar1bold400Text>

                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

                {isdoubleModal && (
                    <EditModal2 isVisible={true} onPress={() => setDoubleModal(false)} />
                )}

            </View>
        )
    }
    const navigation = useNavigation()

    return (

        <ChatViewCommonHeader style={{ height: DevWidth / 4.2, backgroundColor: isDark() ? colors.darkModeVar1 : colors.white }}>
            <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                <View style={[flexRow]}>

                    <View style={[flexRow, spaceBetween, flex1]}>
                        <View style={[flexRow]} >
                            <View style={pt5}>
                                <CustomIcon name='chevron-left' color={isDark() ? colors.white : colors.greyVar4} size={20} type="entypo" />
                            </View>
                            <View style={[pl13, justyfyCenter]}>
                                <H20font600BlackVar2>1</H20font600BlackVar2>
                            </View>
                        </View>
                        <View style={[flexRow, alignItemsCenter]}>
                            <TouchableOpacity style={pl10} >
                                <CustomIcon name='reply-outline' type="MaterialCommunityIcons" size={24} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity style={pl10}>
                                <CustomIcon name='star' color={isDark() ? colors.white : colors.greyVar4} size={18} type="Feather" />
                            </TouchableOpacity>
                            <TouchableOpacity style={pl10}>
                                <CustomIcon name='trash-2' type="Feather" size={18} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity style={pl10} onPress={() => navigation.navigate(screenName.ForwardTo as never)} >
                                <CustomIcon name='share-outline' type="MaterialCommunityIcons" size={24} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                            <TouchableOpacity style={pl10} onPress={handleOptionModal}>
                                <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.white : colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <CustomModal
                isVisible={sendMsgMdl}
                width={DevWidth * 0.47}
                modalData={<SendMsgModal />}
                marginTop={Platform.OS === 'ios' ? 100 : 48}
                onClose={handleOptionModal}
            />
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.47}
                modalData={<OptionModalComponent />}
                marginTop={Platform.OS === 'ios' ? 100 : 48}
                onClose={handleOptionModal}
            />


        </ChatViewCommonHeader>

    )
}
export const FooterChatView = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <FooterFirstView style={{ backgroundColor: isDark() ? colors.darkModeVar1 : colors.white }}>
            <FooterSecondView style={{ backgroundColor: isDark() ? colors.darkModeVar6 : colors.white, borderColor: isDark() ? 'rgba(78,80,114,0.5)' : colors.greyVar2 }}>
                <RadioButton style={[ph2, { width: '80%', height: 40 }]}>
                    <RowSpaceAlignCenter style={ml15}>
                        <CustomIcon name='smiley' type="octicons" size={16} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                        <TextInput
                            style={[flex1, ml5, { fontSize: 14, fontWeight: '400', color: isDark() ? colors.greyVar3 : colors.greyVar4 }]}
                            placeholder="Type here..."
                            placeholderTextColor={isDark() ? colors.greyVar3 : colors.greyVar4}
                        />
                    </RowSpaceAlignCenter>
                    <View style={flexRow}>
                        <TouchableOpacity onPress={openModal} style={[mr10, { transform: [{ rotate: '45deg' }] }]}>
                            <CustomIcon name='paperclip' type="Feather" size={18} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                        </TouchableOpacity>
                        <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                    </View>
                </RadioButton>
            </FooterSecondView>
            <FooterIconView style={{ bottom: Platform.OS === 'ios' ? 20 : 16 }}>
                <CustomIcon name='microphone-outline' type="MaterialCommunityIcons" color={colors.white} size={18} />
            </FooterIconView>
            <RNModal transparent={true} visible={isModalVisible} onRequestClose={closeModal}>
                <View style={[flex1]}>
                    <Modal
                        animationInTiming={10}
                        animationOutTiming={10}
                        animationIn="slideInRight"
                        isVisible={isModalVisible}
                        onBackdropPress={closeModal}
                        backdropOpacity={0}
                        style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            bottom: 50
                        }}
                    >
                        <View style={[p10, { backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, elevation: 4, borderRadius: 8, width: DevWidth * 0.47 }]}>
                            {
                                attachmentData.map((item) => {
                                    return (
                                        <TouchableOpacity key={item.id} onPress={() => { }} style={[p4, mh10, pv10]}>
                                            <View style={[flexRow]}>
                                                <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={isDark() ? colors.greyVar3 : colors.blackVar1} />
                                                <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                                    <H14blackVar1bold400Text>{item.name}</H14blackVar1bold400Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </Modal>
                </View>
            </RNModal>
        </FooterFirstView>
    )
}



export const ReplyFooterView = ({ onIconClick }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }
    return (
        <FooterFirstView style={{ backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, alignItems: 'center', height: DevHeight / 5, paddingHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row' }}>
            <ReplyFooterSecondView style={{ width: '86%', height: 117, backgroundColor: isDark() ? colors.darkModeVar6 : colors.white, borderColor: isDark() ? 'rgba(78,80,114,0.5)' : colors.greyVar2, borderWidth: 2, borderRadius: 10, marginTop: 30, bottom: 8 }}>
                <ReplyFooterThirdView style={{ backgroundColor: isDark() ? colors.darkModeVar4 : colors.purpleVar1 }}>
                    <View style={mh10}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Text style={{ color: colors.purpleVar3, fontWeight: '500', fontSize: 15, lineHeight: 23 }}>Horace Keene</Text>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => onIconClick()}  >
                                <CustomIcon name='x' type="Feather" size={16} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                        <H14GreyVar4Bold400>Hello <Text style={{ color: colors.blueVar1 }}>@Alex</Text> Good Morning</H14GreyVar4Bold400>
                    </View>
                </ReplyFooterThirdView>
                <View style={[flexRow, alignItemsCenter, ph2, { width: '80%', height: 40 }]}>
                    <RowSpaceAlignCenter style={ml15}>
                        <CustomIcon name='smiley' type="octicons" size={16} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                        <TextInput
                            style={[flex1, ml5, { color: colors.greyVar4, fontSize: 14, fontWeight: '400' }]}
                            placeholder="Type here..."
                            placeholderTextColor={isDark() ? colors.greyVar3 : colors.greyVar4}
                        />
                    </RowSpaceAlignCenter>
                    <View style={flexRow}>
                        <TouchableOpacity onPress={openModal} style={[mr10, { transform: [{ rotate: '45deg' }] }]}>
                            <CustomIcon name='paperclip' type="Feather" size={18} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                        </TouchableOpacity>
                        <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                    </View>
                </View>
            </ReplyFooterSecondView>
            <FooterIconView style={{ bottom: Platform.OS === 'ios' ? 25 : 16 }}>
                <CustomIcon name='paper-plane' type="font-awesome" color={colors.white} size={14} />
            </FooterIconView>
            <RNModal transparent={true} visible={isModalVisible} onRequestClose={closeModal}>
                <View style={[flex1]}>
                    <Modal
                        animationInTiming={10}
                        animationOutTiming={10}
                        animationIn="slideInRight"
                        isVisible={isModalVisible}
                        onBackdropPress={closeModal}
                        backdropOpacity={0}
                        style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            bottom: 50
                        }}
                    >
                        <View style={[p10, { backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, elevation: 4, borderRadius: 8, width: DevWidth * 0.47 }]}>
                            {
                                attachmentData.map((item) => {
                                    return (
                                        <TouchableOpacity key={item.id} onPress={() => { }} style={[pv10, p4, mh10]}>
                                            <View style={[flexRow]}>
                                                <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={isDark() ? colors.greyVar3 : colors.blackVar1} />
                                                <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                                    <H14blackVar1bold400Text>{item.name}</H14blackVar1bold400Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </Modal>
                </View>
            </RNModal>
        </FooterFirstView>
    );
}

export const FooterAdminChatView = () => {
    return (
        <View style={[{ backgroundColor: colors.white, height: DevHeight / 8, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20 }, alignItemsCenter]}>
            <View style={[{ height: DevHeight * 0.06, width: DevWidth * 0.88, backgroundColor: colors.whiteVar1, borderWidth: 1, borderColor: colors.greyVar2 }, mt5, borderRadius10, alignItemsCenter, justyfyCenter]}>
                <H16fontSemiBoldGreyvar4>Only <H16fontSemiBoldBluevar4>Admins</H16fontSemiBoldBluevar4> can send messages</H16fontSemiBoldGreyvar4>
            </View>
        </View>
    )
}


export const receiveMessage1 = (isDarkTheme) => {
    return (
        <>
            <View>
                <ReceiveMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.white }]}>
                    <H14font400grey3black2>
                        {labels.helloAlex}
                    </H14font400grey3black2>
                </ReceiveMsgCard>
            </View>
        </>
    );
};
export const receiveMessage2 = (isDarkTheme) => {
    return (
        <>
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <ReceiveMsgCard style={[flexRow, { backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.white }]}>
                    <CustomIcon name="play-circle-o" size={20} color={colors.purpleVar3} type="font-awesome" />
                    <View style={pl10}>
                        <AudioImg />
                    </View>
                    <H12DefaultGreyVar3 style={[mt3, pl10]}>00:30</H12DefaultGreyVar3>
                </ReceiveMsgCard>
            </View >
        </>
    );
};
export const receiveMessage3 = (isDarkTheme) => {
    return (
        <>
            <View style={flexRow}>
                <ReceiveMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.white }]}>
                    <View style={[{ backgroundColor: isDark() ? colors.darkModeVar6 : colors.whiteVar1,width: DevWidth / 1.4, borderRadius: 8 },p10, alignItemsCenter,flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <View style={justyfyCenter}>
                                <CustomIcon name='document-text-outline' type="Ionicons" color={isDark() ? colors.greyVar3 : colors.greyVar4} size={16} />
                            </View>
                            <View style={pl13}>
                                <H14blackVar1bold400Text>Design_Brief.pdf</H14blackVar1bold400Text>
                                <H12GreyVar8>243 KB</H12GreyVar8>
                            </View>
                        </View>
                        <CustomIcon name='download' type="Feather" color={isDark() ? colors.greyVar3 : colors.greyVar4} size={16} />
                    </View>
                    <View style={pt5}>
                        <H14font400grey3black2>{labels.checkThisFile}</H14font400grey3black2>
                    </View>
                </ReceiveMsgCard>
                <View style={[{ marginTop: 40 }, pl13]}>
                    <ForwardView />


                </View>
            </View >
        </>

    );
};
export const receiveMessage4 = (isDarkTheme) => {
    return (
        <View >
            <ReceiveMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.white }]}>
                <ImageBackground
                    source={require('../../../../assets/images/receivemsg.png')}
                    style={{ height: 180, width: DevWidth / 1.4 }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <View style={[{ backgroundColor: isDark() ? 'rgba(180, 180, 180,0.5)' : 'rgba(255, 255, 255, 0.5)', height: 40, width: 40},justyfyCenter,alignItemsCenter,mt20,borderRadius20]}>
                            <CustomIcon name='play' type="Feather" size={20} color={isDark() ? colors.black : colors.white} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: isDark() ? 'rgba(180, 180, 180,0.5)' : 'rgba(255, 255, 255, 0.5)', height: 24, width: 75, borderRadius: 10, alignItems: 'center', justifyContent: "space-evenly", bottom: 10, flexDirection: 'row', marginLeft: 15 }}>
                        <View style={{ marginTop: 3 }}>
                            <CustomIcon name='file-download' type="MaterialIcons" size={14} color={isDark() ? colors.black : colors.white} />
                        </View>
                        <H12BlackText>2.8 MB</H12BlackText>
                    </View>
                </ImageBackground>
            </ReceiveMsgCard>
        </View>
    );
};

export const sentMessage1 = (text: string, isDarkTheme) => {
    return (
        <View>
              <SendMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                <H14font400grey3black2>
                    {text}
                </H14font400grey3black2>
            </SendMsgCard>
        </View >
    );
};
export const SentMessage2 = (isDarkTheme) => {
    return (
        <View>
             <SendMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                <H14font400grey3black2>
                    This is my new website design 😍
                </H14font400grey3black2>
            </SendMsgCard>
        </View >
    );
};
export const SentMessage6 = (isDarkTheme) => {
    return (
        <>
            <SendMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                <SendImg1 />
            </SendMsgCard>

        </>

    );
};
export const sentMessage3 = (isDarkTheme) => {
    return (
        <View>
            <SendMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                <SendImg2 />
                <H14blueVar1Text style={p5}>{labels.chatLink}</H14blueVar1Text>
            </SendMsgCard>

        </View >

    );
};

export const sentMessage4 = (isDarkTheme) => {
    return (
        <View>
            <SendMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                <H14font400grey3black2>
                    Thank You Mam
                </H14font400grey3black2>
            </SendMsgCard>
        </View>



    );
};
export const sentMessage5 = (isDarkTheme) => {
    return (
        <>
            <SendMsgCard style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                <View style={[mt5,{
                    width: DevWidth * 0.65, height: 67, backgroundColor: isDark() ? colors.darkModeVar6 : colors.purpleVar4,borderRadius: 5, marginHorizontal: 3,
                    borderLeftWidth: 1.5, borderLeftColor: colors.purpleVar3
                }]}>
                    <View style={mh10}>
                        <RowSpaceBetween style={mv5}>
                            <H15PurpletoGrey style={{ lineHeight: 23 }}>Horace Keene</H15PurpletoGrey>
                        </RowSpaceBetween>
                        <H14font400grey3black2>You can check on this file</H14font400grey3black2>
                    </View>
                </View>
                <H14font400grey3black2 style={[mt5, ml5]}>Ok Mam</H14font400grey3black2>
            </SendMsgCard>
        </>


    );
};

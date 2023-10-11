import React, { Fragment, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { MainContainer, CommonLineDividerGrey } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mr5, mt10, mt15, mt20, pl10, pl13, pt10, pt5, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { DevHeight, DevWidth } from '../../utils/device';
import Profile from '../../../assets/images/profileView.svg'
import { labels } from '../../utils/labels';
import { H14BlackText, H14purpleVar3Text, H15Grey, H16BlackText, H18BlackText } from '../../components/commonText';
import MessageIcon from '../../../assets/images/messageIcon.svg'
import Group1 from '../../../assets/images/groupImg1.svg'
import Group2 from '../../../assets/images/groupImg2.svg'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { CustomModal } from '../../components/commonComponents';
import { IconModal } from '../../components/commonModal';
import { BlockUserModal, ReportUserModal } from '../../ModalContents/IconModelContents';



export type UserProfileProps = {

}

export const colorIconsData = [
    {
        id: 1,
        name: 'Starred Messages',
        iconName: 'star-outline',
        iconType: "Ionicons",
        iconSize: 20,
        iconColor: colors.yellow,
        bgcolor: colors.yellowVar1,
        screenName: screenName.StarredMsg,
    },
    {
        id: 2,
        name: 'Mute Notifications',
        iconName: 'microphone-off',
        iconType: "MaterialCommunityIcons",
        iconSize: 20,
        iconColor: colors.blueVar3,
        bgcolor: colors.blueVar4,
        screenName: screenName.Chats,
    },
    {
        id: 3,
        name: 'Encryption',
        iconName: 'lock',
        iconType: "FontAwesome",
        iconSize: 20,
        iconColor: colors.green,
        bgcolor: colors.greenVar1,
        screenName: screenName.VerifyCode,
    },
    {
        id: 4,
        name: 'Block User',
        iconName: 'block-flipped',
        iconType: "MaterialIcons",
        iconSize: 20,
        iconColor: colors.red,
        bgcolor: colors.redVar1,

    },
    {
        id: 5,
        name: 'Report User',
        iconName: 'thumbs-down',
        iconType: "Feather",
        iconSize: 20,
        iconColor: colors.purpleVar3,
        bgcolor: colors.purpleVar1,
    },
    {
        id: 6,
        name: 'Delete Chat',
        iconName: 'delete',
        iconType: "AntDesign",
        iconSize: 20,
        iconColor: colors.red,
        bgcolor: colors.redVar1,
        screenName: screenName.ChatView,
    },
]

export const ColorIconTab = ({ openModal }: any) => {
    const navigation = useNavigation()
    return (
        <View>
            {
                colorIconsData.map((item) => {
                    return (


                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                if (item.id === 4) {
                                    openModal(4); // Open Block User modal
                                } else if (item.id === 5) {
                                    openModal(5); // Open Delete Chat modal
                                } else {
                                    // Navigate to the desired screen for other items
                                    navigation.navigate(item.screenName as never);
                                }
                            }}
                        >
                            <View style={[flexRow, spaceBetween, { paddingBottom: 15 }]}>
                                <View style={[flexRow]}>

                                    <View style={{ height: 35, width: 35, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H16BlackText>{item.name}</H16BlackText>
                                    </View>
                                </View>
                                {
                                    item.id === 1 ? (
                                        <View style={[flexRow, alignItemsCenter, justyfyCenter]}>
                                            <View >
                                                <Text>10</Text>
                                            </View>
                                            <View style={[{ transform: [{ rotate: '180deg' }] }]}
                                            >
                                                <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                                                />
                                            </View>
                                        </View>
                                    ) : (
                                        <TouchableOpacity style={[{ transform: [{ rotate: '180deg' }] }, flexRow, alignItemsCenter, justyfyCenter]}>
                                            <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                                            />
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}




export const Header = () => {
    const [optionModal, setOptionModal] = useState(false);

    const navigation = useNavigation()
    const handleOptionModal = () => {
        setOptionModal(!optionModal)
    }


    const OptionModalComponent = () => {
        return (
            <View>

                <TouchableOpacity style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                    <View style={flexRow}>
                        <CustomIcon name="pencil" size={20} color={colors.blackVar1} type="octicons" />
                        <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                            <H15Grey>Edit</H15Grey>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ marginVertical: 20 }}>
            <View style={[flexRow, spaceBetween, { marginHorizontal: 25 }]}>
                <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons" />
                <TouchableOpacity onPress={handleOptionModal}>
                    <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />


                </TouchableOpacity>
            </View>
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.49}
                modalData={<OptionModalComponent />}
                marginTop={48}
                onClose={() => setOptionModal(false)}
            />
        </View>

    )
}
export const ProfileCard = () => {
    return (
        <View>
            <View style={{ marginTop: 50 }}>
                <View style={{
                    backgroundColor: colors.white, height: DevHeight / 4.5, width: '100%', borderRadius: 20, elevation: 5, justifyContent: 'center',
                    shadowOpacity: 1, shadowColor: colors.greyVar4
                }}>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <H18BlackText>{labels.horaceKeene}</H18BlackText>
                        <Text style={{ fontSize: 16, color: colors.greyVar4 }}>last seen at 7:15 PM</Text>
                        <View style={[flexRow, { marginTop: 10 }]}>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }]}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <CustomIcon name='phone' type="Feather" size={18} color={colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <MessageIcon />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', zIndex: 1, alignSelf: 'center', overflow: 'hidden' }}>
                <Profile />
            </View>
        </View>
    )
}


interface CardHeaderTextProps {
    text: string;
}

export const CardHeaderText: React.FC<CardHeaderTextProps> = ({ text }) => {
    return (
        <View style={{ alignItems: 'flex-start', marginTop: 5 }}>
            <View style={{
                backgroundColor: colors.purpleVar1,
                borderRadius: 8,
                padding: 10
            }}>
                <H14purpleVar3Text style={{ marginHorizontal: 10 }}>
                    {text}
                </H14purpleVar3Text>
            </View>


        </View >
    );
};

export const InfoCard = () => {
    const socialMediaIcon = () => {
        return (
            <>
                <View style={[flexRow]}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <CustomIcon name='sc-facebook' type="EvilIcons" size={24} color={colors.black} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <CustomIcon name='twitter' type="entypo" size={20} color={colors.black} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <CustomIcon name='youtube' type="MaterialCommunityIcons" size={22} color={colors.black} />
                    </View>
                </View>

            </>

        )
    }
    const InfoCardData = [{
        "Phone": "9988776655",
        "Email Address": 'info@example.com',
        "Social Media": socialMediaIcon()
    }]

    return (
        <View style={mt20}>
            <CardHeaderText text='Info' />
            <View style={mt10}>
                <Text style={{ color: colors.greyVar4 }}>Bio</Text>
                <H14BlackText style={pt10}>Hello, I am using DreamsChat</H14BlackText>
                {InfoCardData.map((item) =>
                    Object.entries(item).map(([key, value]) => (
                        <View style={[flexRow, spaceBetween, pt10]} key={key}>
                            <Text style={{ color: colors.greyVar4 }}>{key}</Text>
                            <H14BlackText>{value}</H14BlackText>
                        </View>
                    ))
                )}
            </View>
            <View style={[mt15, mb15]}>
                <CommonLineDividerGrey />
            </View>
        </View>
    );
}


export const MediaCard = () => {

    const navigation = useNavigation();
    const mediaData = [
        {
            id: 1,
            image: require('../../../assets/images/png/mediaImg1.png')
        },
        {
            id: 2,
            image: require('../../../assets/images/png/mediaImg2.png')
        },
        {
            id: 3,
            image: require('../../../assets/images/png/mediaImg3.png')
        },
        {
            id: 4,
            image: require('../../../assets/images/png/mediaImg4.png')
        }
    ]


    return (
        <View>
            <TouchableOpacity style={[flexRow, spaceBetween]} onPress={() => navigation.navigate(screenName.Media as never)}>
                <CardHeaderText text='Media' />
                <View style={flexRow}>
                    <View style={[styles.roundNumber, { backgroundColor: 'rgba(97, 97, 97, 0.15) ' }, mt10, mr5]}>
                        <Text style={styles.roundNumberText}>68</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '180deg' }] }}>
                        <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.gridContainer}>
                {mediaData.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.gridItem}
                        onPress={() => {
                            navigation.navigate(screenName.Media as never)
                        }}
                    >
                        <Image
                            source={item.image}
                            style={styles.gridItemImage}
                        />
                    </TouchableOpacity>
                ))}
            </View>



            <View style={[mt15, mb15]}>
                <CommonLineDividerGrey />
            </View>
        </View>

    )
}

export const Groups = () => {
    const groupsData = [{
        id: 1,
        img: <Group1 />,
        grpName: 'Themeforest Group',
        personName: 'Mark Villiams, Elizabeth, Michael.....'
    },
    {
        id: 2,
        img: <Group2 />,
        grpName: 'Graphics Designers',
        personName: 'Mark Villiams, Elizabeth, Michael.....'
    }

    ]
    return (
        <View>
            <CardHeaderText text='2 Groups in common' />
            {groupsData.map((item, index) => (
                <View key={index} style={styles.cardSurface}>
                    <View>{item.img}</View>
                    <View style={pl10}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>{item.grpName}</Text>
                        <Text style={[{ color: colors.greyVar4 }, pt5]}>{item.personName}</Text>
                    </View>
                </View>

            ))}
            <View style={[mt20, mb15]}>
                <CommonLineDividerGrey />
            </View>
        </View>

    )
}

const UserProfile = (props: UserProfileProps) => {
    const [selectedModalId, setSelectedModalId] = useState(null);
    const closeModal = () => {
        setSelectedModalId(null);
    };
    const openModal = (id: number) => {
        setSelectedModalId(id);
    }
    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: colors.whiteVar0, flex: 1 }}>
                <Header />
                <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                    <ProfileCard />
                    <InfoCard />
                    <MediaCard />
                    <Groups />
                    <ColorIconTab openModal={openModal} />
                </ScrollView>
                {selectedModalId === 4 && (
                    <IconModal
                        isVisible={true}
                        onClose={closeModal}
                        contentComponent={<BlockUserModal />}
                        iconName='block-flipped'
                        iconType='MaterialIcons'
                        iconSize={22}
                    />
                )}
                {selectedModalId === 5 && (
                    <IconModal
                        isVisible={true}
                        onClose={closeModal}
                        contentComponent={<ReportUserModal />}
                        iconName='block-flipped'
                        iconType='MaterialIcons'
                        iconSize={22}
                    />
                )}

            </MainContainer>
        </Fragment>
    )
}



const styles = StyleSheet.create({
    roundNumber: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundNumberText: {
        color: colors.greyVar4,
        fontSize: 12,
    },
    cardSurface: {
        backgroundColor: colors.white,
        padding: 10,
        elevation: 4,
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 8,
        shadowColor: colors.greyVar3
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15
    },
    gridItem: {
        flex: 1,

    },
    gridItemImage: {
        width: (Dimensions.get('window').width - 75) / 4,
        borderRadius: 10
    },
})
export default UserProfile

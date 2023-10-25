import React, { Fragment, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { CommonLineDividerGrey, MainContainer, RowSpaceBetween } from '../../components/commonView';
import { useNavigation } from '@react-navigation/native';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mh20, mr5, mt10, mt15, mt20, mt3, mt5, mv20, pl10, pl13, pt10, pt5, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { H12fontBold400GreyVar4, H12fontBold400blackVar2, H14BlackText, H14BlackVar2Bold400Text, H14Blackvar2Bold500, H14GreyVar4Bold400, H14GreyVar4Bold400Text, H14blackVar1bold400Text, H15BlackBold600, H15Blackvar2Bold500, H15Grey, H16BlackText, H16font600Black, H18BlackText, H18Blackvar2Bold600, H18fontBoldBlack } from '../../components/commonText';
import { CardHeaderText, CustomModal } from '../../components/commonComponents';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import { Chatimg1Img, Chatimg2Img, Chatimg3Img, Chatimg4Img, Chatimg5Img, GroupImg1Img } from '../../utils/png';
import { GroupProfileAvatarIcon } from '../../utils/svg';
import { screenName } from '../../utils/screenName';
import { colorIconsData, colorIconsDataSecond, groupMediaData, groupsData } from '../../utils/data/groupsData';
import { IconModal } from '../../components/commonModal';
import { SmallButton } from '../../components/commonButtons';
import { isDark, useTheme } from '../../Theme/ThemeContext';

export type GroupInfoProps = {

}

export const Header = () => {
    const [optionModal, setOptionModal] = useState(false);
    const navigation = useNavigation();
    const handleOptionModal = () => {
        setOptionModal(!optionModal)
    }


    const OptionModalComponent = () => {
        return (
            <View>
                <TouchableOpacity style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                    <View style={flexRow}>
                        <View style={[alignItemsCenter, justyfyCenter]}>
                            <CustomIcon name="pencil" size={20} color={isDark() ? colors.greyVar3 : colors.blackVar1} type="octicons" />
                        </View>
                        <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                            <H14blackVar1bold400Text>Edit</H14blackVar1bold400Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ marginVertical: 20 }}>
            <View style={[flexRow, spaceBetween, { marginHorizontal: 25 }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomIcon name='chevron-back-sharp' color={isDark() ? colors.white : colors.greyVar4} size={16} type="Ionicons" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOptionModal}>
                    <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={isDark() ? colors.white : colors.greyVar4} />
                </TouchableOpacity>
            </View>
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.49}
                modalData={<OptionModalComponent />}
                // marginTop={48}
                onClose={() => setOptionModal(false)}
            />
        </View>

    )
}

export const GroupProfileCard = () => {
    return (
        <View>
            <View style={{ marginTop: 50 }}>
                <View style={{
                    backgroundColor: isDark() ? colors.darkModeVar4 : colors.white, height: DevHeight / 4.5, width: '100%', borderRadius: 20, elevation: 1, justifyContent: 'center',
                    shadowOpacity:0.1, shadowColor: colors.greyVar0
                }}>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <H18Blackvar2Bold600>{labels.horaceKeene}</H18Blackvar2Bold600>
                        <H14GreyVar4Bold400 >Group . 35 Participants</H14GreyVar4Bold400>
                        <View style={[flexRow, { marginTop: 10 }]}>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }]}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={22} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <CustomIcon name='phone' type="Feather" size={18} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <CustomIcon name='chatbox-ellipses-outline' type="Ionicons" size={18} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', zIndex: 1, alignSelf: 'center', overflow: 'hidden' }}>
                <GroupProfileAvatarIcon />
            </View>
        </View>
    )
}

export const GroupInfoCard = () => {
    const {theme} = useTheme();
    const isDarkTheme = theme === 'dark';

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
            <RowSpaceBetween>
                <CardHeaderText text='Info' />
                <View style={[justyfyCenter, alignItemsCenter]}>
                    <CustomIcon name='pencil-outline' type='MaterialCommunityIcons' color={isDark() ? colors.greyVar3 : colors.black} size={20} />
                </View>
            </RowSpaceBetween>
            <View style={mt10}>
                <H12fontBold400blackVar2 style={[mt5]}>{labels.GroupDescription}</H12fontBold400blackVar2>
                <H14BlackVar2Bold400Text style={[mt5]}>{labels.HelloIamUsingDreamsChat}</H14BlackVar2Bold400Text>
                <H12fontBold400GreyVar4 style={[{ color: colors.greyVar4 }, mt5]}>{labels.DummyText}</H12fontBold400GreyVar4>
            </View>
            <View style={[mt15, mb15]}>
                <CommonLineDividerGrey style = {{backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0}} />
            </View>
        </View>
    );
}

export const MediaCard = () => {
    const navigation = useNavigation();
    const {theme} = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View>
            <TouchableOpacity style={[flexRow, spaceBetween]} onPress={() => { }}>
                <CardHeaderText text='Media' />
                <View style={flexRow}>
                    <View style={[styles.roundNumber, { backgroundColor: 'rgba(97, 97, 97, 0.15) ' }, mt5, mr5]}>
                        <Text style={[styles.roundNumberText, {color: isDark() ? colors.greyVar4 : colors.greyVar4,}]}>68</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '180deg' }] }}>
                        <CustomIcon name='chevron-back-sharp' color={isDark() ? colors.greyVar3 : colors.greyVar4} size={16} type="Ionicons"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.gridContainer}>
                {groupMediaData.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.gridItem}
                        onPress={() => {
                            // navigation.navigate(screenName.Media as never)
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
                <CommonLineDividerGrey style = {{backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0}} />
            </View>
        </View>
    )
}

export const Groups = () => {
    const {theme} = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View>
            <RowSpaceBetween>
                <CardHeaderText text='35 Participants' />
                <View style={[justyfyCenter, alignItemsCenter]}>
                    <CustomIcon name='search' type='Feather' color={isDark() ? colors.greyVar3 : colors.black} size={20} />
                </View>
            </RowSpaceBetween>
            {groupsData.map((item, index) => (
                <View key={index} style={[styles.cardSurface, {backgroundColor: isDark() ? colors.darkModeVar4 : colors.white,}]}>
                    <View>
                        <Image source={item.img} style={{ height: 40, width: 40, borderRadius: 100 }} />
                        <View style={[{ backgroundColor: item.status === 'active' ? '#20c997' : '' }, item.status === 'active' ? styles.status : null]} />
                    </View>
                    <View style={pl10}>
                        <H15Blackvar2Bold500>{item.name}</H15Blackvar2Bold500>
                        <H14GreyVar4Bold400Text style={[{ color: colors.greyVar4 }, pt5]}>{item.personName}</H14GreyVar4Bold400Text>
                    </View>
                </View>

            ))}
            <View style={[mt20, mb15]}>
                <CommonLineDividerGrey style = {{backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0}} />
            </View>
        </View>

    )
}

const ColorIconTab = () => {
    const navigation = useNavigation()
    const {theme} = useTheme();
    const isDarkTheme = theme === 'dark';

    return (
        <View>
            {
                colorIconsData.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)}>
                            <View style={[flexRow, spaceBetween, { paddingBottom: 15 }]}>
                                <View style={[flexRow]}>

                                    <View style={{ height: 35, width: 35, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14Blackvar2Bold500>{item.name}</H14Blackvar2Bold500>
                                    </View>
                                </View>
                                {
                                    item.id === 1 ? (
                                        <View style={[flexRow, alignItemsCenter, justyfyCenter]}>
                                            <View style={[styles.roundNumber, { backgroundColor: 'rgba(97, 97, 97, 0.05) ' }, mt5, mr5]}>
                                                <Text style={[styles.roundNumberText,{color: isDark() ? colors.greyVar4 : colors.greyVar4,}]}>10</Text>
                                            </View>
                                            <View style={[{ transform: [{ rotate: '180deg' }] }]}
                                            >
                                                <CustomIcon name='chevron-back-sharp' color={isDark() ? colors.greyVar3 : colors.greyVar4} size={16} type="Ionicons"
                                                />
                                            </View>
                                        </View>
                                    ) : (
                                        <TouchableOpacity style={[{ transform: [{ rotate: '180deg' }] }, flexRow, alignItemsCenter, justyfyCenter]}>
                                            <CustomIcon name='chevron-back-sharp' color={isDark() ? colors.greyVar3 : colors.greyVar4} size={16} type="Ionicons"
                                            />
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
            <View style={[mt10, mb15]}>
                <CommonLineDividerGrey style = {{backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0}} />
            </View>
        </View>
    )
}

export const ColorIconTabSecond = () => {
    const navigation = useNavigation();
    const [exitGroupModal, setExitGroupModal] = useState(false);

    const handleExitGroupModal = () => {
        setExitGroupModal(!exitGroupModal);
    }

    const handleOnPressColorIconTabSecond = (id: number, screenName: string) => {
        if (id === 1) {
            handleExitGroupModal();
        } else {
            navigation.navigate(screenName as never);
        }
    }

    const ExitGroupModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
            setExitGroupModal(false);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(false);
        };

        return (
            <View style={[mh20]} >
                <H16font600Black>Exit Group?</H16font600Black>
                <H14GreyVar4Bold400 style={[mt20]}>Only group admins will be notifed that you{'\n'}left the group.</H14GreyVar4Bold400>
                <RowSpaceBetween style={[mv20]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.red : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 3.15}
                    />
                    <SmallButton
                        title={labels.Exit}
                        onChange={handleDeleteChatButton}
                        backgroundColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar2 : colors.red)}
                        textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 3.15}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <View>
            {
                colorIconsDataSecond.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => handleOnPressColorIconTabSecond(item.id, item.screenName)}>
                            <View style={[flexRow, spaceBetween, { paddingBottom: 15 }]}>
                                <View style={[flexRow]}>

                                    <View style={{ height: 26, width: 26, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14Blackvar2Bold500>{item.name}</H14Blackvar2Bold500>
                                    </View>
                                </View>
                                <View style={[{ transform: [{ rotate: '180deg' }] }, flexRow, alignItemsCenter, justyfyCenter]}>
                                    <CustomIcon name='chevron-back-sharp' color={isDark() ? colors.greyVar3 : colors.greyVar4} size={16} type="Ionicons"
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
            <IconModal
                isVisible={exitGroupModal}
                onClose={() => handleExitGroupModal()}
                contentComponent={<ExitGroupModal />}
                iconName='logout'
                iconType='AntDesign'
                iconSize={24}
            />
        </View>
    )
}


const GroupInfo = (props: GroupInfoProps) => {
    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0, flex: 1 }}>
                <Header />
                <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                    <GroupProfileCard />
                    <GroupInfoCard />
                    <MediaCard />
                    <ColorIconTab />
                    <Groups />
                    <ColorIconTabSecond />
                </ScrollView>
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
        fontWeight : '400',
        fontSize: 12,
    },
    cardSurface: {
        padding: 10,
        elevation: 2,
        marginTop: 15,
        flexDirection: 'row',
        borderRadius: 5,
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
    status: {
        borderWidth: 3,
        borderColor: isDark() ? colors.black : colors.white,
        position: 'absolute',
        bottom: 3,
        right: 0,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
})

export default GroupInfo
import React, { Fragment, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { CommonLineDividerGrey, MainContainer, RowSpaceBetween } from '../../components/commonView';
import { useNavigation } from '@react-navigation/native';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mr5, mt10, mt15, mt20, mt3, mt5, pl10, pl13, pt10, pt5, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { H14BlackText, H15BlackBold600, H15Grey, H16BlackText, H18BlackText, H18fontBoldBlack } from '../../components/commonText';
import { CustomModal } from '../../components/commonComponents';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import { Chatimg1Img, Chatimg2Img, Chatimg3Img, Chatimg4Img, Chatimg5Img, GroupImg1Img } from '../../utils/png';
import { GroupProfileAvatarIcon } from '../../utils/svg';
import { CardHeaderText } from '../chatView/UserProfile';
import { screenName } from '../../utils/screenName';
import { colorIconsData, colorIconsDataSecond, groupMediaData, groupsData } from '../../utils/data/groupsData';

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
                    backgroundColor: colors.white, height: DevHeight / 4.5, width: '100%', borderRadius: 20, elevation: 1, justifyContent: 'center',
                    shadowOpacity: 1, shadowColor: colors.greyVar4
                }}>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <H18fontBoldBlack>{labels.horaceKeene}</H18fontBoldBlack>
                        <Text style={{ fontSize: 16, color: colors.greyVar4 }}>Group . 35 Participants</Text>
                        <View style={[flexRow, { marginTop: 10 }]}>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }]}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <CustomIcon name='call-outline' type="Ionicons" size={18} color={colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <CustomIcon name='chatbox-ellipses-outline' type="Ionicons" size={18} color={colors.greyVar4} />
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
                    <CustomIcon name='pencil-outline' type='MaterialCommunityIcons' color={colors.black} size={20} />
                </View>
            </RowSpaceBetween>
            <View style={mt10}>
                <Text style={[{ color: colors.greyVar4 }, mt5]}>{labels.GroupDescription}</Text>
                <H15BlackBold600 style={[mt5]}>{labels.HelloIamUsingDreamsChat}</H15BlackBold600>
                <Text style={[{ color: colors.greyVar4 }, mt5]}>{labels.DummyText}</Text>
            </View>
            <View style={[mt15, mb15]}>
                <CommonLineDividerGrey />
            </View>
        </View>
    );
}

export const MediaCard = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={[flexRow, spaceBetween]} onPress={() => { }}>
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
                <CommonLineDividerGrey />
            </View>
        </View>
    )
}

export const Groups = () => {
    return (
        <View>
            <RowSpaceBetween>
                <CardHeaderText text='35 Participants' />
                <View style={[justyfyCenter, alignItemsCenter]}>
                    <CustomIcon name='search' type='Feather' color={colors.black} size={20} />
                </View>
            </RowSpaceBetween>
            {groupsData.map((item, index) => (
                <View key={index} style={styles.cardSurface}>
                    <View>
                        <Image source={item.img} style={{ height: 40, width: 40, borderRadius: 100 }} />
                        <View style={[{ backgroundColor: item.status === 'active' ? '#20c997' : '' }, item.status === 'active' ? styles.status : null]} />
                    </View>
                    <View style={pl10}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>{item.name}</Text>
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

const ColorIconTab = () => {
    const navigation = useNavigation()


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
                                        <H16BlackText>{item.name}</H16BlackText>
                                    </View>
                                </View>
                                {
                                    item.id === 1 ? (
                                        <View style={[flexRow, alignItemsCenter, justyfyCenter]}>
                                            <View style={[styles.roundNumber, { backgroundColor: 'rgba(97, 97, 97, 0.05) ' }, mt10, mr5]}>
                                                <Text style={styles.roundNumberText}>10</Text>
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
            <View style={[mt10, mb15]}>
                <CommonLineDividerGrey />
            </View>
        </View>
    )
}

export const ColorIconTabSecond = () => {
    const navigation = useNavigation()


    return (
        <View>
            {
                colorIconsDataSecond.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)}>
                            <View style={[flexRow, spaceBetween, { paddingBottom: 15 }]}>
                                <View style={[flexRow]}>

                                    <View style={{ height: 35, width: 35, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H16BlackText>{item.name}</H16BlackText>
                                    </View>
                                </View>
                                <TouchableOpacity style={[{ transform: [{ rotate: '180deg' }] }, flexRow, alignItemsCenter, justyfyCenter]}>
                                    <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}


const GroupInfo = (props: GroupInfoProps) => {
    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: colors.whiteVar0, flex: 1 }}>
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

        color: colors.greyVar4,
        fontSize: 12,
    },
    cardSurface: {
        backgroundColor: colors.white,
        padding: 10,
        elevation: 4,
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
        borderColor: colors.white,
        position: 'absolute',
        bottom: 3,
        right: 0,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
})

export default GroupInfo
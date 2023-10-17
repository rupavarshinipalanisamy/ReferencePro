
import React, { Fragment, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mr5, mt10, mt15, mt20, pl10, pl13, pt10, pt5, spaceBetween } from '../commonStyles';
import { useNavigation } from '@react-navigation/native';
import { H14BlackText, H15Grey } from '../commonText';
import { CardHeaderText, CustomModal } from '../commonComponents';
import { DevWidth } from '../../utils/device';
import { InfoCardData, groupsData, mediaData } from '../../utils/data/profileData';
import { CommonLineDividerGrey } from '../commonView';
import { screenName } from '../../utils/screenName';
export const socialMediaIcon = () => {
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

export const InfoCard = () => {
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
    return (
        <View>
            <CardHeaderText text='2 Groups in common' />
            {groupsData.map((item, index) => (
                <View key={index} style={styles.cardSurface}>
                    <Image source={item.img} />
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

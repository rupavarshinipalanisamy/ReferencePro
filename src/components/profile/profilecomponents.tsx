
import React, {useState } from 'react';
import { View, StyleSheet,TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flex1, flexRow, mb15, mh10, mr5, mt10, mt15, mt20, mv20, p4, pl10, pl13,  pl5,pt10,  pv10, spaceBetween } from '../commonStyles';
import { useNavigation } from '@react-navigation/native';
import { H12font400Black, H12font400Grey, H14BlackText, H14GreyVar4Bold400Text, H14blackVar1bold400Text, H14font400grey3black2, H15Blackvar2Bold500 } from '../commonText';
import { CardHeaderText, CustomModal } from '../commonComponents';
import { DevWidth } from '../../utils/device';
import { InfoCardData, groupsData, mediaData } from '../../utils/data/profileData';
import { Alignjustifycenter, FullCommonLineDividerGrey, MediumCardSurface } from '../commonView';
import { screenName } from '../../utils/screenName';
import { isDark, useTheme } from '../../Theme/ThemeContext';
export const SocialMediaIcon = () => {
    return (
        <>
            <View style={[flexRow]}>
                <Alignjustifycenter style={pl5}>
                    <CustomIcon name='sc-facebook' type="EvilIcons" size={20} color={isDark() ? colors.greyVar3 : colors.blackVar2} />
                </Alignjustifycenter>
                <Alignjustifycenter style={pl5}>
                    <CustomIcon name='twitter' type="entypo" size={18} color={isDark() ? colors.greyVar3 : colors.blackVar2} />
                </Alignjustifycenter>
                <Alignjustifycenter style={pl5}>
                    <CustomIcon name='youtube' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.greyVar3 : colors.blackVar2} />
                </Alignjustifycenter>
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

                <TouchableOpacity style={[p4,mh10,pv10]}>
                    <View style={[flexRow, alignItemsCenter]}>
                        <CustomIcon name="pencil" size={16} color={isDark() ? colors.greyVar3 : colors.blackVar1} type="octicons" />
                        <View style={[pl13]}>
                            <H14blackVar1bold400Text>Edit</H14blackVar1bold400Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={mv20}>
            <View style={[flexRow, spaceBetween, { marginHorizontal: 25 }]}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
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
                marginTop={Platform.OS === 'ios' ? 100 : 48}
                onClose={() => setOptionModal(false)}
            />
        </View>

    )
}

export const InfoCard = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View style={mt20}>
            <CardHeaderText text='Info' />
            <View style={mt10}>
                <H12font400Black>Bio</H12font400Black>
                <H14font400grey3black2 style={pt10}>Hello, I am using DreamsChat</H14font400grey3black2>
                {InfoCardData.map((item) =>
                    Object.entries(item).map(([key, value]) => (
                        <View style={[flexRow, spaceBetween, pt10]} key={key}>
                            <H12font400Black>{key}</H12font400Black>
                            <H14font400grey3black2>{value}</H14font400grey3black2>
                        </View>
                    ))
                )}
            </View>
            <View style={[mt15, mb15]}>
                <FullCommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />
            </View>
        </View>
    );
}


export const MediaCard = () => {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View>
            <TouchableOpacity style={[flexRow, spaceBetween]} onPress={() => navigation.navigate(screenName.Media as never)}>
                <CardHeaderText text='Media' />
                <View style={[flexRow]}>
                    <Alignjustifycenter style={[styles.roundNumber, { backgroundColor: isDark() ? colors.darkModeVar6 : 'rgba(97, 97, 97, 0.15) ' }, mt10, mr5]}>
                        <H12font400Grey>68</H12font400Grey>
                    </Alignjustifycenter>
                    <Alignjustifycenter style={{  marginTop: 7 }}>
                        <CustomIcon name='chevron-right' color={isDark() ? colors.greyVar0 : colors.greyVar4} size={20} type="MaterialIcons"
                        />
                    </Alignjustifycenter>
                </View>
            </TouchableOpacity>
            <View style={styles.gridContainer}>
                {mediaData.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={flex1}
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
                <FullCommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />
            </View>
        </View>

    )
}

export const Groups = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View>
            <CardHeaderText text='2 Groups in common' />
            {groupsData.map((item, index) => (
                <MediumCardSurface key={index} >
                    <Image source={item.img} />
                    <View style={pl10}>
                        <H15Blackvar2Bold500 style={{ lineHeight: 23 }}>{item.grpName}</H15Blackvar2Bold500>
                        <H14GreyVar4Bold400Text style={{ lineHeight: 20 }}>{item.personName}</H14GreyVar4Bold400Text>
                    </View>
                </MediumCardSurface>

            ))}
            <View style={[mt20, mb15]}>
                <FullCommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    roundNumber: {
        height: 20,
        width: 20,
        borderRadius: 12,
        marginLeft: 10,

    },
    roundNumberText: {
        color: colors.greyVar4,
        fontSize: 12,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15
    },
  
    gridItemImage: {
        width: (Dimensions.get('window').width - 75) / 4,
        borderRadius: 10
    },
})

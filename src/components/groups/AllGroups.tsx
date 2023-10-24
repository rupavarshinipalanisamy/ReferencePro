import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { flex1, flexRow, mr5, mt20, mt3, mv10, pb5, ph20, pv15 } from '../commonStyles';
import { FileBlackIcon, MikeBlackIcon, PictureBlackIcon, PinBlackIcon, StickerGreyIcon, VideoBlackIcon } from '../../utils/svg';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import { H12fontBold400GreyVar4, H12fontBold400blackVar2, H14GreenBold400, H14GreyVar4Bold400, H15Blackvar2Bold500, H15Green, H15Grey, H16SemiBoldBlack } from '../commonText';
import { labels } from '../../utils/labels';
import { BottomTabBar } from '../commonComponents';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';
import { allGroupsData } from '../../utils/data/groupsData';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { isDark, useTheme } from '../../Theme/ThemeContext';

export type AllGroupsProps = {

}


const AllGroups = (props: AllGroupsProps) => {
    const navigation = useNavigation();
    const {theme} = useTheme();
    const isDarkTheme = theme === 'dark';

    return (
        <View style={[{ backgroundColor: isDark() ? colors.darkModeVar2 : colors.white }, flex1, mt20, styles.whiteBg]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={flex1}>
                    {allGroupsData.map((group) => (
                        <View key={group.id}>
                            {group.id === 1 ? <View style={mv10} /> : <CommonLineDividerGrey style = {{backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0}} />}
                            <TouchableOpacity onPress={() => {
                                group.isAdmin === 'true' ? navigation.navigate(screenName.GroupChattingAdmin as never) : navigation.navigate(screenName.GroupChatting as never);
                                // if (selectedCards.length === 0) {
                                // } else {
                                //     onCardSelection(chat.id);
                                // }
                            }}
                                onLongPress={() => {
                                    // if (!selectedCards.includes(chat.id)) {
                                    //     onCardSelection(chat.id);
                                    // }
                                }} style={[ph20, pv15]}>
                                <View style={[flexRow]}>
                                    <View>
                                        <Image source={group.profileImg} style={styles.profileImg} />
                                    </View>
                                    <View style={[flex1]}>
                                        <RowSpaceBetween style={pb5}>
                                            <H15Blackvar2Bold500>{group.name}</H15Blackvar2Bold500>
                                            {
                                                group.id === 4 ? (
                                                    <H12fontBold400blackVar2>{group.time}</H12fontBold400blackVar2>
                                                ) : (
                                                    <H12fontBold400GreyVar4>{group.time}</H12fontBold400GreyVar4>
                                                )
                                            }
                                        </RowSpaceBetween>
                                        {group.id === 1 ? (
                                            <RowSpaceBetween>
                                                <H14GreenBold400>{labels.DebraisTyping}</H14GreenBold400>
                                                <View style = {mt3}>
                                                    <PinBlackIcon />
                                                </View>
                                            </RowSpaceBetween>
                                        ) : group.id === 2 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <H14GreyVar4Bold400 style={mr5}>{labels.James}</H14GreyVar4Bold400>
                                                    <View style={[mr5,mt3]}>
                                                        <VideoBlackIcon />
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.Video}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <PinBlackIcon />
                                                    </View>
                                            </RowSpaceBetween>
                                        ) : group.id === 3 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <H14GreyVar4Bold400 style = {mr5}>{labels.Hollis}</H14GreyVar4Bold400>
                                                    <View style={[mr5, mt3]}>
                                                        <MikeBlackIcon />
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.Audio}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : group.id === 4 ? (
                                            <RowSpaceBetween>
                                                <H14GreyVar4Bold400>{labels.JonesHttps}</H14GreyVar4Bold400>
                                                <View style={[styles.roundNumber, { backgroundColor: colors.purpleVar3 }]}>
                                                    <Text style={styles.roundNumberText}>3</Text>
                                                </View>
                                            </RowSpaceBetween>
                                        ) : group.id === 5 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                <H14GreyVar4Bold400 style = {mr5}>{labels.Horace}</H14GreyVar4Bold400>
                                                    <View style={[mr5, mt3]}>
                                                        <PictureBlackIcon />
                                                    </View>
                                                    <H14GreyVar4Bold400>{labels.Image}</H14GreyVar4Bold400>
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : group.id === 6 ? (
                                            <View style={[flexRow]}>
                                                <H14GreyVar4Bold400 style = {mr5}>{labels.Smith}</H14GreyVar4Bold400>
                                                <View style={[mr5]} >
                                                    <FileBlackIcon />
                                                </View>
                                                <H14GreyVar4Bold400>{labels.guidelinespdf}</H14GreyVar4Bold400>
                                            </View>
                                        ) : group.id === 7 ? (
                                            <View style={[flexRow]}>
                                                <H14GreyVar4Bold400 style = {mr5}>{labels.Alex}</H14GreyVar4Bold400>
                                                <View style={[mr5, mt3]} >
                                                    <StickerGreyIcon />
                                                </View>
                                                <H14GreyVar4Bold400>{labels.Sticker}</H14GreyVar4Bold400>
                                            </View>
                                        ) : (
                                            <View style={[flexRow]}>
                                                <H14GreyVar4Bold400>{labels.JoinedUsing}</H14GreyVar4Bold400>
                                            </View>
                                        )
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <BottomTabBar />
        </View >
    )
}

const styles = StyleSheet.create({
    whiteBg: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden'
    },
    roundNumber: {
        height: 25,
        width: 25,
        borderRadius: 20,
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 12,
        fontWeight: '400',
        marginTop: 3,
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    }
});

export default AllGroups
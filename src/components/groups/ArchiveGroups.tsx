import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { flex1, flexRow, mr5, mt20, mt3, pb5, ph20, pv15 } from '../commonStyles';
import { ArchiveIconBlackIcon, FileBlackIcon, MikeBlackIcon, PictureBlackIcon, PinBlackIcon, StickerGreyIcon, VideoBlackIcon } from '../../utils/svg';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import { H15Green, H15Grey, H16SemiBoldBlack } from '../commonText';
import { labels } from '../../utils/labels';
import { BottomTabBar } from '../commonComponents';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';
import { allGroupsData } from '../../utils/data/groupsData';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';

export type ArchiveGroupsProps = {

}


const ArchiveGroups = (props: ArchiveGroupsProps) => {
    const navigation = useNavigation();
    return (
        <View style={[flex1, mt20, styles.whiteBg]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={flex1}>
                    {allGroupsData.map((group) => (
                        <View key={group.id}>
                            <CommonLineDividerGrey />
                            <TouchableOpacity onPress={() => {
                                group.isAdmin === 'true' ? navigation.navigate(screenName.GroupChattingAdmin as never) : navigation.navigate(screenName.GroupChatting as never);
                                // if (selectedCards.length === 0) {
                                //     navigation.navigate(screenName.ChatView as never);
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
                                            <H16SemiBoldBlack>{group.name}</H16SemiBoldBlack>
                                            <Text style={{ fontWeight: group.id === 4 ? '700' : 'normal' }}>{group.time}</Text>
                                        </RowSpaceBetween>
                                        {group.id === 1 ? (
                                            <RowSpaceBetween>
                                                <H15Green>{labels.DebraisTyping}</H15Green>
                                                <View style={mt3}>
                                                    <ArchiveIconBlackIcon />
                                                </View>
                                            </RowSpaceBetween>
                                        ) : group.id === 2 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <H15Grey style={mr5}>{labels.James}</H15Grey>
                                                    <View style={[mr5, mt3]}>
                                                        <VideoBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Video}</H15Grey>
                                                </RowSpaceEvenly>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : group.id === 3 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <H15Grey style={mr5}>{labels.Hollis}</H15Grey>
                                                    <View style={[mr5, mt3]}>
                                                        <MikeBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Audio}</H15Grey>
                                                </RowSpaceEvenly>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : group.id === 4 ? (
                                            <RowSpaceBetween>
                                                <H15Grey>{labels.JonesHttps}</H15Grey>
                                                <RowSpaceEvenly>
                                                    <View style={[styles.roundNumber, mr5, { backgroundColor: colors.purpleVar3 }]}>
                                                        <Text style={styles.roundNumberText}>3</Text>
                                                    </View>
                                                    <ArchiveIconBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : group.id === 5 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <H15Grey style={mr5}>{labels.Horace}</H15Grey>
                                                    <View style={[mr5, mt3]}>
                                                        <PictureBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Image}</H15Grey>
                                                </RowSpaceEvenly>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : group.id === 6 ? (
                                            <RowSpaceBetween>
                                                <View style={flexRow}>
                                                    <H15Grey style={mr5}>{labels.Smith}</H15Grey>
                                                    <View style={[mr5]} >
                                                        <FileBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.guidelinespdf}</H15Grey>
                                                </View>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : group.id === 7 ? (
                                            <RowSpaceBetween><View style={[flexRow]}>
                                                <H15Grey style={mr5}>{labels.Alex}</H15Grey>
                                                <View style={[mr5, mt3]} >
                                                    <StickerGreyIcon />
                                                </View>
                                                <H15Grey>{labels.Sticker}</H15Grey>
                                            </View>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
                                        ) : (
                                            <RowSpaceBetween>
                                                <View style={[flexRow]}>
                                                    <H15Grey>{labels.JoinedUsing}</H15Grey>
                                                </View>
                                                <ArchiveIconBlackIcon />
                                            </RowSpaceBetween>
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
        backgroundColor: colors.white,
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

export default ArchiveGroups
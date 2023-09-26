import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../../utils/colors';
import { alignSelfCenter, borderRadius10, flex1, flexRow,  mb15,  ml15, mr5, mt20, mt5,  p10, pb5,ph20, pv15, spaceBetween, spaceEvenly } from '../commonStyles';
import { allChatsData } from '../../utils/data/chatsData';
import { DevWidth } from '../../utils/device';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import {labels} from '../../utils/labels';
import { H15Green, H15Grey, H15Red, H16SemiBoldBlack, H18BoldGrey } from '../commonText';
import { ArchiveIconBlackIcon, BlackDoubleTickIcon, BlackSingleTickIcon, BlueDoubleTickIcon, FileBlackIcon, MikeBlackIcon, PhoneIncomingRedIcon, PictureBlackIcon, PinBlackIcon, VideoBlackIcon } from '../../utils/svg';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';


export type AllChatsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}


const AllChats = ({ selectedCards, onCardSelection }: AllChatsProps) => {
    const navigation =useNavigation()
    return (
        <View style={[mt20, styles.whiteBg]}>
            <View style={[flexRow, spaceBetween, mt20, alignSelfCenter, p10, borderRadius10, styles.archiveCard, mb15]}>
                <View style={[flexRow, spaceEvenly]}>
                    {/* <Icon name="archive-outline" size={25} color={colors.greyVar4} style={[mh10]} /> */}
                    <View style={mt5}>
                        <ArchiveIconBlackIcon />
                    </View>
                    <H18BoldGrey style={ml15}>{labels.Archived}</H18BoldGrey>
                </View>
                <View style={[styles.roundNumber, { backgroundColor: colors.red }]}>
                    <Text style={[styles.roundNumberText]}>10</Text>
                </View>
            </View>
            <View style={flex1}>
                {allChatsData.map((chat) => (
                    <View key={chat.id}>
                        <ScrollView>
                            <CommonLineDividerGrey />
                            <TouchableOpacity onPress={() => {
                                if (selectedCards.length === 0) {
                                    navigation.navigate(screenName.ChatView as never);
                                } else {
                                    onCardSelection(chat.id);
                                }
                            }}
                                onLongPress={() => {
                                    if (!selectedCards.includes(chat.id)) {
                                        onCardSelection(chat.id);
                                    }
                                }} style={[ph20, pv15, { backgroundColor: selectedCards.includes(chat.id) ? colors.purpleVar1 : 'transparent' }]}>
                                <View style={[flexRow]}>
                                    <View>
                                        <Image source={chat.profileImg} style={styles.profileImg} />
                                        <View style={[{ backgroundColor: chat.status === 'active' ? '#20c997' : '' }, chat.status === 'active' ? styles.status : null]} />
                                    </View>
                                    <View style={[flex1]}>
                                        <RowSpaceBetween style={pb5}>
                                            <H16SemiBoldBlack>{chat.name}</H16SemiBoldBlack>
                                            <Text>{labels.Time1020}</Text>
                                        </RowSpaceBetween>
                                        {chat.id === 1 ? (
                                            <RowSpaceBetween>
                                                <H15Green>{labels.Typing}</H15Green>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlueDoubleTickIcon />
                                                    </View>
                                                    <PinBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 2 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <VideoBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Video}</H15Grey>
                                                </RowSpaceEvenly>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlueDoubleTickIcon />
                                                    </View>
                                                    <PinBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 3 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <MikeBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Audio}</H15Grey>
                                                </RowSpaceEvenly>
                                                <BlackSingleTickIcon />
                                            </RowSpaceBetween>
                                        ) : chat.id === 4 ? (
                                            <RowSpaceBetween>
                                                <H15Grey>{labels.Chaturl}</H15Grey>
                                                <View style={[styles.roundNumber, { backgroundColor: colors.purpleVar3 }]}>
                                                    <Text style={styles.roundNumberText}>3</Text>
                                                </View>
                                            </RowSpaceBetween>
                                        ) : chat.id === 5 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <PictureBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Image}</H15Grey>
                                                </RowSpaceEvenly>
                                                <BlackDoubleTickIcon />
                                            </RowSpaceBetween>
                                        ) : chat.id === 6 ? (
                                            <View style={[flexRow]}>
                                                <View style={mr5} >
                                                    <FileBlackIcon />
                                                </View>
                                                <H15Grey>{labels.guidelinespdf}</H15Grey>
                                            </View>
                                        ) : (
                                            <View style={[flexRow]}>
                                                <View style={mr5} >
                                                    <PhoneIncomingRedIcon />
                                                </View>
                                                <H15Red>{labels.MissedVoiceCall}</H15Red>
                                            </View>
                                        )
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                ))}
            </View>
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
    },
    roundNumber: {
        height: 25,
        width: 25,
        borderRadius: 20,
    },
    chatHeaderText: {
        fontSize: 19,
        color: colors.greyVar4,
        fontWeight: '700',
        top: 2
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 12,
        fontWeight: '400',
        marginTop: 3,
    },
    status: {
        borderWidth: 3,
        borderColor: colors.white,
        position: 'absolute',
        bottom: 5,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
    archiveCard: {
        height: 45,
        width: 0.90 * DevWidth,
        backgroundColor: colors.purpleVar1,
        borderRadius:10
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    }
});

export default AllChats
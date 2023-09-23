import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../../utils/colors';
import { alignSelfCenter, borderRadius10, flex1, flexRow, mh20, ml15, mr5, mt20, mv15, p10, pb5, spaceBetween, spaceEvenly } from '../commonStyles';
import { allChatsData } from '../../utils/data/chatsData';
import { DevWidth } from '../../utils/device';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import labels from '../../utils/labels';
import { H15Green, H15Grey, H15Red, H16SemiBoldBlack, H18BoldGrey } from '../commonText';
import { ArchiveIconBlackIcon, BlackDoubleTickIcon, BlackSingleTickIcon, BlueDoubleTickIcon, FileBlackIcon, MikeBlackIcon, PhoneIncomingRedIcon, PictureBlackIcon, PinBlackIcon, VideoBlackIcon } from '../../utils/svg';

export type AllChatsProps = {

}


const AllChats = (props: AllChatsProps) => {
    const [selectedCards, setSelectedCards] = useState<number[]>([]);

    const toggleCardSelection = (cardId: number) => {
        if (selectedCards.includes(cardId)) {
            setSelectedCards(selectedCards.filter(id => id !== cardId));
        } else {
            setSelectedCards([...selectedCards, cardId]);
        }
    };

    return (
        <View style={[flex1, mt20, styles.whiteBg]}>
            <View style={[flexRow, spaceBetween, mt20, alignSelfCenter, p10, borderRadius10, styles.archiveCard]}>
                <View style={[flexRow, spaceEvenly]}>
                    <View>
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
                            <CommonLineDividerGrey style={mv15} />
                            <TouchableOpacity onPress={() => {
                                if (selectedCards.length === 0) {
                                    console.log('navigated====>');
                                } else {
                                    toggleCardSelection(chat.id);
                                }
                            }} onLongPress={() => {
                                if (!selectedCards.includes(chat.id)) {
                                    setSelectedCards([chat.id]);
                                }
                            }} style={[mh20, { backgroundColor: selectedCards.includes(chat.id) ? colors.extraLightPurple : 'transparent' }]}>
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
                                                <View style={[styles.roundNumber, { backgroundColor: colors.purple }]}>
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
            <View>
                <Text>Total Selected Cards: {selectedCards.length}</Text>
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
        backgroundColor: colors.extraLightPurple
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    }
});

export default AllChats
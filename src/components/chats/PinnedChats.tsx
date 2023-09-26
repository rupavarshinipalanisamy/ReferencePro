import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { flex1, flexRow, mr5, mt20, mt5, mv10, pb5, ph20, pv15 } from '../commonStyles';
import { PinnedChatsdata } from '../../utils/data/chatsData';
import { CommonLineDividerGrey, RowSpaceBetween, RowSpaceEvenly } from '../commonView';
import { H15Green, H15Grey, H15Red, H16SemiBoldBlack } from '../commonText';
import { labels } from '../../utils/labels';
import { BlackDoubleTickIcon, BlackSingleTickIcon, BlueDoubleTickIcon, FileBlackIcon, MikeBlackIcon, PhoneIncomingRedIcon, PictureBlackIcon, PinBlackIcon, VideoBlackIcon, VideoRedIcon } from '../../utils/svg';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';
import { BottomTabBar } from '../commonComponents';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';

export type PinnedChatsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}


const PinnedChats = ({ selectedCards, onCardSelection }: PinnedChatsProps) => {
    const navigation = useNavigation();
    return (
        <View style={[flex1, mt20, styles.whiteBg]}>
            <View style={flex1}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {PinnedChatsdata.map((chat) => (
                        <View key={chat.id}>
                            {chat.id === 1 ? <View style={mv10} /> : <CommonLineDividerGrey />}
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
                                }} style={[ph20, pv15, {
                                    backgroundColor: selectedCards.includes(chat.id)
                                        ? colors.purpleVar1
                                        : 'transparent',
                                }]}>
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
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <BlackSingleTickIcon />
                                                    </View>
                                                    <PinBlackIcon />
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 4 ? (
                                            <RowSpaceBetween>
                                                <H15Grey>{labels.Chaturl}</H15Grey>
                                                <RowSpaceEvenly>
                                                    <View style={[styles.roundNumber, mr5, { backgroundColor: colors.purpleVar1 }]}>
                                                        <Text style={styles.roundNumberText}>3</Text>
                                                    </View>
                                                    <View style={mt5}>
                                                        <PinBlackIcon />
                                                    </View>
                                                </RowSpaceEvenly>
                                            </RowSpaceBetween>
                                        ) : chat.id === 5 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceEvenly>
                                                    <View style={mr5}>
                                                        <PictureBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.Image}</H15Grey>
                                                </RowSpaceEvenly>
                                                <RowSpaceBetween>
                                                    <View style={mr5}>
                                                        <BlackDoubleTickIcon />
                                                    </View>
                                                    <PinBlackIcon />
                                                </RowSpaceBetween>
                                            </RowSpaceBetween>
                                        ) : chat.id === 6 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceBetween>
                                                    <View style={mr5} >
                                                        <FileBlackIcon />
                                                    </View>
                                                    <H15Grey>{labels.guidelinespdf}</H15Grey>
                                                </RowSpaceBetween>
                                                <PinBlackIcon />
                                            </RowSpaceBetween>
                                        ) : chat.id === 7 ? (
                                            <RowSpaceBetween>
                                                <RowSpaceBetween>
                                                    <View style={mr5} >
                                                        <PhoneIncomingRedIcon />
                                                    </View>
                                                    <H15Red>{labels.MissedVoiceCall}</H15Red>
                                                </RowSpaceBetween>
                                                <PinBlackIcon />
                                            </RowSpaceBetween>
                                        ) : (
                                            <RowSpaceBetween>
                                                <RowSpaceBetween>
                                                    <View style={mr5} >
                                                        <VideoRedIcon />
                                                    </View>
                                                    <H15Red>{labels.MissedVideoCall}</H15Red>
                                                </RowSpaceBetween>
                                                <PinBlackIcon />
                                            </RowSpaceBetween>
                                        )
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
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
        backgroundColor: colors.purpleVar1
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    }
});

export default PinnedChats
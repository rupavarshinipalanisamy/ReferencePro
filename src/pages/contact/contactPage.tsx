import React, { Fragment, useState, } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { colors } from '../../utils/colors';
import { alignSelfCenter, borderRadius10, flex1, flexRow, m15, mb15, mh20, ml15, mr5, mt20, mt3, mt5, mv10, p10, pb5, ph10, ph20, ph5, pv15, spaceBetween, spaceEvenly } from '../../components/commonStyles';
import { PinnedChatsdata, allChatsData } from '../../utils/data/chatsData';
import { DevWidth } from '../../utils/device';
import { CardSurface, CommonLineDividerGrey, PurpleMainContainer, RowSpaceBetween, RowSpaceEvenly } from '../../components/commonView'
import { labels } from '../../utils/labels';
import { H15Green, H15Grey, H15Red, H16SemiBoldBlack, H18BoldGrey } from '../../components/commonText';
import { ArchiveIconBlackIcon, BlackDoubleTickIcon, BlackSingleTickIcon, BlueDoubleTickIcon, ContactImg1, FileBlackIcon, MikeBlackIcon, PhoneIncomingRedIcon, PictureBlackIcon, PinBlackIcon, VideoBlackIcon, VideoRedIcon } from '../../utils/svg';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { BottomTabBar, ChatHeader, ContactHeader, CustomActionBar, CustomActionBarContact, CustomActionBarSecond } from '../../components/commonComponents'
import { contactList } from '../../utils/data/contactData';
import CustomIcon from '../../utils/Icons';


export type AllChatsProps = {
}


const ContactPage = ({ }: AllChatsProps) => {
    const navigation = useNavigation();
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [selectedTab, setSelectedTab] = useState(labels.Contact);


    const toggleCardSelection = (cardId: number) => {
        if (selectedCards.includes(cardId)) {
            setSelectedCards(selectedCards.filter(id => id !== cardId));
        } else {
            setSelectedCards([...selectedCards, cardId]);
        }
    };

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
        setSelectedCards([]);
    };

    interface HeaderProps {
        selectedTab: string;
        selectedCards: number[];
        handleTabPress: (tab: string) => void;
    }

    const Header = ({ selectedTab, selectedCards, handleTabPress }: HeaderProps) => {
        const isCustomActionBar = selectedCards.length > 0;
        const showCustomActionBarSecond = selectedTab === labels.ArchiveChat && isCustomActionBar;

        return (
            <>
                {showCustomActionBarSecond ? (
                    <CustomActionBarSecond itemNumber={selectedCards.length} />
                ) : isCustomActionBar ? (
                    <CustomActionBarContact text={selectedCards.length} selectedCardsCount={selectedCards.length} />
                ) : (
                    <ContactHeader title={labels.Contact} />
                )}
            </>
        );
    };

    const contactsByFirstLetter = contactList.reduce((acc, contact) => {
        const firstLetter = contact.contName.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(contact);
        return acc;
    }, {});

    return (
        <Fragment>
            <StatusBar backgroundColor={colors.purpleVar3} />
            <PurpleMainContainer>
                <Header
                    selectedTab={selectedTab}
                    selectedCards={selectedCards}
                    handleTabPress={handleTabPress}
                />
                <View style={[flex1, mt20, styles.whiteBg]}>
                    <View style={flex1}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {Object.keys(contactsByFirstLetter).map((letter) => (
                                <View key={letter}>
                                    <Text style={styles.firstLetter}>{letter}</Text>
                                    {contactsByFirstLetter[letter].map((data) => (
                                        <TouchableOpacity
                                            key={data.id}
                                            onPress={() => {
                                                if (selectedCards.length === 0) {
                                                    console.log('navigated====>');
                                                } else {
                                                    toggleCardSelection(data.id);
                                                }
                                            }}
                                            onLongPress={() => {
                                                if (!selectedCards.includes(data.id)) {
                                                    setSelectedCards([data.id]);
                                                }
                                            }}
                                            style={
                                                selectedCards.includes(data.id) ? styles.selectedCardContainer : styles.cardContainer
                                            }
                                        >
                                            <View>

                                                <View>{data.profImg}</View>
                                                <View style={[{ backgroundColor: data.status === 'active' ? '#20c997' : '' }, data.status === 'active' ? styles.status : null]} >
                                                    <CustomIcon name='check' size={10} color={colors.black} type='entypo' />
                                                </View>

                                            </View>
                                            <View>
                                                <H16SemiBoldBlack style={[ph10]}>
                                                    {data.contName}
                                                </H16SemiBoldBlack>
                                                <View style={[flexRow, ph5, mt3]}>
                                                    <CustomIcon
                                                        name="location-outline"
                                                        size={18}
                                                        color={colors.greyVar4}
                                                        type="Ionicons"
                                                    />
                                                    <H15Grey>{data.location}</H15Grey>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <BottomTabBar />
                </View>
            </PurpleMainContainer>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    whiteBg: {
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden',
    },
    firstLetter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginTop: 10,
        marginLeft: 20,
    },
    cardContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        elevation: 4,
        margin: 15,
        padding: 10,
        borderRadius: 8
    },
    selectedCardContainer: {
        backgroundColor: colors.purpleVar1,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 8
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
        borderRadius: 10
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    }
});

export default ContactPage
import React, { Fragment, useState, } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh20, mh5, mt10, mt20, mt3, ph10, ph5 } from '../../components/commonStyles';
import { PurpleMainContainer } from '../../components/commonView'
import { labels } from '../../utils/labels';
import { H15Grey1, H16SemiBoldBlack1, H18BlackBoldText600 } from '../../components/commonText';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { BottomTabBar, ContactHeader, CustomActionBar1, CustomActionBarSecond } from '../../components/commonComponents'
import { contactList } from '../../utils/data/contactData';
import CustomIcon from '../../utils/Icons';
import { useTheme } from '../../Theme/ThemeContext';
import { WhiteBgContact } from '../../styledComponent/styledComponent';

export type AllChatsProps = {
}

const ContactPage = ({ }: AllChatsProps) => {
    const navigation = useNavigation();
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [selectedTab, setSelectedTab] = useState(labels.Contact);
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

    const handleCardSelection = (cardId: number) => {
        const updatedSelectedCards = [...selectedCards];
        if (updatedSelectedCards.includes(cardId)) {
            updatedSelectedCards.splice(updatedSelectedCards.indexOf(cardId), 1);
        } else {
            updatedSelectedCards.push(cardId);
        }
        setSelectedCards(updatedSelectedCards);
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
                    <CustomActionBar1 text={selectedCards.length} selectedCardsCount={selectedCards.length} />
                ) : (
                    <ContactHeader title={labels.Contact} icon2Navigate={() => { navigation.navigate(screenName.AddContact as never) }} profileAvatar={() => { navigation.navigate(screenName.SettingsScreen as never) }} />
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
            <PurpleMainContainer style={{ backgroundColor: isDarkTheme ? colors.darkModeVar1 : colors.purpleVar3 }}>
                <Header
                    selectedTab={selectedTab}
                    selectedCards={selectedCards}
                    handleTabPress={handleTabPress}
                />
                <WhiteBgContact style={[flex1, mt20, { backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.whiteVar0 }]}>
                    <View >
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
                            {Object.keys(contactsByFirstLetter).map((letter) => (
                                <View key={letter}>
                                    <H18BlackBoldText600 style={[mt10, mh20, { color: isDarkTheme ? colors.greyVar0 : colors.black }]}>{letter}</H18BlackBoldText600>
                                    {contactsByFirstLetter[letter].map((data) => (
                                        <View key={data.id}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (selectedCards.length === 0) {
                                                        console.log('navigated====>');
                                                    } else {
                                                        handleCardSelection(data.id);
                                                    }
                                                }}
                                                onLongPress={() => {
                                                    if (!selectedCards.includes(data.id)) {
                                                        setSelectedCards([data.id]);
                                                    }
                                                }}
                                                style={
                                                    selectedCards.includes(data.id) ? [styles.selectedCardContainer, { backgroundColor: isDarkTheme ? colors.darkModeVar6 : colors.purpleVar1 }]
                                                        :
                                                        [styles.cardContainer, { backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.white }]
                                                }
                                            >
                                                <View>
                                                    <TouchableOpacity onPress={() => navigation.navigate(screenName.ContactDetails as never)}>
                                                        <View style={[]}>{data.profImg}</View>
                                                    </TouchableOpacity>
                                                    {
                                                        selectedCards.includes(data.id) && (
                                                            <View style={[{ backgroundColor: colors.green, borderColor: isDarkTheme ? colors.darkModeVar4 : colors.white }, styles.status, alignItemsCenter, justyfyCenter]} >
                                                                <CustomIcon name='check' size={10} color={isDarkTheme ? colors.darkModeVar2 : colors.white} type='entypo' />
                                                            </View>
                                                        )
                                                    }
                                                </View>
                                                <View style={[mh5]}>
                                                    <H16SemiBoldBlack1 style={[ph10, { color: isDarkTheme ? colors.greyVar0 : colors.black }]}>
                                                        {data.contName}
                                                    </H16SemiBoldBlack1>
                                                    <View style={[flexRow, ph5, mt3]}>
                                                        <CustomIcon
                                                            name="location-outline"
                                                            size={18}
                                                            color={isDarkTheme ? colors.greyVar3 : colors.greyVar4}
                                                            type="Ionicons"
                                                        />
                                                        <H15Grey1 style={[{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{data.location}</H15Grey1>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </WhiteBgContact>
            </PurpleMainContainer>
            <BottomTabBar />
        </Fragment>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        elevation: 4,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'center',
    },
    selectedCardContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 8
    },
    status: {
        borderWidth: 1.5,
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 15,
        width: 15,
        borderRadius: 100,
    },
});

export default ContactPage;
import React, { Fragment, useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { PurpleMainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import AllChats from '../../components/chats/AllChats';
import {labels} from '../../utils/labels';
import { ChatHeader, CustomActionBar, CustomActionBarSecond, TabControl } from '../../components/commonComponents';
import { flex1, flexRow, mh20, ml10, mv15, spaceAround, spaceBetween } from '../../components/commonStyles';
import PinnedChats from '../../components/chats/PinnedChats';
import ArchiveChats from '../../components/chats/ArchiveChats';
import { ArchiveIconWhiteIcon, DeleteWhiteIcon, LeftArrowWhiteIcon, ThreeDotsWhiteIcon } from '../../utils/svg';

export type chatProps = {

}

const Chats = (props: chatProps) => {
    const [selectedTab, setSelectedTab] = useState('allChat');
    const [selectedCards, setSelectedCards] = useState<number[]>([]);


    const tabs = [
        { label: labels.AllChats },
        { label: labels.PinnedChat, count: 5 },
        { label: labels.ArchiveChat, count: 3 },
    ];

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
        setSelectedCards([]);
    };

    const handleCardSelection = (cardId: number) => {
        const updatedSelectedCards = [...selectedCards];

        if (updatedSelectedCards.includes(cardId)) {
            updatedSelectedCards.splice(updatedSelectedCards.indexOf(cardId), 1);
        } else {
            updatedSelectedCards.push(cardId);
        }

        setSelectedCards(updatedSelectedCards);
    };

    interface HeaderProps {
        selectedTab: string;
        selectedCards: number[];
        handleTabPress: (tab: string) => void;
      }

    const Header = ({ selectedTab, selectedCards, handleTabPress } : HeaderProps ) => {
        const isCustomActionBar = selectedCards.length > 0;
        const showCustomActionBarSecond = selectedTab === labels.ArchiveChat && isCustomActionBar;

        return (
            <>
                {showCustomActionBarSecond ? (
                    <CustomActionBarSecond itemNumber={selectedCards.length} />
                ) : isCustomActionBar ? (
                    <CustomActionBar text={selectedCards.length} />
                ) : (
                    <ChatHeader title={labels.Chats} />
                )}
            </>
        );
    };

    return (
        <Fragment>
            <PurpleMainContainer>
                <StatusBar backgroundColor={colors.purpleVar3} />
                <Header
                    selectedTab={selectedTab}
                    selectedCards={selectedCards}
                    handleTabPress={handleTabPress}
                />
                <View style={flex1}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                    {selectedTab === labels.AllChats && (
                        <AllChats
                            selectedCards={selectedCards}
                            onCardSelection={handleCardSelection}
                        />
                    )}
                    {selectedTab === labels.PinnedChat && (
                        <PinnedChats selectedCards={selectedCards}
                            onCardSelection={handleCardSelection} />
                    )}
                    {selectedTab === labels.ArchiveChat && (
                        <ArchiveChats
                            selectedCards={selectedCards}
                            onCardSelection={handleCardSelection} />
                    )}
                </View>
            </PurpleMainContainer>
        </Fragment>
    )
}

export default Chats
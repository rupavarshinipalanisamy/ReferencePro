import React, { Fragment, useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { PurpleMainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import AllChats from '../../components/chats/AllChats';
import labels from '../../utils/labels';
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
    };

    const handleCardSelection = (cardId: number) => {
        if (selectedCards.includes(cardId)) {
            setSelectedCards(selectedCards.filter((id) => id !== cardId));
        } else {
            setSelectedCards([...selectedCards, cardId]);
        }
    };

    return (
        <Fragment>
            <PurpleMainContainer>
                <StatusBar backgroundColor={colors.purple} />
                {selectedCards.length === 0 ? (
                    <ChatHeader title={labels.Chats} />
                ) : (
                    <CustomActionBar text={selectedCards.length} />
                )}
                <CustomActionBarSecond />
                <View style={flex1}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                    {selectedTab === labels.AllChats && (
                        <AllChats
                            selectedCards={selectedCards}
                            onCardSelection={handleCardSelection}
                        />
                    )}
                    {selectedTab === labels.PinnedChat && <PinnedChats />}
                    {selectedTab === labels.ArchiveChat && <ArchiveChats />}
                </View>
            </PurpleMainContainer>
        </Fragment>
    )
}

export default Chats
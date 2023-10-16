import React, { useState, Fragment } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { labels } from '../../utils/labels';
import { PurpleMainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { CallHeader, ChatHeader, CustomcallActionBar, TabControl } from '../../components/commonComponents';
import { flex1 } from '../../components/commonStyles';
import AllCalls from '../../components/calls/AllCalls';
import IncomingCalls from '../../components/calls/IncomingCalls';
import OutgoingCalls from '../../components/calls/OutgoingCalls';
import MissedCalls from '../../components/calls/MissedCalls';
import { isDark } from '../../Theme/ThemeContext';

export type CallsProps = {

}


const Calls = (props: CallsProps) => {
    const [selectedTab, setSelectedTab] = useState(labels.AllCalls);
    const [selectedCards, setSelectedCards] = useState<number[]>([]);

    const tabs = [
        { label: labels.AllCalls },
        { label: labels.Incoming },
        { label: labels.Outgoing },
        { label: labels.Missed },
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

        return (
            <>
                { isCustomActionBar ? (
                    <CustomcallActionBar text={selectedCards.length} selectedCardsCount={selectedCards.length} />
                ) : (
                    <ChatHeader title={labels.Calls} isCall = {true} />
                )}
            </>
        );
    };

    return (
        <Fragment>
            <PurpleMainContainer>
                <StatusBar backgroundColor={isDark() ? colors.darkModeVar1 : colors.purpleVar3} />
                {/* <CallHeader title={labels.Groups} /> */}
                <Header selectedTab={selectedTab} selectedCards={selectedCards} handleTabPress={handleTabPress} />
                <View style={flex1}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                    {selectedTab === labels.AllCalls && (
                        <AllCalls selectedCards = {selectedCards} onCardSelection={handleCardSelection} />
                    )}
                    {selectedTab === labels.Incoming && (
                        <IncomingCalls selectedCards = {selectedCards} onCardSelection={handleCardSelection} />
                    )}
                    {selectedTab === labels.Outgoing && (
                        <OutgoingCalls selectedCards = {selectedCards} onCardSelection={handleCardSelection} />
                    )}
                    {selectedTab === labels.Missed && (
                        <MissedCalls selectedCards = {selectedCards} onCardSelection={handleCardSelection} />
                    )}
                </View>
            </PurpleMainContainer>
        </Fragment>
    )
}

export default Calls
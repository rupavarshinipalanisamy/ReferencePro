import React, { useState, Fragment, useEffect } from 'react';
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
import AllStatus from './allStatus';
import RecentStatusScreen from './recentStatus';
import ViewedStatusScreen from './viewedStatus';
import MutedStatusScreen from './mutedStatus';

export type CallsProps = {
  changeButtonText: (text: string) => void; // Add this prop
}

const NoStatus = (props: CallsProps) => {
  const [selectedTab, setSelectedTab] = useState(labels.allStatus);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const tabs = [
    { label: labels.allStatus },
    { label: labels.recent },
    { label: labels.viewed },
    { label: labels.muted },
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

  const Header = ({ selectedTab, selectedCards, handleTabPress }: HeaderProps) => {
    const isCustomActionBar = selectedCards.length > 0;

    return (
      <>
        {isCustomActionBar ? (
          <CustomcallActionBar text={selectedCards.length} selectedCardsCount={selectedCards.length} />
        ) : (
          <ChatHeader title={labels.Calls} isCall={true} />
        )}
      </>
    );
  };

  useEffect(() => {
    if (props.changeButtonText) {
      props.changeButtonText('New Text for the Button');
    }
  }, [props.changeButtonText]);

  return (
    <Fragment>
      <PurpleMainContainer>
        <StatusBar backgroundColor={colors.purpleVar3} />
        <ChatHeader title={labels.status} />
        <View style={flex1}>
          <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
          {selectedTab === labels.allStatus && (
            <AllStatus selectedCards={selectedCards} onCardSelection={handleCardSelection} />
          )}
          {selectedTab === labels.recent && (
            <RecentStatusScreen selectedCards={selectedCards} onCardSelection={handleCardSelection} />
          )}
          {selectedTab === labels.viewed && (
            <ViewedStatusScreen selectedCards={selectedCards} onCardSelection={handleCardSelection} />
          )}
          {selectedTab === labels.muted && (
            <MutedStatusScreen selectedCards={selectedCards} onCardSelection={handleCardSelection} />
          )}
        </View>
      </PurpleMainContainer>
    </Fragment>
  )
}

export default NoStatus;

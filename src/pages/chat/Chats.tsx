import React, { Fragment, useState } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { PurpleMainContainer, RowSpaceBetween } from '../../components/commonView';
import { colors } from '../../utils/colors';
import AllChats from '../../components/chats/AllChats';
import labels from '../../utils/labels';
import { ChatHeader, CustomActionBar, TabControl } from '../../components/commonComponents';
import { flex1, flexRow, mh20, mr10, mv15, spaceAround, spaceBetween } from '../../components/commonStyles';
import { ArchiveIconWhiteIcon, DeleteWhiteIcon, LeftArrowWhiteIcon, MikeWhiteIcon, PinWhiteIcon, ThreeDotsWhiteIcon } from '../../utils/svg';

export type chatProps = {

}

const Chats = (props: chatProps) => {
    const [selectedTab, setSelectedTab] = useState('allChat');
    const tabs = [
        { label: labels.AllChats },
        { label: labels.PinnedChat, count: 5 },
        { label: labels.ArchiveChat, count: 3 },
    ];

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <Fragment>
            <PurpleMainContainer>
                <StatusBar backgroundColor={colors.purple} />
                <ChatHeader title={labels.Chats} />
                <CustomActionBar text={2} />
                <View style = {flex1}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                    {selectedTab === labels.AllChats && <AllChats />}
                    {selectedTab === labels.PinnedChat && <Text>pinned chat</Text>}
                    {selectedTab === labels.ArchiveChat && <Text>archive chat</Text>}
                </View>
            </PurpleMainContainer>
        </Fragment>
    )
}

export default Chats
import React, {useState, Fragment} from 'react';
import { Text, View } from 'react-native';
import { labels } from '../../utils/labels';
import { PurpleMainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { ChatHeader, TabControl } from '../../components/commonComponents';
import { flex1 } from '../../components/commonStyles';
import AllGroups from '../../components/groups/AllGroups';
import PinnedGroups from '../../components/groups/PinnedGroups';
import ArchiveGroups from '../../components/groups/ArchiveGroups';
import { screenName } from '../../utils/screenName';
import { isDark, useTheme } from '../../Theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export type GroupsProps = {
    
    }


const Groups = (props: GroupsProps) => {
    const [selectedTab, setSelectedTab] = useState(labels.AllGroups);
    const tabs = [
        { label: labels.AllGroups },
        { label: labels.PinnedGroups},
        { label: labels.ArchiveGroup},
    ];
    const {theme} = useTheme();
    const isDarkTheme = theme === 'dark';

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };
    const navigation = useNavigation();

    return (
        <Fragment>
            <PurpleMainContainer style = {{backgroundColor: isDarkTheme ? colors.darkModeVar1 : colors.purpleVar3}}> 
                <ChatHeader title={labels.Groups} icon3Navigate={() => { navigation.navigate(screenName.CreateGroup as never)}} />
                <View style={flex1}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                    {selectedTab === labels.AllGroups && (
                        <AllGroups />
                    )}
                    {selectedTab === labels.PinnedGroups && (
                        <PinnedGroups />
                    )}
                    {selectedTab === labels.ArchiveGroup && (
                        <ArchiveGroups />
                    )}
                </View>
            </PurpleMainContainer>
        </Fragment>
    )
}

export default Groups
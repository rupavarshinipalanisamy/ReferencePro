import React, { Fragment, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, StatusBar } from 'react-native';
import { MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { flexRow, mh10, mh20, mv15, p5, spaceBetween } from '../../components/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../../../assets/images/profileAvatar.svg'
import AllChats from '../../components/chats/AllChats';

export type chatProps = {

}

const Chats = (props: chatProps) => {
    const [selectedTab, setSelectedTab] = useState('');
    const [activeTab, setActiveTab] = useState('allChat');

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'allChat':
                return <AllChats />
            case 'pinnedChat':
                return <Text>pinned chat</Text> // need to render as tag
            case 'archiveChat':
                return <Text>archive chat</Text>
            default:
                return null;
        }
    };

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
        setActiveTab(tab);
    };

    return (
        <Fragment>
            <MainContainer>
                <StatusBar backgroundColor={colors.purple} />
                <View style={[flexRow, spaceBetween, mh20, mv15]}>
                    <Text style={styles.chatHeaderText}>Chats</Text>
                    <View style={[flexRow, spaceBetween]}>
                        <Icon name="camera-outline" size={25} color={colors.white} style={mh10} />
                        <Icon name="search" size={25} color={colors.white} style={mh10} />
                        <Icon name="add-outline" size={25} color={colors.white} style={mh10} />
                        <Avatar />
                    </View>
                </View>
                <View>
                    <View style={styles.tabContainer}>
                        <TouchableOpacity style={[p5, { borderBottomWidth: activeTab === 'allChat' ? 3 : 0, borderBottomColor: activeTab === 'allChat' ? colors.white : null }]} onPress={() => handleTabPress('allChat')}>
                            <Text style={[styles.tabText, {color : activeTab === 'allChat' ? colors.white : colors.lightPurple}]}>All Chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[p5, { borderBottomWidth: activeTab === 'pinnedChat' ? 3 : 0, borderBottomColor: activeTab === 'pinnedChat' ? colors.white : null }]} onPress={() => handleTabPress('pinnedChat')}>
                            <View style={[flexRow, spaceBetween]}>
                                <Text style={[styles.tabText, {color : activeTab === 'pinnedChat' ? colors.white : colors.lightPurple}]}>Pinned Chat</Text>
                                <View style={[styles.roundNumber,{ backgroundColor: activeTab === 'pinnedChat' ? colors.white : colors.lightPurple }]}>
                                    <Text style={styles.roundNumberText}>5</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[p5, { borderBottomWidth: activeTab === 'archiveChat' ? 3 : 0, borderBottomColor: activeTab === 'archiveChat' ? colors.white : null }]} onPress={() => handleTabPress('archiveChat')}>
                            <View style={[flexRow, spaceBetween]}>
                                <Text style={[styles.tabText, {color : activeTab === 'archiveChat' ? colors.white : colors.lightPurple}]}>Archive Chat</Text>
                                <View style={[styles.roundNumber,{ backgroundColor: activeTab === 'archiveChat' ? colors.white : colors.lightPurple }]}>
                                    <Text style={styles.roundNumberText}>3</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {renderTabContent()}
                    </View>
                </View>
            </MainContainer>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    tabText: {
        fontSize: 16,
        fontWeight: '500',
        flexDirection: 'row',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    roundNumber : {
        height: 18, 
        width: 18, 
        borderRadius: 20,
        top : 3, 
        left : 5,
    },
    chatHeaderText : { 
        fontSize: 20, 
        color: colors.white, 
        fontWeight: '600' 
    },
    roundNumberText : { 
        textAlign: 'center', 
        color: colors.purple, 
        fontSize : 12 
    },
})

export default Chats
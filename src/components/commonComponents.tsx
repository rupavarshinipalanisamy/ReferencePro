import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../../assets/images/profileAvatar.svg';
import { flexRow, mh10, mh20, mr10, mv15, p5, spaceAround, spaceBetween } from './commonStyles';
import { colors } from '../utils/colors';
import { ArchiveIconWhiteIcon, DeleteWhiteIcon, LeftArrowWhiteIcon, MikeWhiteIcon, PinWhiteIcon, ThreeDotsWhiteIcon } from '../utils/svg';

// ====================   Chat based Header Component   ====================

interface ChatHeaderProps {
    title: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <Text style={styles.chatHeaderText}>{title}</Text>
            <View style={[flexRow, spaceBetween]}>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="camera-outline" size={25} color={colors.white} style={mh10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="search" size={22} color={colors.white} style={mh10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="add-outline" size={25} color={colors.white} style={mh10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Avatar />
                </TouchableOpacity>
            </View>
        </View>
    );
};


// ====================   Tab Control Component   ====================

interface TabControlProps {
    tabs: { label: string; count?: number }[];
    activeTab: string;
    onTabPress: (tab: string) => void;
}

export const TabControl: React.FC<TabControlProps> = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={styles.tabContainer}>
            {tabs.map((tabInfo) => (
                <TouchableOpacity
                    key={tabInfo.label}
                    style={[
                        p5,
                        { borderBottomWidth: activeTab === tabInfo.label ? 3 : 0 },
                        { borderBottomColor: activeTab === tabInfo.label ? colors.white : 'transparent' },
                    ]}
                    onPress={() => onTabPress(tabInfo.label)}
                >
                    <View style={[flexRow, spaceBetween]}>
                        <Text
                            style={[
                                styles.tabText,
                                { color: activeTab === tabInfo.label ? colors.white : colors.lightPurple },
                            ]}
                        >
                            {tabInfo.label}
                        </Text>
                        {tabInfo.count !== undefined && tabInfo.count > 0 && (
                            <View
                                style={[
                                    styles.roundNumber,
                                    { backgroundColor: activeTab === tabInfo.label ? colors.white : colors.lightPurple },
                                ]}
                            >
                                <Text style={styles.roundNumberText}>{tabInfo.count}</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

// ====================   NavBar while selecting cards in Chat page   ====================

interface CustomActionBarProps {
    text ?: number;
    onPinPress?: () => void;
    onDeletePress?: () => void;
    onMikePress?: () => void;
    onArchivePress?: () => void;
    onThreeDotsPress?: () => void;
}

export const CustomActionBar: React.FC<CustomActionBarProps> = ({
    text,
    onPinPress,
    onDeletePress,
    onMikePress,
    onArchivePress,
    onThreeDotsPress,
}) => {
    return (
        <View style={flexRow}>
            <View style={flexRow}>
                <LeftArrowWhiteIcon />
                <Text>{text}</Text>
            </View>
            <View style={[flexRow, spaceAround]}>
                <TouchableOpacity style = {mr10} onPress={onPinPress}>
                    <PinWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style = {mr10} onPress={onDeletePress}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style = {mr10} onPress={onMikePress}>
                    <MikeWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style = {mr10} onPress={onArchivePress}>
                    <ArchiveIconWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style = {mr10} onPress={onThreeDotsPress}>
                    <ThreeDotsWhiteIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    chatHeaderText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '600'
    },
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
    roundNumber: {
        height: 18,
        width: 18,
        borderRadius: 20,
        top: 3,
        left: 5,
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.purple,
        fontSize: 12,
    },
});

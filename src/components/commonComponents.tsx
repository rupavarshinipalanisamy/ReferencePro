import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flexRow, mh10, mh20, ml10, mr10, mv10, mv15, p5, spaceAround, spaceBetween, textCenter } from './commonStyles';
import { colors } from '../utils/colors';
import { ArchiveIconWhiteIcon, DeleteWhiteIcon, LeftArrowWhiteIcon, MikeWhiteIcon, PinWhiteIcon, ProfileAvatarIcon, ThreeDotsWhiteIcon } from '../utils/svg';
import { DevHeight, DevWidth } from '../utils/device';
import { RowSpaceBetween } from './commonView';
import { bottomNavData } from '../utils/data/bottomNavData';
import CustomIcon from '../utils/Icons';
import { useNavigation } from '@react-navigation/native';

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
                    <ProfileAvatarIcon />
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
                                { color: activeTab === tabInfo.label ? colors.white : colors.purpleVar2 },
                            ]}
                        >
                            {tabInfo.label}
                        </Text>
                        {tabInfo.count !== undefined && tabInfo.count > 0 && (
                            <View
                                style={[
                                    styles.roundNumber,
                                    { backgroundColor: activeTab === tabInfo.label ? colors.white : colors.purpleVar2 },
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
    text?: number;
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
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <View style={flexRow}>
                <LeftArrowWhiteIcon />
                {/* <Text>{text}</Text> */}
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 20, width: 20, borderRadius: 20, }}>
                    <Text style={{ textAlign: 'center', color: colors.white, fontSize: 14 }}>{text}</Text>
                </View>
            </View>
            <View style={[flexRow, spaceAround]}>
                <TouchableOpacity style={ml10} onPress={onPinPress}>
                    <PinWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onDeletePress}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onMikePress}>
                    <MikeWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onArchivePress}>
                    <ArchiveIconWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onThreeDotsPress}>
                    <ThreeDotsWhiteIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};


// ====================   NavBar while selecting cards in Archive chat page   ====================

interface CustomActionBarSecondProps {
    itemNumber: number;
    onDeletePress?: () => void;
    onArchivePress?: () => void;
    onMorePress?: () => void;
}

export const CustomActionBarSecond: React.FC<CustomActionBarSecondProps> = ({
    itemNumber,
    onDeletePress,
    onArchivePress,
    onMorePress,
}) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <View style = {flexRow}>
                <LeftArrowWhiteIcon />
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 20, width: 20, borderRadius: 20, }}>
                    <Text style={{ textAlign: 'center', color: colors.white, fontSize: 14 }}>{itemNumber}</Text>
                </View>
            </View>
            <View style={[flexRow, spaceAround]}>
                <TouchableOpacity style={ml10} onPress={onDeletePress}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onArchivePress}>
                    <ArchiveIconWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onMorePress}>
                    <ThreeDotsWhiteIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};


// ====================   Bottom Nav Bar   ====================

export const BottomTabBar = () => {
  const [selectedTab, setSelectedTab] = useState(1); 
  const navigation = useNavigation();

  const handleTabPress = (tabId : number, screenNameNavigate : string) => {
    setSelectedTab(tabId);
    navigation.navigate(screenNameNavigate as never)
  };

  return (
    <View style={[alignSelfCenter, borderRadius10, { height: DevHeight * 0.08, width: DevWidth * 0.9, backgroundColor: colors.purpleVar3, position: 'absolute', bottom: 10 }]}>
    <RowSpaceBetween style={[alignItemsCenter, mv10, mh20]}>
        {
            bottomNavData.map((item) => {
                const isSelected = item.id === selectedTab;
                return (
                    <TouchableOpacity key={item.id} onPress={() => handleTabPress(item.id, item.screenName)}>
                        <View style = {alignItemsCenter}>
                            <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={isSelected ? colors.white : colors.purpleVar2} />
                        </View>
                        <Text style={[{ color: isSelected ? colors.white : colors.purpleVar2 }, textCenter]}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </RowSpaceBetween>
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
        color: colors.purpleVar3,
        fontSize: 12,
    },
});

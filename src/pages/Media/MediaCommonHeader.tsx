import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ImageScreen from './Image';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, pb10, pl10, pl13, pt10, spaceBetween } from '../../components/commonStyles';
import { TopContainerWhiteCard1 } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { H18BlackText, H18GreyVar4Text } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { DevHeight } from '../../utils/device';
import Docs from './Docs';
import Video from './Video';
import Link from './Link';

export type MediaProps = {

}



interface TabControlProps {
    tabs: { label: string; count?: number }[];
    activeTab: string;
    onTabPress: (tab: string) => void;
}

export const TabControl: React.FC<TabControlProps> = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={[styles.tabContainer]}>
            {tabs.map((tabInfo) => (
                <View style={[flex1]} key={tabInfo.label}>
                    <View style={{ borderBottomWidth: activeTab === tabInfo.label ? 0 : 2, borderBottomColor: colors.greyVar7 }}>

                        <TouchableOpacity
                            style={[
                                { borderBottomWidth: activeTab === tabInfo.label ? 2 : 0 },
                                { borderBottomColor: activeTab === tabInfo.label ? colors.purpleVar3 : "" },

                            ]}
                            onPress={() => onTabPress(tabInfo.label)}
                        >
                            <View style={[flexRow, pb10]}>
                                <Text
                                    style={[
                                        styles.tabText,
                                        { color: activeTab === tabInfo.label ? colors.purpleVar3 : colors.greyVar4 },
                                    ]}
                                >
                                    {tabInfo.label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};


interface MediaHeaderProps {
    Imagess?: boolean;
    height?: number;
    startDot?: boolean
}

export const MediaHeader = (props: MediaHeaderProps) => {
    const [selectedTab, setSelectedTab] = useState('Image');

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };
    const tabs = [
        { label: "Image" },
        { label: "Video" },
        { label: "Docs" },
        { label: "Links" },
    ];
    return (
        <View style={{ flex: props.Imagess? 1:0}}>
            <TopContainerWhiteCard1 height={props.height}{...props}>
                <View style={[{ marginHorizontal: 25, marginTop: 15 }, flex1, justyfyCenter]}>
                    <View style={[flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <View style={pt10}>
                                <CustomIcon name='chevron-back-sharp' color={colors.black} size={16} type="Ionicons" />
                            </View>
                            <View style={[flexRow]}>
                                <TouchableOpacity style={[pl10, flexRow]}>
                                    <Image source={require('../../../assets/images/png/profile.png')} />
                                </TouchableOpacity>
                                <View style={pl13}>
                                    <H18BlackText>{labels.horaceKeene}</H18BlackText>
                                    <H18GreyVar4Text>{labels.online}</H18GreyVar4Text>
                                </View>
                            </View>
                        </View>
                        {props.startDot &&
                            <View style={[flexRow, alignItemsCenter]}>
                                <CustomIcon name='star' color={colors.greyVar4} size={20} type="Feather" />
                                <View style={pl10}>
                                    <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />
                                </View>
                            </View>}

                    </View>
                </View>
                {props.Imagess && <View style={{ marginHorizontal: 5, marginBottom: 22 }}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                </View>}
            </TopContainerWhiteCard1>
            
            {selectedTab === "Image" && (
                <ScrollView>
                    {props.Imagess &&  <ImageScreen />}
                 
                </ScrollView>
            )}
              {selectedTab === "Docs" && (
                <ScrollView>
                    {props.Imagess &&  <Docs />}
                 
                </ScrollView>
            )}
             {selectedTab === "Video" && (
                <ScrollView>
                    {props.Imagess &&  <Video />}
                 
                </ScrollView>
            )}
              {selectedTab === "Links" && (
                <ScrollView>
                    {props.Imagess &&  <Link />}
                 
                </ScrollView>
            )}
        </View>
    )

}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 18,
    },
    tabText: {
        fontSize: 17,
        fontWeight: '500',
        flexDirection: 'row',
        marginLeft: 14,
        padding: 4
    },
});
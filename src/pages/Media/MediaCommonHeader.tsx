import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import ImageScreen from './Image';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mt20, mt3, mt30, mt8, pb10, pl10, pl13, pl15, pt10, spaceBetween } from '../../components/commonStyles';
import { TopContainerWhiteCard1 } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { H14GreyVar4Bold400, H14blackVar1bold400Text, H15Blackvar2Bold500, H15Grey, H16Black600Text, H18BlackText, H18GreyVar4Text } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { DevHeight, DevWidth } from '../../utils/device';
import Docs from './Docs';
import Video from './Video';
import Link from './Link';
import { CustomModal } from '../../components/commonComponents';
import { useNavigation } from '@react-navigation/native';
import { isDark } from '../../Theme/ThemeContext';

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
                    <View style={{ borderBottomWidth: activeTab === tabInfo.label ? 0 : 2, borderBottomColor:(isDark()?colors.darkModeVar1:colors.greyVar7 ) }}>

                        <TouchableOpacity
                            style={[
                                { borderBottomWidth: activeTab === tabInfo.label ? 2 : 0 },
                                { borderBottomColor: activeTab === tabInfo.label ? (isDark()?colors.white:colors.purpleVar3)  : "" },

                            ]}
                            onPress={() => onTabPress(tabInfo.label)}
                        >
                            <View style={[flexRow, pb10]}>
                                <Text
                                    style={[
                                        styles.tabText,
                                        { color: activeTab === tabInfo.label ? (isDark()?colors.white:colors.purpleVar3) :(isDark()?colors.blackVar1:colors.greyVar3)},
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
    startDot?: boolean;
    imageViewModal?: boolean;
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

    const imageViewModalData = [
        {
            id: 1,
            iconName: 'mail-forward',
            iconType: 'FontAwesome',
            text: labels.Forward,
        },
        {
            id: 2,
            iconName: 'chatbox-ellipses-outline',
            iconType: 'Ionicons',
            text: labels.Showinchat,
        },
        {
            id: 3,
            iconName: 'thumbs-down',
            iconType: 'Feather',
            text: labels.Report,
        },
        {
            id: 4,
            iconName: 'delete',
            iconType: 'AntDesign',
            text: labels.Delete,
        },


    ]
    const [optionModal, setOptionModal] = useState(false);

    const handleOptionModal = () => {
        setOptionModal(!optionModal)
    }

    const OptionModalComponent = () => {
        return (
            <View>
                {
                    imageViewModalData.map((item) => {
                        if (props.imageViewModal && item.id === 3) {
                            return null;
                        } else {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}
                                >
                                    <View style={flexRow}>
                                        <View style={[alignItemsCenter, justyfyCenter]}>
                                            <CustomIcon
                                                name={item.iconName}
                                                size={16}
                                                color={isDark() ? colors.greyVar3 : colors.blackVar1}
                                                type={item.iconType}
                                            />
                                        </View>
                                        <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                            <H14blackVar1bold400Text>{item.text}</H14blackVar1bold400Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                    })
                }
            </View>
        )
    }

    return (
        <View style={{ flex: props.Imagess ? 1 : 0 }}>
            <TopContainerWhiteCard1 height={props.height}{...props}>
                <View style={[{ marginHorizontal: 25, marginTop: 15 }, flex1, justyfyCenter]}>
                    <View style={[flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <View style={pt10}>
                                <CustomIcon name='chevron-back-sharp' color={isDark()?colors.white:colors.blackVar2} size={16} type="Ionicons" />
                            </View>
                            <View style={[flexRow]}>
                                <TouchableOpacity style={[pl10]}>
                                    <Image source={require('../../../assets/images/png/profile.png')} />
                                </TouchableOpacity>
                                <View style={pl13}>
                                    <H15Blackvar2Bold500 style={{lineHeight:23}}>{labels.horaceKeene}</H15Blackvar2Bold500>
                                    <H14GreyVar4Bold400 style={{lineHeight:20}}>{labels.online}</H14GreyVar4Bold400>
                                </View>
                            </View>
                        </View>
                        {props.startDot &&
                            <View style={[flexRow, alignItemsCenter]}>
                                <CustomIcon name='star' color={isDark()?colors.white:colors.greyVar4} size={20} type="Feather" />
                                <TouchableOpacity style={pl10} onPress={handleOptionModal}>
                                    <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={isDark()?colors.white:colors.greyVar4} />
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                </View>
                {props.Imagess && <View style={{ marginHorizontal: 5, marginBottom: 22 }}>
                    <TabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
                </View>}
            </TopContainerWhiteCard1>

            {selectedTab === "Image" && (
                <ScrollView>
                    {props.Imagess && <ImageScreen />}

                </ScrollView>
            )}
            {selectedTab === "Docs" && (
                <ScrollView>
                    {props.Imagess && <Docs />}

                </ScrollView>
            )}
            {selectedTab === "Video" && (
                <ScrollView>
                    {props.Imagess && <Video />}

                </ScrollView>
            )}
            {selectedTab === "Links" && (
                <ScrollView>
                    {props.Imagess && <Link />}

                </ScrollView>
            )}
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.47}
                modalData={<OptionModalComponent />}
                marginTop={60}
                onClose={() => setOptionModal(false)}
            />
        </View>
    )

}



interface TextInputHeaderProps {
    height?: number;
    onBack: () => void

}

export const TextInputHeader = (props: TextInputHeaderProps) => {
    const navigation = useNavigation();
    return (
        <View>
            <TopContainerWhiteCard1 height={DevHeight / 7.5}{...props}>
                <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                    <View style={[flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <TouchableOpacity style={[alignItemsCenter, justyfyCenter]}
                                onPress={props.onBack}
                            >
                                <View style={{ top: 8 }}>
                                    <CustomIcon name='chevron-back-sharp' color={isDark()?colors.white:colors.black} size={16} type="Ionicons" />

                                </View>
                            </TouchableOpacity>

                            <View style={[pl13]}>
                                <TextInput placeholder='Search...' style={{
                                    borderBottomWidth: 1, borderBottomColor:isDark()? 'rgba(78,80,114,0.5)':colors.greyVar2, width: DevWidth / 1.35,
                                    fontSize: 14, fontWeight: '400', color: colors.blackVar1
                                }} />


                            </View>
                        </View>
                        <View style={[flexRow, alignItemsCenter]}>
                            <TouchableOpacity style={pl10} >
                                <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={isDark()?colors.white:colors.greyVar4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TopContainerWhiteCard1>

        </View>
    )
}
interface StarredAndVerifycodeHeaderProps {
    height?: number;
    headerText: string;
    isSearchDot: boolean;
    pencilNavigate?: () => void;
    onPress?: () => void;

}

export const StarredAndVerifycodeHeader = (props: StarredAndVerifycodeHeaderProps) => {
    const navigation = useNavigation();
    const [optionModal, setOptionModal] = useState(false);
    const handleOptionModal = () => {
        setOptionModal(!optionModal);
    }

    const StarMessageModal = () => {
        return (
            <View>
                <TouchableOpacity style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                    <View style={flexRow}>
                        <View style={[alignItemsCenter, justyfyCenter]}>
                            <CustomIcon name='star-outline' color={colors.blackVar1} size={18} type="Ionicons" />
                        </View>
                        <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                            <H14blackVar1bold400Text>Unstar All</H14blackVar1bold400Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <TopContainerWhiteCard1 height={DevHeight / 7.5}{...props}>
                <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                    <View style={[flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <TouchableOpacity style={[alignItemsCenter, justyfyCenter]}
                                onPress={navigation.goBack}
                            >
                                <CustomIcon name='chevron-back-sharp' color={isDark() ? colors.white : colors.blackVar2} size={16} type="Ionicons" />
                            </TouchableOpacity>
                            <View style={pl13}>
                                <H18BlackText>{props.headerText}</H18BlackText>
                            </View>
                        </View>
                        {
                            props.isSearchDot ? (
                                <View style={[flexRow, alignItemsCenter]}>
                                    <TouchableOpacity onPress={props.onPress}>
                                        <CustomIcon name="search" size={20} color={isDark() ? colors.white : colors.greyVar4} type="Ionicons" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={pl15} onPress={handleOptionModal} >
                                        <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={20} color={isDark() ? colors.white : colors.greyVar4} />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={[flexRow, alignItemsCenter]}>
                                    <CustomIcon name="search" size={20} color={isDark() ? colors.white : colors.greyVar4} type="Ionicons" />
                                    <TouchableOpacity onPress={props.pencilNavigate} style={pl15} >
                                        <CustomIcon name='pencil' type="octicons" size={20} color={isDark() ? colors.white : colors.greyVar4} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                </View>
            </TopContainerWhiteCard1>
            <CustomModal
                isVisible={optionModal}
                width={DevWidth * 0.47}
                modalData={<StarMessageModal />}
                marginTop={48}
                onClose={() => setOptionModal(false)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 18,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '500',
        flexDirection: 'row',
        marginLeft: 14,
        padding: 4
    },
});


interface SearchHeader {
    height?: number;
    headerText: string;
    searchIcon?: boolean;
    editIcon?: boolean
}

export const SearchHeader = (props: SearchHeader) => {
    const navigation = useNavigation()
    return (
        <View>
            <TopContainerWhiteCard1 height={DevHeight / 10}{...props}>
                <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                    <View style={[flexRow, spaceBetween]}>
                        <View style={[flexRow]}>
                            <TouchableOpacity style={[justyfyCenter, alignItemsCenter, { marginTop: 2 }]}
                                onPress={navigation.goBack}
                            >
                                <CustomIcon name='chevron-left' color={isDark() ? colors.white : colors.black} size={18} type="entypo" />
                            </TouchableOpacity>
                            <H18BlackText style={pl13}>{props.headerText}</H18BlackText>
                        </View>
                        {props.editIcon &&
                            <CustomIcon name='pencil' size={20} color={isDark() ? colors.white : colors.greyVar4} type='SimpleLineIcons' />}
                        {props.searchIcon &&
                            <CustomIcon name="search" size={20} color={isDark() ? colors.white : colors.greyVar4} type="Ionicons" />
                        }
                    </View>
                </View>
            </TopContainerWhiteCard1>
        </View>
    )
}



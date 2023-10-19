import React, { Fragment, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { MainContainer, CommonLineDividerGrey } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mr5, mt10, mt15, mt20, pl10, pl13, pt10, pt5, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import { H14BlackText, H14Blackvar2Bold500, H14purpleVar3Text, H15Grey, H16BlackText, H18BlackText } from '../../components/commonText';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { CardHeaderText, CustomModal, ProfileCard } from '../../components/commonComponents';
import { IconModal } from '../../components/commonModal';
import { BlockUserModal, ReportUserModal } from '../../ModalContents/IconModelContents';
import { InfoCardData, colorIconsData, groupsData, mediaData } from '../../utils/data/profileData';
import { Groups, Header, InfoCard, MediaCard } from '../../components/profile/profilecomponents';
import { isDark } from '../../Theme/ThemeContext';

export const ColorIconTab = ({ openModal }: any) => {
    const navigation = useNavigation()
    return (
        <View>
            {
                colorIconsData.map((item) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                if (item.id === 4) {
                                    openModal(4); // Open Block User modal
                                } else if (item.id === 5) {
                                    openModal(5); // Open Delete Chat modal
                                } else {
                                    // Navigate to the desired screen for other items
                                    navigation.navigate(item.screenName as never);
                                }
                            }}
                        >
                            <View style={[flexRow, spaceBetween, { paddingBottom: 12}]}>
                                <View style={[flexRow]}>
                                    <View style={{ height: 26, width: 26, borderRadius: 6, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H14Blackvar2Bold500>{item.name}</H14Blackvar2Bold500>
                                    </View>
                                </View>
                                {
                                    item.id === 1 ? (
                                        <View style={[flexRow, alignItemsCenter, justyfyCenter]}>
                                            <View >
                                                <Text>10</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <CustomIcon name='chevron-right' color={isDark() ? colors.greyVar0 : colors.greyVar4} size={24} type="MaterialIcons"
                                                />
                                            </View>
                                        </View>
                                    ) : (
                                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <CustomIcon name='chevron-right' color={isDark() ? colors.greyVar0 : colors.greyVar4} size={24} type="MaterialIcons"
                                            />
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const UserProfile = () => {
    const [selectedModalId, setSelectedModalId] = useState(null);
    const closeModal = () => {
        setSelectedModalId(null);
    };
    const openModal = (id: number) => {
        setSelectedModalId(id);
    }
    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0, flex: 1 }}>
                <Header />
                <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                    <ProfileCard />
                    <InfoCard />
                    <MediaCard />
                    <Groups />
                    <ColorIconTab openModal={openModal} />
                </ScrollView>
                {selectedModalId === 4 && (
                    <IconModal
                        isVisible={true}
                        onClose={closeModal}
                        contentComponent={<BlockUserModal />}
                        iconName='block-flipped'
                        iconType='MaterialIcons'
                        iconSize={22}
                    />
                )}
                {selectedModalId === 5 && (
                    <IconModal
                        isVisible={true}
                        onClose={closeModal}
                        contentComponent={<ReportUserModal />}
                        iconName='block-flipped'
                        iconType='MaterialIcons'
                        iconSize={22}
                    />
                )}

            </MainContainer>
        </Fragment>
    )
}


export default UserProfile

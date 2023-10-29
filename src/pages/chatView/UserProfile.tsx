import React, { Fragment, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Alignjustifycenter, MainContainer, RowSpaceBetween } from '../../components/commonView';
import { colors } from '../../utils/colors';
import {  alignSelfCenter, flexRow,  mb15, mh20, mr15, mr5, mt15, pl13, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import { H14Blackvar2Bold500, H14GreyVar4Bold400, H16font600Black } from '../../components/commonText';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { MultiSelectOption, ProfileCard } from '../../components/commonComponents';
import { IconModal } from '../../components/commonModal';
import { colorIconsData } from '../../utils/data/profileData';
import { Groups, Header, InfoCard, MediaCard } from '../../components/profile/profilecomponents';
import { isDark } from '../../Theme/ThemeContext';
import { SmallButton } from '../../components/commonButtons';


const UserProfile = () => {
    const [blockmodal, setBlockModal] = useState(false);
    const [reportmodal, setReportModal] = useState(false);
    const navigation = useNavigation();

    const openModal = (id: number) => {
        if (id === 4) {
            handleBlockModal()
        } else if (id === 5) {
            handleReportModal()
        } else if (id === 1) {
            navigation.navigate(screenName.StarredMsg as never);
        } else if (id === 3) {
            navigation.navigate(screenName.VerifyCode as never);
        }
    };

    const handleBlockModal = () => {
        setBlockModal(!blockmodal)
    }

    const handleReportModal = () => {
        setReportModal(!reportmodal)
    }

    const BlockUserModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setBlockModal(false)
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(false);
        };

        return (
            <View>
                <View style={mh20}>
                    <H16font600Black style={[{ textAlign: 'center', bottom: 5 }]}>Block Horace Keene?</H16font600Black>
                    <Text style={{
                        textAlign: 'center', fontSize: 14, fontWeight: '400', lineHeight: 20, color: colors.greyVar4, marginTop: 5
                    }}>Blocked contacts will no longer be able to call you or send you messages.</Text>
                </View>

                <RowSpaceBetween style={[mh20,mb15,{marginTop: 18 }]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButtonClick}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 3.15}
                    />
                    <SmallButton
                        title={labels.Block}
                        onChange={handleSaveChangesClick}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? (isDark() ? colors.redVar3 : colors.purpleVar3) : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 3.15}
                    />
                </RowSpaceBetween>
            </View>
        )
    }


    const ReportUserModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const [checkBox, setCheckBox] = useState(false);

        const handleCheckBox = () => {
            setCheckBox(!checkBox);
        }
        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setReportModal(false)
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(false);
        };

        return (
            <View>
                <View style={mh20}>
                    <H16font600Black style={[{ textAlign: 'center', bottom: 5 }]}>Report Horace Keene?</H16font600Black>
                    <Text style={{
                        textAlign: 'center', fontSize: 14, fontWeight: '400', lineHeight: 20, color: colors.greyVar4, marginTop: 5
                    }}>If you block this contact and clear the chat, messages will only be removed from this device and your devices</Text>

                    <View style={[flexRow, mt15, alignSelfCenter]}>
                        <View style={mr15}>
                            <MultiSelectOption selectedColor={colors.purpleVar3} unselectedColor={colors.greyVar6} isSelected={checkBox} onSelect={handleCheckBox} />

                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '400', lineHeight: 16, color: colors.greyVar4 }}>Block contact and delete chat</Text>
                    </View>

                </View>

                <RowSpaceBetween style={[mh20,mb15,{marginTop: 18 }]}>
                    <SmallButton
                        title={labels.cancel}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                        onChange={handleCancelButtonClick}
                        borderWidth={isCancelButtonActive ? 0 : 2}
                        width={DevWidth / 3.15}
                    />
                    <SmallButton
                        title={labels.Report}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? (isDark() ? colors.redVar3 : colors.purpleVar3) : colors.white}
                        onChange={handleSaveChangesClick}
                        borderWidth={isCancelButtonActive ? 2 : 0}
                        width={DevWidth / 3.15}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0, flex: 1 }}>
                <Header />
                <ScrollView style={mh20} showsVerticalScrollIndicator={false}>
                    <ProfileCard />
                    <InfoCard />
                    <MediaCard />
                    <Groups />
                    <View>
                        {
                            colorIconsData.map((item) => {
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={() => openModal(item.id)}
                                    >
                                        <View style={[flexRow, spaceBetween,{ paddingBottom: 12 }]}>
                                            <View style={[flexRow]}>
                                                <Alignjustifycenter style={{ height: 26, width: 26, borderRadius: 6, backgroundColor: item.bgcolor}}>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                                </Alignjustifycenter>
                                                <Alignjustifycenter style={pl13}>
                                                    <H14Blackvar2Bold500>{item.name}</H14Blackvar2Bold500>
                                                </Alignjustifycenter>
                                            </View>
                                            {
                                                item.id === 1 ? (
                                                    <Alignjustifycenter style={flexRow}>
                                                        <Alignjustifycenter style={[styles.roundNumber, { backgroundColor: isDark() ? colors.darkModeVar6 : 'rgba(97, 97, 97, 0.15) ' }, mr5]}>
                                                            <H14GreyVar4Bold400>10</H14GreyVar4Bold400>
                                                        </Alignjustifycenter>
                                                        <Alignjustifycenter style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                            <CustomIcon name='chevron-right' color={isDark() ? colors.greyVar0 : colors.greyVar4} size={24} type="MaterialIcons"
                                                            />
                                                        </Alignjustifycenter>
                                                    </Alignjustifycenter>
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
                </ScrollView>
                <IconModal
                    isVisible={blockmodal}
                    onClose={() => handleBlockModal()}
                    contentComponent={<BlockUserModal />}
                    iconName='block-flipped'
                    iconType='MaterialIcons'
                    iconSize={22}
                />
                <IconModal
                    isVisible={reportmodal}
                    onClose={() => handleBlockModal()}
                    contentComponent={<ReportUserModal />}
                    iconName='block-flipped'
                    iconType='MaterialIcons'
                    iconSize={22}
                />
            </MainContainer>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    roundNumber: {
        height: 24,
        width: 24,
        borderRadius: 15,
        marginLeft: 10,
    },
})
export default UserProfile
import React, { Fragment, useState } from 'react';
import { CommonLineDividerGrey, IconBackground, RowSpaceBetween, TopContainerWhiteCard } from '../../components/commonView';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity, View, StatusBar, } from 'react-native';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { justyfyCenter, ml10, alignItemsCenter, flexRow, ph10, mt20, mh20, mv20, ml30, flex1, mr30, ml15, mh25, pl13, ph15 } from '../../components/commonStyles';
import { InputContainer1 } from '../../styledComponent/styledComponent';
import { H14BlackVar2Bold400Text, H14blackVar1bold400Text, H14font400Gray4, H15font500Black, H16font600Black, H18BlackText } from '../../components/commonText';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { DevHeight, DevWidth } from '../../utils/device';
import { settingsData } from '../../utils/data/settingsData';
import { SmallButton } from '../../components/commonButtons';
import { labels } from '../../utils/labels';
import { IconModal } from '../../components/commonModal';
import { screenName } from '../../utils/screenName';
import { isDark } from '../../Theme/ThemeContext';
import { SettingAvatar } from '../../utils/svg';

export type settingsScreenProps = {

}

const SettingsScreen = (props: settingsScreenProps) => {
    const navigation = useNavigation()
    const [selectScreen, setSelectScreen] = useState(1);
    const [logoutOptionModal, setLogoutOptionModal] = useState(false);
    const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
        setLanguageModalVisible(false);
    };

    const handleDeleteChatButton = () => {
        setIsCancelButtonActive(false);
        navigation.navigate(screenName.Privacy as never);
    };

    const HandleLanguageModal = () => {
        setLanguageModalVisible(!isLanguageModalVisible);
    };

    const closeLanguageModal = () => {
        setLanguageModalVisible(false);
    };

    const handleLogoutOptionModal = () => {
        setLogoutOptionModal(!logoutOptionModal)
    }

    const handleTabPress = (screenId: number, screenNameNavigate: string) => {
        setSelectScreen(screenId);
        if (screenId === 11) {
            handleLogoutOptionModal();
        } else if (screenId === 6) {
            HandleLanguageModal();
        } else {
            navigation.navigate(screenNameNavigate as never)
        }
    };

    const LogoutOption = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
            setLogoutOptionModal(false);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(false);
        };

        return (
            <View style={[mh20]} >
                <H16font600Black>Logout?</H16font600Black>
                <H14blackVar1bold400Text style={[mt20]}>Are you sure you want to logout?</H14blackVar1bold400Text>
                <RowSpaceBetween style={[mv20]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 3.15}
                    />
                    <SmallButton
                        title={labels.Logout}
                        onChange={handleDeleteChatButton}
                        backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                        textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 3.15}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <StatusBar backgroundColor={isDark() ? colors.darkModeVar1 : colors.white} />
                <TopContainerWhiteCard>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
                        <H18BlackText style={pl13}>Settings</H18BlackText>
                        <CustomIcon name='search-outline' size={20} color={colors.black} type='Ionicons' />
                    </View>
                </TopContainerWhiteCard>
                <ScrollView>
                    <View style={[mh25]}>
                        <RowSpaceBetween style={[{ backgroundColor: isDark() ? colors.darkModeVar4 : colors.purpleVar1 }, flex1, styles.cardSurface]}>
                            <View style={flexRow}>
                                <SettingAvatar />
                                <View style={[ph15]}>
                                    <H15font500Black>Mark Villiams</H15font500Black>
                                    <H14font400Gray4>Hello, I am using Dreamschat</H14font400Gray4>
                                </View>
                            </View>
                            <IconBackground style={{ backgroundColor: isDark() ? colors.darkModeVar7 : colors.purpleVar4 }}>
                                <CustomIcon name='qr-code' size={20} color={colors.black} type='MaterialIcons' />
                            </IconBackground>
                        </RowSpaceBetween>
                        <View>
                            {settingsData.map((settingsDatas) => {
                                const isSelected = settingsDatas.id === selectScreen
                                return (
                                    <View key={settingsDatas.id} style={[flexRow, mt20]}>
                                        <InputContainer1>
                                            <View style={[flexRow, alignItemsCenter]}>
                                                <IconBackground style={{ backgroundColor: isDark() ? colors.darkModeVar7 : colors.purpleVar4 }}>
                                                    <CustomIcon name={settingsDatas.iconName} type={settingsDatas.iconType} size={settingsDatas.iconSize} color={isDark() ? colors.greyVar3 : colors.purpleVar3} />
                                                </IconBackground>
                                                <TouchableOpacity key={settingsDatas.id} onPress={() => handleTabPress(settingsDatas.id, settingsDatas.screenName)}>
                                                    <H15font500Black style={[ph10]}>{settingsDatas.name}</H15font500Black>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[justyfyCenter]}>
                                                <TouchableOpacity>
                                                    <CustomIcon name={settingsDatas.iconName1} type={settingsDatas.iconType1} size={settingsDatas.iconSize} color={isDark() ? colors.greyVar3 : colors.black} />
                                                </TouchableOpacity>
                                            </View>
                                        </InputContainer1>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <IconModal
                isVisible={logoutOptionModal}
                onClose={() => handleLogoutOptionModal()}
                contentComponent={<LogoutOption />}
                iconName='logout'
                iconType='AntDesign'
                iconSize={26}
            />
            <View>
                <Modal
                    style={{ margin: 0, position: 'absolute', bottom: 0, width: '100%' }}
                    isVisible={isLanguageModalVisible}
                    onBackdropPress={closeLanguageModal}
                >
                    <View>
                        <View
                            style={{
                                height: DevHeight / 5,
                                backgroundColor: isDark() ? colors.darkModeVar4 : colors.white,
                                paddingTop: 25,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                        >
                            <View style={[flexRow, alignItemsCenter, justyfyCenter]}>
                                <TouchableOpacity style={[ml30]}>
                                    <CustomIcon name='globe' size={18} color={isDark() ? colors.greyVar0 : colors.blackVar2} type="octicons" />
                                </TouchableOpacity>
                                <RowSpaceBetween style={[flex1, mr30]}>
                                    <H14BlackVar2Bold400Text style={[ml10]}>English</H14BlackVar2Bold400Text>
                                    <TouchableOpacity>
                                        <CustomIcon size={20} name='chevron-down' type='Feather' color={isDark() ? colors.greyVar0 : colors.blackVar2} />
                                    </TouchableOpacity>
                                </RowSpaceBetween>
                            </View>
                            <CommonLineDividerGrey style={[mv20]} />
                            <View style={[flex1]}>
                                <RowSpaceBetween>
                                    <View style={{ flex: 0.85 }} />
                                    <View style={[flexRow, flex1]}>
                                        <View style={[]}>
                                            <SmallButton
                                                title={labels.cancel}
                                                onChange={handleCancelButton}
                                                backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                                                textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                                                borderWidth={isCancelButtonActive ? 0 : 1}
                                                width={DevWidth / 4.5}
                                            />
                                        </View>
                                        <View style={[mr30, ml15]}>
                                            <SmallButton
                                                title={labels.Save}
                                                onChange={handleDeleteChatButton}
                                                backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                                                textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                                                borderWidth={isCancelButtonActive ? 1 : 0}
                                                width={DevWidth / 4.5}
                                            />
                                        </View>
                                    </View>
                                </RowSpaceBetween>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </Fragment>
    );
};

export default SettingsScreen

const styles = StyleSheet.create({
    cardSurface: {
        padding: 10,
        elevation: 4,
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 8,
    },
    topContainerWhiteCard: {
        backgroundColor: 'white',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        elevation: 4,
        height: DevHeight / 10,
        justifyContent: 'center'
    }

})

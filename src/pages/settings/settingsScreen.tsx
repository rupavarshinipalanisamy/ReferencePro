import React, { Fragment, useState } from 'react';
import { CommonLineDividerGrey, IconBackground, RowSpaceBetween, TopContainerWhiteCard } from '../../components/commonView';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity, View, } from 'react-native';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { justyfyCenter, ml10, alignItemsCenter, flexRow, ph10, mt20, mh20, mv20, ml30, flex1, mr30, ml15, mh25, ph15, justifyEnd, mb15, mv10, mh30 } from '../../components/commonStyles';
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
import { isDark, useTheme } from '../../Theme/ThemeContext';
import { SettingAvatar } from '../../utils/svg';
import { RadioBtn } from '../../components/commonComponents';
import { LanguagesData } from '../../utils/data/modalData';

export type settingsScreenProps = {
}

const SettingsScreen = (props: settingsScreenProps) => {
    const navigation = useNavigation()
    const [selectScreen, setSelectScreen] = useState(1);
    const [logoutOptionModal, setLogoutOptionModal] = useState(false);
    const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

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

    const handleLanguageSelect = (status: string) => {
        setSelectedStatus(status);
    };

    const LogoutOption = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
            setLogoutOptionModal(false);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(false);
            navigation.navigate(screenName.WelcomePage as never);
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
            <View style={[flex1, { backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <TopContainerWhiteCard style={{backgroundColor:isDarkTheme?colors.darkModeVar1:colors.white}}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 22, justifyContent: 'space-between' }}>
                        <H18BlackText style={[{color:isDarkTheme?colors.white:colors.black}]}>Settings</H18BlackText>
                        <CustomIcon name='search-outline' size={20} color={isDarkTheme?colors.white:colors.black} type='Ionicons' />
                    </View>
                </TopContainerWhiteCard>
                <ScrollView>
                    <View style={[mh25]}>
                        <RowSpaceBetween style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }, flex1, styles.cardSurface]}>
                            <View style={flexRow}>
                                <SettingAvatar />
                                <View style={[ph15]}>
                                    <H15font500Black style={{ color: isDarkTheme ? colors.greyVar0 : colors.black }}>Mark Villiams</H15font500Black>
                                    <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>Hello, I am using Dreamschat</H14font400Gray4>
                                </View>
                            </View>
                            <IconBackground style={{ backgroundColor: isDarkTheme ? colors.darkModeVar7 : colors.purpleVar4 }}>
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
                                                <IconBackground style={{ backgroundColor: isDarkTheme ? colors.darkModeVar7 : colors.purpleVar4 }}>
                                                    <CustomIcon name={settingsDatas.iconName} type={settingsDatas.iconType} size={settingsDatas.iconSize} color={isDarkTheme ? colors.greyVar3 : colors.purpleVar3} />
                                                </IconBackground>
                                                <TouchableOpacity key={settingsDatas.id} onPress={() => handleTabPress(settingsDatas.id, settingsDatas.screenName)}>
                                                    <H15font500Black style={[ph10, { color: isDarkTheme ? colors.greyVar0 : colors.black }]}>{settingsDatas.name}</H15font500Black>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[justyfyCenter]}>
                                                <TouchableOpacity>
                                                    <CustomIcon name={settingsDatas.iconName1} type={settingsDatas.iconType1} size={settingsDatas.iconSize} color={isDarkTheme ? colors.greyVar3 : colors.black} />
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
                                height: DevHeight / 3,
                                backgroundColor: isDark() ? colors.darkModeVar4 : colors.white,
                                paddingTop: 25,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                        >
                            <View style={[ml30]}>
                                <H15font500Black style={[ph10, { color: isDarkTheme ? colors.greyVar0 : colors.black }]}>Select App Language</H15font500Black>
                            </View>
                            <CommonLineDividerGrey style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }, mv20]} />
                                <View style={[mh30]}>
                                    {
                                        LanguagesData.map((item) => {
                                            return (
                                                <View style={[flexRow, mv10]} key={item.id}>
                                                    <View>
                                                        <RadioBtn
                                                            key={item.id}
                                                            selected={selectedStatus === item.name}
                                                            onPress={() => handleLanguageSelect(item.name)}
                                                        />
                                                    </View>
                                                    <H14BlackVar2Bold400Text style={[ml10]}>{item.name}</H14BlackVar2Bold400Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            <View style={[flex1, justifyEnd, mb15]}>
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
    )
};

export default SettingsScreen;

const styles = StyleSheet.create({
    cardSurface: {
        padding: 10,
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
});
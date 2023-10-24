import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { IconModal, ThemeModal, } from '../../components/commonModal';
import { flexRow, mt20, alignItemsCenter, ph15, mh20, spaceBetween, mh30, mt8, mv20, mt30, flex1 } from '../../components/commonStyles';
import { H16fontNormalGray4, H12fontNormalGray, H14font400Gray4, H16font600Black } from '../../components/commonText';
import { RowSpaceBetween } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { chatSettings } from '../../utils/data/chatsData';
import { ToggleSwitch } from '../../components/commonComponents';
import { SmallButton } from '../../components/commonButtons';
import { DevWidth } from '../../utils/device';
import { colors } from '../../utils/colors';
import { CheckBox } from '../../styledComponent/styledComponent';
import { isDark, useTheme } from '../../Theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchHeader } from '../Media/MediaCommonHeader';


export type ChatSettingsProps = {

}

const ChatSettings = (props: ChatSettingsProps) => {
    const navigation = useNavigation();
    const [selectedModalId, setSelectedModalId] = useState(null);
    const [toggleVisible, setToggleVisible] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('');
    const [archieveModal, setArchieveModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [clearAllModal,setClearAllModal] = useState(false);
    const [themeModal,setThemeModal] = useState(false);
    const {theme} = useTheme();

    const isDarkTheme = theme === 'dark';



    const handleThemeSelect = async (themeName: string) => {
        setSelectedTheme(themeName);
        await AsyncStorage.setItem('selectedTheme', themeName);
    };

    const handleArchievModal = () => {
        setArchieveModal(!archieveModal)
    }

    const handleDeleteAllModal = () => {
        setDeleteModal(!deleteModal)
    }

    const handleClearAllModal = () => {
        setClearAllModal(!clearAllModal)
    }

    const handleThemeModal = () => {
        setThemeModal(!themeModal)
    }


    const handleToggle = () => {
        setToggleVisible(!toggleVisible);
    }

    const openModal = (id: number) => {
        setSelectedModalId(id);
        if (id === 4) {
            handleArchievModal();
        } else if (id === 6) {
            handleDeleteAllModal()
        } else if (id === 5) {
            handleClearAllModal()
        } else if (id===1){
            handleThemeModal()
        }
    }

    useEffect(() => {
        retrieveSelectedTheme();
    }, []);

    const retrieveSelectedTheme = async () => {
        const theme = await AsyncStorage.getItem('selectedTheme');
        if (theme) {
            setSelectedTheme(theme);
        } else {
            setSelectedTheme(labels.light)
        }
    };

    const ArchieveModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setArchieveModal(false);
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(true);
        };

        return (
            <View>
                <View style={[mh30]}>
                    <H16font600Black >{labels.archieveAllChats}</H16font600Black>
                    <H14font400Gray4 style={[mt8]}>{labels.archiveChatMessage}</H14font400Gray4>
                </View>
                <RowSpaceBetween style={[mv20, mh20]}>
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.cancel}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                        onChange={handleCancelButtonClick}
                        borderWidth={isCancelButtonActive ? 0 : 1} />
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.ok}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        onChange={handleSaveChangesClick}
                        borderWidth={isCancelButtonActive ? 1 : 0} />
                </RowSpaceBetween>
            </View>
        )
    }

    const DeleteAllModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const [isChecked, setIsChecked] = useState(false);

        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setDeleteModal(false)
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(true);
        };
        const toggleCheckbox = () => {
            setIsChecked(!isChecked);
        };

        return (
            <View>
                <View style={[mh30]}>
                    <H16font600Black >{labels.deleteAllChats1}</H16font600Black>
                    <H14font400Gray4 style={[mt8]}>{labels.deleteMsg}</H14font400Gray4>
                    <View style={[flexRow, mv20, alignItemsCenter]}>
                        <TouchableOpacity
                            onPress={toggleCheckbox}>
                            <CheckBox style={{ backgroundColor: isChecked ? colors.purpleVar3 : 'transparent' }}>
                                {isChecked && (
                                    <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
                            </CheckBox>
                        </TouchableOpacity>
                        <H14font400Gray4 style={[ph15]}>{labels.deleteMsg1}</H14font400Gray4>
                    </View>
                </View>
                <RowSpaceBetween style={[mv20, mh20]}>
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.cancel}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                        onChange={handleCancelButtonClick}
                        borderWidth={isCancelButtonActive ? 0 : 1} />
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.ok}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        onChange={handleSaveChangesClick}
                        borderWidth={isCancelButtonActive ? 1 : 0} />
                </RowSpaceBetween>
            </View>
        )
    }
    const ClearAllModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const [isChecked2, setIsChecked2] = useState(false);
        const [isChecked1, setIsChecked1] = useState(false);
    
    
        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setClearAllModal(false)
        };
    
        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(true);
        };
        const toggleCheckbox2 = () => {
            setIsChecked2(!isChecked2);
        };
    
        const toggleCheckbox1 = () => {
            setIsChecked1(!isChecked1);
        };
    
        return (
            <View>
            <View style={[mh30]}>
                <H16font600Black >{labels.clearAllChats1}</H16font600Black>
                <H14font400Gray4 style={[mt8]}>{labels.deleteMsg}</H14font400Gray4>
                <View style={[flexRow, mv20, alignItemsCenter]}>
                    <TouchableOpacity
                        onPress={toggleCheckbox2}>
                        <CheckBox style={{ backgroundColor: isChecked2 ? colors.purpleVar3 : 'transparent' }}>
                            {isChecked2 && (
                                <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
                        </CheckBox>
                    </TouchableOpacity>
                    <H14font400Gray4 style={[ph15]}>{labels.deleteMsg1}</H14font400Gray4>
                </View>
                <View style={[flexRow, alignItemsCenter]}>
                    <TouchableOpacity
                        onPress={toggleCheckbox1}>
                        <CheckBox style={{ backgroundColor: isChecked1 ? colors.purpleVar3 : 'transparent' }}>
                            {isChecked1 && (
                                <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
                        </CheckBox>
                    </TouchableOpacity>
                    <H14font400Gray4 style={[ph15]}>{labels.deleteMsg2}</H14font400Gray4>
                </View>
                </View>
                <RowSpaceBetween style={[mv20, mt30,mh20]}>
                <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.cancel}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                        onChange={handleCancelButtonClick}
                        borderWidth={isCancelButtonActive ? 0 : 1} />
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.ok}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        onChange={handleSaveChangesClick}
                        borderWidth={isCancelButtonActive ? 1 : 0} />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[flex1, { backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <SearchHeader headerText={labels.chat} />
                <View style={[mh20, mt20]}>
                    <H16fontNormalGray4>{labels.theme} </H16fontNormalGray4>
                    <H12fontNormalGray>{selectedTheme}</H12fontNormalGray>
                    {chatSettings.map((data, index) => {
                        return (
                            <View key={data.id} style={[flexRow, spaceBetween]}>
                                <View style={{ paddingVertical: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => openModal(data.id)}>
                                        <H16fontNormalGray4>
                                            {data.chatSettings}
                                        </H16fontNormalGray4>
                                    </TouchableOpacity>
                                </View>
                                {index === 2 ? (
                                    <ToggleSwitch value={toggleVisible} onToggle={handleToggle} />
                                ) : (
                                    <CustomIcon name='chevron-right' size={15} color={isDark() ? colors.purpleVar2 : colors.black} type='octicons' />
                                )}
                            </View>
                        );
                    })}
                </View>
                <ThemeModal
                    isVisible={themeModal}
                    onClose={()=>handleThemeModal()}
                    onThemeSelect={handleThemeSelect}
                    selectedTheme={selectedTheme}
                    />

                <IconModal
                    isVisible={archieveModal}
                    onClose={() => handleArchievModal()}
                    contentComponent={<ArchieveModal />}
                    iconName={'archive'}
                    iconType='Foundation'
                    iconSize={27} />

                <IconModal isVisible={clearAllModal}
                        onClose={()=>handleClearAllModal()}
                        contentComponent={<ClearAllModal />} 
                        iconName={'trash-outline'} 
                        iconType='Ionicons' 
                        iconSize={27} />

                <IconModal isVisible={deleteModal}
                    onClose={() => handleDeleteAllModal()}
                    contentComponent={<DeleteAllModal />}
                    iconName={'trash-outline'}
                    iconType='Ionicons'
                    iconSize={27} />
            </View>
        </Fragment>
    )
}

export default ChatSettings
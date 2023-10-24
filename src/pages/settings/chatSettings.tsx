import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { IconModal, ThemeModal, } from '../../components/commonModal';
import { flexRow, mt20, alignItemsCenter, ph15, mh20, spaceBetween, justyfyCenter, mh30, mh5, mt15, mt8, mv10, mv20, ph5, mt10, ph10, mt30 } from '../../components/commonStyles';
import { H16font900Black, H16fontNormalGray4, H12fontNormalGray, H14font400Gray4, H14font500Gray4, H16font600Black } from '../../components/commonText';
import { MainContainer, RowSpaceBetween, TopContainerWhiteCard } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { chatSettings } from '../../utils/data/chatsData';
import { chooseTheme, clearAllChats, profilePic } from '../../utils/data/modalData';
import { RadioBtn, ToggleSwitch } from '../../components/commonComponents';
import { SmallButton } from '../../components/commonButtons';
import { DevWidth } from '../../utils/device';
import { CheckBox } from '../../styledComponent/styledComponent';
import { isDark } from '../../Theme/ThemeContext';
import { colors } from '../../utils/colors';


export type chatSettingsProps = {

}

export const SettingsModal = () => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // New state for modal visibility

    const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
    };
    const handleCancelButtonClick = () => {
        setIsCancelButtonActive(true);
        setIsModalVisible(false);
    };

    const handleSaveChangesClick = () => {
        setIsCancelButtonActive(false);
    };

    return (
        <View style={[mh30]}>
            <H16font600Black >{labels.profilePhoto}</H16font600Black>
            <H14font400Gray4 style={[mt8]}>{labels.profilePicContent}</H14font400Gray4>
            <View style={[mt15]}>
                {profilePic.map((data, index) => {
                    return (
                        <View key={data.id}  >
                            <TouchableOpacity>

                                <View style={[mv10, flexRow]}  >
                                    <RadioBtn
                                        key={data.id}

                                        selected={selectedStatus === data.status}
                                        onPress={() => handleStatusSelect(data.status)}
                                    />
                                    <H14font500Gray4 style={[mh5]}>{data.status}</H14font500Gray4>
                                </View>

                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>

            <RowSpaceBetween style={[mv20]}>
                <SmallButton
                    width={DevWidth / 2.9}
                    title={labels.cancel}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    onChange={handleCancelButtonClick}
                    borderWidth={isCancelButtonActive ? 0 : 1} />
                <SmallButton
                    width={DevWidth / 2.9}

                    title={labels.saveChange}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    onChange={handleSaveChangesClick}
                    borderWidth={isCancelButtonActive ? 1 : 0} />
            </RowSpaceBetween>
        </View>
    )
}

export const ArchieveModal = () => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // New state for modal visibility

    const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
    };
    const handleCancelButtonClick = () => {
        setIsCancelButtonActive(true);
        setIsModalVisible(false);
    };

    const handleSaveChangesClick = () => {
        setIsCancelButtonActive(false);
    };

    return (
        <View style={[mh30]}>
            <H16font600Black >{labels.archieveAllChats}</H16font600Black>
            <H14font400Gray4 style={[mt8]}>{labels.archiveChatMessage}</H14font400Gray4>


            <RowSpaceBetween style={[mv20]}>
                <SmallButton
                    width={DevWidth / 2.9}
                    title={labels.cancel}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    onChange={handleCancelButtonClick}
                    borderWidth={isCancelButtonActive ? 0 : 1} />
                <SmallButton
                    width={DevWidth / 2.9}

                    title={labels.ok}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    onChange={handleSaveChangesClick}
                    borderWidth={isCancelButtonActive ? 1 : 0} />
            </RowSpaceBetween>
        </View>
    )
}

export const ClearAllModal = () => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // New state for modal visibility
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);

    const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
    };
    const handleCancelButtonClick = () => {
        setIsCancelButtonActive(true);
        setIsModalVisible(false);
    };

    const handleSaveChangesClick = () => {
        setIsCancelButtonActive(false);
    };
    const toggleCheckbox2 = () => {
        setIsChecked2(!isChecked2);
    };

    const toggleCheckbox1 = () => {
        setIsChecked1(!isChecked1);
    };

    return (
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

            <RowSpaceBetween style={[mv20, mt30]}>
                <SmallButton
                    width={DevWidth / 2.9}
                    title={labels.cancel}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    onChange={handleCancelButtonClick}
                    borderWidth={isCancelButtonActive ? 0 : 1} />
                <SmallButton
                    width={DevWidth / 2.9}

                    title={labels.ClearChat}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    onChange={handleSaveChangesClick}
                    borderWidth={isCancelButtonActive ? 1 : 0} />
            </RowSpaceBetween>
        </View>
    )
}


export const DeleteAllModal = () => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // New state for modal visibility
    const [isChecked, setIsChecked] = useState(false);

    const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
    };
    const handleCancelButtonClick = () => {
        setIsCancelButtonActive(true);
        setIsModalVisible(false);
    };

    const handleSaveChangesClick = () => {
        setIsCancelButtonActive(false);
    };
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };



    return (
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


            <RowSpaceBetween style={[mv20, mt30]}>
                <SmallButton
                    width={DevWidth / 2.9}
                    title={labels.cancel}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    onChange={handleCancelButtonClick}
                    borderWidth={isCancelButtonActive ? 0 : 1} />
                <SmallButton
                    width={DevWidth / 2.9}

                    title={labels.ClearChat}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    onChange={handleSaveChangesClick}
                    borderWidth={isCancelButtonActive ? 1 : 0} />
            </RowSpaceBetween>
        </View>
    )
}
const ChatSettings = (props: chatSettingsProps) => {

    const navigation = useNavigation();
    const [selectedModalId, setSelectedModalId] = useState(null); // State to store the selected modal ID
    const [toggleVisible, setToggleVisible] = useState(false);
    const handleToggle = () => {
        setToggleVisible(!toggleVisible);
    }
    const openModal = (id: number) => {
        setSelectedModalId(id);
    };

    const closeModal = () => {
        setSelectedModalId(null);
    };

    return (
        <Fragment>
            <MainContainer>
                <TopContainerWhiteCard>
                    <View style={[flexRow, mt20, { margin: 15 }]}>
                        <View style={[flexRow, alignItemsCenter]}>
                            <CustomIcon
                                name="chevron-left"
                                size={20}
                                color={isDark() ? colors.white : colors.black}
                                type="octicons"
                            />
                            <H16font900Black style={[ph15]}>
                                {labels.Chats}
                            </H16font900Black>
                        </View>
                    </View>
                </TopContainerWhiteCard>
                <View style={[mh20, mt20]}>

                    <Text style={{ color: isDark() ? colors.blueVar3 : colors.black }}>gjkjklkhlkh</Text>

                    <H16fontNormalGray4>{labels.theme} </H16fontNormalGray4>
                    <H12fontNormalGray>light</H12fontNormalGray>
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
                {selectedModalId === 1 && (
                    <ThemeModal
                        isVisible={true}
                        onClose={closeModal}
                    />

                    // <IconModal isVisible={true}
                    //     onClose={closeModal}
                    //     contentComponent={<SettingsModal />} iconName={'image-plus'} iconType='MaterialCommunityIcons' iconSize={25} />
                )}

                {selectedModalId === 4 && (
                    <IconModal isVisible={true}
                        onClose={closeModal}
                        contentComponent={<ArchieveModal />} iconName={'archive'} iconType='Foundation' iconSize={27} />
                )}
                {selectedModalId === 5 && (
                    <IconModal isVisible={true}
                        onClose={closeModal}
                        contentComponent={<ClearAllModal />} iconName={'trash-outline'} iconType='Ionicons' iconSize={27} />
                )}
                {selectedModalId === 6 && (
                    <IconModal isVisible={true}
                        onClose={closeModal}
                        contentComponent={<DeleteAllModal />} iconName={'trash-outline'} iconType='Ionicons' iconSize={27} />
                )}
            </MainContainer>
        </Fragment>
    )
}

export default ChatSettings
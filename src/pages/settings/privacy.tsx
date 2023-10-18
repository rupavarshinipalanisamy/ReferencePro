import React, { Fragment, useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text } from 'react-native';
import {
    flexRow,
    mt20,
    alignItemsCenter,
    ph15,
    spaceBetween,
    mh20,
    mh15,
    mt10,
    pv10,
    mv5,
    mh5,
    mv3,
    mt30,
    mt15,
    mt8,
    mh25,
    mh30,
    mv20,
    mv10,
    mv30,
    mb20,
    mb50,
    mb40,
} from '../../components/commonStyles';
import {
    H12fontNormalGray,
    H14font400Gray4,
    H14font500Gray4,
    H16font600Black,
    H16font900Black,
    H16fontNormalGray4,
} from '../../components/commonText';
import {
    MainContainer,
    RadioButton,
    RowSpaceBetween,
    TopContainerWhiteCard,
} from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { privacyData } from '../../utils/data/privacyData';
// import { GroupsModal, LastSeenModal, SettingsModal } from '../../components/commonModal';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { DevHeight, DevWidth } from '../../utils/device';
import { CustomModal, RadioBtn, ToggleSwitch } from '../../components/commonComponents';
import { IconModal } from '../../components/commonModal';
import { groupsData, lastSee, profilePic } from '../../utils/data/modalData';
import { SmallButton } from '../../components/commonButtons';
import { colors } from '../../utils/colors';

export type privacyProps = {};




export const LastSeenModal = () => {
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
            <H16font600Black >{labels.lastSeenandOnline}</H16font600Black>
            <H14font400Gray4 style={[mt8]}>{labels.lastseenCon}</H14font400Gray4>
            <View style={[mt15]}>
                {profilePic.map((data, index) => {
                    return (
                        <View key={data.id}  >
                            <TouchableOpacity>

                                <View style={[mv10,flexRow]}  >
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
            <H14font400Gray4 style={[mt8]}>{labels.onlineCon}</H14font400Gray4>
            <View style={[mt15]}>
                {lastSee.map((data, index) => {
                    return (
                        <View key={data.id}  >
                            <TouchableOpacity>

                                <View style={[mv10,flexRow]}  >
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


            <RowSpaceBetween style={[mv30]}>
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

export const GroupsModal = () => {
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
            <H16font600Black >{labels.Groups}</H16font600Black>
            <H14font400Gray4 style={[mt8]}>{labels.groupsCont}</H14font400Gray4>
            <View style={[mt15]}>
                {groupsData.map((data, index) => {
                    return (
                        <View key={data.id}  >
                            <TouchableOpacity>

                                <View style={[mv10,flexRow]}  >
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

            <RowSpaceBetween style={[mv20,mb40]}>
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

                                <View style={[mv10,flexRow]}  >
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

const Privacy = (props: privacyProps) => {
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
                <StatusBar backgroundColor={colors.white} />
                <SearchHeader headerText={labels.privacy} height={DevHeight / 12} />


                <View style={[mh20, mt20]}>
                    {privacyData.map((privacyDatas, index) => {
                        return (
                            <View key={privacyDatas.id} style={[flexRow, spaceBetween]}>
                                <View style={{ paddingVertical: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => openModal(privacyDatas.id)}
                                    >
                                        <H16fontNormalGray4>
                                            {privacyDatas.heading}
                                        </H16fontNormalGray4>
                                    </TouchableOpacity>
                                    <H12fontNormalGray>{privacyDatas.status}</H12fontNormalGray>
                                </View>
                                {index === 4 ? (
                                    <ToggleSwitch value={toggleVisible} onToggle={handleToggle} />

                                ) : (
                                    <CustomIcon name='chevron-right' size={15} color={colors.grey2} type='octicons' />
                                )}
                            </View>
                        );
                    })}
                </View>
                {/* Conditionally render the modals based on selectedModalId */}
                {selectedModalId === 1 && (
                    <IconModal isVisible={true}
                        onClose={closeModal}
                        contentComponent={<SettingsModal />} iconName={'image-plus'} iconType='MaterialCommunityIcons' iconSize={25} />
                )}

                {selectedModalId === 2 && (
                   <IconModal isVisible={true}
                   onClose={closeModal}
                   contentComponent={<LastSeenModal />} iconName={'stop-circle-outline'} iconType={'MaterialCommunityIcons'} iconSize={25} />
           )}

{selectedModalId === 3 && (
                   <IconModal isVisible={true}
                   onClose={closeModal}
                   contentComponent={<GroupsModal />} iconName={'group'} iconType={'MaterialIcons'} iconSize={25} />
           )}
            </MainContainer>
        </Fragment>
    );
};

export default Privacy;

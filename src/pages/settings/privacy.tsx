import React, { Fragment, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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
    ml10,
} from '../../components/commonStyles';
import {
    H12fontNormalGray,
    H14BlackVar2Bold400Text,
    H14GreyVar4Bold400,
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

import { muteNotificationdata, statusPrivacydata } from '../../utils/data/modalData';

import { screenName } from '../../utils/screenName';
import { isDark } from '../../Theme/ThemeContext';
// import { GroupsModal, LastSeenModal, SettingsModal } from '../../components/commonModal';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { DevHeight, DevWidth } from '../../utils/device';
import { CustomModal, RadioBtn, ToggleSwitch } from '../../components/commonComponents';
import { IconModal } from '../../components/commonModal';
import { groupsData, lastSee, profilePic } from '../../utils/data/modalData';
import { SmallButton } from '../../components/commonButtons';
import { colors } from '../../utils/colors';

export type privacyProps = {};




const LastSeenModal = () => {
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
            <H14font400Gray4 style={[mt8]}>{labels.onlineCon}</H14font400Gray4>
            <View style={[mt15]}>
                {lastSee.map((data, index) => {
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

const GroupsModal = () => {
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

            <RowSpaceBetween style={[mv20, mb40]}>
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

const SettingsModal = () => {
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

const Privacy = (props: privacyProps) => {
    const navigation = useNavigation();
    const [selectedModalId, setSelectedModalId] = useState(null); // State to store the selected modal ID
    const [statusPrivacyOptionModal, setStatusPrivacyOptionModal] = useState(false);

    const handleStatusPrivacyOptionModal = () => {
        setStatusPrivacyOptionModal(!statusPrivacyOptionModal)
        const [toggleVisible, setToggleVisible] = useState(false);
        const handleToggle = () => {
            setToggleVisible(!toggleVisible);
        }

        const openModal = (id: number, screenName: string | undefined) => {
            // setSelectedModalId(id);
            if (id === 4) {
                handleStatusPrivacyOptionModal();
            } else {
                navigation.navigate(screenName as never);
            }
        };

        const closeModal = () => {
            setSelectedModalId(null);
            setStatusPrivacyOptionModal(false);
        };

        const StatusPrivacyOption = () => {
            const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
            const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

            const handleCancelButton = () => {
                setIsCancelButtonActive(true);
                setStatusPrivacyOptionModal(false);
            };

            const handleDeleteChatButton = () => {
                setIsCancelButtonActive(false);
            };

            const handleStatusSelect = (status: string, id: number) => {
                setSelectedStatus(status);
                if (id === 2) {
                    navigation.navigate(screenName.StatusMyContactExcept as never);
                    setStatusPrivacyOptionModal(false)
                }
                else if (id === 3) {
                    navigation.navigate(screenName.StatusOnlyShareWith as never);
                    setStatusPrivacyOptionModal(false)
                }
            };

            return (
                <View style={[mh20]} >
                    <H16font600Black>Status Privacy</H16font600Black>
                    <H14GreyVar4Bold400 style={[mt20]}>Who can see my status updates</H14GreyVar4Bold400>
                    <View style={[mt15]}>
                        {
                            statusPrivacydata.map((item) => {
                                return (
                                    <View style={[flexRow, mv10]} key={item.id}>
                                        <View>
                                            <RadioBtn
                                                key={item.id}
                                                selected={selectedStatus === item.name}
                                                onPress={() => handleStatusSelect(item.name, item.id)}
                                            />
                                        </View>
                                        <H14BlackVar2Bold400Text style={[ml10]}>{item.name}</H14BlackVar2Bold400Text>
                                    </View>
                                )
                            })
                        }
                    </View>
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
                            title={labels.SaveChanges}
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
                <MainContainer>
                    <SearchHeader headerText={labels.privacy} height={DevHeight / 12} />
                    <View style={[mh20, mt20]}>
                        {privacyData.map((privacyDatas, index) => {
                            return (
                                <View key={privacyDatas.id} style={[flexRow, spaceBetween]}>
                                    <View style={{ paddingVertical: 10 }}>
                                        <TouchableOpacity
                                            onPress={() => openModal(privacyDatas.id, privacyDatas.screenName)}
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
                                        <CustomIcon name='chevron-right' size={15} color={colors.greyVar2} type='octicons' />
                                    )}
                                </View>
                            );
                        })}
                    </View>
                    <IconModal
                        isVisible={statusPrivacyOptionModal}
                        onClose={() => handleStatusPrivacyOptionModal()}
                        contentComponent={<StatusPrivacyOption />}
                        iconName='stop-circle-outline'
                        iconType='MaterialCommunityIcons'
                        iconSize={24}
                    />
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

}
export default Privacy
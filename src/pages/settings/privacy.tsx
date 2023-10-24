import React, { Fragment, useState } from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import {
    flexRow,
    mt20,
    mh20,
    mh5,
    mt15,
    mt8,
    mh30,
    mv20,
    mv10,
    mv30,
    ml10,
    pv10,
    flex1,
} from '../../components/commonStyles';
import {
    H12fontNormalGray,
    H14BlackVar2Bold400Text,
    H14GreyVar4Bold400,
    H14font400Gray4,
    H14font500Gray4,
    H16font600Black,
    H16fontNormalGray4,
} from '../../components/commonText';
import { RowSpaceBetween, } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { privacyData } from '../../utils/data/privacyData';
import { statusPrivacydata } from '../../utils/data/modalData';
import { screenName } from '../../utils/screenName';
import { isDark } from '../../Theme/ThemeContext';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { DevHeight, DevWidth } from '../../utils/device';
import { RadioBtn, ToggleSwitch } from '../../components/commonComponents';
import { IconModal } from '../../components/commonModal';
import { groupsData, lastSee, profilePic } from '../../utils/data/modalData';
import { SmallButton } from '../../components/commonButtons';
import { colors } from '../../utils/colors';

export type PrivacyProps = {};

const Privacy = (props: PrivacyProps) => {
    const navigation = useNavigation();
    const [toggleVisible, setToggleVisible] = useState(false);
    const [selectedModalId, setSelectedModalId] = useState(null);
    const [statusPrivacyOptionModal, setStatusPrivacyOptionModal] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [lastSeenOptionModal, setLastSeenOPtionModal] = useState(false);
    const [profileOptionModal, setProfileOptionModal] = useState(false);
    const [groupModal, setGroupModal] = useState(false);
    const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
    };

    const handleLastSeenModal = () => {
        setLastSeenOPtionModal(!lastSeenOptionModal)
    };

    const handleProfilePicModal = () => {
        setProfileOptionModal(!profileOptionModal)
    };

    const handleGroupModal = () => {
        setGroupModal(!groupModal)
    };

    const handleStatusPrivacyOptionModal = () => {
        setStatusPrivacyOptionModal(!statusPrivacyOptionModal)
    };

    const handleToggle = () => {
        setToggleVisible(!toggleVisible);
    };

    const openModal = (id: number, screenName : string) => {
        setSelectedModalId(id);
        if (id === 4) {
            handleStatusPrivacyOptionModal();
        } else if (id === 2) {
            handleLastSeenModal()
        } else if (id === 1) {
            handleProfilePicModal()
        } else if (id === 3) {
            handleGroupModal()
        } else if (id === 6) {
            navigation.navigate(screenName as never);
        }
    };


    const StatusPrivacyOption = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
            setStatusPrivacyOptionModal(false);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(true);
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
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 3.15}
                    />
                </RowSpaceBetween>
            </View>
        )
    }


    const GroupsModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleStatusSelect = (status: string) => {
            setSelectedStatus(status);
        };
        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setGroupModal(false)
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(true);
        };

        return (
            <View>
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
                </View>
                <RowSpaceBetween style={[mv30, mh20]}>
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.cancel}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                        onChange={handleCancelButtonClick}
                        borderWidth={isCancelButtonActive ? 0 : 1} />
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.saveChange}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        onChange={handleSaveChangesClick}
                        borderWidth={isCancelButtonActive ? 1 : 0} />
                </RowSpaceBetween>
            </View>
        )
    }

    const SettingsModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleStatusSelect = (status: string) => {
            setSelectedStatus(status);
        };
        const handleCancelButtonClick = () => {
            setIsCancelButtonActive(true);
            setProfileOptionModal(false)
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(true);
        };

        return (
            <View>
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
                        title={labels.saveChange}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        onChange={handleSaveChangesClick}
                        borderWidth={isCancelButtonActive ? 1 : 0} />
                </RowSpaceBetween>
            </View>
        )
    }

    const LastSeenModal = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
            setLastSeenOPtionModal(false);
        };

        const handleSaveChangesClick = () => {
            setIsCancelButtonActive(true);
        };
        return (
            <View>
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
                </View>
                <RowSpaceBetween style={[mv30, mh20]}>
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.cancel}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                        onChange={handleCancelButton}
                        borderWidth={isCancelButtonActive ? 0 : 1} />
                    <SmallButton
                        width={DevWidth / 3.15}
                        title={labels.saveChange}
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
            <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <SearchHeader headerText={labels.privacy} height={DevHeight / 12} />
                <View style={[mh20, mt20]}>
                    {privacyData.map((data, index) => {
                        return (
                            <RowSpaceBetween key={data.id}>
                                <View style={[pv10]}>
                                    <TouchableOpacity
                                        onPress={() => openModal(data.id, data.screenName)}>
                                        <H16fontNormalGray4>{data.heading}</H16fontNormalGray4>
                                    </TouchableOpacity>
                                    <H12fontNormalGray>{data.status}</H12fontNormalGray>
                                </View>
                                {index === 4 ? (
                                    <ToggleSwitch value={toggleVisible} onToggle={handleToggle} />

                                ) : (
                                    <CustomIcon name='chevron-right' size={15} color={colors.greyVar2} type='octicons' />
                                )}
                            </RowSpaceBetween>
                        )
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
                <IconModal isVisible={profileOptionModal}
                    onClose={() => handleProfilePicModal()}
                    contentComponent={<SettingsModal />}
                    iconName={'image-plus'}
                    iconType='MaterialCommunityIcons'
                    iconSize={25}
                />
                <IconModal isVisible={lastSeenOptionModal}
                    onClose={() => handleLastSeenModal()}
                    contentComponent={<LastSeenModal />}
                    iconName={'stop-circle-outline'}
                    iconType={'MaterialCommunityIcons'}
                    iconSize={25}
                />
                <IconModal isVisible={groupModal}
                    onClose={() => handleGroupModal()}
                    contentComponent={<GroupsModal />}
                    iconName={'group'}
                    iconType={'MaterialIcons'}
                    iconSize={25} />
            </View>
        </Fragment>
    );
};

export default Privacy
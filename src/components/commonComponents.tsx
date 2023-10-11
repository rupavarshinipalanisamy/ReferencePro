import React, { useState, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal as RNModal, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flexRow, justyfyCenter, mh10, mh20, mh30, ml10, ml15, mr10, mt10, mt15, mt20, mt30, mt5, mv10, mv15, mv20, p10, p5, pl10, pl13, pl5, pr10, pt10, spaceAround, spaceBetween, textCenter,flex1} from './commonStyles';
import { colors } from '../utils/colors';
import { ArchiveIconBlackIcon, ArchiveIconWhiteIcon, DeleteWhiteIcon, LeftArrowWhiteIcon, MikeWhiteIcon, PinWhiteIcon, ProfileAvatarIcon, ThreeDotsWhiteIcon } from '../utils/svg';
import { DevHeight, DevWidth } from '../utils/device';
import { RadioButton, RadioButtonRound, RowSpaceBetween, SelectedRadioBtn } from './commonView';
import { bottomNavData } from '../utils/data/bottomNavData';
import CustomIcon from '../utils/Icons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { muteNotificationdata, threeDotsOption } from '../utils/data/modalData';
import { H14BlackVar2Bold400Text, H15Grey, H16font600Black, H16fontNormalGray, H16fontNormalGray4, H18fontBoldBlack } from './commonText';
import { labels } from '../utils/labels';
import { callBottomDataFourth } from '../utils/data/callsData';
import { screenName } from '../utils/screenName';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { IconModal } from './commonModal';
import { SmallButton } from './commonButtons';

// ====================   Chat based Header Component   ====================

interface ChatHeaderProps {
    title: string;
    isCall?: boolean;
    icon1Navigate?: string;
    icon2Navigate?: string;
    icon3Navigate?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title, isCall, icon1Navigate, icon2Navigate, icon3Navigate }) => {
    const navigation = useNavigation();
    const [clearCallOptionModal, setClearCallOptionModal] = useState(false);

    const handleClearCallOptionModal = () => {
        setClearCallOptionModal(!clearCallOptionModal);
    }

    const ClearCallOption = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(false);
        };

        return (
            <View style={[mh20]} >
                <H16font600Black>Clear Call Log?</H16font600Black>
                <Text style={[mt20]}>Do you want to clear your entire call log.</Text>
                <RowSpaceBetween style={[mv20]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                        textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 2.6}
                    />
                    <SmallButton
                        title={labels.DeleteChat}
                        onChange={handleDeleteChatButton}
                        backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                        textColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 2.6}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <Text style={styles.chatHeaderText}>{title}</Text>
            {
                isCall ? (
                    <View>
                        <View style={[flexRow, spaceBetween]}>
                            <TouchableOpacity onPress={() => { }} style={mh10}>
                                <CustomIcon name='search' color={colors.white} type='Ionicons' size={22} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }} style={mh10}>
                                <CustomIcon name='add' type='Ionicons' size={22} color={colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleClearCallOptionModal} style={mh10}>
                                <CustomIcon name="delete" size={22} color={colors.white} type='AntDesign' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate(screenName.SettingsScreen as never) }} style={mh10}>
                                <ProfileAvatarIcon />
                            </TouchableOpacity>
                        </View>
                        <IconModal
                            isVisible={clearCallOptionModal}
                            onClose={() => handleClearCallOptionModal()}
                            contentComponent={<ClearCallOption />}
                            iconName='trash-o'
                            iconType='FontAwesome'
                            iconSize={26}
                        />
                    </View>
                ) : (
                    <View style={[flexRow, spaceBetween]}>
                        <TouchableOpacity onPress={() => { navigation.navigate(icon1Navigate as never) }} style={mh10}>
                            <CustomIcon name="camera-outline" size={25} color={colors.white} type='Ionicons' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate(icon2Navigate as never) }} style={mh10}>
                            <CustomIcon name='search' color={colors.white} type='Ionicons' size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate(icon3Navigate as never) }} style={mh10}>
                            <CustomIcon name='add' type='Ionicons' size={23} color={colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate(screenName.SettingsScreen as never) }} style={mh10}>
                            <ProfileAvatarIcon />
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    );
};


// ====================   Call based Header Component   ====================

interface CallHeaderProps {
    title: string;
}

export const CallHeader: React.FC<ChatHeaderProps> = ({ title }) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <Text style={styles.chatHeaderText}>{title}</Text>
            <View style={[flexRow, spaceBetween]}>
                <TouchableOpacity onPress={() => { }} style={mh10}>
                    <Icon name="search" size={22} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={mh10}>
                    <Icon name="add-outline" size={22} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={mh10}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={ml10}>
                    <ProfileAvatarIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};


// ====================   Contact based Header Component   ====================

interface ChatHeaderProps {
    title: string;
}

export const ContactHeader: React.FC<ChatHeaderProps> = ({ title }) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <Text style={styles.chatHeaderText}>{title}</Text>
            <View style={[flexRow, spaceBetween]}>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="search" size={22} color={colors.white} style={mh10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="add-outline" size={25} color={colors.white} style={mh10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <ProfileAvatarIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// ====================   Tab Control Component   ====================

interface TabControlProps {
    tabs: { label: string; count?: number }[];
    activeTab: string;
    onTabPress: (tab: string) => void;
}

export const TabControl: React.FC<TabControlProps> = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={styles.tabContainer}>
            {tabs.map((tabInfo) => (
                <TouchableOpacity
                    key={tabInfo.label}
                    style={[
                        p5,
                        { borderBottomWidth: activeTab === tabInfo.label ? 3 : 0 },
                        { borderBottomColor: activeTab === tabInfo.label ? colors.white : 'transparent' },
                    ]}
                    onPress={() => onTabPress(tabInfo.label)}
                >
                    <View style={[flexRow, spaceBetween]}>
                        <Text
                            style={[
                                styles.tabText,
                                { color: activeTab === tabInfo.label ? colors.white : colors.purpleVar2 },
                            ]}
                        >
                            {tabInfo.label}
                        </Text>
                        {tabInfo.count !== undefined && tabInfo.count > 0 && (
                            <View
                                style={[
                                    styles.roundNumber,
                                    { backgroundColor: activeTab === tabInfo.label ? colors.white : colors.purpleVar2 },
                                ]}
                            >
                                <Text style={styles.roundNumberText}>{tabInfo.count}</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};


// ====================   Modal component   ====================

interface ModalProps {
    isVisible: boolean;
    height?: number;
    width?: number;
    modalData?: React.ReactNode;
    onClose: () => void;
    backdropOpacity?: number;
    marginTop?: number;
    marginLeft?: number;
}

export const CustomModal: React.FC<ModalProps> = ({ isVisible, width, modalData, onClose, backdropOpacity, marginTop, marginLeft }) => {
    return (
        <RNModal transparent={true} visible={isVisible} onRequestClose={onClose}>
            <View style={[flex1, justyfyCenter, alignItemsCenter]}>
                <Modal
                    animationInTiming={10}
                    animationOutTiming={10}
                    animationIn="slideInRight"
                    isVisible={isVisible}
                    onBackdropPress={onClose}
                    backdropOpacity={backdropOpacity || 0}
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                    }}
                >
                    <View style={[{ backgroundColor: colors.white, elevation: 4, borderRadius: 5, width: width || DevWidth * 0.5, padding: 10, marginTop: marginTop || 30, marginLeft : marginLeft || 0 }]}>{modalData}</View>
                </Modal>
            </View>
        </RNModal>
    );
};

// ====================   NavBar while selecting cards in Chat page   ====================

interface CustomActionBarProps {
    text?: number;
    onPinPress?: () => void;
    onArchivePress?: () => void;
    onThreeDotsPress?: () => void;
    selectedCardsCount?: number;
}

export const CustomActionBar: React.FC<CustomActionBarProps> = ({
    text,
    onPinPress,

    onArchivePress,
    onThreeDotsPress,
    selectedCardsCount,
}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [deleteOptionModal, setDeleteOptionModal] = useState(false);
    const [muteOptionModal, setMuteOptionModal] = useState(false);

    const handleDeleteOptionModal = () => {
        setDeleteOptionModal(!deleteOptionModal)
    }
    const handleMuteOptionModal = () => {
        setMuteOptionModal(!muteOptionModal)
    }

    const handleThreeDotsClick = () => {
        if (selectedCardsCount === 1) {
            setModalVisible((prevIsModalVisible) => !prevIsModalVisible);
        } else if (selectedCardsCount > 1) {
            console.log('Three dots icon clicked for multiple cards');
        }
        if (onThreeDotsPress) {
            onThreeDotsPress();
        }
    };


    const PinChatOption = () => {
        const navigation = useNavigation();
        return (
            <View style={{}}>
                {
                    threeDotsOption.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                                <View style={[flexRow]}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H15Grey>{item.name}</H15Grey>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const DeleteChatOption = () => {
        const [optionSelect, setOptionSelect] = useState(false);
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(false);
        };

        const handleOptionSelect = () => {
            setOptionSelect(!optionSelect);
        };
        return (
            <View style={[mh20]} >
                <H16font600Black>Delete This Chat?</H16font600Black>
                <Text style={[mt20]}>Messages will only be removed from this{'\n'}device and your devices</Text>
                <View style={[flexRow, mt20, alignItemsCenter]}>
                    <MultiSelectOption selectedColor={colors.purpleVar3} unselectedColor={colors.greyVar6} isSelected={optionSelect} onSelect={handleOptionSelect} />
                    <Text style={[ml15]}>Also delete media received in this call from{'\n'}the device gallery.</Text>
                </View>
                <RowSpaceBetween style={[mv20]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.red : colors.white}
                        textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 2.6}
                    />
                    <SmallButton
                        title={labels.DeleteChat}
                        onChange={handleDeleteChatButton}
                        backgroundColor={isCancelButtonActive ? colors.white : colors.red}
                        textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 2.6}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    const MuteChatOption = () => {
        const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
        const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

        const handleCancelButton = () => {
            setIsCancelButtonActive(true);
        };

        const handleDeleteChatButton = () => {
            setIsCancelButtonActive(false);
        };

        const handleStatusSelect = (status: string) => {
            setSelectedStatus(status);
        };

        return (
            <View style={[mh20]} >
                <H16font600Black>Mute Notifications</H16font600Black>
                <Text style={[mt20]}>Other participants will not see you{'\n'}muted this chat. You will still be notified if{'\n'}you are mentioned.</Text>
                <View style={[mt15]}>
                    {
                        muteNotificationdata.map((item) => {
                            return (
                                <View style={[flexRow, mv10]} key={item.id}>
                                    <View>
                                        <RadioBtn
                                            key={item.id}
                                            selected={selectedStatus === item.name}
                                            onPress={() => handleStatusSelect(item.name)}
                                        />
                                    </View>
                                    <H14BlackVar2Bold400Text style = {[ml10]}>{item.name}</H14BlackVar2Bold400Text>
                                </View>
                            )
                        })
                    }
                </View>
                <RowSpaceBetween style={[mv20]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.red : colors.white}
                        textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 2.6}
                    />
                    <SmallButton
                        title={labels.DeleteChat}
                        onChange={handleDeleteChatButton}
                        backgroundColor={isCancelButtonActive ? colors.white : colors.red}
                        textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 2.6}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <View style={[flexRow, spaceBetween, mh20, mv15, pt10]}>
            <View style={flexRow}>
                <LeftArrowWhiteIcon />
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 20, width: 20, borderRadius: 20, }}>
                    <Text style={{ textAlign: 'center', color: colors.white, fontSize: 14 }}>{text}</Text>
                </View>
            </View>
            <View style={[flexRow, spaceAround]}>
                <TouchableOpacity style={ml10} onPress={onPinPress}>
                    <PinWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={handleDeleteOptionModal}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={handleMuteOptionModal}>
                    <MikeWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onArchivePress}>
                    <ArchiveIconWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={handleThreeDotsClick}>
                    <ThreeDotsWhiteIcon />
                </TouchableOpacity>
            </View>
            <CustomModal
                isVisible={isModalVisible}
                // height={80}
                width={DevWidth * 0.47}
                modalData={<PinChatOption />}
                marginTop={48}
                onClose={() => setModalVisible(false)}
            />
            <IconModal
                isVisible={deleteOptionModal}
                onClose={() => handleDeleteOptionModal()}
                contentComponent={<DeleteChatOption />}
                iconName='trash-o'
                iconType='FontAwesome'
                iconSize={26}
            />
            <IconModal
                isVisible={muteOptionModal}
                onClose={() => handleMuteOptionModal()}
                contentComponent={<MuteChatOption />}
                iconName='trash-o'
                iconType='FontAwesome'
                iconSize={26}
            />
        </View>
    );
};


// ====================   NavBar while selecting cards in Archive chat page   ====================

interface CustomActionBarSecondProps {
    itemNumber: number;
    onDeletePress?: () => void;
    onArchivePress?: () => void;
    onMorePress?: () => void;
}

export const CustomActionBarSecond: React.FC<CustomActionBarSecondProps> = ({
    itemNumber,
    onDeletePress,
    onArchivePress,
    onMorePress,
}) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <View style={flexRow}>
                <LeftArrowWhiteIcon />
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 20, width: 20, borderRadius: 20, }}>
                    <Text style={{ textAlign: 'center', color: colors.white, fontSize: 14 }}>{itemNumber}</Text>
                </View>
            </View>
            <View style={[flexRow, spaceAround]}>
                <TouchableOpacity style={ml10} onPress={onDeletePress}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onArchivePress}>
                    <ArchiveIconWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onMorePress}>
                    <ThreeDotsWhiteIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};



// ====================   NavBar while selecting cards in Call page   ====================

interface CustomCallActionBarProps {
    text?: number;
    onDeletePress?: () => void;
    selectedCardsCount?: number;
}

export const CustomcallActionBar: React.FC<CustomCallActionBarProps> = ({
    text,
    onDeletePress,
    selectedCardsCount,
}) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15, pt10]}>
            <View style={flexRow}>
                <LeftArrowWhiteIcon />
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 20, width: 20, borderRadius: 20, }}>
                    <Text style={{ textAlign: 'center', color: colors.white, fontSize: 14 }}>{text}</Text>
                </View>
            </View>
            {/* <View style={[flexRow, spaceAround]}> */}
            <TouchableOpacity style={ml10} onPress={() => { }}>
                <DeleteWhiteIcon />
            </TouchableOpacity>
            {/* </View> */}
        </View>
    );
};


// ====================   Bottom Nav Bar   ====================

export const BottomTabBar = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const navigation = useNavigation();

    const handleTabPress = (tabId: number, screenNameNavigate: string) => {
        setSelectedTab(tabId);
        navigation.navigate(screenNameNavigate as never)
    };

    return (
        <View style={[alignSelfCenter, borderRadius10, { height: DevHeight * 0.08, width: DevWidth * 0.9, backgroundColor: colors.purpleVar3, position: 'absolute', bottom: 10 }]}>
            <RowSpaceBetween style={[alignItemsCenter, mv10, mh20]}>
                {
                    bottomNavData.map((item) => {
                        const isSelected = item.id === selectedTab;
                        return (
                            <TouchableOpacity key={item.id} onPress={() => handleTabPress(item.id, item.screenName)}>
                                <View style={alignItemsCenter}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={isSelected ? colors.white : colors.purpleVar2} />
                                </View>
                                {
                                    item.id === 1 || item.id == 2 ? (
                                        <View style={styles.unredBadge}>
                                            <Text style={styles.unredBadgeText}>2</Text>
                                        </View>
                                    ) : (
                                        <View />
                                    )
                                }
                                <Text style={[{ color: isSelected ? colors.white : colors.purpleVar2 }, textCenter]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </RowSpaceBetween>
        </View>
    );
};

// ====================   Call Bottom Tab   ====================

export const CallBottomTab = () => {
    return (
        <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
            <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
            <View style={[flexRow, spaceAround, mt20]}>
                {
                    callBottomDataFourth.map((item) => {
                        return (
                            <View key={item.id}>
                                {
                                    item.id == 1 ? (
                                        <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: colors.purpleVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                            <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                        </TouchableOpacity>
                                    ) : item.id == 4 ? (
                                        <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: colors.redVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                            <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity style={mt5}>
                                            <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

// =============== toggle switch component======================

type ToggleSwitchProps = {
    value: boolean;
    onToggle: () => void;
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onToggle }) => {
    const borderRadius = 20; // Adjust the border radius as needed

    return (
        <TouchableOpacity onPress={onToggle}>
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: value ? colors.green : colors.greyVar7,
                        borderWidth: 1,
                        borderColor: value ? colors.green : colors.greyVar2,
                    },
                ]}
            >
                <View
                    style={[
                        styles.toggle,
                        {
                            transform: [{ translateX: value ? 22 : 0 }],
                            backgroundColor: value ? colors.white : colors.greyVar2,
                        },
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};


// =============== Multi select option component======================

interface MultiSelectProps {
    selectedColor: string;
    unselectedColor: string;
    isSelected: boolean;
    onSelect: () => void;
}

export const MultiSelectOption: React.FC<MultiSelectProps> = ({
    selectedColor,
    unselectedColor,
    isSelected,
    onSelect,
}) => {
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={[
                styles.multiSelectBox,
                {
                    backgroundColor: isSelected === true ? selectedColor : colors.white,
                    borderWidth: isSelected === true ? 0 : 1,
                    borderColor: isSelected === true ? colors.purpleVar3 : colors.greyVar7,
                },
            ]}
        >
            {isSelected === true && (
                <CustomIcon name="check" size={15} color="white" type="MaterialIcons" />
            )}
        </TouchableOpacity>
    );
};


// =============== Multi select option component======================

type ImagePickerProps = {
    onImageSelect: (base64Image: string) => void;
};

export const ImagePicker: React.FC<ImagePickerProps> = ({ onImageSelect }) => {
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
        openCamera();
    };

    const handleDeleteChatButton = () => {
        setIsCancelButtonActive(false);
        openGallery();
    };


    const openCamera = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        };
        launchCamera(options, response => {
            imageResponse(response);
        });
    };

    const openGallery = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
            imageResponse(response);
        });
    };

    const imageResponse = (response: any) => {
        if (response.didCancel) {
            // Handle cancel
        } else if (response.errorCode == 'permission') {
            // Handle permission error
        } else if (response.errorCode == 'others') {
            // Handle other error
        } else if (response.assets[0].fileSize > 2097152) {
            // Handle size exceeded error
        } else if (response.assets && response.assets.length > 0) {
            onImageSelect(response.assets[0].base64);
        }
    };

    return (
        <View style={[mh20]} >
            <H16font600Black>Choose Image?</H16font600Black>
            <Text style={[mt20]}>Choose image picking options.</Text>
            <RowSpaceBetween style={[mv20]}>
                <SmallButton
                    title={labels.Camera}
                    onChange={handleCancelButton}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    borderWidth={isCancelButtonActive ? 0 : 1}
                    width={DevWidth / 2.6}
                />
                <SmallButton
                    title={labels.Gallery}
                    onChange={handleDeleteChatButton}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    borderWidth={isCancelButtonActive ? 1 : 0}
                    width={DevWidth / 2.6}
                />
            </RowSpaceBetween>
        </View>
    );
};


// =============== Radio Button component======================
interface RadioBtnProps {
    selected: boolean;
    onPress: () => void;
}

export const RadioBtn: React.FC<RadioBtnProps> = ({ selected, onPress }) => {
    return (
        <RadioButton onPress={onPress}>
            <RadioButtonRound style={{ backgroundColor: selected ? colors.purpleVar3 : colors.white }}>
                {selected && (
                    <SelectedRadioBtn />
                )}
            </RadioButtonRound>
        </RadioButton>
    );
};

const styles = StyleSheet.create({
    chatHeaderText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '600'
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
        flexDirection: 'row',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    roundNumber: {
        height: 18,
        width: 18,
        borderRadius: 20,
        top: 3,
        left: 5,
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.purpleVar3,
        fontSize: 12,
    },
    unredBadge: {
        backgroundColor: colors.red,
        position: 'absolute',
        left: 20,
        bottom: 28,
        width: 20,
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unredBadgeText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
    },
    container: {
        width: 45,
        height: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggle: {
        width: 20,
        height: 20,
        borderRadius: 15,
    },
    multiSelectBox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

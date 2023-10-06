import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal as RNModal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flexRow, justyfyCenter, mh10, mh20, ml10, mr10, mt30, mt5, mv10, mv15, p5, pl10, pr10, pt10, spaceAround, spaceBetween, textCenter } from './commonStyles';
import { colors } from '../utils/colors';
import { ArchiveIconBlackIcon, ArchiveIconWhiteIcon, DeleteWhiteIcon, LeftArrowWhiteIcon, MikeWhiteIcon, PinWhiteIcon, ProfileAvatarIcon, ThreeDotsWhiteIcon } from '../utils/svg';
import { DevHeight, DevWidth } from '../utils/device';
import { RadioButton, RadioButtonRound, RowSpaceBetween, SelectedRadioBtn } from './commonView';
import { bottomNavData } from '../utils/data/bottomNavData';
import CustomIcon from '../utils/Icons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { threeDotsOption } from '../utils/data/modalData';
import { H15Grey, H16fontNormalGray, H16fontNormalGray4, H18fontBoldBlack } from './commonText';
import { HalfCircleSecond, ModalContainerSecond, ModalContentSecond } from '../styledComponent/styledComponent';
import { labels } from '../utils/labels';

// ====================   Chat based Header Component   ====================

interface ChatHeaderProps {
    title: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
    return (
        <View style={[flexRow, spaceBetween, mh20, mv15]}>
            <Text style={styles.chatHeaderText}>{title}</Text>
            <View style={[flexRow, spaceBetween]}>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="camera-outline" size={25} color={colors.white} style={mh10} />
                </TouchableOpacity>
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
}

const CustomModal: React.FC<ModalProps> = ({ isVisible, height, width, modalData, onClose, backdropOpacity }) => {
    return (
        <RNModal transparent={true} visible={isVisible} onRequestClose={onClose}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Modal
                    isVisible={isVisible}
                    onBackdropPress={onClose}
                    backdropOpacity={backdropOpacity || 0}
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                    }}
                >
                    <View style={[mt30, { backgroundColor: colors.white, elevation: 4, borderRadius: 5, height: height || DevHeight * 0.5, width: width || DevWidth * 0.5 }]}>{modalData}</View>
                </Modal>
            </View>
        </RNModal>
    );
};

// ====================   NavBar while selecting cards in Chat page   ====================

interface CustomActionBarProps {
    text?: number;
    onPinPress?: () => void;
    onDeletePress?: () => void;
    onMikePress?: () => void;
    onArchivePress?: () => void;
    onThreeDotsPress?: () => void;
    selectedCardsCount?: number;
}

export const CustomActionBar: React.FC<CustomActionBarProps> = ({
    text,
    onPinPress,
    onDeletePress,
    onMikePress,
    onArchivePress,
    onThreeDotsPress,
    selectedCardsCount,
}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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

    const handleDeleteClick = () => {
        if (selectedCardsCount === 1) {
            setDeleteModalVisible((prevIsModalVisible) => !prevIsModalVisible);
        } else if (selectedCardsCount > 1) {
            console.log('Delete icon clicked for multiple cards');
        }
        if (onDeletePress) {
            onDeletePress();
        }
    };

    const PinChatOption = () => {
        const navigation = useNavigation();
        return (
            <View style={mt5}>
                {
                    threeDotsOption.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)}>
                                <View style={[flexRow, spaceAround, p5]}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                    <H15Grey>{item.name}</H15Grey>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const DeleteChatOption = () => {
        return (
            // <ModalContainerSecond>
            //     <HalfCircleSecond />
            //     <ModalContentSecond>
            //             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            //                 <ArchiveIconBlackIcon />
            //             </View>
            //             <View style={[ justyfyCenter, alignItemsCenter]}>
            //                 <H18fontBoldBlack>{labels.Groups}</H18fontBoldBlack>
            //                 <View style={[justyfyCenter, alignItemsCenter]}>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <Text> dfgfdverffffffffffffffffffffffffdddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff</Text>
            //                     <H16fontNormalGray>{labels.ArchiveChat}</H16fontNormalGray>
            //                 </View>
            //             </View>
            //             <ButtonBook style={{
            //                 backgroundColor: colors.purpleVar3
            //             }}
            //                 textStyle={{ color: colors.black }}
            //                 // funCallback={}
            //                 label={labels.chat} />
            //     </ModalContentSecond>
            // </ModalContainerSecond>
            <View>
                <Text>hhhhhhh</Text>
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
                <TouchableOpacity style={ml10} onPress={handleDeleteClick}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={onMikePress}>
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
                height={80}
                width={DevWidth * 0.47}
                modalData={<PinChatOption />}
                onClose={() => setModalVisible(false)}
            />
            <CustomModal
                isVisible={deleteModalVisible}
                modalData={<DeleteChatOption />}
                backdropOpacity={0.5}
                onClose={() => setDeleteModalVisible(false)}
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

// ====================   CustomBar INIYA while selecting cards in Archive chat page   ====================

interface CustomActionBarContactProps {
    text?: number;
    onPinPress?: () => void;
    onDeletePress?: () => void;
    onMikePress?: () => void;
    onArchivePress?: () => void;
    onThreeDotsPress?: () => void;
    selectedCardsCount?: number;
}

export const CustomActionBarContact: React.FC<CustomActionBarContactProps> = ({
    text,
    onPinPress,
    onDeletePress,
    onMikePress,
    onArchivePress,
    onThreeDotsPress,
    selectedCardsCount,
}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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

    const handleDeleteClick = () => {
        if (selectedCardsCount === 1) {
            setDeleteModalVisible((prevIsModalVisible) => !prevIsModalVisible);
        } else if (selectedCardsCount > 1) {
            console.log('Delete icon clicked for multiple cards');
        }
        if (onDeletePress) {
            onDeletePress();
        }
    };

    const PinChatOption = () => {
        const navigation = useNavigation();
        return (
            <View style={mt5}>
                {
                    threeDotsOption.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)}>
                                <View style={[flexRow, spaceAround, p5]}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                    <H15Grey>{item.name}</H15Grey>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const DeleteChatOption = () => {
        return (
            // <ModalContainerSecond>
            //     <HalfCircleSecond />
            //     <ModalContentSecond>
            //             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            //                 <ArchiveIconBlackIcon />
            //             </View>
            //             <View style={[ justyfyCenter, alignItemsCenter]}>
            //                 <H18fontBoldBlack>{labels.Groups}</H18fontBoldBlack>
            //                 <View style={[justyfyCenter, alignItemsCenter]}>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <H16fontNormalGray style={[pl10, pr10]}>{labels.Endtoendencrypted}</H16fontNormalGray>
            //                     <Text> dfgfdverffffffffffffffffffffffffdddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff</Text>
            //                     <H16fontNormalGray>{labels.ArchiveChat}</H16fontNormalGray>
            //                 </View>
            //             </View>
            //             <ButtonBook style={{
            //                 backgroundColor: colors.purpleVar3
            //             }}
            //                 textStyle={{ color: colors.black }}
            //                 // funCallback={}
            //                 label={labels.chat} />
            //     </ModalContentSecond>
            // </ModalContainerSecond>
            <View>
                <Text>hhhhhhh</Text>
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

                <TouchableOpacity style={ml10} onPress={handleDeleteClick}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
                <TouchableOpacity style={ml10} onPress={()=>{}}>
                    <DeleteWhiteIcon />
                </TouchableOpacity>
             
               
              
            </View>
            <CustomModal
                isVisible={isModalVisible}
                height={80}
                width={DevWidth * 0.47}
                modalData={<PinChatOption />}
                onClose={() => setModalVisible(false)}
            />
            <CustomModal
                isVisible={deleteModalVisible}
                modalData={<DeleteChatOption />}
                backdropOpacity={0.5}
                onClose={() => setDeleteModalVisible(false)}
            />
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
// ====================  PasswordIcon  ====================

 export const PasswordToggleIcon = ({ isVisible, toggleVisibility }) => {
    const iconName = isVisible ? 'eye' : 'eye-closed';
  
    return (
      <TouchableOpacity onPress={toggleVisibility}>
        <CustomIcon name={iconName} size={20} color={colors.greyVar4} type='octicons' />
      </TouchableOpacity>
    );
  };

// ====================  Radio Button  ====================
interface RadioBtnProps {
    selected: boolean;
    onPress: () => void;
  }
  
  export const RadioBtn: React.FC<RadioBtnProps> = ({  selected, onPress }) => {
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
});

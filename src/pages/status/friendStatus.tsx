import React, { useState, useEffect } from 'react';
import { View, Image, TouchableHighlight, StyleSheet, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { MainContainer, RowSpaceBetween } from '../../components/commonView';
import { StatusImg1, StatusPic3 } from '../../utils/png';
import ProgressBar from 'react-native-progress/Bar';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { friendStatusModal } from '../../utils/data/statusData';
import { H14font400Gray4, H14font400White, H15Grey, H15font500White, H16font500White, H16font600Black } from '../../components/commonText';
import { CustomModal } from '../../components/commonComponents';
import { DevWidth } from '../../utils/device';
import { alignItemsCenter, flexRow, justyfyCenter, mh20, mt20, mv20, pl13 } from '../../components/commonStyles';
import { FooterChatView } from '../chatView/Messagecomponents/messages';
import { IconModal } from '../../components/commonModal';
import { SmallButton } from '../../components/commonButtons';
import { useNavigation } from '@react-navigation/native';
import { isDark } from '../../Theme/ThemeContext';
import { Platform } from 'react-native';

export type MyStatusProps = {
};

const FriendStatus = (props: MyStatusProps) => {
    const navigation = useNavigation();
    const [cardOpen, setCardOpen] = useState(false);
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [optionModal, setOptionModal] = useState(false);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [statusPrivacyOptionModal, setStatusPrivacyOptionModal] = useState(false);

    const handleCancelButtonClick = () => {
        setIsCancelButtonActive(true);

    };

    const handleSaveChangesClick = () => {
        setIsCancelButtonActive(false);
        setStatusPrivacyOptionModal(false)

    };

    const handleCallOptionModal = () => {
        setOptionModal(!optionModal);
    }

    const translateY = new Animated.Value(0);
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            translateY.setValue(gestureState.dy);
        },
        onPanResponderRelease: (event, gestureState) => {
            if (gestureState.dy < -50) {
                setCardOpen(true);
                Animated.timing(translateY, { toValue: -200, duration: 300, useNativeDriver: false }).start();
            } else {
                setCardOpen(false);
                Animated.timing(translateY, { toValue: 0, duration: 300, useNativeDriver: false }).start();
            }
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress1 < 1) {
                setProgress1(progress1 + 0.01);
            } else if (progress2 < 1) {
                setProgress2(progress2 + 0.01);
            } else {
                clearInterval(interval);
            }
        }, 2);

        return () => {
            clearInterval(interval);
        };
    }, [progress1, progress2]);

    const toggleCard = () => {
        if (translateY._value === 0) {
            setCardOpen(false);
            Animated.timing(translateY, { toValue: 0, duration: 10, useNativeDriver: false }).start();
        } else {
            setCardOpen(true);
            Animated.timing(translateY, { toValue: -200, duration: 10, useNativeDriver: false }).start();
        }
    };

    const closeCard = () => {
        setCardOpen(false);
        Animated.timing(translateY, { toValue: 0, duration: 300, useNativeDriver: false }).start();
    };

    const OptionModalComponent = () => {
        return (
            <View>
                {friendStatusModal.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => {
                            if (item.id === 1) {
                                setOptionModal(false)
                                setStatusPrivacyOptionModal(true)
                            }
                        }} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                            <View style={[flexRow]}>
                                <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={isDark()?colors.greyVar3:colors.blackVar1} />
                                <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                    <H15Grey>{item.title}</H15Grey>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
                }
            </View>
        )
    }

    const GroupsModal = () => {
        return (
            <View style={[mh20]}>
                <H16font600Black>{labels.blockModalTitle}</H16font600Black>
                <H14font400Gray4 style={[mt20]}>New Status updates from Horace Keene {'\n'}won’t appear under recent updates {'\n'}anymore.</H14font400Gray4>
                <RowSpaceBetween style={[mv20]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleSaveChangesClick}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                        width={DevWidth / 3.15}
                    />
                    <SmallButton
                        title={labels.mute}
                        onChange={handleCancelButtonClick}
                        backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3  }
                        textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                        width={DevWidth / 3.15}
                    />
                </RowSpaceBetween>
            </View>
        )
    }

    return (
        <MainContainer>
            <TouchableHighlight onPress={closeCard} style={{ flex: 1 }}>
                <Image source={StatusImg1} style={styles.image} />
            </TouchableHighlight>
            <View style={styles.progressBarsContainer}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={styles.progressBarContainer}>
                        <ProgressBar
                            progress={progress1} 
                            width={null}
                            height={4}
                            color={'white'}
                            borderColor={'transparent'}
                            backgroundColor={colors.greyVar3}
                        />
                    </View>
                    <View style={styles.progressBarContainer}>
                        <ProgressBar
                            progress={progress2}
                            width={null}
                            height={4}
                            color={colors.white}
                            borderColor={'transparent'}
                            backgroundColor={colors.greyVar3}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 15 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <CustomIcon name='chevron-left' size={15} color={colors.white} type='octicons' />
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 10 }}>
                            <Image source={StatusPic3} style={{ height: 42, width: 42 }} />
                        </View>
                        <View>
                            <H15font500White>{labels.horaceKeene}</H15font500White>
                            <H14font400White>{labels.muteTime1}</H14font400White>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ right: 15 }}
                            onPress={handleCallOptionModal}
                        >
                            <CustomIcon name='dots-three-vertical' type='entypo' color={colors.white} size={15} />
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomModal
                    isVisible={optionModal}
                    width={DevWidth * 0.47}
                    modalData={<OptionModalComponent />}
                    marginTop={Platform.OS === 'ios' ? 100 : 48}
                    onClose={() => setOptionModal(false)}
                />
            </View>
            {cardOpen ? (
                <View style={{
                    backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%',
                    borderTopRightRadius: 25, borderTopLeftRadius: 25
                }} >
                    <FooterChatView />
                </View>
            ) : (
                <Animated.View
                    style={[styles.swipeableContainer, { transform: [{ translateY }] }]}
                    {...panResponder.panHandlers}
                >
                    <TouchableOpacity style={{ flex: 1 }} onPress={toggleCard}>
                        <View style={{ alignItems: 'center' }}>
                            <CustomIcon name='chevron-up' size={20} color={colors.white} type='octicons' />
                            <H16font500White>Reply</H16font500White>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            )}
            <IconModal
                isVisible={statusPrivacyOptionModal}
                onClose={() => setStatusPrivacyOptionModal(false)}
                contentComponent={<GroupsModal />}
                iconName='block-flipped'
                iconType='MaterialIcons'
                iconSize={24}
            />
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    progressBarsContainer: {
        left: 8,
        right: 8,
        marginTop: 10,
        position: 'absolute',
        flex: 1,
    },
    progressBarContainer: {
        flex: 1,
        marginRight: 8,
    },
    swipeableContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
});

export default FriendStatus
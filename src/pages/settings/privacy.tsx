// import React, { Fragment, useState } from 'react';
// import { StatusBar, View, TouchableOpacity } from 'react-native';
// import { colors } from 'react-native-elements';
// import { flexRow, mt20, alignItemsCenter, ph15, spaceBetween, mh20 } from '../../components/commonStyles';
// import { H12fontNormalGray, H16font900Black, H16fontNormalGray, H16fontNormalGray4 } from '../../components/commonText';
// import { MainContainer, TopContainerWhiteCard } from '../../components/commonView';
// import CustomIcon from '../../utils/Icons';
// import { labels } from '../../utils/labels';
// import { useNavigation } from '@react-navigation/native';
// import { privacyData } from '../../utils/data/privacyData';
// import { SettingsModal } from '../../components/commonModal';

// export type privacyProps = {

// }


// const Privacy = (props: privacyProps) => {
//     const navigation = useNavigation()
//     const [selectScreen, setSelectScreen] = useState(1);
//     const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
//     const [selectedModalId, setSelectedModalId] = useState(null); // State to store the selected modal ID

//     const openModal = (id: number) => {
//         setSelectedModalId(null);
//         setIsModalVisible(true);
//       };

//       const closeModal = () => {
//         setIsModalVisible(false);
//       };


//     const handleTabPress = (screenId: number, screenNameNavigate: string) => {
//         setSelectScreen(screenId);
//         navigation.navigate(screenNameNavigate as never)
//     };
//     return (
//         <Fragment>
//             <MainContainer>
//                 <StatusBar backgroundColor={colors.white} />
//                 <TopContainerWhiteCard>
//                     <View style={[flexRow, mt20, { margin: 15 }]}>
//                         <View style={[flexRow, alignItemsCenter]}>
//                             <CustomIcon name='chevron-left' size={20} color={colors.black} type='octicons' />
//                             <H16font900Black style={[ph15]}>{labels.privacy}</H16font900Black>
//                         </View>
//                     </View>
//                 </TopContainerWhiteCard>
//                 <View style={[mh20, mt20]}>
//                     {privacyData.map((privacyDatas, index) => {
//                         return (
//                             <View key={privacyDatas.id} style={[flexRow, spaceBetween]}>
//                                 <View style={{ paddingVertical: 10 }}>
//                                     <TouchableOpacity  onPress={() => openModal(privacyDatas.id)}>
//                                         <H16fontNormalGray4>{privacyDatas.heading}</H16fontNormalGray4>
//                                     </TouchableOpacity>
//                                     <H12fontNormalGray>{privacyDatas.status}</H12fontNormalGray>
//                                 </View>
//                                 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
// {index === 4 ? (
//     <CustomIcon name='toggle-off' size={27} color={colors.grey3} type='Fontisto' />
// ) : (
//     <CustomIcon name='chevron-right' size={15} color={colors.grey2} type='octicons' />
// )}
//                                 </View>
//                             </View>
//                         );
//                     })}
//                 </View>
//                 {selectedModalId !==1 && (
//         <SettingsModal
//           isVisible={isModalVisible}
//           onClose={closeModal}
//           // You can pass any additional props you need for your modals here
//         />
//       )}

// {selectedModalId !==2 && (
//         <SettingsModal
//           isVisible={isModalVisible}
//           onClose={closeModal}
//           // You can pass any additional props you need for your modals here
//         />
//       )}
//             </MainContainer>

//         </Fragment>
//     )
// }

// export default Privacy
import React, { Fragment, useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text } from 'react-native';
import {
    flexRow,
    mt20,
    alignItemsCenter,
    ph15,
    spaceBetween,
    mh20,
    mv20,
    ml10,
    mv10,
    mt15,
} from '../../components/commonStyles';
import {
    H12fontNormalGray,
    H14BlackVar2Bold400Text,
    H16font600Black,
    H16font900Black,
    H16fontNormalGray4,
} from '../../components/commonText';
import {
    MainContainer,
    RowSpaceBetween,
    TopContainerWhiteCard,
} from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { privacyData } from '../../utils/data/privacyData';
import { DevWidth } from '../../utils/device';
import { SmallButton } from '../../components/commonButtons';
import { RadioBtn } from '../../components/commonComponents';
import { muteNotificationdata, statusPrivacydata } from '../../utils/data/modalData';
import { colors } from '../../utils/colors';
import { IconModal } from '../../components/commonModal';
import { screenName } from '../../utils/screenName';

export type privacyProps = {};

const Privacy = (props: privacyProps) => {
    const navigation = useNavigation();
    const [selectedModalId, setSelectedModalId] = useState(null); // State to store the selected modal ID
    const [statusPrivacyOptionModal, setStatusPrivacyOptionModal] = useState(false);

    const handleStatusPrivacyOptionModal = () => {
        setStatusPrivacyOptionModal(!statusPrivacyOptionModal)
    }

    const openModal = (id: number) => {
        // setSelectedModalId(id);
        if (id === 4) {
            handleStatusPrivacyOptionModal();
        }
    };

    const closeModal = () => {
        setSelectedModalId(null);
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
            setStatusPrivacyOptionModal (false)
        };

        const handleStatusSelect = (status: string, id : number) => {
            setSelectedStatus(status);
            if(id === 2){
                navigation.navigate(screenName.StatusMyContactExcept as never);
            } 
            else if(id === 3){
                navigation.navigate(screenName.StatusOnlyShareWith as never);
            }
        };

        return (
            <View style={[mh20]} >
                <H16font600Black>Status Privacy</H16font600Black>
                <Text style={[mt20]}>Who can see my status updates</Text>
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
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                        textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
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
                <StatusBar backgroundColor={colors.white} />
                <TopContainerWhiteCard>
                    <View style={[flexRow, mt20, { margin: 15 }]}>
                        <View style={[flexRow, alignItemsCenter]}>
                            <CustomIcon
                                name="chevron-left"
                                size={20}
                                color={colors.black}
                                type="octicons"
                            />
                            <H16font900Black style={[ph15]}>
                                {labels.privacy}
                            </H16font900Black>
                        </View>
                    </View>
                </TopContainerWhiteCard>
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
                                    <CustomIcon name='toggle-off' size={27} color={colors.grey3} type='Fontisto' />
                                ) : (
                                    <CustomIcon name='chevron-right' size={15} color={colors.grey2} type='octicons' />
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
                {/* {selectedModalId === 1 && (
                    <SettingsModal
                        isVisible={true}
                        onClose={closeModal}
                    />
                )}

                {selectedModalId === 2 && (
                    <LastSeenModal
                        isVisible={true}
                        onClose={closeModal}
                    />
                )}
                {selectedModalId === 3 && (
                    <GroupsModal
                        isVisible={true}
                        onClose={closeModal}
                    />
                )} */}
            </MainContainer>
        </Fragment>
    );
};

export default Privacy;

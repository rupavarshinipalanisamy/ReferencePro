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
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { colors } from 'react-native-elements';
import {
    flexRow,
    mt20,
    alignItemsCenter,
    ph15,
    spaceBetween,
    mh20,
} from '../../components/commonStyles';
import {
    H12fontNormalGray,
    H16font900Black,
    H16fontNormalGray4,
} from '../../components/commonText';
import {
    MainContainer,
    TopContainerWhiteCard,
} from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { privacyData } from '../../utils/data/privacyData';
import { GroupsModal, LastSeenModal, SettingsModal } from '../../components/commonModal';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { DevHeight } from '../../utils/device';

export type privacyProps = {};

const Privacy = (props: privacyProps) => {
    const navigation = useNavigation();
    const [selectedModalId, setSelectedModalId] = useState(null); // State to store the selected modal ID

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
                {/* <TopContainerWhiteCard>
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
                </TopContainerWhiteCard> */}
                <SearchHeader headerText={labels.privacy} height={DevHeight/12} />


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
                {/* Conditionally render the modals based on selectedModalId */}
                {selectedModalId === 1 && (
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
                )}
            </MainContainer>
        </Fragment>
    );
};

export default Privacy;

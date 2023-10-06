import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { colors } from 'react-native-elements';
import { CustomModal,  } from '../../components/commonModal';
import { flexRow, mt20, alignItemsCenter, ph15, mh20, spaceBetween, justyfyCenter } from '../../components/commonStyles';
import { H16font900Black, H16fontNormalGray4, H12fontNormalGray } from '../../components/commonText';
import { MainContainer, TopContainerWhiteCard } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { chatSettings } from '../../utils/data/chatsData';
import DeleteLogo from '../../../assets/images/delete1-logo.svg'
import { chooseTheme } from '../../utils/data/modalData';
import { RadioBtn } from '../../components/commonComponents';


export type chatSettingsProps = {

}


export const RenderTheme = () => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

      const handleStatusSelect = (status: string) => {
        setSelectedStatus(status);
      };
    return (
        <View>
      {chooseTheme.map((data, index) => (
      <View key={index} style={{flexDirection:'row'}}>
        <RadioBtn
                      key={data.id}
        
                          selected= { selectedStatus === data.status}
                          onPress={() => handleStatusSelect(data.status)}
                        />
                       <Text>{data.status}</Text>
                       </View>
                      ))}
                </View>
    )
}

const ChatSettings = (props: chatSettingsProps) => {

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
                                {labels.Chats}
                            </H16font900Black>
                        </View>
                    </View>
                </TopContainerWhiteCard>
                <View style={[mh20, mt20]}>

                    <H16fontNormalGray4>{labels.theme} </H16fontNormalGray4>
                    <H12fontNormalGray>{labels.light}</H12fontNormalGray>
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
                                    <CustomIcon name='toggle-off' size={27} color={colors.grey3} type='Fontisto' />
                                ) : (
                                    <CustomIcon name='chevron-right' size={15} color={colors.grey2} type='octicons' />
                                )}
                            </View>
                        );
                    })}
                </View>
                {selectedModalId === 1 && (
                    <CustomModal isVisible={true}
                        onClose={closeModal}
                        contentComponent={<RenderTheme/>}
                        image={<DeleteLogo/>} 
                        headingText={labels.chooseTheme}
                        />)}
                {/* 
                {selectedModalId === 4 && (
                    <ArchieveChatModal
                        isVisible={true}
                        onClose={closeModal}
                    />
                )}
                {selectedModalId === 5 && (
                    <DeleteModal
                        isVisible={true}
                        onClose={closeModal}
                    />
                )}
                   {selectedModalId === 6 && (
                    <DeleteAllModal
                        isVisible={true}
                        onClose={closeModal}
                    />
                )} */}
            </MainContainer>
        </Fragment>
    )
}

export default ChatSettings
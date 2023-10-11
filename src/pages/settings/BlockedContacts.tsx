import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, Platform } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyStart, justyfyCenter, mh30, ml10, ml15, ml30, mr30, mt15, mt3, mt5, mv10, p10, pb5, pl13 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { RowSpaceBetween } from '../../components/commonView';
import { H14GreyVar4Bold400, H15Blackvar2Bold500, H15Grey, H18BlackBoldText600 } from '../../components/commonText';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { CustomModal, MultiSelectOption } from '../../components/commonComponents';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export type BlockedContactsProps = {

}

const BlockedContacts = (props: BlockedContactsProps) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const [selectedBlockIcon, setSelectedBlockIcon] = useState(null);
    const statusBarHeight = getStatusBarHeight();
    const navigation = useNavigation();

    const handleBlockContacts = (event, item) => {
        setSelectedBlockIcon(item);
        const { pageX, pageY } = event.nativeEvent;
        const marginLeft = pageX - 30;
        setModalPosition({ x: marginLeft, y: pageY  });
        setModalVisible(true);
      };

    const BlockChatOption = () => {
        return (
            <TouchableOpacity onPress={() => { }} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                <View style={[flexRow]}>
                    <CustomIcon name='block-flipped' type="MaterialIcons" size={20} color={colors.blackVar1} />
                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                        <H15Grey>Unblock</H15Grey>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <View style={[flexRow, justifyStart, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <TouchableOpacity style={[ml30]}>
                    <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                </TouchableOpacity>
                <RowSpaceBetween style={[flex1, mr30]}>
                    <H18BlackBoldText600 style={[ml10]}>{labels.AccountSetting}</H18BlackBoldText600>
                    <TouchableOpacity>
                        <CustomIcon size={20} name='search' type='Feather' color={colors.blackVar2} />
                    </TouchableOpacity>
                </RowSpaceBetween>
            </View>
            <View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[flex1, mh30, mt15]}>
                        {
                            createGroupUserSelectData.map((item) => {
                                return (
                                    <View key={item.id} style={[p10, mv10, styles.whiteCard]}>
                                        <View style={[flexRow]}>
                                            <View style={[alignItemsCenter, justyfyCenter]}>
                                                <Image source={item.img} style={styles.profileImg} />
                                                <View style={[{ backgroundColor: item.status === 'active' ? '#20c997' : '' }, item.status === 'active' ? styles.status : null]} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={[pb5]}>
                                                    <View style={[]} >
                                                        <H15Blackvar2Bold500 style={[mt3]}>{item.name}</H15Blackvar2Bold500>
                                                        <H14GreyVar4Bold400 style={[mt5]}>{item.note}</H14GreyVar4Bold400>
                                                    </View>
                                                    <TouchableOpacity onPress={(event) => handleBlockContacts(event, item)} style={[alignItemsCenter, justyfyCenter]}>
                                                        <CustomIcon name='block-flipped' type="MaterialIcons" color={colors.red} size={20} />
                                                    </TouchableOpacity>
                                                </RowSpaceBetween>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>
                </ScrollView>
            </View>
            {
                selectedBlockIcon && (
                    <CustomModal
                        isVisible={isModalVisible}
                        width={DevWidth * 0.47}
                        modalData={<BlockChatOption />}
                        marginTop={modalPosition.y}
                        marginLeft={modalPosition.x}
                        onClose={() => setModalVisible(false)}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
    whiteCard: {
        backgroundColor: colors.white,
        height: 70,
        borderRadius: 5,
    },
    status: {
        borderWidth: 3,
        borderColor: colors.white,
        position: 'absolute',
        bottom: 0,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
});

export default BlockedContacts
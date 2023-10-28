import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh30, mt15, mt3, mt5, mv10, p10, pb5, pl13 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { RowSpaceBetween } from '../../components/commonView';
import { H14GreyVar4Bold400, H14blackVar1bold400Text, H15Blackvar2Bold500 } from '../../components/commonText';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { CustomModal } from '../../components/commonComponents';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { isDark } from '../../Theme/ThemeContext';
import { SearchHeader } from '../Media/MediaCommonHeader';

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
        const marginLeft = pageX + 30;
        setModalPosition({ x: marginLeft, y: pageY - statusBarHeight });
        setModalVisible(true);
    };

    const BlockChatOption = () => {
        return (
            <TouchableOpacity onPress={() => { }} style={{ marginHorizontal: 10 }}>
                <View style={[flexRow]}>
                    <View style={[alignItemsCenter, justyfyCenter]}>
                        <CustomIcon name='block-flipped' type="MaterialIcons" size={20} color={isDark() ? colors.greyVar3 : colors.blackVar1} />
                    </View>
                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                        <H14blackVar1bold400Text>Unblock</H14blackVar1bold400Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.BlockedContacts} searchIcon={true} />
            <View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[flex1, mh30, mt15]}>
                        {
                            createGroupUserSelectData.map((item) => {
                                return (
                                    <View key={item.id} style={[p10, mv10, styles.whiteCard, { backgroundColor: isDark() ? colors.darkModeVar4 : colors.white }]}>
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
                                                        <CustomIcon name='block-flipped' type="MaterialIcons" color={isDark() ? colors.redVar2 : colors.red} size={16} />
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
                        width={DevWidth * 0.45}
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
        height: 70,
        borderRadius: 5,
    },
    status: {
        borderWidth: 3,
        borderColor: isDark() ? colors.blackVar2 : colors.white,
        position: 'absolute',
        bottom: 0,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
});

export default BlockedContacts
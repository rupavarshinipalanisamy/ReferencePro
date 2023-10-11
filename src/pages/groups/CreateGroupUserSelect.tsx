import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh20, mh30, ml10, ml30, mr30, mt15, mt3, mt5, mv10, p10, pb5 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { RowSpaceBetween } from '../../components/commonView';
import { H14GreyVar4Bold400, H15Blackvar2Bold500, H15Grey, H16SemiBoldBlack, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { MultiSelectOption } from '../../components/commonComponents';
import { ButtonContainer } from '../../styledComponent/styledComponent';
import { ButtonSaveandCancel, SmallButton } from '../../components/commonButtons';
import { Chatimg1Img, Chatimg2Img, Chatimg3Img, Chatimg4Img, Chatimg5Img, Chatimg6Img, Chatimg7Img } from '../../utils/png';
import { useNavigation } from '@react-navigation/native';

export type CreateGroupUserSelectProps = {

}

const CreateGroupUserSelect = (props: CreateGroupUserSelectProps) => {
    const Navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
    };

    const handleCreateButton = () => {
        setIsCancelButtonActive(false);
    };

    const handleItemSelect = (itemId: number) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems((prevSelectedItems) =>
                prevSelectedItems.filter((item) => item !== itemId)
            );
        } else {
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
        }
    };

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <View style={[flexRow, justifyStart, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <View style={[ml30]}>
                    <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                </View>
                <RowSpaceBetween style={[flex1, mr30]}>
                    <H18BlackBoldText600 style={[ml10]}>{labels.CreateGroup}</H18BlackBoldText600>
                    <CustomIcon size={20} name='search' type='Feather' color={colors.blackVar2} />
                </RowSpaceBetween>
            </View>
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
                                                <View style={[alignItemsCenter, justyfyCenter]}>
                                                    <MultiSelectOption selectedColor={colors.purpleVar3} unselectedColor={colors.greyVar6} isSelected={selectedItems.includes(item.id)} onSelect={() => handleItemSelect(item.id)} />
                                                </View>
                                            </RowSpaceBetween>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <RowSpaceBetween style = {[mh30]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                        textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                    />
                    <SmallButton
                        title={labels.Create}
                        onChange={handleCreateButton}
                        backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                        textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                    />
                </RowSpaceBetween>
            </ScrollView>
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
    whiteCard: {
        backgroundColor: colors.white,
        height: 70,
        borderRadius: 5,
    },
    multiSelectBox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateGroupUserSelect
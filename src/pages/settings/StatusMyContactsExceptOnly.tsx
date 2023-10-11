import React, { useState } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex025, flex075, flex1, flexRow, justifyStart, justyfyCenter, mh15, mh20, mh30, ml10, ml15, ml20, ml30, mr15, mr30, mt15, mt3, mt5, mv10, mv20, p10, pb5, spaceAround, spaceBetween } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { RowSpaceAround, RowSpaceBetween } from '../../components/commonView';
import { H14GreyVar4Bold400, H15Blackvar2Bold500, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { MultiSelectOption } from '../../components/commonComponents';
import { ButtonContainer } from '../../styledComponent/styledComponent';
import { SmallButton } from '../../components/commonButtons';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
// import { ButtonSaveandCancel } from '../../components/commonButtons';

export type StatusMyContactsExceptOnlyProps = {

}


const StatusMyContactsExceptOnly = (props: StatusMyContactsExceptOnlyProps) => {
    const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [optionSelect, setOptionSelect] = useState(false);
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
    };

    const handleDeleteChatButton = () => {
        setIsCancelButtonActive(false);
        navigation.navigate(screenName.Privacy as never)
    };

    const toggleHeaderMultiSelect = () => {
        setOptionSelect(!optionSelect);
        if (optionSelect) {
            setSelectedItems([]);
        } else {
            const allItemIds = createGroupUserSelectData.map((item) => item.id);
            setSelectedItems(allItemIds);
        }
    };

    const handleOptionSelect = () => {
        toggleHeaderMultiSelect();
    };

    const handleItemSelect = (itemId: number) => {
        if (optionSelect) {
            setSelectedItems((prevSelectedItems) =>
                prevSelectedItems.filter((item) => item !== itemId)
            );
        } else {
            setSelectedItems((prevSelectedItems) =>
                prevSelectedItems.includes(itemId)
                    ? prevSelectedItems.filter((item) => item !== itemId)
                    : [...prevSelectedItems, itemId]
            );
        }
    };

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <View style={[flexRow, justifyStart, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <View style={[ml30]}>
                    <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                </View>
                <RowSpaceBetween style={[flex1, mr30]}>
                    <H18BlackBoldText600 style={[ml10]}>{labels.MyContactsExceptOnly}</H18BlackBoldText600>
                    <RowSpaceAround>
                        <View style={[mr15]}>
                            <CustomIcon size={20} name='search' type='Feather' color={colors.blackVar2} />
                        </View>
                        <MultiSelectOption selectedColor={colors.red} unselectedColor={colors.greyVar6} isSelected={optionSelect} onSelect={handleOptionSelect} />
                    </RowSpaceAround>
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
                                                    <MultiSelectOption selectedColor={colors.red} unselectedColor={colors.greyVar6} isSelected={selectedItems.includes(item.id)} onSelect={() => handleItemSelect(item.id)} />
                                                </View>
                                            </RowSpaceBetween>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={[mv20, flex1]}>
                    <RowSpaceBetween>
                        <View style={{flex : 0.85}} />
                        <View style={[flexRow, flex1]}>
                            <View style = {[]}>
                                <SmallButton
                                    title={labels.cancel}
                                    onChange={handleCancelButton}
                                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                                    borderWidth={isCancelButtonActive ? 0 : 1}
                                    width={DevWidth / 4.5}
                                />
                            </View>
                            <View style = {[mr30, ml15]}>
                                <SmallButton
                                    title={labels.Save}
                                    onChange={handleDeleteChatButton}
                                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                                    borderWidth={isCancelButtonActive ? 1 : 0}
                                    width={DevWidth / 4.5}
                                />
                            </View>
                        </View>
                    </RowSpaceBetween>
                </View>
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

export default StatusMyContactsExceptOnly
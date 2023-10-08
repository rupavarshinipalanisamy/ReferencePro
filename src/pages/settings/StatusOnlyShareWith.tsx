import React, { useState } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyStart, justyfyCenter, mh20, mh30, ml10, ml30, mr15, mr30, mt15, mt3, mt5, mv10, p10, pb5 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { RowSpaceAround, RowSpaceBetween } from '../../components/commonView';
import { H14GreyVar4Bold400, H15Blackvar2Bold500, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { MultiSelectOption } from '../../components/commonComponents';
import { ButtonContainer } from '../../styledComponent/styledComponent';
// import { ButtonSaveandCancel } from '../../components/commonButtons';

export type StatusOnlyShareWithProps = {

}


const StatusOnlyShareWith = (props: StatusOnlyShareWithProps) => {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [optionSelect, setOptionSelect] = useState(false);

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
                    <H18BlackBoldText600 style={[ml10]}>{labels.OnlyShareWith}</H18BlackBoldText600>
                    <RowSpaceAround>
                        <View style={[mr15]}>
                            <CustomIcon size={20} name='search' type='Feather' color={colors.blackVar2} />
                        </View>
                        <MultiSelectOption selectedColor={colors.green} unselectedColor={colors.greyVar6} isSelected={optionSelect} onSelect={handleOptionSelect} />
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
                                                    <MultiSelectOption selectedColor={colors.green} unselectedColor={colors.greyVar6} isSelected={selectedItems.includes(item.id)} onSelect={() => handleItemSelect(item.id)} />
                                                </View>
                                            </RowSpaceBetween>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
                {/* <ButtonContainer style={[mh20]}>
                    <ButtonSaveandCancel style={{
                        backgroundColor: colors.white
                    }}
                        textStyle={{ color: colors.greyVar4 }}
                        funCallback={() => { }}
                        label={labels.cancel} />
                    <ButtonSaveandCancel style={{
                        backgroundColor: colors.purpleVar3,
                    }}
                        textStyle={{ color: colors.white }}
                        funCallback={() => { }}
                        label={labels.Next} />
                </ButtonContainer> */}
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

export default StatusOnlyShareWith
import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyStart, justyfyCenter, mh30, ml10, ml30, mr30, mt15, mv10, p10, pb5 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { RowSpaceBetween } from '../../components/commonView';
import { H15Grey, H16SemiBoldBlack, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { MultiSelectOption } from '../../components/commonComponents';

export type CreateGroupUserSelectProps = {

}


const CreateGroupUserSelect = (props: CreateGroupUserSelectProps) => {
    const [data, setData] = useState(createGroupUserSelectData);

    // useEffect(() => {
    //     handleSelect(1);
    //     handleSelect(2);
    //     handleSelect(3);
    // })

    const handleSelect = (id: number) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, isSelected: !item.isSelected } : item
        );
        console.log(updatedData);
        setData(updatedData);
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
                                            <H16SemiBoldBlack>{item.name}</H16SemiBoldBlack>
                                            <TouchableOpacity
                                                onPress={() => handleSelect(item.id)}
                                                style={[
                                                    styles.multiSelectBox,
                                                    {
                                                        backgroundColor: item.isSelected === true ? colors.purpleVar3 : colors.greyVar6,
                                                    },
                                                ]}
                                            >
                                                {item.isSelected === true && (
                                                    <CustomIcon name="check" size={15} color="white" type="MaterialIcons" />
                                                )}
                                            </TouchableOpacity>
                                            {/* <MultiSelectOption selectedColor={colors.purpleVar3} unselectedColor={colors.greyVar6} isSelected = {item.isSelected} onSelect={() => handleSelect(item.id)} /> */}
                                        </RowSpaceBetween>
                                        <RowSpaceBetween style={[pb5]}>
                                            <H15Grey>{item.note}</H15Grey>
                                        </RowSpaceBetween>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
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
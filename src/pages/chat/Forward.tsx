import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { screenName } from '../../utils/screenName';
import { newChatData } from '../../utils/data/chatsData';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyStart, justyfyCenter, mh20, mh30, ml10, ml15, ml30, mr15, mr30, mt15, mt3, mt5, mv10, mv20, p10, pb5 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { RowSpaceAround, RowSpaceBetween } from '../../components/commonView';
import { H14GreyVar4Bold400, H15Blackvar2Bold500, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { MultiSelectOption } from '../../components/commonComponents';
import { createGroupUserSelectData } from '../../utils/data/groupsData';
import { SmallButton } from '../../components/commonButtons';
import { isDark, useTheme } from '../../Theme/ThemeContext';
import { SearchHeader } from '../Media/MediaCommonHeader';




const Forward = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [optionSelect, setOptionSelect] = useState(false);


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
        <View style={[flex1, { backgroundColor:isDark()?colors.darkModeVar2: colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.ForwardTo}  searchIcon={true}/>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={[flex1, mh20, mt15]}>
                    {
                        newChatData.map((item) => {
                            return (
                                <View key={item.id} style={[p10, mv10, styles.whiteCard, { backgroundColor: isDark() ? colors.darkModeVar4 : colors.white }]}>
                                    <View style={[flexRow]}>
                                        <View style={[alignItemsCenter, justyfyCenter]}>
                                            <Image source={item.img} style={styles.profileImg} />
                                            <View style={[{ backgroundColor: item.status === 'active' ? (isDark()?colors.greenVar2:colors.green) : '' ,borderColor: isDarkTheme?colors.darkModeVar4:colors.white}, item.status === 'active' ? styles.status : null]} />
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
        
        position: 'absolute',
        bottom: 0,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
    whiteCard: {
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

export default Forward
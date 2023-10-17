import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mt20, mv10, pb5, ph20, pv15 } from '../commonStyles';
import { CommonLineDividerGrey, RowSpaceBetween } from '../commonView';
import { H14GreyVar4Bold400, H15Blackvar2Bold500, H15Grey, H16SemiBoldBlack } from '../commonText';
import { BottomTabBar } from '../commonComponents';
import { colors } from '../../utils/colors';
import { AllCallsdata } from '../../utils/data/callsData';
import CustomIcon from '../../utils/Icons';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { isDark } from '../../Theme/ThemeContext';

export type IncomingCallsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}


const IncomingCalls = ({ selectedCards, onCardSelection }: IncomingCallsProps) => {
    const navigation = useNavigation();
    return (
        <View style={[flex1, mt20, styles.whiteBg, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.white }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={flex1}>
                    {AllCallsdata.map((call) => (
                        <View key={call.id}>
                            {call.id === 1 ? <View style={mv10} /> : <CommonLineDividerGrey />}
                            <TouchableOpacity onPress={() => {
                                if (selectedCards.length === 0) {
                                    navigation.navigate(screenName.CallHistory as never);
                                    console.log('selected cards log in incoming calls')
                                } else {
                                    onCardSelection(call.id);
                                }
                            }}
                                onLongPress={() => {
                                    if (!selectedCards.includes(call.id)) {
                                        onCardSelection(call.id);
                                    }
                                }} style={[ph20, pv15, { backgroundColor: selectedCards.includes(call.id) ? (isDark() ? colors.darkModeVar4 : colors.purpleVar1) : (isDark() ? colors.darkModeVar2 : 'transparent') }]}
                            >
                                <View style={[flexRow]}>
                                    <View>
                                        <Image source={call.img} style={styles.profileImg} />
                                        {
                                            selectedCards.includes(call.id) ? (
                                                <View style={[{ backgroundColor: colors.green, borderColor: isDark() ? colors.darkModeVar2 : colors.white, }, styles.statusTick, alignItemsCenter, justyfyCenter]} >
                                                    <CustomIcon name='check' size={10} color={colors.white} type='entypo' />
                                                </View>
                                            ) : (
                                                <View style={[{ backgroundColor: call.status === 'active' ? '#20c997' : '', borderColor: isDark() ? colors.darkModeVar2 : colors.white, }, call.status === 'active' ? styles.status : null]} />
                                            )
                                        }
                                    </View>
                                    <View style={[flex1]}>
                                        <RowSpaceBetween style={pb5}>
                                            <H15Blackvar2Bold500>{call.name}</H15Blackvar2Bold500>
                                            <CustomIcon name="phone-incoming" size={call.iconSize} color={colors.green} type='Feather' />
                                        </RowSpaceBetween>
                                        <RowSpaceBetween style={pb5}>
                                            <H14GreyVar4Bold400>{call.text}</H14GreyVar4Bold400>
                                            <H14GreyVar4Bold400>{call.duration}</H14GreyVar4Bold400>
                                        </RowSpaceBetween>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <BottomTabBar />
        </View >
    )
}

const styles = StyleSheet.create({
    whiteBg: {
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden'
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
    status: {
        borderWidth: 3,
        position: 'absolute',
        bottom: 2,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
    statusTick: {
        borderWidth: 1.5,
        position: 'absolute',
        bottom: 4,
        right: 10,
        height: 16,
        width: 16,
        borderRadius: 100,
    },
});

export default IncomingCalls
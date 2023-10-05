import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { flex1, flexRow, mt20, mv10, pb5, ph20, pv15 } from '../commonStyles';
import { CommonLineDividerGrey, RowSpaceBetween } from '../commonView';
import { H15Grey, H16SemiBoldBlack } from '../commonText';
import { BottomTabBar } from '../commonComponents';
import { colors } from '../../utils/colors';
import { AllCallsdata } from '../../utils/data/callsData';
import CustomIcon from '../../utils/Icons';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';

export type AllCallsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}


const AllCalls = ({ selectedCards, onCardSelection }: AllCallsProps) => {
    const navigation = useNavigation();
    return (
        <View style={[flex1, mt20, styles.whiteBg]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={flex1}>
                    {AllCallsdata.map((call) => (
                        <View key={call.id}>
                            <CommonLineDividerGrey />
                            <TouchableOpacity onPress={() => {
                                if (selectedCards.length === 0) {
                                    navigation.navigate(screenName.CallHistory as never);
                                    // console.log('selected cards log in all calls')
                                } else {
                                    onCardSelection(call.id);
                                }
                            }}
                                onLongPress={() => {
                                    if (!selectedCards.includes(call.id)) {
                                        onCardSelection(call.id);
                                    }
                                }} style={[ph20, pv15, { backgroundColor: selectedCards.includes(call.id) ? colors.purpleVar1 : 'transparent' }]}>
                                <View style={[flexRow]}>
                                    <View>
                                        <Image source={call.img} style={styles.profileImg} />
                                        <View style={[{ backgroundColor: call.status === 'active' ? '#20c997' : '' }, call.status === 'active' ? styles.status : null]} />
                                    </View>
                                    <View style={[flex1]}>
                                        <RowSpaceBetween style={pb5}>
                                            <H16SemiBoldBlack>{call.name}</H16SemiBoldBlack>
                                            <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} />
                                            {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                        </RowSpaceBetween>
                                        <RowSpaceBetween style={pb5}>
                                            <H15Grey>{call.text}</H15Grey>
                                            {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                            <H15Grey style={{ color: call.DurationColor }}>{call.duration}</H15Grey>
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
        borderColor: colors.white,
        position: 'absolute',
        bottom: 5,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
});

export default AllCalls
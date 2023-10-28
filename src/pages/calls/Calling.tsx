import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, justyfyCenter, mb15, mh20, mt20, mt30, mt5 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { H14GreyVar4Bold400, H14GreyVar4Bold400Text, H18Blackvar2Bold600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { CallAvatarMediumIcon } from '../../utils/svg';
import { RowSpaceAround } from '../../components/commonView';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomData } from '../../utils/data/callsData';
import { useNavigation } from '@react-navigation/native';
import { isDark } from '../../Theme/ThemeContext';

export type CallingProps = {

}

const Calling = (props: CallingProps) => {
    const navigation = useNavigation();
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[flex1, alignItemsCenter, mt30]}>
                <CallAvatarMediumIcon />
                <H18Blackvar2Bold600 style={mt20}>{labels.horaceKeene}</H18Blackvar2Bold600>
                <H14GreyVar4Bold400 style={mt5}>{labels.DreamsChatVoiceCall}</H14GreyVar4Bold400>
            </View>
            <RowSpaceAround style={[mh20, mb15]}>
                {
                    callBottomData.map((item) => {
                        return (
                            <View style={[mb15]} key={item.id}>
                                <TouchableOpacity onPress={() => navigation.navigate(item.screenName as never)} style={[borderRadius10, alignItemsCenter, justyfyCenter, { height: 40, width: 70, backgroundColor: item.bgColor }]}>
                                    <CustomIcon color={item.iconColor} size={item.iconSize} type={item.iconType} name={item.iconName} />
                                </TouchableOpacity>
                                <H14GreyVar4Bold400Text style={[alignSelfCenter, mt5]}>{item.text}</H14GreyVar4Bold400Text>
                            </View>
                        )
                    })
                }
            </RowSpaceAround>
        </View>
    )
}

export default Calling


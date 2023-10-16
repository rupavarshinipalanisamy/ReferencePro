import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, flexRow, justyfyCenter, mb20, mh10, ml10, mt10, mt15, mt20, mt30, mt5, spaceAround } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import CustomIcon from '../../utils/Icons';
import { DefaultH15Grey, H14GreyVar4Bold400, H15Grey, H18Blackvar2Bold600, H20BlackBoldText } from '../../components/commonText';
import { CallAvatarBigIcon } from '../../utils/svg';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomDataSecond } from '../../utils/data/callsData';
import { isDark } from '../../Theme/ThemeContext';

export type SingleAudioCallRingProps = {

}


const SingleAudioCallRing = (props: SingleAudioCallRingProps) => {
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[flex1, alignItemsCenter, mt30]}>
                <H18Blackvar2Bold600>{labels.horaceKeene}</H18Blackvar2Bold600>
                <H14GreyVar4Bold400 style={mt10}>{labels.Ringing}</H14GreyVar4Bold400>
            </View>
            <View style={[flex1, alignItemsCenter, justyfyCenter, { marginBottom: 170 }]}>
                <View style={{ height: 170, width: 170, borderRadius: 100, backgroundColor: colors.purpleVar1 }}>
                    <View style={[alignSelfCenter, justyfyCenter, flex1]}>
                        <CallAvatarBigIcon />
                    </View>
                </View>
            </View>
            <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
                <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
                <View style={[flexRow, spaceAround, mt20, mh10]}>
                    {
                        callBottomDataSecond.map((item) => {
                            return (
                                <View key={item.id}>
                                    {
                                        item.id == 4 ? (
                                            <TouchableOpacity style={[{ height: 40, width: 70, backgroundColor: isDark() ? `rgba(200, 16, 46, 0.2)` : colors.redVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: isDark() ? colors.darkModeVar4 : 'transparent', bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default SingleAudioCallRing
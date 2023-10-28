import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius10, borderRadius25, borderRadius6, flex1, flexRow, justyfyCenter, mb20, mh10, mt10, mt15, mt20, mt30, spaceAround } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import CustomIcon from '../../utils/Icons';
import { H14purpleVar3Text, H18Blackvar2Bold600 } from '../../components/commonText';
import { CallAvatarBigIcon } from '../../utils/svg';
import { RowSpaceEvenly } from '../../components/commonView';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomDataThird } from '../../utils/data/callsData';
import { isDark } from '../../Theme/ThemeContext';

export type SingleAudioCallAttendProps = {

}


const SingleAudioCallAttend = (props: SingleAudioCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[alignItemsCenter, mt30]}>
                <H18Blackvar2Bold600>{labels.horaceKeene}</H18Blackvar2Bold600>
                <RowSpaceEvenly style={[{ height: 30, width: 100, backgroundColor: isDark() ? colors.darkModeVar4 : colors.purpleVar1 }, mt10, alignItemsCenter, borderRadius6]}>
                    <View style={[{ height: 8, width: 8, backgroundColor: isDark() ? colors.greyVar3 : colors.purpleVar3 }, borderRadius25]} />
                    <H14purpleVar3Text>23:45</H14purpleVar3Text>
                </RowSpaceEvenly>
            </View>
            <View style={[flex1, alignItemsCenter, justyfyCenter, mb20]}>
                <View style={{ height: 165, width: 165, borderRadius: 100, backgroundColor: colors.purpleVar1 }}>
                    <View style={[alignSelfCenter, justyfyCenter, flex1]}>
                        <CallAvatarBigIcon />
                    </View>
                </View>
            </View>
            <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
                <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
                <View style={[flexRow, spaceAround, mt20, mh10]}>
                    {
                        callBottomDataThird.map((item) => {
                            return (
                                <View key={item.id}>
                                    {
                                        item.id == 4 ? (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: isDark() ? `rgba(200, 16, 46, 0.2)` : colors.redVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
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

export default SingleAudioCallAttend
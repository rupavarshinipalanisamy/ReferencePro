import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { CallCommonHeader } from '../../components/commonHeaders';
import { alignItemsCenter, alignSelfCenter, borderRadius10, borderRadius25, borderRadius6, flex1, justyfyCenter, mb20, mh20, mt10, mt5, mv20 } from '../../components/commonStyles';
import { H14purpleVar3Text, H18Blackvar2Bold600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { RowSpaceEvenly } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { VideoCallLowerImg, VideoCallUpperImg } from '../../utils/png';
import { CallBottomTab } from '../../components/commonComponents';
import { isDark } from '../../Theme/ThemeContext';


export type SingleVideoCallAttendProps = {

}


const SingleVideoCallAttend = (props: SingleVideoCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[alignItemsCenter, mt10]}>
                <H18Blackvar2Bold600>{labels.horaceKeene}</H18Blackvar2Bold600>
                <RowSpaceEvenly style={[{ height: 30, width: 100, backgroundColor: isDark() ? colors.darkModeVar4 : colors.purpleVar1 }, mt5, alignItemsCenter, borderRadius6]}>
                    <View style={[{ height: 8, width: 8, backgroundColor: isDark() ? colors.greyVar3 : colors.purpleVar3 }, borderRadius25]} />
                    <H14purpleVar3Text>23:45</H14purpleVar3Text>
                </RowSpaceEvenly>
            </View>
            <View style={[alignItemsCenter, justyfyCenter, flex1, mh20, mv20]}>
                <ImageBackground source={VideoCallUpperImg} style={[{ height: '100%', width: '100%' }]}
                    imageStyle={[{ flex: 1, overflow: 'hidden' }, borderRadius10, alignSelfCenter]}
                >
                    <Image source={VideoCallLowerImg} style={[mb20, { height: 120, width: 90, right: 20, position: 'absolute', bottom: 0 }]} />
                </ImageBackground>
            </View>
            <CallBottomTab />
        </View>
    )
}

export default SingleVideoCallAttend
import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { CallCommonHeader } from '../../components/commonHeaders';
import { alignItemsCenter, alignSelfCenter, alignSelfRight, borderRadius10, borderRadius25, borderRadius6, flex1, flexRow, justifyEnd, justyfyCenter, mb20, mh20, mt10, mt15, mt20, mt30, mt5, mv20, spaceAround } from '../../components/commonStyles';
import { H20BlackBoldText } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { RowSpaceEvenly } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { VideoCallLowerImg, VideoCallUpperImg } from '../../utils/png';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { callBottomDataFourth } from '../../utils/data/callsData';


export type SingleVideoCallAttendProps = {

}


const SingleVideoCallAttend = (props: SingleVideoCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[alignItemsCenter, mt10]}>
                <H20BlackBoldText>{labels.horaceKeene}</H20BlackBoldText>
                <RowSpaceEvenly style={[{ height: 30, width: 100, backgroundColor: colors.purpleVar1 }, mt5, alignItemsCenter, borderRadius6]}>
                    <View style={[{ height: 8, width: 8, backgroundColor: colors.purpleVar3 }, borderRadius25]} />
                    <Text style={{ color: colors.purpleVar3, fontSize: 16, fontWeight: '500' }}>23:45</Text>
                </RowSpaceEvenly>
            </View>
            <View style={[alignItemsCenter, justyfyCenter, flex1, mh20, mv20]}>
                <ImageBackground source={VideoCallUpperImg} style={[{ height: '100%', width: '100%'}]} 
                imageStyle={[{flex:1,overflow:'hidden'}, borderRadius10, alignSelfCenter]}
                >
                    <Image source={VideoCallLowerImg} style={[mb20, { height: 120, width: 90, right: 20, position: 'absolute', bottom: 0 }]} />
                </ImageBackground>
            </View>
            <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
                <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
                <View style={[flexRow, spaceAround, mt20]}>
                    {
                        callBottomDataFourth.map((item) => {
                            return (
                                <View key={item.id}>
                                    {
                                        item.id == 1 ? (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: colors.purpleVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        ) : item.id == 4 ? (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: colors.redVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity style={mt5}>
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

export default SingleVideoCallAttend
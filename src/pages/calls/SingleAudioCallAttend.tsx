import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius10, borderRadius25, borderRadius6, flex1, flexRow, justyfyCenter, mb20, ml10, mt10, mt15, mt20, mt30, mt5, spaceAround } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import CustomIcon from '../../utils/Icons';
import { H15Grey, H20BlackBoldText } from '../../components/commonText';
import { CallAvatarBigIcon } from '../../utils/svg';
import { RowSpaceAround, RowSpaceBetween, RowSpaceEvenly } from '../../components/commonView';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomDataThird } from '../../utils/data/callsData';

export type SingleAudioCallAttendProps = {

}


const SingleAudioCallAttend = (props: SingleAudioCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[alignItemsCenter, mt30]}>
                <H20BlackBoldText>{labels.horaceKeene}</H20BlackBoldText>
                <RowSpaceEvenly style = {[{height : 30, width : 100, backgroundColor : colors.purpleVar1}, mt10, alignItemsCenter, borderRadius6]}>
                    <View style = {[{height : 8, width : 8, backgroundColor : colors.purpleVar3}, borderRadius25]} />
                    <Text style = {{color : colors.purpleVar3, fontSize : 16, fontWeight : '500'}}>23:45</Text>
                </RowSpaceEvenly>
            </View>
            <View style={[flex1, alignItemsCenter, justyfyCenter,mb20]}>
                <View style={{ height: 165, width: 165, borderRadius: 100, backgroundColor: colors.purpleVar1 }}>
                    <View style={[alignSelfCenter, justyfyCenter, flex1]}>
                        <CallAvatarBigIcon />
                    </View>
                </View>
            </View>
            <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
                <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
                <View style={[flexRow, spaceAround, mt20]}>
                    {
                        callBottomDataThird.map((item) => {
                            return (
                                <View key={item.id}>
                                    {
                                        item.id == 4 ? (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: colors.redVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity style = {mt5}>
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
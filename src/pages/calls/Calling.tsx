import React from 'react';
import { Text, View } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, flexRow, justyfyCenter, mb15, mh20, ml10, mt10, mt20, mt30, mt5, spaceAround } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H15Grey, H15GreySemiBold, H20BlackBoldText } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { CallAvatarBigIcon, CallAvatarMediumIcon } from '../../utils/svg';
import { RowSpaceAround } from '../../components/commonView';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomData } from '../../utils/data/callsData';

export type CallingProps = {

}

const Calling = (props: CallingProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style={[flex1, alignItemsCenter, mt30]}>
                <CallAvatarMediumIcon />
                <H20BlackBoldText style={mt20}>{labels.horaceKeene}</H20BlackBoldText>
                <H15Grey style={mt5}>{labels.DreamsChatVoiceCall}</H15Grey>
            </View>
            <RowSpaceAround style = {[mh20, mb15]}>
                {
                    callBottomData.map((item) => {
                        return (
                            <View style = {[mb15]} key={item.id}>
                                <View style = {[borderRadius10, alignItemsCenter, justyfyCenter, {height : 40, width : 70, backgroundColor : item.bgColor}]}>
                                    <CustomIcon color={item.iconColor} size={item.iconSize} type={item.iconType} name={item.iconName} />
                                </View>
                                <H15GreySemiBold style = {[alignSelfCenter, mt5]}>{item.text}</H15GreySemiBold>
                            </View>
                        )
                    })
                }
            </RowSpaceAround>
        </View>
    )
}

export default Calling


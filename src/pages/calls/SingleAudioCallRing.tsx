import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, flexRow, justyfyCenter, mb20, ml10, mt10, mt15, mt20, mt30, spaceAround } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import { labels } from '../../utils/labels';
import CustomIcon from '../../utils/Icons';
import { H15Grey, H20BlackBoldText } from '../../components/commonText';
import { CallAvatarBigIcon } from '../../utils/svg';

export type SingleAudioCallRingProps = {

}


const SingleAudioCallRing = (props: SingleAudioCallRingProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <View style={[flexRow, spaceAround, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                <View style={[flexRow, alignItemsCenter]}>
                    <CustomIcon name='lock' size={15} color={colors.greyVar4} type='Feather' />
                    <H15Grey style={[ml10]}>{labels.Endtoendencrypted}</H15Grey>
                </View>
                <CustomIcon name='person-add' size={18} color={colors.blackVar2} type='octicons' />
            </View>
            <View style={[flex1, alignItemsCenter, mt30]}>
                <H20BlackBoldText>{labels.horaceKeene}</H20BlackBoldText>
                <H15Grey style={mt10}>{labels.Ringing}</H15Grey>
            </View>
            <View style={[flex1, alignItemsCenter, justyfyCenter, { marginBottom: 170 }]}>
                <View style={{ height: 170, width: 170, borderRadius: 100, backgroundColor: colors.purpleVar1 }}>
                    <View style={[alignSelfCenter, justyfyCenter, flex1]}>
                        <CallAvatarBigIcon />
                    </View>
                </View>
            </View>
            <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
                <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
                <View style={[flexRow, spaceAround, mt20]}>
                    <TouchableOpacity>
                        <CustomIcon name='sound' size={22} color={colors.greyVar4} type='AntDesign' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CustomIcon name='video-outline' size={23} color={colors.greyVar2} type='MaterialCommunityIcons' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CustomIcon name='microphone-off' size={23} color={colors.greyVar4} type='MaterialCommunityIcons' />
                    </TouchableOpacity>
                    <TouchableOpacity style = {[{height : 40, width : 80, backgroundColor : colors.redVar1, bottom : 5}, alignItemsCenter, justyfyCenter, borderRadius10]}>
                        <CustomIcon name='call-outline' size={23} color={colors.red} type='Ionicons' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SingleAudioCallRing
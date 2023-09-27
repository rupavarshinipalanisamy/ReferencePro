import React from 'react';
import { Text, View } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, ml10, spaceAround } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H15Grey } from '../../components/commonText';
import { labels } from '../../utils/labels';

export type CallingProps = {
    
    }


const Calling = (props: CallingProps) => {
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
        </View>
    )
}

export default Calling

// arrow-back-ios == MaterialIcons
// lock == Feather
// person-add == Octicons
// sound == AntDesign
// video-outline == MaterialCommunityIcons
// microphone-off == MaterialCommunityIcons
// call-outline == Ionicons
// phone-off == Feather
// chatbox-ellipses-outline == Ionicons


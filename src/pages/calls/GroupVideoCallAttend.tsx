import React from 'react';
import { Text, View } from 'react-native';
import { flex1 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { CallCommonHeader } from '../../components/commonHeaders';
import { CallBottomTab } from '../../components/commonComponents';

export type GroupVideoCallAttendProps = {
    
    }


const GroupVideoCallAttend = (props: GroupVideoCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style = {[flex1]}>
                <Text>hhhh</Text>
            </View>
            <CallBottomTab />
        </View>
    )
}

export default GroupVideoCallAttend
import React from 'react';
import { Text, View } from 'react-native';
import { flex1 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { CallCommonHeader } from '../../components/commonHeaders';

export type GroupVideoCallAttendProps = {
    
    }


const GroupVideoCallAttend = (props: GroupVideoCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <CallCommonHeader />
        </View>
    )
}

export default GroupVideoCallAttend
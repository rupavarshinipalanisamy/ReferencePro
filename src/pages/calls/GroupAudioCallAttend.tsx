import React from 'react';
import { Text, View, Image } from 'react-native';
import { borderRadius10, flex1 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { CallCommonHeader } from '../../components/commonHeaders';
import { groupCallData } from '../../utils/data/callsData';

export type GroupAudioCallAttendProps = {
    
    }


const GroupAudioCallAttend = (props: GroupAudioCallAttendProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <CallCommonHeader />
            <View style = {{}}>
                {
                    groupCallData.map((item) => {
                        return(
                            <View key={item.id} style = {[{height : 220, width : 170, borderColor : item.color, borderWidth : 1}, borderRadius10]}>
                                <Image source={item.image} style = {{height : 40, width : 40, borderRadius : 100}} />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default GroupAudioCallAttend
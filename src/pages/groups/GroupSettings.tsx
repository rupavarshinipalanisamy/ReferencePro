import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { labels } from '../../utils/labels';
import { H15BlackBold600, H15Grey, H16fontBoldBlack, H18BlackBoldText } from '../../components/commonText';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, flexRow, justifyStart, justyfyCenter, mh20, ml10, ml15, ml30, mt20, mv10 } from '../../components/commonStyles';
import { GroupSettingData } from '../../utils/data/groupsData';
import { RowSpaceBetween } from '../../components/commonView';
import { ToggleSwitch } from '../../components/commonComponents';

export type GroupSettingsProps = {

}


const GroupSettings = (props: GroupSettingsProps) => {
    const initialToggleStates = GroupSettingData.map(item => item.id === 1 || item.id === 2);

    const [toggleStates, setToggleStates] = useState(initialToggleStates);

    const toggleSwitch = (index: number) => {
        const newToggleStates = [...toggleStates];
        newToggleStates[index] = !newToggleStates[index];
        setToggleStates(newToggleStates);
    };

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <View style={[flexRow, justifyStart, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <View style={[ml30]}>
                    <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                </View>
                <H18BlackBoldText style={[ml10]}>{labels.GroupSetting}</H18BlackBoldText>
            </View>
            <View style={[mt20, mh20]}>
                {
                    GroupSettingData.map((item) => {
                        return (
                            <View style={[flexRow, alignItemsCenter, justyfyCenter, mv10]} key={item.id}>
                                <View style={{ height: 30, width: 30, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                    <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                </View>
                                <RowSpaceBetween style={[flex1, ml15]}>
                                    <H15BlackBold600>{item.name}</H15BlackBold600>
                                    <ToggleSwitch value={toggleStates[item.id]} onToggle={() => toggleSwitch(item.id)} />
                                </RowSpaceBetween>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default GroupSettings
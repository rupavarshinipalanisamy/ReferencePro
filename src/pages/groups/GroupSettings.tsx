import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { labels } from '../../utils/labels';
import { H14Blackvar2Bold500, H15BlackBold600, H15Grey, H16fontBoldBlack, H18BlackBoldText, H18BlackBoldText600 } from '../../components/commonText';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh20, ml10, ml15, ml30, mt20, mv10 } from '../../components/commonStyles';
import { GroupSettingData } from '../../utils/data/groupsData';
import { RowSpaceBetween } from '../../components/commonView';
import { ToggleSwitch } from '../../components/commonComponents';
import { ButtonNow } from '../../components/commonButtons';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';

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
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 :  colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.GroupSetting} />
            <View style={[mt20, mh20]}>
                {
                    GroupSettingData.map((item) => {
                        return (
                            <View style={[flexRow, alignItemsCenter, justyfyCenter, mv10]} key={item.id}>
                                <View style={{ height: 30, width: 30, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                    <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                </View>
                                <RowSpaceBetween style={[flex1, ml15]}>
                                    <H14Blackvar2Bold500>{item.name}</H14Blackvar2Bold500>
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
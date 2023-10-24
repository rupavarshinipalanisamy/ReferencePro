import React from 'react';
import { View, StatusBar } from 'react-native';
import { IconBackground } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { DevHeight } from '../../utils/device';
import { labels } from '../../utils/labels';
import { H12fontBold400GreyVar4, H15font500Black } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { flexRow, alignItemsCenter, ph10, p20, flex1 } from '../../components/commonStyles';
import { socilProfile } from '../../utils/data/socialServiceData';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';

export type socialProfilesProps = {

}

const SocialProfiles = (props: socialProfilesProps) => {
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.socialPro} editIcon={true}  />
            <View>
                {socilProfile.map((socialProfile) => (
                    <View key={socialProfile.id} style={[p20]}>
                        <View style={[flexRow, alignItemsCenter]}>
                            <IconBackground style={{ backgroundColor: isDark() ? colors.darkModeVar7 : colors.purpleVar4 }}>
                                <CustomIcon name={socialProfile.iconName} type={socialProfile.iconType} size={socialProfile.iconSize} color={isDark() ? colors.greyVar3 : colors.purpleVar3} />
                            </IconBackground>
                            <View style={[ph10]}>
                                <H12fontBold400GreyVar4>{socialProfile.name}</H12fontBold400GreyVar4>
                                <H15font500Black >{socialProfile.link}</H15font500Black>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default SocialProfiles;
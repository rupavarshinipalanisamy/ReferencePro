import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconBackground, MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { DevHeight } from '../../utils/device';
import { labels } from '../../utils/labels';
import { H15Grey, H16fontBoldBlack, H16fontNormalGray } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { flexRow, mt20, alignItemsCenter, ph10, justyfyCenter, p20 } from '../../components/commonStyles';
import { socilProfile } from '../../utils/data/socialServiceData';
import { SearchHeader } from '../Media/MediaCommonHeader';

export type socialProfilesProps = {

}

const SocialProfiles = (props: socialProfilesProps) => {
    return (
        <Fragment>
            <MainContainer>
          
                <SearchHeader headerText={labels.socialPro} editIcon={true} height={DevHeight/12} />
                <View >
                    {socilProfile.map((socialProfile) => (
                        <View key={socialProfile.id} style={[p20]}>
                            <View style={[flexRow, alignItemsCenter]}>
                                <IconBackground>
                                    <CustomIcon name={socialProfile.iconName} type={socialProfile.iconType} size={socialProfile.iconSize} color={colors.purpleVar3} />
                                </IconBackground>
                                <View style={[ph10]}>
                                    <H15Grey>{socialProfile.name}</H15Grey>
                                    <H16fontBoldBlack >{socialProfile.link}</H16fontBoldBlack>
                                </View>
                            </View>

                        </View>
                    ))}
                </View>

            </MainContainer>
        </Fragment>
    )
}

export default SocialProfiles;
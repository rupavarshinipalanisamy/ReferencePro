import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconBackground, MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { DevHeight } from '../../utils/device';
import { labels } from '../../utils/labels';
import { H15Grey, H16fontBoldBlack, H16fontNormalGray } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { InputContainer1 } from '../../styledComponent/styledComponent';
import { flexRow, mt20, alignItemsCenter, ph10, justyfyCenter, p20 } from '../../components/commonStyles';
import { socilProfile } from '../../utils/data/socialServiceData';

export type socialProfilesProps = {

}


const SocialProfiles = (props: socialProfilesProps) => {
    return (
        <Fragment>
            <MainContainer>
                <View style={styles.topContainerWhiteCard}>
                    <View style={[flexRow, mt20, { margin: 15 }]}>
                        <InputContainer1>
                            <View style={[flexRow, alignItemsCenter,]}>
                                <CustomIcon name='chevron-left' size={20} color={colors.black} type='octicons' />
                                <Text style={{ color: 'black', fontSize: 17, fontWeight: '900', paddingHorizontal: 15 }}>{labels.socialPro}</Text>
                            </View>
                            <View style={[justyfyCenter]}>
                                <TouchableOpacity>
                                    <CustomIcon name='pencil' size={20} color={colors.black} type='SimpleLineIcons' />
                                </TouchableOpacity>
                            </View>
                        </InputContainer1>
                    </View>
                </View>
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
const styles = StyleSheet.create({

    cardSurface: {
        backgroundColor: colors.purpleVar1,
        padding: 10,
        elevation: 4,
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 8,
        shadowColor: colors.greyVar3
    },
    topContainerWhiteCard: {
        backgroundColor: 'white',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        elevation: 4,
        height: DevHeight / 10,
        justifyContent: 'center'
    }

})


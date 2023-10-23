import React, { Fragment } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { labels } from '../../utils/labels';
import { privacyContentData } from '../../utils/data/termsAndConditions';
import { flex1, m15, mt30 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { isDark } from '../../Theme/ThemeContext';

export type PrivacyPolicyProps = {}

const PrivacyPolicy = (props: PrivacyPolicyProps) => {
    return (
        <Fragment>
            <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <StatusBar backgroundColor={isDark() ? colors.darkModeVar1 : colors.white} />
                <SearchHeader headerText={labels.privacyPolicy} />
                <ScrollView>
                    <View style={[m15, mt30]}>
                        {privacyContentData(labels.privacyPolicy)}
                        {privacyContentData(labels.termText2)}
                        {privacyContentData(labels.termText2)}
                        {privacyContentData(labels.termText2)}
                    </View>
                </ScrollView>
            </View>
        </Fragment>
    )
}

export default PrivacyPolicy
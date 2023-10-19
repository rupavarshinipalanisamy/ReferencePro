import React, { Fragment } from 'react';
import { View, ScrollView } from 'react-native';
import { MainContainer } from '../../components/commonView';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { labels } from '../../utils/labels';
import { privacyContentData } from '../../utils/data/termsAndConditions';
import { m15, mt20, mt30 } from '../../components/commonStyles';

export type privacyPolicyProps = {

}

const PrivacyPolicy = (props: privacyPolicyProps) => {
    return (
        <Fragment>
            <MainContainer>
                <SearchHeader headerText={labels.privacyPolicy}  />
                <ScrollView>
                    <View style={[m15,mt30]}>
                        {privacyContentData(labels.privacyPolicy)}
                        {privacyContentData(labels.termText2)}
                        {privacyContentData(labels.termText2)}
                        {privacyContentData(labels.termText2)}
                    </View>
                </ScrollView>
            </MainContainer>
        </Fragment>
    )
}

export default PrivacyPolicy
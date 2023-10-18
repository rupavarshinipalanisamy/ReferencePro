import React, { Fragment } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { MainContainer } from '../../components/commonView';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { labels } from '../../utils/labels';
import { DevHeight } from '../../utils/device';
import { H15font500Black } from '../../components/commonText';
import { agreeText, termText } from '../../utils/data/termsAndConditions';

export type privacyPolicyProps = {

}
const privacyContentData = (value: string) => {
    return (
        <View>
            <H15font500Black>{value}</H15font500Black>
            {termText()}
        </View>
    )
}


const PrivacyPolicy = (props: privacyPolicyProps) => {
    return (
        <Fragment>
            <MainContainer>
                <SearchHeader headerText={labels.privacyPolicy} height={DevHeight / 12} />
                <ScrollView>
                    <View style={{ margin: 20 }}>
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
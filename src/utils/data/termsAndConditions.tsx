import React from 'react';
import { View } from 'react-native';
import { SearchHeader } from '../../pages/Media/MediaCommonHeader';
import { labels } from '../labels';
import { H14BlackText, H14font400Gray4, H15font500Black } from '../../components/commonText';
import { flex1, m15, mt30, mv20 } from '../../components/commonStyles';
import { CheckCircleIcon } from '../svg';
import { colors } from '../colors';

export type termsAndConditionsProps = {
}

export const termText = () => {
    return (
        <View>
            <H14font400Gray4 style={[mv20, { letterSpacing: 1.2, textAlign: 'justify', lineHeight: 25 }]}>{labels.termTextCon}</H14font400Gray4>
        </View>
    )
}

export const privacyContentData = (value: string) => {
    return (
        <View>
            <H15font500Black>{value}</H15font500Black>
            {termText()}
        </View>
    )
}

export const agreeText = (text1: string, text2: string) => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            <CheckCircleIcon />
            <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                <H14font400Gray4>{text1}</H14font400Gray4>
                <H14BlackText>{text2}</H14BlackText>
            </View>
        </View>

    )
}

const TermsAndConditions = (props: termsAndConditionsProps) => {
    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >

            <SearchHeader headerText={labels.termandCondition} />
            <View style={[m15,mt30]} >
                {privacyContentData(labels.termsandcondition1)}
                {privacyContentData(labels.termText2)}
                {privacyContentData(labels.termText2)}
                <View style={{ margin: 20 }}>
                    {agreeText(labels.agreeText, labels.termsandcondition1)}
                    {agreeText(labels.agreeText, labels.privacyPolicy)}
                </View>
            </View>

        </View>
    )
}

export default TermsAndConditions
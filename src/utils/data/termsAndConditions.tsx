import React from 'react';
import { Text, View } from 'react-native';
import { SearchHeader } from '../../pages/Media/MediaCommonHeader';
import { labels } from '../labels';
import { DevHeight } from '../device';
import { H14BlackText, H14font400Gray4, H15font500Black, H16fontBoldBlack } from '../../components/commonText';
import { MainContainer } from '../../components/commonView';
import { justyfyCenter } from '../../components/commonStyles';
import { CheckCircleIcon } from '../svg';

export type termsAndConditionsProps = {

}

export const termText=()=>{
    return(
        <H14font400Gray4 style={[justyfyCenter, { lineHeight: 20, letterSpacing: 1, marginVertical: 20 }]}>Lorem      ipsum     dolor   sit     amet,   consectetur{'\n'}
        adipiscing  elit, sed  do  eiusmod tempor incididunt{'\n'}ut  labore   et  dolore  magna    aliqua. Ut   enim  ad{'\n'}
        minim veniam,   quis   nostrud exercitation  ullamco   {'\n'}aliquip   ex   ea commodo consequat.
    </H14font400Gray4>
    )
}

export const agreeText=(text1:string,text2:string)=>{
    return(
        <View style={{flexDirection:'row',marginVertical:5}}>
        <CheckCircleIcon/>
       <View style={{marginHorizontal:10,flexDirection:'row'}}>
       <H14font400Gray4>{text1}</H14font400Gray4>
       <H14BlackText>{text2}</H14BlackText>

       </View>

        </View>

    )
}

const TermsAndConditions = (props: termsAndConditionsProps) => {
    return (
        <MainContainer>
            <SearchHeader headerText={labels.termandCondition} height={DevHeight / 12} />
            <View style={{ margin: 20 }}>
                <H15font500Black>{labels.termsandcondition1}</H15font500Black>
            {termText()}
            <H15font500Black>{labels.termText2}</H15font500Black>
            {termText()}
            <H15font500Black>{labels.termText2}</H15font500Black>
            {termText()}
            {agreeText(labels.agreeText,labels.termsandcondition1)}
            {agreeText(labels.agreeText,labels.privacyPolicy)}
            </View>
         
        </MainContainer>
    )
}

export default TermsAndConditions
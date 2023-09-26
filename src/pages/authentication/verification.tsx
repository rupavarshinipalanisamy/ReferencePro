import React, { Fragment, useRef, useState } from 'react';
import { ImageBackground, StatusBar, TouchableOpacity, View, TextInput } from 'react-native';
import {
    m30,
    ph30,
    pv8,
    flexRow,
    spaceBetween,
    mt20,
    pt25,
    flex1,
} from '../../components/commonStyles';
import {  H18fontNormalGray, H16fontNormalGray, H16fontNormalPurple, H25fontBoldBlack } from '../../components/commonText';
import { MainContainer } from '../../components/commonView';
import { LoginLogoBigCircle, LoginLogoCircle, OtpInput } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import {labels} from '../../utils/labels';
import VerificationLogo from '../../../assets/images/verification-logo.svg';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { screenName } from '../../utils/screenName';
import { ButtonNow } from '../../components/commonButtons';

export type verificationProps = {};

const Verification = (props: verificationProps) => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const otpInputRefs = useRef<TextInput[]>(Array(6).fill(null));

    const handleOtpChange = (index: number, text: string) => {
        if (text.length === 1 && index < 5) {
            otpInputRefs.current[index + 1]?.focus();
        }
        const updatedOtp = [...otp];
        updatedOtp[index] = text;
        setOtp(updatedOtp);
    };

    const renderOtpInputs = () => {
        return otp.map((value, index) => (
            <View key={index}>
                <OtpInput
                    ref={(ref) => (otpInputRefs.current[index] = ref)}
                    style={{
                        borderWidth: 1,
                        borderColor: value ? colors.purpleVar3 : colors.borderBottomColor,
                        backgroundColor: value ? colors.purpleVar1 : colors.white,
                    }}
                    onChangeText={(text) => handleOtpChange(index, text)}
                    value={value}
                    maxLength={1}
                    keyboardType="numeric"
                    placeholderTextColor={colors.black}
                />
            </View>
        ));
    };

    const handleSubmitOtp = () => {
        const enteredOtp = otp.join('');
        navigation.navigate(screenName.CreateNewPassword as never)
        console.log('Submitted OTP:', enteredOtp);
    };

    return (
        <Fragment>
            <MainContainer>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground
                    source={require('../../../assets/images/png/background-image.png')}
                    style={[flex1]}
                >
                    <View style={m30}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <CustomIcon name="arrow-back-outline" size={28} color={colors.black} type="Ionicons" />
                        </TouchableOpacity>
                        <LoginLogoBigCircle>
                            <LoginLogoCircle>
                                <VerificationLogo />
                            </LoginLogoCircle>
                        </LoginLogoBigCircle>
                    </View>
                    <View>
                        <View style={[ph30]}>
                            <H25fontBoldBlack>{labels.verification}</H25fontBoldBlack>
                            <H18fontNormalGray style={[pv8]}>{labels.verifyMsg}</H18fontNormalGray>
                        </View>
                    </View>
                    <View style={[ph30]}>
                        <View style={[flexRow, spaceBetween, mt20]}>
                            {renderOtpInputs()}
                        </View>
                        <View style={[pt25, flexRow, spaceBetween]}>
                            <View style={[flexRow]}>
                                <H16fontNormalGray>{labels.didnotReceivecode}</H16fontNormalGray>
                                <TouchableOpacity>
                                    <H16fontNormalPurple>{labels.resendCode}</H16fontNormalPurple>
                                </TouchableOpacity>
                            </View>
                            <H16fontNormalGray>{labels.second}</H16fontNormalGray>
                        </View>
                        <ButtonNow
                            style={{ backgroundColor: colors.purpleVar3 }}
                            textStyle={{ color: colors.white }}
                            funCallback={handleSubmitOtp}
                            label={labels.verifyAcc} />
                    </View>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    );
};

export default Verification;
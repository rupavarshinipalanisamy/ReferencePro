import React, { Fragment, useRef, useState } from 'react';
import { ImageBackground, TouchableOpacity, View, TextInput } from 'react-native';
import { ph30, flexRow, spaceBetween, mt20, pt25, flex1, mh25, mv30, m28, mv8, } from '../../components/commonStyles';
import { H20font600Black, H14font400Gray4, H14font400Purple3 } from '../../components/commonText';
import { OtpInput } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { screenName } from '../../utils/screenName';
import { LongPurpleButton } from '../../components/commonButtons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '../../Theme/ThemeContext';
import { AuthImageBg } from '../../utils/png';
import { VerificationLogo } from '../../utils/svg';
import { topLogo } from './loginEmail';

export type VerificationProps = {};

const Verification = (props: VerificationProps) => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const otpInputRefs = useRef<TextInput[]>(Array(6).fill(null));
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';

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
                        borderColor: value ? colors.purpleVar3 : isDarkTheme ? colors.darkModeVar5 : colors.borderBottomColor,
                        backgroundColor: value ? isDarkTheme ? colors.darkModeVar6 : colors.purpleVar1 : isDarkTheme ? colors.darkModeVar7 : colors.white
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
            <View style={[flex1]}>
                <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }}>
                    <ImageBackground source={AuthImageBg} style={[flex1]}>
                        <View style={[m28]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <CustomIcon name="arrow-back-outline" size={28} color={colors.black} type="Ionicons" />
                            </TouchableOpacity>
                            {topLogo(<VerificationLogo />)}
                        </View>
                        <View>
                            <View style={[mh25]}>
                                <H20font600Black style={{ color: isDarkTheme ? colors.white : colors.black }}>{labels.verification}</H20font600Black>
                                <H14font400Gray4 style={[mv8, { color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{labels.verifyMsg}</H14font400Gray4>
                                <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.number}</H14font400Gray4>
                            </View>
                        </View>
                        <View style={[ph30]}>
                            <View style={[flexRow, spaceBetween, mt20]}>
                                {renderOtpInputs()}
                            </View>
                            <View style={[pt25, flexRow, spaceBetween]}>
                                <View style={[flexRow]}>
                                    <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.didnotReceivecode}</H14font400Gray4>
                                    <TouchableOpacity>
                                        <H14font400Purple3>{labels.resendCode}</H14font400Purple3>
                                    </TouchableOpacity>
                                </View>
                                <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.second}</H14font400Gray4>
                            </View>
                            <View style={[mv30]}>
                                <LongPurpleButton
                                    title={labels.verifyAcc}
                                    onChange={handleSubmitOtp}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </GestureHandlerRootView>
            </View>
        </Fragment>
    );
};

export default Verification; 
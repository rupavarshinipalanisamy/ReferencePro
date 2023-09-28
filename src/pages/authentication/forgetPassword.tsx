import React, { Fragment, } from 'react';
import PasswordLogo from '../../../assets/images/forget-password.svg';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native';
import { ButtonNow } from '../../components/commonButtons';
import { CustomTextInput } from '../../components/commonInputFields';
import { m30, ph30, pv8, justyfyCenter } from '../../components/commonStyles';
import {  H18fontNormalGray, H16fontNormalGray, H16fontNormalBlue, H25fontBoldBlack } from '../../components/commonText';
import { MainContainer } from '../../components/commonView';
import { LoginLogoBigCircle, LoginLogoCircle, IconInputContainer, TextContainer1 } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import {labels} from '../../utils/labels';
import { screenName } from '../../utils/screenName';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';

export type forgetPasswordProps = {
}


const ForgetPassword = (props: forgetPasswordProps) => {
    const navigation = useNavigation()

    const formKeys = {
        name: 'Email',
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onLogin = (details: any) => {
        navigation.navigate(screenName.Verification as never);
    };
    return (
        <Fragment>
            <MainContainer>
                <ImageBackground source={require('../../../assets/images/png/background-image.png')} style={{ flex: 1 }}>
                    <View style={m30}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <CustomIcon name='arrow-back-outline' size={28} color={colors.black} type='Ionicons' />
                        </TouchableOpacity>
                        <LoginLogoBigCircle>
                            <LoginLogoCircle>
                                <PasswordLogo />
                            </LoginLogoCircle>
                        </LoginLogoBigCircle>
                    </View>
                    <View>
                        <View style={[ph30]}>
                            <H25fontBoldBlack>{labels.forgetPassword1}</H25fontBoldBlack>
                            <H18fontNormalGray style={[pv8]}>{labels.fPmsg}</H18fontNormalGray>
                            <IconInputContainer>
                                <View style={[justyfyCenter]}>
                                    <CustomIcon name='email-outline' size={20} color={colors.greyVar4} type='MaterialCommunityIcons' />
                                </View>
                                <Controller
                                    name={formKeys.name}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <CustomTextInput
                                            placeholder={labels.emailaddress}
                                            value={value}
                                            onChangeText={onChange}
                                            errorMessage={errors[formKeys.name]?.message.toString()}
                                        />
                                    )}
                                    rules={{
                                        required: requiredValidation(("labels.emailOrUserName")),
                                        minLength: minLengthValidation(
                                            validationSchema.name.minLength,
                                        ),
                                    }}
                                />
                            </IconInputContainer>
                            <ButtonNow
                                style={{ backgroundColor: colors.purpleVar3 }}
                                textStyle={{ color: colors.white }}
                                funCallback={handleSubmit(onLogin)}
                                label={labels.resetPassword} />
                        </View>
                        <TextContainer1>
                            <H16fontNormalGray>{labels.remeberyourPassword}</H16fontNormalGray>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate(screenName.LoginEmail as never) }}>
                                <H16fontNormalBlue >{labels.logIn}</H16fontNormalBlue>
                            </TouchableOpacity>
                        </TextContainer1>
                    </View>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    )
}

export default ForgetPassword
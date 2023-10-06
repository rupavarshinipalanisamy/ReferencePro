import React, { Fragment, } from 'react';
import PasswordLogo from '../../../assets/images/forget-password.svg';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native';
import { ButtonNow, LongPurpleButton } from '../../components/commonButtons';
import { CustomTextInput } from '../../components/commonInputFields';
import { m30, ph30, pv8, justyfyCenter, mh25 } from '../../components/commonStyles';
import {  H18fontNormalGray, H16fontNormalGray, H20font600Black, H14font400Gray4, H14font400Blue,  } from '../../components/commonText';
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
                    <View style={{margin:28}}>
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
                        <View style={[mh25]}>
                            <H20font600Black>{labels.forgetPassword1}</H20font600Black>
                            <H14font400Gray4 style={{marginVertical:8}}>{labels.fPmsg}</H14font400Gray4>
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
                            <View style={{marginVertical:30}}>
                                    <LongPurpleButton
                                        title={labels.resetPassword}
                                        onChange={handleSubmit(onLogin)}
                                    />
                                </View>
                        </View>
                        <TextContainer1>
                            <H14font400Gray4>{labels.remeberyourPassword}</H14font400Gray4>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate(screenName.LoginEmail as never) }}>
                                <H14font400Blue >{labels.logIn}</H14font400Blue>
                            </TouchableOpacity>
                        </TextContainer1>
                    </View>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    )
}

export default ForgetPassword
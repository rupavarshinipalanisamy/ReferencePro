import React, { Fragment, useState } from 'react';
import { ImageBackground, View, TouchableOpacity, ScrollView } from 'react-native';
import LoginLogo from '../../../assets/images/login-logo.svg';
import Google from '../../../assets/images/google.svg';
import FaceBook from '../../../assets/images/facebook.svg';
import Apple from '../../../assets/images/apple.svg';
import { BottomStyle, CheckBox, CheckBoxContainer, CheckBoxContainer1, IconInputContainer, InputContainer1, LoginLogoBigCircle, LoginLogoCircle, SocialLogoCircle, SocialLogoContainer, TextContainer } from '../../styledComponent/styledComponent';
import { alignItemsCenter, flexRow, justyfyCenter, mh25, ph5 } from '../../components/commonStyles';
import { H14font400Blue, H14font400Gray4, H20font600Black, } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { MainContainer } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { CustomTextInput } from '../../components/commonInputFields';
import {  LongPurpleButton } from '../../components/commonButtons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { minLengthValidation, requiredValidation, validationSchema } from '../../utils/validationconfig';

export type loginEmailProps = {
}

const LoginEmail = (props: loginEmailProps) => {
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation()

    const formKeys = {
        name: 'Email',
        password: 'Password',
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onLogin = (details: any) => {
        navigation.navigate(screenName.SignUp as never);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Fragment>
            <MainContainer>
                <ImageBackground source={require('../../../assets/images/png/background-image.png')} style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{margin:28}}>
                            <LoginLogoBigCircle>
                                <LoginLogoCircle>
                                    <LoginLogo />
                                </LoginLogoCircle>
                            </LoginLogoBigCircle>
                        </View>
                        <View>
                            <View style={[mh25]}>
                                <H20font600Black>{labels.logIn}</H20font600Black>
                                <H14font400Gray4 style={{marginVertical:8}}>{labels.message}</H14font400Gray4>
                                <IconInputContainer style={{borderBottomColor:colors.borderBottomColor}}>
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

                                <IconInputContainer style={{borderBottomColor:colors.borderBottomColor}}>
                                    <InputContainer1>
                                        <View style={[flexRow, alignItemsCenter]}>
                                            <CustomIcon name='lock-outline' size={20} color={colors.greyVar4} type='MaterialIcons' />
                                            <Controller
                                                name={formKeys.password}
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <CustomTextInput
                                                        placeholder={labels.password}
                                                        value={value}
                                                        secureTextEntry={showPassword}
                                                        onChangeText={onChange} />
                                                )}
                                                rules={{
                                                    required: requiredValidation(('labels.password')),
                                                    minLength: minLengthValidation(
                                                        validationSchema.password.minLength,
                                                    ),
                                                }}
                                            />
                                        </View>
                                        <View style={[justyfyCenter]}>
                                            <TouchableOpacity onPress={togglePasswordVisibility} >
                                                <CustomIcon
                                                    name={!showPassword ? 'eye' : 'eye-closed'}
                                                    size={20}
                                                    color={colors.greyVar4}
                                                    type='octicons'
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </InputContainer1>
                                </IconInputContainer>

                                <CheckBoxContainer1>
                                    <View style={[flexRow]}>
                                        <TouchableOpacity
                                            onPress={toggleCheckbox}>
                                            <CheckBox style={{ backgroundColor: isChecked ? colors.purpleVar3 : 'transparent' }}>
                                                {isChecked && (
                                                    <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
                                            </CheckBox>
                                        </TouchableOpacity>
                                        <H14font400Gray4 style={[ph5]}>{labels.rememberme}</H14font400Gray4>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate(screenName.ForgetPassword as never) }}>
                                        <H14font400Blue >{labels.forgetpassword}</H14font400Blue>
                                    </TouchableOpacity>
                                </CheckBoxContainer1>
                                <View style={{marginVertical:30}}>
                                    <LongPurpleButton
                                        title={labels.logIn}
                                        onChange={handleSubmit(onLogin)}
                                    />
                                </View>
                                <CheckBoxContainer>
                                    <BottomStyle />
                                    <H14font400Gray4>{labels.continuemsg}</H14font400Gray4>
                                    <BottomStyle />
                                </CheckBoxContainer>
                                <SocialLogoContainer>
                                    <SocialLogoCircle>
                                        <Google />
                                    </SocialLogoCircle>
                                    <SocialLogoCircle>
                                        <FaceBook />
                                    </SocialLogoCircle>
                                    <SocialLogoCircle>
                                        <Apple />
                                    </SocialLogoCircle>
                                </SocialLogoContainer>
                            </View>
                            <TextContainer>
                                <H14font400Gray4>{labels.donthaveanaccount}</H14font400Gray4>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(screenName.SignUp as never) }}>
                                    <H14font400Blue >{labels.signUp}</H14font400Blue>
                                </TouchableOpacity>
                            </TextContainer>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    );
};

export default LoginEmail;

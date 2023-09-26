import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ImageBackground, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import LoginLogo from '../../../assets/images/signup-logo.svg';
import Google from '../../../assets/images/google.svg';
import FaceBook from '../../../assets/images/facebook.svg';
import Apple from '../../../assets/images/apple.svg';
import CountryLogo from '../../../assets/images/counrty-logo.svg';
import { ButtonNow } from '../../components/commonButtons';
import { CustomTextInput } from '../../components/commonInputFields';
import { m30, ph30, pv8, justyfyCenter, pv20, flexRow, alignItemsCenter, ml15, mt15, ml10, mb20 } from '../../components/commonStyles';
import { H6fontRegularBlack, H18fontNormalGray, H16fontNormalGray, H16fontNormalBlue } from '../../components/commonText';
import { MainContainer } from '../../components/commonView';
import { LoginLogoBigCircle, LoginLogoCircle, IconInputContainer, InputContainer1, CheckBoxContainer, BottomStyle, SocialLogoContainer, SocialLogoCircle, TextContainer } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import labels from '../../utils/labels';
import { screenName } from '../../utils/screenName';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { colors } from '../../utils/colors';

export type signUpProps = {
}


const SignUp = (props: signUpProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<undefined>()
    const [showPassword, setShowPassword] = useState(true);
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

    const onSignup = (details: any) => {
        navigation.navigate(screenName.WelcomePage as never);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFirstName = (newFirstName: string) => {
        setFirstName(newFirstName);
    }

    const handleLastName = (newLastName: string) => {
        setLastName(newLastName);
    }

    const handleUserName = (newUserName: string) => {
        setUserName(newUserName);
    }

    const handlePhoneNumber = (newPhoneNumber: undefined) => {
        setPhoneNumber(newPhoneNumber);
    }

    return (
        <Fragment>
            <MainContainer>
                <StatusBar translucent backgroundColor='transparent' />
                <ImageBackground source={require('../../../assets/images/png/background-image.png')} style={{ flex: 1 }}>
                    <View >
                        <ScrollView>
                            <View style={m30}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <CustomIcon name='arrow-back-outline' size={28} color={colors.black} type='Ionicons' />
                                </TouchableOpacity>
                                <LoginLogoBigCircle>
                                    <LoginLogoCircle>
                                        <LoginLogo />
                                    </LoginLogoCircle>
                                </LoginLogoBigCircle>
                            </View>
                            <View>
                                <View style={[ph30]}>
                                    <H6fontRegularBlack>{labels.signUp}</H6fontRegularBlack>
                                    <H18fontNormalGray style={[pv8]}>{labels.newaccount}</H18fontNormalGray>
                                    <IconInputContainer>
                                        <View style={[justyfyCenter]}>
                                            <CustomIcon name='person' size={20} color={colors.greyVar4} type='octicons' />
                                        </View>
                                        <CustomTextInput
                                            placeholder={labels.firstName}
                                            value={firstName}
                                            onChangeText={handleFirstName}
                                        />
                                    </IconInputContainer>
                                    <View style={[pv20]}>
                                        <IconInputContainer>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name='person' size={20} color={colors.greyVar4} type='octicons' />
                                            </View>
                                            <CustomTextInput
                                                placeholder={labels.lastName}
                                                value={lastName}
                                                onChangeText={handleLastName}
                                            />
                                        </IconInputContainer>
                                    </View>
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
                                    <View style={[pv20]}>
                                        <IconInputContainer>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name='person' size={20} color={colors.greyVar4} type='octicons' />
                                            </View>
                                            <CustomTextInput
                                                placeholder={labels.userName}
                                                value={userName}
                                                onChangeText={handleUserName}
                                            />
                                        </IconInputContainer>
                                    </View>
                                    <IconInputContainer>
                                        <View style={[justyfyCenter]}>
                                            <CustomIcon name='call-outline' size={20} color={colors.greyVar4} type='Ionicons' />
                                        </View>
                                        <CountryLogo style={[ml15, mt15]} />
                                        <View style={[justyfyCenter, ml10]}>
                                            <CustomIcon name='chevron-down' size={20} color={colors.greyVar4} type='octicons' />

                                        </View>
                                        <CustomTextInput
                                            placeholder={labels.phNumber}
                                            value={phoneNumber}
                                            onChange={handlePhoneNumber}
                                            keyboardType='numeric'
                                        />
                                    </IconInputContainer>
                                    <View style={[pv20]}>
                                        <IconInputContainer>
                                            <InputContainer1>
                                                <View style={[flexRow, alignItemsCenter]}>
                                                    <CustomIcon name='lock-outline' size={20} color={colors.greyVar4} type='MaterialIcons' />
                                                    <Controller
                                                        name={formKeys.password}
                                                        control={control}
                                                        render={({ field: { onChange, value } }) => (
                                                            <CustomTextInput
                                                                errorMessage={errors[formKeys.password]?.message.toString()}
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
                                    </View>
                                    <ButtonNow
                                        style={{ backgroundColor: colors.purpleVar3 }}
                                        textStyle={{ color: colors.white }}
                                        funCallback={handleSubmit(onSignup)}
                                        label={labels.signUp} />
                                    <CheckBoxContainer>
                                        <BottomStyle />
                                        <H18fontNormalGray>{labels.continuemsg}</H18fontNormalGray>
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
                                <TextContainer style={[mb20]}>
                                    <H16fontNormalGray>{labels.haveanAccount}</H16fontNormalGray>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate(screenName.LoginEmail as never) }}>
                                        <H16fontNormalBlue >{labels.logIn}</H16fontNormalBlue>
                                    </TouchableOpacity>
                                </TextContainer>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    );
};
export default SignUp
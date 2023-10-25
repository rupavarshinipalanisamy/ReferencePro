import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import { CustomTextInput } from '../../components/commonInputFields';
import { justyfyCenter, flexRow, alignItemsCenter, ml15, mt15, ml10, mb20, mh25, flex1, m28, mv8 } from '../../components/commonStyles';
import { H20font600Black, H14font400Gray4, H14font400Blue, } from '../../components/commonText';
import { IconInputContainer, InputContainer1, CheckBoxContainer, BottomStyle, SocialLogoContainer, TextContainer } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { screenName } from '../../utils/screenName';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { colors } from '../../utils/colors';
import { LongPurpleButton } from '../../components/commonButtons';
import { AppleIcon, AppleIconDark, CountryLogo, FaceBookIcon, GoogleIcon, GoogleIconDark, SignUpLogo } from '../../utils/svg';
import { socialLogo, topLogo } from './loginEmail';
import { useTheme } from '../../Theme/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthImageBg } from '../../utils/png';

export type SignUpProps = {
}

const SignUp = (props: SignUpProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<undefined>()
    const [showPassword, setShowPassword] = useState(true);
    const navigation = useNavigation()
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';

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
            <View style={[flex1]}>
                <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }}>
                    <ImageBackground source={AuthImageBg} style={[flex1]}>
                        <View >
                            <ScrollView>
                                <View style={[m28]}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <CustomIcon name='arrow-back-outline' size={28} color={colors.black} type='Ionicons' />
                                    </TouchableOpacity>
                                    {topLogo(<SignUpLogo />)}
                                </View>
                                <View>
                                    <View style={[mh25]}>
                                        <H20font600Black style={{ color: isDarkTheme ? colors.white : colors.black }}>{labels.signUp}</H20font600Black>
                                        <H14font400Gray4 style={[mv8, { color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{labels.newaccount}</H14font400Gray4>
                                        <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name='person' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='octicons' />
                                            </View>
                                            <CustomTextInput
                                                placeholder={labels.firstName}
                                                value={firstName}
                                                onChangeText={handleFirstName}
                                            />
                                        </IconInputContainer>
                                        <View >
                                            <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                                <View style={[justyfyCenter]}>
                                                    <CustomIcon name='person' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='octicons' />
                                                </View>
                                                <CustomTextInput
                                                    placeholder={labels.lastName}
                                                    value={lastName}
                                                    onChangeText={handleLastName}
                                                />
                                            </IconInputContainer>
                                        </View>
                                        <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name='email-outline' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='MaterialCommunityIcons' />
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
                                        <View >
                                            <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>

                                                <View style={[justyfyCenter]}>
                                                    <CustomIcon name='person' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='octicons' />
                                                </View>
                                                <CustomTextInput
                                                    placeholder={labels.userName}
                                                    value={userName}
                                                    onChangeText={handleUserName}
                                                />
                                            </IconInputContainer>
                                        </View>
                                        <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name='phone' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='Feather' />
                                            </View>
                                            <View style={[ml15, mt15]}>
                                                <CountryLogo />
                                            </View>
                                            <View style={[justyfyCenter, ml10]}>
                                                <CustomIcon name='chevron-down' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='octicons' />
                                            </View>
                                            <CustomTextInput
                                                placeholder={labels.phNumber}
                                                value={phoneNumber}
                                                onChangeText={handlePhoneNumber}
                                                keyboardType='numeric'
                                            />
                                        </IconInputContainer>
                                        <View >
                                            <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                                <InputContainer1>
                                                    <View style={[flexRow, alignItemsCenter]}>
                                                        <CustomIcon name='lock-outline' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='MaterialIcons' />
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
                                                                color={isDarkTheme ? colors.greyVar3 : colors.greyVar4}
                                                                type='octicons'
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </InputContainer1>
                                            </IconInputContainer>
                                        </View>
                                        <View style={{ marginVertical: 30 }}>
                                            <LongPurpleButton
                                                title={labels.signUp}
                                                onChange={() => { }}
                                            />
                                        </View>
                                        <CheckBoxContainer>
                                            <BottomStyle style={{ borderBottomColor: isDarkTheme ? 'rgba(78, 80, 114, 0.3)' : colors.borderBottomColor }} />
                                            <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.continuemsg}</H14font400Gray4>
                                            <BottomStyle style={{ borderBottomColor: isDarkTheme ? 'rgba(78, 80, 114, 0.3)' : colors.borderBottomColor }} />
                                        </CheckBoxContainer>
                                        <SocialLogoContainer>
                                            {socialLogo(isDarkTheme ? <GoogleIconDark /> : <GoogleIcon />)}
                                            {socialLogo(<FaceBookIcon />)}
                                            {socialLogo(isDarkTheme ? <AppleIconDark /> : <AppleIcon />)}
                                        </SocialLogoContainer>
                                    </View>
                                    <TextContainer style={[mb20]}>
                                        <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.haveanAccount}</H14font400Gray4>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate(screenName.Chats as never) }}>
                                            <H14font400Blue >{labels.logIn}</H14font400Blue>
                                        </TouchableOpacity>
                                    </TextContainer>
                                </View>
                            </ScrollView>
                        </View>
                    </ImageBackground>
                </GestureHandlerRootView>
            </View>
        </Fragment>
    );
};

export default SignUp
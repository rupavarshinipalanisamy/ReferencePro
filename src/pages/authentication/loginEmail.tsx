import React, { Fragment, useState } from 'react';
import { ImageBackground, View, TouchableOpacity, ScrollView } from 'react-native';
import { BottomStyle, CheckBox, CheckBoxContainer, CheckBoxContainer1, IconInputContainer, InputContainer1, LoginLogoBigCircle, LoginLogoCircle, SocialLogoCircle, SocialLogoContainer, TextContainer } from '../../styledComponent/styledComponent';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, m28, mh25, mv8, ph5 } from '../../components/commonStyles';
import { H14font400Blue, H14font400Gray4, H20font600Black, } from '../../components/commonText';
import { labels } from '../../utils/labels';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { CustomTextInput } from '../../components/commonInputFields';
import { LongPurpleButton } from '../../components/commonButtons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { minLengthValidation, requiredValidation, validationSchema } from '../../utils/validationconfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '../../Theme/ThemeContext';
import { AuthImageBg } from '../../utils/png';
import { AppleIcon, AppleIconDark, FaceBookIcon, GoogleIcon, GoogleIconDark, LoginPageLogo } from '../../utils/svg';

export const topLogo = (logo: any) => {
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';
    return (
        <LoginLogoBigCircle style={{ backgroundColor: isDarkTheme ? colors.darkModeVar4 : 'rgba(248, 236, 258, 0.7)' }}>
            <LoginLogoCircle style={{ backgroundColor: isDarkTheme ? colors.darkModeVar6 : 'rgba(90, 7, 139, 0.03)' }}>
                {logo}
            </LoginLogoCircle>
        </LoginLogoBigCircle>
    )
}

export const socialLogo = (content: any) => {
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';

    return (
        <SocialLogoCircle style={{ backgroundColor: isDarkTheme ? colors.darkModeVar6 : colors.purpleVar1 }}>
            {content}
        </SocialLogoCircle>
    )
}

export type loginEmailProps = {
}

const LoginEmail = (props: loginEmailProps) => {
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation()
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';

    const formKeys = {
        name: 'Email',
        password: 'Password',
    };
    const defaultValues = {
        Email: 'dreamschat@gmail.com', 
        Password: 'dreams123', 
      };
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({defaultValues});

    const onLogin = (details: any) => {
        navigation.navigate(screenName.Chats as never);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Fragment>
            <View style={[flex1]}>
                <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }}>
                    <ImageBackground source={AuthImageBg} style={[flex1]}>
                        <ScrollView>
                            <View style={[m28]}>
                                {topLogo(<LoginPageLogo />)}
                            </View>
                            <View>
                                <View style={[mh25]}>
                                    <H20font600Black style={{ color: isDarkTheme ? colors.white : colors.black }}>{labels.logIn}</H20font600Black>
                                    <H14font400Gray4 style={[mv8, { color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{labels.message}</H14font400Gray4>
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
                                                    textColor={isDarkTheme?colors.greyVar3:colors.blackVar1}
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
                                                            onChangeText={onChange}
                                                            textColor={isDarkTheme?colors.greyVar3:colors.blackVar1}
                                                        />
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
                                    <CheckBoxContainer1>
                                        <View style={[flexRow]}>
                                            <TouchableOpacity
                                                onPress={toggleCheckbox}>
                                                <CheckBox style={{ backgroundColor: isChecked ? colors.purpleVar3 : 'transparent' }}>
                                                    {isChecked && (
                                                        <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
                                                </CheckBox>
                                            </TouchableOpacity>
                                            <H14font400Gray4 style={[ph5, { color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{labels.rememberme}</H14font400Gray4>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate(screenName.ForgetPassword as never) }}>
                                            <H14font400Blue >{labels.forgetpassword}</H14font400Blue>
                                        </TouchableOpacity>
                                    </CheckBoxContainer1>
                                    <View style={{ marginVertical: 30 }}>
                                        <LongPurpleButton
                                            title={labels.logIn}
                                            onChange={handleSubmit(onLogin)}
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
                                <TextContainer>
                                    <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.donthaveanaccount}</H14font400Gray4>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate(screenName.SignUp as never) }}>
                                        <H14font400Blue >{labels.signUp}</H14font400Blue>
                                    </TouchableOpacity>
                                </TextContainer>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </GestureHandlerRootView>
            </View>
        </Fragment>
    );
};

export default LoginEmail;
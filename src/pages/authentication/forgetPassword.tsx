import React, { Fragment, } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { LongPurpleButton } from '../../components/commonButtons';
import { CustomTextInput } from '../../components/commonInputFields';
import { justyfyCenter, mh25, flex1, mv30, mv8, m28 } from '../../components/commonStyles';
import { H20font600Black, H14font400Gray4, H14font400Blue, } from '../../components/commonText';
import { IconInputContainer, TextContainer1 } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { screenName } from '../../utils/screenName';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '../../Theme/ThemeContext';
import { AuthImageBg } from '../../utils/png';
import { PasswordLogo } from '../../utils/svg';
import { topLogo } from './loginEmail';

export type ForgetPasswordProps = {
}

const ForgetPassword = (props: ForgetPasswordProps) => {
    const navigation = useNavigation()
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';

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
            <View style={[flex1]}>
                <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }}>
                    <ImageBackground source={AuthImageBg} style={[flex1]}>
                        <View style={[m28]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <CustomIcon name='arrow-back-outline' size={28} color={colors.black} type='Ionicons' />
                            </TouchableOpacity>
                            {topLogo(<PasswordLogo />)}
                        </View>
                        <View>
                            <View style={[mh25]}>
                                <H20font600Black style={{ color: isDarkTheme ? colors.white : colors.black }}>{labels.forgetPassword1}</H20font600Black>
                                <H14font400Gray4 style={[mv8, { color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{labels.fPmsg}</H14font400Gray4>
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
                                <View style={[mv30]}>
                                    <LongPurpleButton
                                        title={labels.resetPassword}
                                        onChange={handleSubmit(onLogin)}
                                    />
                                </View>
                            </View>
                            <TextContainer1>
                                <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.remeberyourPassword}</H14font400Gray4>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(screenName.LoginEmail as never) }}>
                                    <H14font400Blue >{labels.logIn}</H14font400Blue>
                                </TouchableOpacity>
                            </TextContainer1>
                        </View>
                    </ImageBackground>
                </GestureHandlerRootView>
            </View>
        </Fragment>
    )
};

export default ForgetPassword;
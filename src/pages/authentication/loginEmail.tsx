import React, { Fragment, useState ,useEffect} from 'react';
import { ImageBackground, StatusBar, View, TouchableOpacity ,ScrollView} from 'react-native';
import LoginLogo from '../../../assets/images/login-logo.svg';
import Google from '../../../assets/images/google.svg';
import FaceBook from '../../../assets/images/facebook.svg';
import Apple from '../../../assets/images/apple.svg';
import { BottomStyle, CheckBox, CheckBoxContainer, CheckBoxContainer1, IconInputContainer, InputContainer1, LoginLogoBigCircle, LoginLogoCircle, SocialLogoCircle, SocialLogoContainer, TextContainer } from '../../styledComponent/styledComponent';
import { alignItemsCenter, flexRow, justyfyCenter, m30, ph30, ph5, pv20, pv8 } from '../../components/commonStyles';
import { H16fontNormalBlue, H16fontNormalGray, H18fontNormalGray, H25fontBoldBlack,  } from '../../components/commonText';
import {labels} from '../../utils/labels';
import { MainContainer } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { CustomTextInput } from '../../components/commonInputFields';
import { ButtonNow } from '../../components/commonButtons';
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
                    <View style={m30}>
                        <LoginLogoBigCircle>
                            <LoginLogoCircle>
                                <LoginLogo />
                            </LoginLogoCircle>
                        </LoginLogoBigCircle>
                    </View>
                    <View>
                        <View style={[ph30]}>
                            <H25fontBoldBlack>{labels.logIn}</H25fontBoldBlack>
                            <H18fontNormalGray style={[pv8]}>{labels.message}</H18fontNormalGray>
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
                            <CheckBoxContainer1>
                                <View style={[flexRow]}>
                                    <TouchableOpacity
                                        onPress={toggleCheckbox}>
                                        <CheckBox style={{ backgroundColor: isChecked ? colors.purpleVar3 : 'transparent' }}>
                                            {isChecked && (
                                                <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
                                        </CheckBox>
                                    </TouchableOpacity>
                                    <H16fontNormalGray style={[ph5]}>{labels.rememberme}</H16fontNormalGray>
                                </View>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(screenName.ForgetPassword as never) }}>
                                    <H16fontNormalBlue >{labels.forgetpassword}</H16fontNormalBlue>
                                </TouchableOpacity>
                            </CheckBoxContainer1>
                            <ButtonNow
                                style={{ backgroundColor: colors.purpleVar3 }}
                                textStyle={{ color: colors.white }}
                                funCallback={handleSubmit(onLogin)}
                                label={labels.logIn} />
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
                        <TextContainer>
                            <H16fontNormalGray>{labels.donthaveanaccount}</H16fontNormalGray>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate(screenName.SignUp as never) }}>
                                <H16fontNormalBlue >{labels.signUp}</H16fontNormalBlue>
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

import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native';
import { ButtonNow } from '../../components/commonButtons';
import { CustomTextInput } from '../../components/commonInputFields';
import { m30, ph30, pv8, justyfyCenter, alignItemsCenter, flexRow } from '../../components/commonStyles';
import { H6fontRegularBlack, H18fontNormalGray } from '../../components/commonText';
import { MainContainer } from '../../components/commonView';
import { LoginLogoBigCircle, LoginLogoCircle, IconInputContainer, InputContainer1 } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import labels from '../../utils/labels';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { colors } from '../../utils/colors';
import PasswordLogo from '../../../assets/images/create-password.svg';
import { CommonModal } from '../../components/commonModal';

export type createNewPasswordProps = {
}

const CreateNewPassword = (props: createNewPasswordProps) => {
    const navigation = useNavigation()
    const [showPassword, setShowPassword] = useState(true);
    const [shownewPassword, setShowNewPassword] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [statusBarColor, setStatusBarColor] = useState('transparent');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setStatusBarColor(isModalVisible ? 'transparent' : 'rgba(0, 0, 0, 0.5)');
    };

    const formKeys = {
        password: 'password',
        confirmpassword: 'confirmpassword'
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility1 = () => {
        setShowNewPassword(!shownewPassword);
    };

    const onLogin = (details: any) => {
    };
    return (
        <Fragment>
            <MainContainer>
                <StatusBar translucent backgroundColor={statusBarColor} />
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
                            <H6fontRegularBlack>{labels.createpassword}</H6fontRegularBlack>
                            <H18fontNormalGray style={[pv8]}>{labels.cpMsg}</H18fontNormalGray>
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
                                                    placeholder={labels.newPwd}
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
                            <IconInputContainer>
                                <InputContainer1>
                                    <View style={[flexRow, alignItemsCenter]}>
                                        <CustomIcon name='lock-outline' size={20} color={colors.greyVar4} type='MaterialIcons' />
                                        <Controller
                                            name={formKeys.confirmpassword}
                                            control={control}
                                            render={({ field: { onChange, value } }) => (
                                                <CustomTextInput
                                                    errorMessage={errors[formKeys.confirmpassword]?.message.toString()}
                                                    placeholder={labels.confirmPwd}
                                                    value={value}
                                                    secureTextEntry={shownewPassword}
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
                                        <TouchableOpacity onPress={togglePasswordVisibility1} >
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
                            <ButtonNow
                                style={{ backgroundColor: colors.purpleVar3 }}
                                textStyle={{ color: colors.white }}
                                funCallback={() => {
                                    handleSubmit(onLogin);
                                    toggleModal();
                                }}
                                label={labels.changePwd} />
                        </View>
                        <CommonModal
                            isVisible={isModalVisible}
                            onClose={() => {
                                toggleModal();
                            }}
                        />
                    </View>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    );
};

export default CreateNewPassword;

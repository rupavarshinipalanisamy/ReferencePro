import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { CustomTextInput } from '../../components/commonInputFields';
import { justyfyCenter, alignItemsCenter, flexRow, mh25, flex1, m28, mv30, mv8 } from '../../components/commonStyles';
import { H14font400Gray4, H20font600Black, } from '../../components/commonText';
import { IconInputContainer, InputContainer1 } from '../../styledComponent/styledComponent';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { colors } from '../../utils/colors';
import { CommonModal } from '../../components/commonModal';
import { LongPurpleButton } from '../../components/commonButtons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '../../Theme/ThemeContext';
import { AuthImageBg } from '../../utils/png';
import { PasswordLogo } from '../../utils/svg';
import { topLogo } from './loginEmail';

export type createNewPasswordProps = {
}

const CreateNewPassword = (props: createNewPasswordProps) => {
    const navigation = useNavigation()
    const [showPassword, setShowPassword] = useState(true);
    const [shownewPassword, setShowNewPassword] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const { theme } = useTheme();

    const isDarkTheme = theme === 'dark';

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const formKeys = {
        password: 'Password',
        confirmpassword: 'Confirmpassword'
    };

    const defaultValues = {
        Password: 'dreams123',
        Confirmpassword: 'dreams123',
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues });

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
                                <H20font600Black style={{ color: isDarkTheme ? colors.white : colors.black }}>{labels.createpassword}</H20font600Black>
                                <H14font400Gray4 style={[mv8, { color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }]}>{labels.cpMsg}</H14font400Gray4>
                                <H14font400Gray4 style={{ color: isDarkTheme ? colors.greyVar3 : colors.greyVar4 }}>{labels.cpMsg1}</H14font400Gray4>
                                <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                    <InputContainer1>
                                        <View style={[flexRow, alignItemsCenter]}>
                                            <CustomIcon name='lock-outline' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='MaterialIcons' />
                                            <Controller
                                                name={formKeys.password}
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <CustomTextInput
                                                        placeholder={labels.newPwd}
                                                        value={value}
                                                        secureTextEntry={showPassword}
                                                        onChangeText={onChange}
                                                        textColor={isDarkTheme ? colors.greyVar3 : colors.blackVar1}
                                                    />
                                                )}
                                                rules={{
                                                    required: requiredValidation(('')),
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
                                <IconInputContainer style={{ borderBottomColor: isDarkTheme ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                    <InputContainer1>
                                        <View style={[flexRow, alignItemsCenter]}>
                                            <CustomIcon name='lock-outline' size={20} color={isDarkTheme ? colors.greyVar3 : colors.greyVar4} type='MaterialIcons' />
                                            <Controller
                                                name={formKeys.confirmpassword}
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <CustomTextInput
                                                        placeholder={labels.confirmPwd}
                                                        value={value}
                                                        secureTextEntry={shownewPassword}
                                                        onChangeText={onChange}
                                                        textColor={isDarkTheme ? colors.greyVar3 : colors.blackVar1}
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
                                            <TouchableOpacity onPress={togglePasswordVisibility1} >
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
                                <View style={[mv30]}>
                                    <LongPurpleButton
                                        title={labels.changePwd}
                                        onChange={() => {
                                            handleSubmit(onLogin);
                                            toggleModal();
                                        }}
                                    />
                                </View>
                            </View>
                            <CommonModal
                                isVisible={isModalVisible}
                                onClose={() => {
                                    toggleModal();
                                }}
                            />
                        </View>
                    </ImageBackground>
                </GestureHandlerRootView>
            </View>
        </Fragment>
    );
};

export default CreateNewPassword;
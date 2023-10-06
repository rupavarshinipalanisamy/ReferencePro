import React, { Fragment, useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { MainContainer } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import { IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { labels } from '../../utils/labels';
import { justyfyCenter, ml10, ml15, mt15, pv20 } from '../../components/commonStyles';
import { Controller, useForm } from 'react-hook-form';
import { minLengthValidation, requiredValidation, validationSchema } from '../../utils/validationconfig';
import { DevHeight } from '../../utils/device';
import { ButtonNow } from '../../components/commonButtons';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';

export type addContactProps = {

}


const AddContact = (props: addContactProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<undefined>()
    const [dob, setDOB] = useState<undefined>()
    const navigation = useNavigation()



    const formKeys = {
        name: 'Email',
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const saveContact = (details: any) => {
        navigation.navigate(screenName.ContactPage as never);
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

    const handleMessage = (newMessage: string) => {
        setMessage(newMessage);
    }

    const handlePhoneNumber = (newPhoneNumber: undefined) => {
        setPhoneNumber(newPhoneNumber);
    }

    const handleDOB = (newDOB: undefined) => {
        setDOB(newDOB);
    }

    return (
        <Fragment>
            <MainContainer>
                <StatusBar backgroundColor={colors.white} />

                <View style={{ backgroundColor: 'white', borderBottomStartRadius: 25, borderBottomEndRadius: 25, elevation: 4, height: DevHeight / 10, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                        <CustomIcon name='chevron-back-sharp' size={20} color={colors.black} type='Ionicons' />
                        <Text style={{ color: 'black', fontSize: 17, fontWeight: '900' }}> Add Contact </Text>
                    </View>

                </View>
                <ScrollView>
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
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

                        <CustomTextInput
                            placeholder={labels.phNumber}
                            value={phoneNumber}
                            onChange={handlePhoneNumber}
                            keyboardType='numeric'
                        />
                    </IconInputContainer>
                    <View style={[pv20]}>
                        <IconInputContainer>
                            <View style={[justyfyCenter]}>
                                <CustomIcon name='calendar-clear-outline' size={20} color={colors.greyVar4} type='Ionicons' />
                            </View>
                            <CustomTextInput
                                placeholder={labels.dob}
                                value={dob}
                                onChangeText={handleDOB}
                            />
                        </IconInputContainer>
                    </View>
                    <IconInputContainer>
                        <View style={[justyfyCenter]}>
                            <CustomIcon name='message-text-outline' size={20} color={colors.greyVar4} type='MaterialCommunityIcons' />
                        </View>
                        <CustomTextInput
                            placeholder={labels.inivitemsg}
                            value={message}
                            onChangeText={handleMessage}
                        />
                    </IconInputContainer>

                    <View style={{ marginTop: 90 }}>
                        <ButtonNow
                            style={{ backgroundColor: colors.purpleVar3 }}
                            textStyle={{ color: colors.white }}
                            funCallback={handleSubmit(saveContact)}
                            label={labels.saveContact} />
                    </View>
                </View>
                </ScrollView>
            </MainContainer>
        </Fragment>
    );
};

export default AddContact;
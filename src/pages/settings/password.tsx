import React, { Fragment, useState } from 'react';
import { TouchableOpacity, View, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { IconBackground, MainContainer, TopContainerWhiteCard } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { labels } from '../../utils/labels';
import { H16font900Black, H16fontBoldBlack } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { flexRow, mt20, alignItemsCenter, ph10, justyfyCenter, ph15, pv20, mh20 } from '../../components/commonStyles';
import { IconInputContainer, InputContainer1, Textwithg } from '../../styledComponent/styledComponent';
import { Controller, useForm } from 'react-hook-form';
import { CustomTextInput } from '../../components/commonInputFields';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { SmallButton } from '../../components/commonButtons';
// import { PasswordToggleIcon } from '../../components/commonComponents';
import { CardHeaderText } from '../chatView/UserProfile';

export type socialProfilesProps = {};

const Password = (props: socialProfilesProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);


  const handleToggleClick = () => {
    setIsUnlocked((prevState) => !prevState);
  };

  const handleCancelButtonClick = () => {
    setIsCancelButtonActive(true);
  };

  const handleSaveChangesClick = () => {
    setIsCancelButtonActive(false);
  };

  const formKeys = {
    newpassword: 'password',
    currentPassword: 'currentpassword',
    confirmpassword: 'confirmpassword'
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleCurrentPassword = () => {
    setCurrentPassword(!currentPassword);
  };
  const handleNewPassword = () => {
    setNewPassword(!newPassword);
  };
  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };


  return (
    <Fragment>
      <MainContainer>
        <ScrollView style={{ flex: 1 }}>
          <TopContainerWhiteCard>
            <View style={[flexRow, mt20, { margin: 15 }]}>
              <View style={[flexRow, alignItemsCenter]}>
                <CustomIcon name='chevron-left' size={20} color={colors.black} type='octicons' />
                <H16font900Black style={[ph15]}>{labels.pwdandSec}</H16font900Black>
              </View>
            </View>
          </TopContainerWhiteCard>
          <View style={[ mt20,mh20]}>
            <CardHeaderText text='Security'/>
            <View style={[pv20, flexRow, { justifyContent: 'space-between' }]}>
              <View style={[flexRow, alignItemsCenter]}>
                <IconBackground>
                  <CustomIcon name='smartphone' size={20} color={colors.purpleVar3} type='Feather' />
                </IconBackground>
                <H16fontBoldBlack style={[ph10]}>{labels.twofactor}</H16fontBoldBlack>
              </View>
              <TouchableOpacity style={[alignItemsCenter, justyfyCenter]}
                onPress={handleToggleClick}>
                <CustomIcon name={isUnlocked ? 'toggle-on' : 'toggle-off'} size={30} color={colors.greyVar3} type='Fontisto' />
              </TouchableOpacity>
            </View>
            <View style={[mt20]}>
            <CardHeaderText text={labels.changePwd} />

            </View>

            <IconInputContainer>
              <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                  <CustomIcon name='lock-outline' size={20} color={colors.greyVar4} type='MaterialIcons' />
                  <Controller
                    name={formKeys.currentPassword}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomTextInput
                        placeholder={labels.currentPwd}
                        value={value}
                        secureTextEntry={currentPassword}
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
                  {/* <PasswordToggleIcon isVisible={!currentPassword} toggleVisibility={handleCurrentPassword} /> */}
                </View>
              </InputContainer1>
            </IconInputContainer>

            <IconInputContainer>
              <InputContainer1 >
                <View style={[flexRow, alignItemsCenter]}>
                  <CustomIcon name='lock-outline' size={20} color={colors.greyVar4} type='MaterialIcons' />
                  <Controller
                    name={formKeys.newpassword}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomTextInput
                        placeholder={labels.newPwd}
                        value={value}
                        secureTextEntry={newPassword}
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
                  {/* <PasswordToggleIcon isVisible={!newPassword} toggleVisibility={handleNewPassword} /> */}
                </View>
              </InputContainer1>
            </IconInputContainer>

            <IconInputContainer>
              <InputContainer1 >
                <View style={[flexRow, alignItemsCenter]}>
                  <CustomIcon name='lock-outline' size={20} color={colors.greyVar4} type='MaterialIcons' />
                  <Controller
                    name={formKeys.confirmpassword}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomTextInput
                        placeholder={labels.confirmPwd}
                        value={value}
                        secureTextEntry={confirmPassword}
                        onChangeText={onChange} />
                    )}
                    rules={{
                      required: requiredValidation(labels.password),
                      minLength: minLengthValidation(
                        validationSchema.password.minLength,
                      ),
                    }}
                  />
                </View>
                <View style={[justyfyCenter]}>
                  {/* <PasswordToggleIcon isVisible={!confirmPassword} toggleVisibility={handleConfirmPassword} /> */}
                </View>
              </InputContainer1>
            </IconInputContainer>

          </View>

          <View style={{
            marginTop: 250,
            bottom: 20,
            marginHorizontal:20,
            justifyContent:'space-between',
       
            flexDirection: 'row',
            
          }}>
            <SmallButton
              title={labels.cancel}
              backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
              textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
              onChange={handleCancelButtonClick}
              borderWidth={isCancelButtonActive ? 0 : 1} />
            <SmallButton
              title={labels.saveChange}
              backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
              textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
              onChange={handleSaveChangesClick}
              borderWidth={isCancelButtonActive ? 1 : 0} />
          </View>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};

export default Password;


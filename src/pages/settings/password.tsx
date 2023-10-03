import React, { Fragment, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { IconBackground, MainContainer, TopContainerWhiteCard } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { labels } from '../../utils/labels';
import { H16font900Black, H16fontBoldBlack } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { flexRow, mt20, alignItemsCenter, ph10, justyfyCenter, ph15, pv20 } from '../../components/commonStyles';
import { ButtonContainer, IconInputContainer, InputContainer1, Textwithg } from '../../styledComponent/styledComponent';
import { Controller, useForm } from 'react-hook-form';
import { CustomTextInput } from '../../components/commonInputFields';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { ButtonSaveandCancel } from '../../components/commonButtons';

export type socialProfilesProps = {};

const Password = (props: socialProfilesProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const handleToggleClick = () => {
    setIsUnlocked((prevState) => !prevState);
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

  const onLogin = (details: any) => {
  };

  return (
    <Fragment>
      <MainContainer>
        <StatusBar backgroundColor={colors.white} />
        <TopContainerWhiteCard>
          <View style={[flexRow, mt20, { margin: 15 }]}>
            <View style={[flexRow, alignItemsCenter]}>
              <CustomIcon name='chevron-left' size={20} color={colors.black} type='octicons' />
              <H16font900Black style={[ph15]}>{labels.pwdandSec}</H16font900Black>
            </View>
          </View>
        </TopContainerWhiteCard>
        <View style={[ph15, mt20]}>
          <Textwithg style={{ width: '18%' }}>{labels.security}</Textwithg>
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
            <Textwithg style={{ width: '35%' }}>{labels.changePwd}</Textwithg>
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
                      errorMessage={errors[formKeys.password]?.message.toString()}
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
                <TouchableOpacity onPress={handleCurrentPassword} >
                  <CustomIcon
                    name={!currentPassword ? 'eye' : 'eye-closed'}
                    size={20}
                    color={colors.greyVar4}
                    type='octicons'
                  />
                </TouchableOpacity>
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
                      errorMessage={errors[formKeys.password]?.message.toString()}
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
                <TouchableOpacity onPress={handleNewPassword} >
                  <CustomIcon
                    name={!newPassword ? 'eye' : 'eye-closed'}
                    size={20}
                    color={colors.greyVar4}
                    type='octicons'
                  />
                </TouchableOpacity>
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
                      errorMessage={errors[formKeys.password]?.message.toString()}
                      placeholder={labels.confirmPwd}
                      value={value}
                      secureTextEntry={confirmPassword}
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
                <TouchableOpacity onPress={handleConfirmPassword} >
                  <CustomIcon
                    name={!confirmPassword ? 'eye' : 'eye-closed'}
                    size={20}
                    color={colors.greyVar4}
                    type='octicons'
                  />
                </TouchableOpacity>
              </View>
            </InputContainer1>
          </IconInputContainer>
        </View>
        <ButtonContainer style={{ position: 'absolute', bottom: 20 }}>
          <ButtonSaveandCancel style={{
            backgroundColor: colors.white
          }}
            textStyle={{ color: colors.greyVar4 }}
            funCallback={() => { }}
            label={labels.cancel} />

          <ButtonSaveandCancel style={{
            backgroundColor: colors.purpleVar3,
          }}
            textStyle={{ color: colors.white }}
            funCallback={() => { }}
            label={labels.saveChange} />
        </ButtonContainer>
      </MainContainer>
    </Fragment>
  );
};

export default Password;


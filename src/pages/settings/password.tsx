import React, { Fragment, useState } from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
import { IconBackground, RowSpaceBetween } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { labels } from '../../utils/labels';
import { H16fontBoldBlack } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { flexRow, mt20, alignItemsCenter, ph10, justyfyCenter, pv20, mh20, spaceBetween, flex1 } from '../../components/commonStyles';
import { IconInputContainer, InputContainer1 } from '../../styledComponent/styledComponent';
import { Controller, useForm } from 'react-hook-form';
import { CustomTextInput } from '../../components/commonInputFields';
import { requiredValidation, minLengthValidation, validationSchema } from '../../utils/validationconfig';
import { SmallButton } from '../../components/commonButtons';
import { CardHeaderText, PasswordToggleIcon, ToggleSwitch } from '../../components/commonComponents';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';

export type PasswordProps = {};

const Password = (props: PasswordProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
  const [toggleVisible, setToggleVisible] = useState(false);

  const handleToggle = () => {
    setToggleVisible(!toggleVisible);
  }
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
      <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
        <ScrollView style={{ flex: 1 }}>
          <SearchHeader headerText={labels.pwdandSec} />
          <View style={[mt20, mh20]}>
            <CardHeaderText text='Security' />
            <View style={[pv20, flexRow, spaceBetween]}>
              <View style={[flexRow, alignItemsCenter]}>
                <IconBackground style={{ backgroundColor: isDark() ? colors.darkModeVar7 : colors.purpleVar4 }}>
                  <CustomIcon name='smartphone' size={20} color={isDark() ? colors.greyVar3 : colors.purpleVar3} type='Feather' />
                </IconBackground>
                <H16fontBoldBlack style={[ph10]}>{labels.twofactor}</H16fontBoldBlack>
              </View>
              <ToggleSwitch value={toggleVisible} onToggle={handleToggle} />
            </View>
            <View style={[mt20]}>
              <CardHeaderText text={labels.changePwd} />
            </View>
            <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
              <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                  <CustomIcon name='lock-outline' size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type='MaterialIcons' />
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
                  <PasswordToggleIcon isVisible={!confirmPassword} toggleVisibility={handleCurrentPassword} />
                </View>
              </InputContainer1>
            </IconInputContainer>
            <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
              <InputContainer1 >
                <View style={[flexRow, alignItemsCenter]}>
                  <CustomIcon name='lock-outline' size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type='MaterialIcons' />
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
                  <PasswordToggleIcon isVisible={!confirmPassword} toggleVisibility={handleNewPassword} />
                </View>
              </InputContainer1>
            </IconInputContainer>

            <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
              <InputContainer1 >
                <View style={[flexRow, alignItemsCenter]}>
                  <CustomIcon name='lock-outline' size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type='MaterialIcons' />
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
                  <PasswordToggleIcon isVisible={!confirmPassword} toggleVisibility={handleConfirmPassword} />
                </View>
              </InputContainer1>
            </IconInputContainer>

          </View>
        </ScrollView>
        <RowSpaceBetween style={[mh20, { bottom: 20 }]}>
          <SmallButton
            title={labels.cancel}
            backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
            textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
            onChange={handleCancelButtonClick}
            borderWidth={isCancelButtonActive ? 0 : 1} />
          <SmallButton
            title={labels.saveChange}
            backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
            textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
            onChange={handleSaveChangesClick}
            borderWidth={isCancelButtonActive ? 1 : 0} />
        </RowSpaceBetween>
      </View>
    </Fragment>
  );
};

export default Password;
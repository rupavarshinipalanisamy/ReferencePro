import React from 'react';
import {  View, TouchableOpacity } from 'react-native';
import { DevHeight, DevWidth } from '../utils/device';
import { colors } from '../utils/colors';
import CustomIcon from '../utils/Icons';
import { H12fontBold400GreyVar4DarkWhite, H15Grey } from './commonText';
import { labels } from '../utils/labels';
import { isDark } from '../Theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export const CallCommonHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        height: DevHeight * 0.12,
        width: DevWidth,
        backgroundColor: isDark() ? colors.darkModeVar1 : colors.white,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomIcon name='arrow-back-ios' size={15} color={isDark() ? colors.white : colors.blackVar2} type='MaterialIcons' />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CustomIcon name='lock' size={12} color={isDark() ? colors.white : colors.greyVar4} type='Feather' />
        <H12fontBold400GreyVar4DarkWhite style={{ marginLeft: 10 }}>{labels.Endtoendencrypted}</H12fontBold400GreyVar4DarkWhite>
      </View>
      <CustomIcon name='person-add' size={15} color={isDark() ? colors.white : colors.blackVar2} type='octicons' />
    </View>
  );
};

export const ContactCommonHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        height: DevHeight * 0.12,
        width: DevWidth,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
      }}
    >
      <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CustomIcon name='lock' size={15} color={colors.greyVar4} type='Feather' />
        <H15Grey style={{ marginLeft: 10 }}>{labels.Endtoendencrypted}</H15Grey>
      </View>
      <CustomIcon name='person-add' size={18} color={colors.blackVar2} type='octicons' />
    </View>
  );
};
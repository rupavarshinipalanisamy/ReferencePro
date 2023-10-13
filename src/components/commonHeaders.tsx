import React from 'react';
import { Text, View } from 'react-native';
import { DevHeight, DevWidth } from '../utils/device';
import { colors } from '../utils/colors';
import CustomIcon from '../utils/Icons';
import { H15Grey } from './commonText';
import { labels } from '../utils/labels';
import { isDark } from '../Theme/ThemeContext';

export const CallCommonHeader = () => {
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
      <CustomIcon name='arrow-back-ios' size={18} color={isDark() ? colors.white : colors.blackVar2} type='MaterialIcons' />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CustomIcon name='lock' size={15} color={colors.greyVar4} type='Feather' />
        <H15Grey style={{ marginLeft: 10 }}>{labels.Endtoendencrypted}</H15Grey>
      </View>
      <CustomIcon name='person-add' size={18} color={isDark() ? colors.white : colors.blackVar2} type='octicons' />
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
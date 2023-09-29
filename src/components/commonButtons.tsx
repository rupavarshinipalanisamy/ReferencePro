import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { DevWidth } from '../utils/device';
import { colors } from '../utils/colors';
import {
  CommonButtonBlue,
  CommonButtonNow,
  CommonButtonBook,
} from '../components/commonView';
import { TextNow } from './commonText';

type ButtonProps = {
  style:StyleProp<ViewStyle>;
  textStyle:StyleProp<TextStyle>
  disabled?: boolean;
  funCallback: CallableFunction;
  label: string;
  success?: boolean;
};

export const ButtonFull: React.FC<ButtonProps> = ({
  style,
  textStyle,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonBlue
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blueVar1 } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow style={textStyle} >{label}</TextNow>
    </CommonButtonBlue>
  );
};

export const ButtonNow: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonNow
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blueVar1 } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow>{label}</TextNow>
    </CommonButtonNow>
  );
};

export const ButtonBook: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButtonBook
      disabled={disabled}
      style={[style, success ? { backgroundColor: colors.blueVar1 } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow>{label}</TextNow>
    </CommonButtonBook>
  );
};
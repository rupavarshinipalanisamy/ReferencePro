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
  TextNow,
  CommonButtonBlue,
} from '../components/commonView';

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
      style={[style, success ? { backgroundColor: colors.blue } : null]}
      onPress={() => {
        funCallback();
      }}>
      <TextNow style={textStyle} >{label}</TextNow>
    </CommonButtonBlue>
  );
};

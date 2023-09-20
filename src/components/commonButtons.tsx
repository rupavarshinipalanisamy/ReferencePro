import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { DevWidth } from '../utils/device';
import { colors } from '../utils/colors';
import {
  ButtonText,
  CommonButton,
} from './commonView';

type ButtonProps = {
  disabled?: boolean;
  funCallback: CallableFunction;
  label: string;
  style?: StyleProp<ViewStyle>;
  success?: boolean;
};
export const ButtonFull: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
}) => {
  return (
    <CommonButton
      disabled={disabled}
      style={style}
      onPress={() => {
        funCallback();
      }}>
      <ButtonText>{label}</ButtonText>
    </CommonButton>
  );
};


import React, { useState } from 'react';
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
  color: string;
};

export const ButtonFull: React.FC<ButtonProps> = ({
  style,
  disabled,
  funCallback,
  label,
  success,
  color,
}) => {
  const [textColor, setTextColor] = useState(color);

  const handleClick = () => {
    // You can change the text color to a new color when the button is clicked.
    setTextColor(colors.purpleVar3); // Replace 'new-color-here' with the desired color
    funCallback();
  };

  return (
    <CommonButton
      disabled={disabled}
      style={style}
      onPress={handleClick}>
      <ButtonText style={{ color: textColor }}>{label}</ButtonText>
    </CommonButton>
  );
};

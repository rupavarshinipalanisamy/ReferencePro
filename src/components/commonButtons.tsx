import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { LongButton, TwoSmallButton } from './commonView';
import { H15font600, H15fontBold600 } from './commonText';
import { DevHeight, DevWidth } from '../utils/device';
import { isDark } from '../Theme/ThemeContext';
import { colors } from '../utils/colors';

//================================ LONG BUTTON =============================//

type LongPurpleButtonProps = {
  title: string;
  onChange?: () => void;
};

export const LongPurpleButton: React.FC<LongPurpleButtonProps> = ({
  title,
  onChange,

}) => {
  return (
    <View>
      <LongButton
        onPress={onChange}>
        <H15font600 >{title} </H15font600>
      </LongButton>
    </View>
  );
};

//================================ SMALL BUTTON =============================//

type SmallButtonProps = {
  title: string;
  onChange: () => void;
  borderWidth?: number;
  borderWidthColor?: string;
  backgroundColor: string;
  textColor: string;
  width?: string | number;
  style?: StyleProp<ViewStyle>;
  borderColor ?: string;
};

export const SmallButton: React.FC<SmallButtonProps> = ({
  title,
  onChange,
  backgroundColor,
  textColor,
  borderWidth,
  width = DevWidth / 2.4,
  borderColor 
}) => {
  return (
    <View>
      <TwoSmallButton
        style={{
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          width: width,
          borderColor: isDark() ? ( borderColor || colors.redVar2) : colors.greyVar4,
        }}
        onPress={onChange}>
        <H15fontBold600 style={{ color: textColor }}> {title}</H15fontBold600>
      </TwoSmallButton>
    </View>
  );
};



type WelcomeButtonProps = {
  title: string;
  onChange: () => void;
  borderWidth?: number;
  borderWidthColor?: string;
  backgroundColor: string;
  textColor: string;
  width?: string | number;
  height?: string | number;
  style?: StyleProp<ViewStyle>;
};

export const WelcomeButton: React.FC<WelcomeButtonProps> = ({
  title,
  onChange,
  backgroundColor,
  textColor,
  borderWidth,
  width = DevWidth / 2.4,
  height = 50 ,
}) => {
  return (
    <View>
      <TwoSmallButton
        style={{
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          width: width,
          height:height,
          borderColor: colors.white}}
        onPress={onChange}>
        <H15fontBold600 style={{ color: textColor }}> {title}</H15fontBold600>
      </TwoSmallButton>
    </View>
  );
};

import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { LongButton, TwoSmallButton } from './commonView';
import { H15font600, H15fontBold600 } from './commonText';
import { DevWidth } from '../utils/device';

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
  backgroundColor: string;
  textColor: string;
  width?: string | number;
  style?: StyleProp<ViewStyle>;
};

export const SmallButton: React.FC<SmallButtonProps> = ({
  title,
  onChange,
  backgroundColor,
  textColor,
  borderWidth,
  width = DevWidth / 2.4
}) => {
  return (
    <View>
      <TwoSmallButton
        style={{
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          width: width,
        }}
        onPress={onChange}>
        <H15fontBold600 style={{ color: textColor }}> {title}</H15fontBold600>
      </TwoSmallButton>
    </View>
  );
};

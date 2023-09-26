//import liraries
import {Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import styled from 'styled-components';
import { letterSpacing03, txtCenter } from './commonStyles';

// define your styles
const styles = StyleSheet.create({
  black: {
    color: colors.black,
  },
  white: {
    color: colors.white,
  },
  green: {
    color: colors.green,
  },
  red: {
    color: colors.red,
  },
  textcolorGray : {
    color : colors.greyVar4,
  },
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 36,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 21,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  h7: {
    fontSize: 16,
  },
  h8: {
    fontSize: 15,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontRegular: {
    fontWeight:'500',
  },
  fontBold700: {
    fontWeight:'700',
  },
});

const { h1, h2, h3, h4, h5, h6, h7, h8} = styles;
const { black,white,green,red, textcolorGray} = styles;
const {fontBold, fontRegular, fontBold700} = styles;

export const H6fontRegularBlack = styled(Text)`
  ${h1};
  ${fontRegular};
  ${black};
`;
export const H18BoldGrey = styled(Text)`
  ${h6};
  ${textcolorGray};
  ${fontBold700};
  ${txtCenter};
`
export const H16SemiBoldBlack = styled(Text)`
  ${h7};
  ${black};
  ${fontRegular};
  ${letterSpacing03}; 
`
export const H15Green = styled(Text)`
  ${green};
  ${h8};
  ${letterSpacing03};
`
export const H15Red = styled(Text)`
  ${red};
  ${h8};
  ${letterSpacing03};
`
export const H15Grey = styled(Text)`
  ${h8};
  ${textcolorGray};
`

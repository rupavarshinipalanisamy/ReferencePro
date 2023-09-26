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
  blueVar1:{
    color:colors.blueVar1
  } ,
  purpleVar3: {
    color:colors.purpleVar3,
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

 
  h6:{
    fontSize:18,
  
  },
  h7:{
    fontSize:16,
  
  },
  h8: {
    fontSize: 15,
  },

  h9:{
    fontSize:14,
  
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


const { green,red, textcolorGray,black,white,purpleVar3,blueVar1} = styles;
const {fontBold, fontRegular, fontBold700} = styles;
const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9

} = styles;




export const H16BlackText = styled(Text)`
  ${h7};
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
export const H16WhiteText = styled(Text)`
  ${h7};
  ${white};
`;
export const H18WhiteText = styled(Text)`
  ${h6};
  ${white};
`;
export const H18BlackText = styled(Text)`
  ${h6};
  ${black};
`;
export const H14BlackText = styled(Text)`
  ${h9};
  ${black};
`;

export const H14purpleVar3Text = styled(Text)`
  ${h9};
  ${purpleVar3};
`;
export const H14blueVar1Text = styled(Text)`
  ${h9};
  ${blueVar1};
`;




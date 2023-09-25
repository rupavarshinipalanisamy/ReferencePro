//import liraries
import {Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import styled from 'styled-components';

// define your styles
const styles = StyleSheet.create({
  black: {
    color: colors.black,
  },
  white: {
    color: colors.white,
  },
  lightBlue: {
    color:colors.linkTextBlue,
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
  h8:{
    fontSize:14,
  
  },

  fontBold: {
    fontWeight: 'bold',
  },

  fontRegular: {
    fontWeight:'500',
  },
});

const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8

} = styles;
const { black,white,lightBlue} = styles;
const {fontBold, fontRegular} = styles;


export const H16BlackText = styled(Text)`
  ${h7};
  ${black};
`;
export const H16WhiteText = styled(Text)`
  ${h7};
  ${white};
`;
export const H18WhiteText = styled(Text)`
  ${h6};
  ${white};
`;
export const H14BlackText = styled(Text)`
  ${h8};
  ${black};
`;
export const H14BlueText = styled(Text)`
  ${h8};
  ${lightBlue};
`;




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
  lightblueVar2: {
    color:colors.blueVar2Var1,
  },
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
  h9:{
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
  h9

} = styles;
const { black,white,lightblueVar2,purpleVar3} = styles;
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
export const H14blueVar2Text = styled(Text)`
  ${h9};
  ${lightblueVar2};
`;




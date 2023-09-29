import { Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import styled from 'styled-components';
import { alignSelfCenter, justyfyCenter, letterSpacing03, letterSpacing04, txtCenter } from './commonStyles';

const styles = StyleSheet.create({
  black: {
    color: colors.black
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
  textcolorGray: {
    color: colors.greyVar4,
  },
  greyVar3: {
    color: colors.greyVar3,
  },
  blueVar1: {
    color: colors.blueVar1
  },
  purpleVar3: {
    color: colors.purpleVar3,
  },
  h1: {
    fontSize: 25,
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
  h9: {
    fontSize: 14,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontRegular: {
    fontWeight: '500',
  },
  fontBold600: {
    fontWeight: '600',
  },
  fontBold700: {
    fontWeight: '700',
  },
  fontBold800: {
    fontWeight: '800',
  },
  fontBold900: {
    fontWeight: '900',
  },
  fontNormal: {
    fontWeight: 'normal'
  }

});
const { green, red, textcolorGray, black, white, purpleVar3, blueVar1, greyVar3 } = styles;
const { fontBold, fontRegular, fontBold600, fontBold700, fontBold800, fontNormal, fontBold900 } = styles;
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
export const H15GreySemiBold = styled(Text)`
  ${h8};
  ${textcolorGray};
  ${fontRegular}
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
export const H20BlackBoldText = styled(Text)`
  ${h5};
  ${black};
  ${fontBold700};
  ${letterSpacing04};
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

export const H18fontNormalGray = styled(Text)`
  ${h6};
  ${fontNormal};
  ${greyVar3};
`;
export const H16fontNormalGray = styled(Text)`
  ${h7};
  ${fontNormal};
  ${greyVar3};
`;
export const H16fontNormalBlue = styled(Text)`
  ${h7};
  ${fontNormal};
  ${blueVar1};
`;
export const H16fontNormalPurple = styled(Text)`
  ${h7};
  ${fontNormal};
  ${purpleVar3};
`;
export const H18fontBoldBlack = styled(Text)`
  ${h6};
  ${fontBold};
  ${black};
`;
export const H25fontBoldBlack = styled(Text)`
  ${h1};
  ${fontBold};
  ${black};
`;
export const H16fontBoldBlack = styled(Text)`
  ${h7};
  ${fontBold600};
  ${black};
`;
export const TextNowSecond = styled(Text)`
${h7};
${white};
${fontBold900};
${justyfyCenter};
${alignSelfCenter};
  `;

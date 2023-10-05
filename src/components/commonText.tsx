//import liraries
import { Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import styled from 'styled-components';
import { alignItemsCenter, alignSelfCenter, justyfyCenter, letterSpacing03, letterSpacing04, txtCenter } from './commonStyles';
import { isDark } from '../Theme/ThemeContext';

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
  greyVar4Color: {
    color: colors.greyVar4,
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
  h10: {
    fontSize: 12,

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
  },

});
const { green, red, textcolorGray, black, white, purpleVar3, blueVar1, greyVar3, greyVar4Color } = styles;
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
  h9,
  h10

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
export const H15BlackBold600 = styled(Text)`
  ${h8};
  ${black};
  ${fontBold600}
  `
export const H14Grey = styled(Text)`
  ${h9};
  ${textcolorGray};
  
`
export const H15GreySemiBold = styled(Text)`
  ${h8};
  ${textcolorGray};
  ${fontRegular}
`
export const H16WhiteText = styled(Text)`
color: ${props => isDark() ? colors.white : colors.black};
font-size:16px;
`;
export const H18WhiteText = styled(Text)`
color: ${props => isDark() ? colors.white : colors.black};
font-size:18px;

`
export const H18BlackText = styled(Text)`
  ${h6};
  ${black};
  ${fontBold600}
`;
export const H18BlackBoldText600 = styled(Text)`
  ${h6};
  ${black};
  ${fontBold600};
`;
export const H20BlackBoldText = styled(Text)`
  ${h5};
  ${black};
  ${fontBold700};
  ${letterSpacing04};
  `
export const H18BlackBoldText = styled(Text)`
  ${h6};
  ${black};
  ${fontRegular};

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
export const H18GreyVar4Text = styled(Text)`
  ${h8};
  ${textcolorGray};
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
export const H16font900Black = styled(Text)`
  ${h7};
  ${fontBold900};
  ${black};
`;

export const H12fontNormalGray = styled(Text)`
  ${h10};
  ${fontNormal};
  ${greyVar3};
`;
export const H16fontNormalGray4 = styled(Text)`
  ${h8};
  ${fontBold600};
  ${textcolorGray};
`;
export const H16font900 = styled(Text)`
${h7};
${fontBold900};
${alignItemsCenter};
${justyfyCenter};
borderColor:${colors.greyVar4};
`;
export const H16fontSemiBoldGreyvar4 = styled(Text)`
  ${h7};
  ${fontRegular};
  ${greyVar4Color};
`;
export const H16fontSemiBoldBluevar4 = styled(Text)`
  ${h7};
  ${fontRegular};
  ${blueVar1};
`;

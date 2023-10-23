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
  blackvar2: {
    color: colors.blackVar2
  },
  blackvar1: {
    color: colors.blackVar1
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
  greyVar4: {
    color: colors.greyVar4,
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
  blueVar2: {
    color: colors.blueVar2,
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
  fontBold400: {
    fontWeight: '400',
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
const { green, red, textcolorGray, black, blackvar2, white, purpleVar3, blackvar1, blueVar1, greyVar3, greyVar4Color, blueVar2, greyVar4 } = styles;
const { fontBold, fontRegular, fontBold400, fontBold600, fontBold700, fontBold800, fontNormal, fontBold900 } = styles;
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
  color : ${props => isDark() ? colors.greyVar0 : colors.greyVar4};
  ${fontRegular};
  ${letterSpacing03}; 
`
export const H14GreyVar4Bold400 = styled(Text)`
  color : ${props => isDark() ? colors.greyVar0 : colors.greyVar4};
  ${h9};
  ${fontBold400};
`
export const H15Green = styled(Text)`
  ${green};
  ${h8};
  ${letterSpacing03};
`
export const H14GreenBold400 = styled(Text)`
  color : ${props => isDark() ? colors.greenVar2 : colors.green};
  ${h9};
  ${letterSpacing03};
`
export const H15Red = styled(Text)`
  ${red};
  ${h8};
  ${letterSpacing03};
`
export const H14RedBold400 = styled(Text)`
color : ${props => isDark() ? colors.redVar2 : colors.red};
  ${h9};
  ${letterSpacing03};
  `
export const H14font500Gray4 = styled(Text)`
color : ${props => isDark() ? colors.greyVar3 : colors.greyVar4};

  ${h9};
  ${fontRegular};
`

export const H14font500Gray41 = styled(Text)`
color : ${props => isDark() ? colors.greyVar0 : colors.greyVar4};

  ${h9};
  ${fontRegular};
`
export const H14font400Black = styled(Text)`
  ${black};
  color:  ${props => isDark() ? colors.greyVar0 : colors.black};

`
export const H15Grey = styled(Text)`
  ${h8};
  color: ${props => isDark() ? colors.white : colors.greyVar4};
`
export const H15Grey1 = styled(Text)`
  ${h8};
  color: ${props => isDark() ? colors.greyVar3 : colors.greyVar4};
`

export const DefaultH15Grey = styled(Text)`
  ${h8};
${textcolorGray}
`
export const H16font500Black = styled(Text)`
color : ${props => isDark() ? colors.white : colors.black};
 ${h7};
 ${fontRegular};
 `
 export const H16font500White = styled(Text)`
 ${h7};
 ${fontRegular};
 ${white};
 `
export const H12Grey = styled(Text)`
  ${h10};
  color : ${props => isDark() ? colors.greyVar3 : colors.greyVar4};
`
export const H12font400Grey = styled(Text)`
  ${h10};
  ${fontBold400};
  color : ${props => isDark() ? colors.greyVar3 : colors.greyVar4};
`
export const H15BlackBold600 = styled(Text)`
  ${h8};
  ${black};
  ${fontBold600}
  `
export const H15PurpleVar3Bold500 = styled(Text)`
  ${h8};
  color : ${props => isDark() ? colors.greyVar0 : colors.purpleVar3};
  ${fontRegular};
  `
export const H14Grey = styled(Text)`
  ${h9};
  ${textcolorGray};
  
`
export const H15Blackvar2Bold500 = styled(Text)`
  ${h8};
  color : ${props => isDark() ? colors.greyVar0 : colors.blackVar2};
  ${fontRegular};
`
export const H14Blackvar2Bold500 = styled(Text)`
  ${h9};
  color : ${props => isDark() ? colors.greyVar0 : colors.blackVar2};
  ${fontRegular};
`
export const H14Blackvar2Bold500Same = styled(Text)`
  ${h9};
  ${blackvar2};
  ${fontRegular};
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
  color: ${props => isDark() ? colors.white : colors.black};
  ${fontBold600}
`;
export const H18BlackBoldText600 = styled(Text)`
  ${h6};
  color : ${props => isDark() ? colors.greyVar0 : colors.black};
  ${fontBold600};
  `
export const H16Black600Text = styled(Text)`
  ${h7};
  color: ${props => isDark() ? colors.greyVar0 : colors.blackVar2};
  ${fontBold600}
`;
export const H16GreyVar4Bold600Text = styled(Text)`
  ${h7};
  color : ${props => isDark() ? colors.greyVar0 : colors.greyVar4};
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
  color : ${props => isDark() ? colors.greyVar0 : colors.black};

`;
export const H14BlackVar2Bold400Text = styled(Text)`
  ${h9};
  color : ${props => isDark() ? colors.greyVar0 : colors.blackVar2};
  ${fontBold400};
`;
export const H14font400grey3black2 = styled(Text)`
  ${h9};
  color : ${props => isDark() ? colors.greyVar3 : colors.blackVar2};
  ${fontBold400};
`;
export const H14GreyVar4Bold400Text = styled(Text)`
  ${h9};
  color : ${props => isDark() ? colors.greyVar3 : colors.greyVar4};
  ${fontBold400};
`;
export const H14purpleVar3Text = styled(Text)`
  ${h9};
  color : ${props => isDark() ? colors.greyVar3 : colors.purpleVar3};
`;

export const H14redText = styled(Text)`
  ${h9};
  ${red};
`;
export const H14blueVar1Text = styled(Text)`
  ${h9};
  ${blueVar1};
`;
export const H14blackVar1bold400Text = styled(Text)`
  ${h9};
  color : ${props => isDark() ? colors.greyVar3 : colors.blackVar1};
  ${fontBold400};
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
  color : ${props => isDark() ? colors.white : colors.black};
`;
export const H18Blackvar2Bold600 = styled(Text)`
  ${h6};
  ${fontBold600};
  color : ${props => isDark() ? colors.greyVar0 : colors.blackVar2};
`;
export const H25fontBoldBlack = styled(Text)`
  ${h1};
  ${fontBold};
  ${black};
`;
export const H16fontBoldBlack = styled(Text)`
  ${h7};
  ${fontBold600};
  color : ${props => isDark() ? colors.greyVar0 : colors.black};
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
export const H12font400Black = styled(Text)`
  ${h10};
  ${fontBold400};
  color : ${props => isDark() ? colors.greyVar0 : colors.blackVar1};
`;

export const H12purpleVar3Text = styled(Text)`
  ${h10};
  color : ${props => isDark() ? colors.greyVar0 : colors.purpleVar3};
`;
export const H12fontBold400GreyVar4 = styled(Text)`
  ${h10};
  ${fontBold400};
  color : ${props => isDark() ? colors.greyVar3 : colors.greyVar4};
`;
export const H12fontBold400GreyVar4DarkWhite = styled(Text)`
  ${h10};
  ${fontBold400};
  color : ${props => isDark() ? colors.white : colors.greyVar4};
`;
export const H12fontBold400blackVar2 = styled(Text)`
  ${h10};
  ${fontBold400};
  color : ${props => isDark() ? colors.greyVar0 : colors.blackVar2};
`;
export const H16fontNormalGray4 = styled(Text)`
  ${h8};
  ${fontBold600};
  color : ${props => isDark() ? colors.greyVar0 : colors.greyVar4};

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
export const H14font400Blue = styled(Text)`
  ${h9};
  ${fontBold400};
  ${blueVar2};
`;
export const H14font400Purple3 = styled(Text)`
  ${h9};
  ${fontBold400};
  ${purpleVar3};
`;

export const H14font400Gray4 = styled(Text)`
${h9};
color : ${props => isDark() ? colors.greyVar3 : colors.greyVar4};
${fontBold400}
`
export const H14font400White = styled(Text)`
${h9};
${white};
${fontBold400}
`

export const H20font600Black = styled(Text)`
  ${h5};
  ${fontBold600};
  color:  ${props => isDark() ? colors.white : colors.black};
`;

export const H15font600 = styled(Text)`
${h8};
${fontBold600};
${white};
`
export const H15fontBold600 = styled(Text)`
${h8};
${fontBold600};
`

export const H15font500Black = styled(Text)`
  ${h8};
  ${fontRegular};
  color:  ${props => isDark() ? colors.greyVar0 : colors.black};

`;
export const H16font600Black = styled(Text)`
  ${h7};
  ${fontBold600}
  color:  ${props => isDark() ? colors.greyVar0 : colors.black};
`;

export const H15font500White = styled(Text)`
  ${h8};
  ${fontRegular}
  ${white};
`;





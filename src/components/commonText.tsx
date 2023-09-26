import { Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import styled from 'styled-components';

const styles = StyleSheet.create({
  black: {
    color: colors.black
  },
  white: {
    color: colors.white,
  },
  textGray: {
    color: colors.greyVar4,
  },
  textBlue: {
    color: colors.blueVar2,
  },
  purple: {
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
  h18: {
    fontSize: 18,
  },
  h16: {
    fontSize: 16,
  },

  fontBold: {
    fontWeight: 'bold',
  },
  fontRegular: {
    fontWeight: '500',
  },
  fontNormal: {
    fontWeight: 'normal'
  }
});

const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h18,
  h16

} = styles;
const { black, white, textGray, textBlue, purple } = styles;
const { fontBold, fontRegular, fontNormal } = styles;

export const H6fontRegularBlack = styled(Text)`
  ${h1};
  ${fontBold};
  ${black}
`;
export const H10fontRegularBlack = styled(Text)`
  ${h4};
  ${fontRegular};
  ${black};
`;
export const H10fontRegularLight = styled(Text)`
  ${h5};
  ${fontRegular};
`;

export const H18fontNormalGray = styled(Text)`
  ${h18};
  ${fontNormal};
  ${textGray};
`;
export const H16fontNormalGray = styled(Text)`
  ${h16};
  ${fontNormal};
  ${textGray};
`;
export const H16fontNormalBlue = styled(Text)`
  ${h16};
  ${fontNormal};
  ${textBlue};
`;
export const H16fontNormalPurple = styled(Text)`
  ${h16};
  ${fontNormal};
  ${purple};
`;
export const H18fontBoldBlack = styled(Text)`
  ${h18};
  ${fontBold};
  ${black};
`;

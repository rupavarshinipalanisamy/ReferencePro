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

} = styles;
const { black,white} = styles;
const {fontBold, fontRegular} = styles;

export const H6fontRegularBlack = styled(Text)`
  ${h1};
  ${fontRegular};
  ${black};
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



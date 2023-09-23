import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { colors } from '../utils/colors';
import styled from 'styled-components';

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpaceEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  purpleMainContainer: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  commonLineDividerGrey: {
    width: '88%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: colors.lightGrey
  }
});
const {
  rowSpaceBetween,
  rowSpaceEvenly,
  rowSpaceAround,
  mainContainer,
  purpleMainContainer,
  subContainer,
  commonLineDividerGrey,
} = styles;


export const MainContainer = styled(SafeAreaView) <{ secondary?: boolean }>`
  ${mainContainer};
  `;
export const PurpleMainContainer = styled(SafeAreaView) <{ secondary?: boolean }>`
  ${purpleMainContainer};
`;
export const CommonLineDividerGrey = styled(View)`
  ${commonLineDividerGrey}
` 
export const RowSpaceBetween = styled(View)`
  ${rowSpaceBetween}
`
export const RowSpaceEvenly  = styled(View)`
  ${rowSpaceEvenly}
`
export const RowSpaceAround  = styled(View)`
  ${rowSpaceAround}
`
export const SubContainer  = styled(View)`
  ${subContainer}
`
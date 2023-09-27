import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors } from '../utils/colors';
import styled from 'styled-components';
import { DevHeight } from '../utils/device';

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
    backgroundColor: colors.purpleVar3,
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
    backgroundColor: colors.greyVar0
  },
  tabContainer: {
    fontSize: 16,
    fontWeight: '500',
    flexDirection: 'row',
  },
  textNow: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '900',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  commonButtonNow: {
    width: '100%',
    paddingVertical: 8,
    marginVertical: 40,
    borderRadius: 5,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
  },
  commonButtonBook: {
    width: 200,
    paddingVertical: 8,
    marginVertical: 8,
    borderRadius: 5,
    alignSelf: 'center',
    margin: 9,
  },
  commonButtonFull: {
    backgroundColor: colors.purpleVar3,
    width: '45%',
    paddingVertical: 13,
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: colors.white,
    borderWidth: 2

  },
  topContainerWhiteCard: {
    backgroundColor: 'white', 
    borderBottomStartRadius: 25, 
    borderBottomEndRadius: 25, 
    elevation: 4, 
    height: DevHeight / 10, 
    justifyContent: 'center'
  },
  iconBackground:{
    backgroundColor: colors.purpleVar2, 
    width: 38, 
    borderRadius: 5, 
    justifyContent: 'center', 
    height: 38, 
    alignItems: 'center'
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
  tabContainer,
  textNow,
  commonButtonNow,
  commonButtonBook,
  commonButtonFull,
  topContainerWhiteCard,
  iconBackground,



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
export const RowSpaceEvenly = styled(View)`
  ${rowSpaceEvenly}
`
export const RowSpaceAround = styled(View)`
  ${rowSpaceAround}
`
export const SubContainer = styled(View)`
  ${subContainer}
`
export const TabContainer = styled(View)`
  ${tabContainer}
`
export const CommonButtonBlue = styled(TouchableOpacity)`
    ${commonButtonFull};
  `;
export const TextNow = styled(Text)`
    ${textNow};
  `;
export const CommonButtonNow = styled(TouchableOpacity)`
    ${commonButtonNow};
  `;
export const CommonButtonBook = styled(TouchableOpacity)`
    ${commonButtonBook};
  `;

export const TopContainerWhiteCard = styled(View)`
${topContainerWhiteCard};
`
export const IconBackground = styled(View)`
${iconBackground};
`
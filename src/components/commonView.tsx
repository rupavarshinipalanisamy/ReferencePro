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
  iconBackground: {
    backgroundColor: colors.purpleVar4,
    width: 38,
    borderRadius: 5,
    justifyContent: 'center',
    height: 38,
    alignItems: 'center'
  },
  commonButtonSaveandCancel: {
    width: '45%',
    paddingVertical: 8,
    marginVertical: 40,
    borderRadius: 9,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.greyVar3
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioButtonRound: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:colors.greyVar4
  },
  selectedRadioBtn:{
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.purpleVar3,
  },
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
  commonButtonSaveandCancel,
  topContainerWhiteCard,
  iconBackground,
  radioButton,
  radioButtonRound,
  selectedRadioBtn



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
backgroundColor: white;
borderBottomStartRadius: 25px;
borderBottomEndRadius: 25px;
elevation: 4;
height: ${DevHeight / 10}px;
justifyContent: center;
`
export const IconBackground = styled(View)`
${iconBackground};
`
export const SaveAndCancel = styled(TouchableOpacity)`
${commonButtonSaveandCancel};
`
export const RadioButton = styled(TouchableOpacity)`
${radioButton};
`
export const RadioButtonRound = styled(View)`
${radioButtonRound}
`
export const SelectedRadioBtn = styled(View)`
${selectedRadioBtn}
`

interface TopContainerWhiteCardProps {
  height?: number;
}


export const TopContainerWhiteCard1 = styled(View) <TopContainerWhiteCardProps>`
  background-color: ${colors.white};
  border-bottom-start-radius: 25px;
  border-bottom-end-radius: 25px;
  ${({ height }) => height && `height: ${height}px;`}
  elevation: 2;
  shadow-color: #000;
`;
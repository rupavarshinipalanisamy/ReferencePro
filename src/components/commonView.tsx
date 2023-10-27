import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors } from '../utils/colors';
import styled from 'styled-components';
import { DevHeight, DevWidth } from '../utils/device';
import { isDark } from '../Theme/ThemeContext';

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
    // backgroundColor: isDark() ? colors.darkModeVar1 : colors.purpleVar3,
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
    // backgroundColor: isDark() ? colors.darkModeVar3 : colors.greyVar0,
  },
  commonLineDividerPurple: {
    width: '88%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: isDark() ? `rgba(78, 80, 114, 0.3 )` : colors.purpleVar2,
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
    borderRadius: 5,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.purpleVar3
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
    width: 38,
    borderRadius: 5,
    justifyContent: 'center',
    height: 38,
    alignItems: 'center'
  },
  commonButtonSaveandCancel: {
    width: '48%',
    // paddingVertical: 8,
    // marginVertical: 40,
    borderRadius: 10,
    alignItems: 'center',
    height: 42,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.greyVar3
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonRound: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadioBtn: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  // receiveMsgCard: {
  //   backgroundColor: colors.white,
  //   borderTopRightRadius: 8,
  //   borderBottomRightRadius: 8,
  //   borderBottomLeftRadius: 8,
  //   padding: 10
  // },

  cardSurface: {
    backgroundColor: colors.white,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 15,
    margin: 20,
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: colors.greyVar3,
  },
  longButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purpleVar3
  },
  smallButton: {
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: colors.greyVar4

  },
  greyTabView: {
    alignSelf: 'center',
    marginTop: 15,
    height: 5,
    width: DevWidth * 0.2,
    backgroundColor: colors.greyVar0
  },
  fullCommonLineDividerGrey:{
    width: '100%',
    alignSelf: 'center',
    height: 1,
    // backgroundColor: isDark() ? colors.darkModeVar3 : colors.greyVar0,
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
  fullCommonLineDividerGrey,
  commonLineDividerPurple,
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
  selectedRadioBtn,
  // receiveMsgCard,
  cardSurface,
  longButton,
  smallButton,
  greyTabView,




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
export const FullCommonLineDividerGrey = styled(View)`
  ${fullCommonLineDividerGrey}
`
export const CommonLineDividerPurple = styled(View)`
  ${commonLineDividerPurple};
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
export const TwoSmallButton = styled(TouchableOpacity)`
  ${smallButton};
  `

export const TopContainerWhiteCard = styled(View)`
backgroundColor:  ${props => isDark() ? colors.darkModeVar1 : colors.white};
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


interface MessageCardProps {
  backgroundColor?: string;
}
export const MessageCard = styled(View) <MessageCardProps>`
background-color: ${(props) => props.backgroundColor || colors.white};
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
padding: 10px;
`;


interface TopContainerWhiteCardProps {
  height?: number;
}


export const TopContainerWhiteCard1 = styled(View) <TopContainerWhiteCardProps>`
  background-color: ${props => isDark() ? colors.darkModeVar1 : colors.white};
  border-bottom-start-radius: 25px;
  border-bottom-end-radius: 25px;
  ${({ height }) => height && `height: ${height}px;`}
  elevation: 2;
  shadow-color: #000;
`;

export const MediumCardSurface = styled(View)`
background-color: ${props => isDark() ? colors.darkModeVar4 : colors.white};
padding: 10px;
elevation: ${props => isDark() ? 0 : 2};
margin-top: 20px;
flex-direction:row;
border-radius: 8px;
shadow-color:${colors.greyVar4};

`
export const LongButton = styled(TouchableOpacity)`
${longButton}
`

export const GreyTabView = styled(TouchableOpacity)`
${greyTabView}
`
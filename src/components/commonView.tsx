import {
  View,
  StyleSheet,
  SafeAreaView,
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
    width: '100%',
    height: 1,
    backgroundColor: colors.greyVar0
  },
  tabContainer: {
    fontSize: 16,
    fontWeight: '500',
    flexDirection: 'row',
  },
  topContainerWhiteCard: {
    backgroundColor: 'white',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    shadowColor: colors.greyVar3,
    height: DevHeight / 8,
    justifyContent: 'center'
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
  topContainerWhiteCard
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

interface TopContainerWhiteCardProps {
  height?: number;
}

export const TopContainerWhiteCardWrapper: React.FC<TopContainerWhiteCardProps> = ({ height, ...rest }) => (
  <TopContainerWhiteCard {...rest} />
);

export const TopContainerWhiteCard = styled(View)<TopContainerWhiteCardProps>`
  background-color: ${colors.white};
  border-bottom-start-radius: 25px;
  border-bottom-end-radius: 25px;
  ${({ height }) => height && `height: ${height}px;`}
  elevation: 2;
  shadow-color: #000;
`;

import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity, Image, Modal as RNModal} from 'react-native';
import { colors } from '../utils/colors';
import {  flex1, flexRow,  mt20, pb10, pl15,spaceBetween } from '../components/commonStyles'
import { labels } from '../utils/labels';
import CustomIcon from '../utils/Icons';
import { H12font400Black, H12font400Grey, H14BlackVar2Bold400Text, H14GreyVar4Bold400, H15Blackvar2Bold500, H16BlackText } from './commonText';
import { ProfileImg } from '../utils/png';
import { isDark, useTheme } from '../Theme/ThemeContext';
import { Alignjustifycenter } from './commonView';



export const DayDetails = () => {
  return (
    <>
      <View style={{ height: 28, backgroundColor: isDark() ? colors.darkModeVar6 : colors.white, width: 115, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 100 }}>
        <H14BlackVar2Bold400Text>{labels.chatViewToday}</H14BlackVar2Bold400Text>
      </View>
    </>
  );
};

export const Bluetick = () => {
  return (
    <View>
      <CustomIcon name='check-all' type="MaterialCommunityIcons" color={colors.blueVar1} size={16} />
    </View>
  )
}


export const Tick = () => {
  return (
    <View>
      <CustomIcon name='check-all' type="MaterialCommunityIcons" color={colors.greyVar4} size={16} />
    </View>
  )
}




export const Reactmsg = () => {
  return (
    <View style={{paddingTop:5}} >
      <View style={{ backgroundColor: isDark() ? colors.darkModeVar4 : colors.white, height: 22, width: 40, borderRadius: 10, flexDirection: 'row', marginRight: 230 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 }}>
          <H12font400Grey >1</H12font400Grey>
          <H12font400Black>👍</H12font400Black>

        </View>

      </View>
    </View>
  )
}



export const All = () => {
  return (

    <View style={[mt20,{ marginHorizontal: 25}]}>
      <View style={[flexRow, spaceBetween]}>
        <View style={flexRow}>
          <Image source={ProfileImg} />
          <View style={[pl15, spaceBetween]}>
            <H15Blackvar2Bold500>Horace Keene</H15Blackvar2Bold500>
            <H14GreyVar4Bold400>Active 4Min Ago</H14GreyVar4Bold400>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H16BlackText>👍</H16BlackText>
        </View>
      </View>
    </View>

  )
}
export const ForwardView = () => {
  return (
    <View style={{ height: 26, width: 26, backgroundColor: isDark() ? colors.darkModeVar4 : colors.white, borderRadius: 13 }}>
      <Alignjustifycenter style={flex1}>
        <CustomIcon name='share-outline' type="MaterialCommunityIcons" size={16} color={isDark() ? colors.greyVar3 : colors.greyVar4} />


      </Alignjustifycenter>

    </View>
  )
}

export const AddView = () => {
  const {theme} = useTheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View style={{ height: 28, width: 28, backgroundColor: isDarkTheme? colors.darkModeVar6 : colors.greyVar7, borderRadius: 13 }}>
      <Alignjustifycenter style={flex1}>
        <CustomIcon name='plus' type="octicons" size={14} color={isDarkTheme? colors.white : colors.blackVar1} />
      </Alignjustifycenter>
    </View>
  )
}




interface TabControlProps {
  tabs: { label: string; count?: number }[];
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export const ReactMsgTabControl: React.FC<TabControlProps> = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tabInfo) => (
        <View style={{ marginLeft: 15 }} key={tabInfo.label}>
          <TouchableOpacity
            style={[
              { borderBottomWidth: activeTab === tabInfo.label ? 3 : 0 },
              { borderBottomColor: activeTab === tabInfo.label ? (isDark() ? colors.white : colors.purpleVar3) : "" },
            ]}
            onPress={() => onTabPress(tabInfo.label)}
          >
            <View style={[flexRow, pb10]}>
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === tabInfo.label ? (isDark() ? colors.white : colors.purpleVar3) : colors.purpleVar1 },
                ]}
              >
                {tabInfo.label}
              </Text>
              {tabInfo.count !== undefined && tabInfo.count > 0 && (
                <View
                  style={[
                    styles.roundNumber, { backgroundColor: isDark() ? colors.darkModeVar6 : 'rgba(128, 0, 128, 0.2)' },
                  ]}
                >
                  <Text style={styles.roundNumberText}>{tabInfo.count}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};





const styles = StyleSheet.create({

  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    flexDirection: 'row',
  },
  roundNumber: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  roundNumberText: {
    color: colors.greyVar4,
    fontSize: 12,
  },

});
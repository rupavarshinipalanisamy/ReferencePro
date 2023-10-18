import React, { Fragment, useState, useRef } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, Animated, StatusBar, TextInput, Modal as RNModal } from 'react-native';
import { colors } from '../utils/colors';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, pb10, pl13, pl15, pl6, pt10, spaceBetween } from '../components/commonStyles'
import { labels } from '../utils/labels';
import CustomIcon from '../utils/Icons';
import { H14BlackText, H14blackVar1bold400Text, H16BlackText } from './commonText';
import { ProfileImg } from '../utils/png';
import { isDark } from '../Theme/ThemeContext';
import { DevHeight, DevWidth } from '../utils/device';
import { attachmentData } from '../utils/data/chatsData';
import Modal from 'react-native-modal';



export const DayDetails = () => {
  return (
    <>
      <View style={{ height: 28, backgroundColor: colors.white, width: 115, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 100 }}>
        <Text style={{ fontSize: 12, fontWeight: '400', color: '#0A0A0A' }}>{labels.chatViewToday}</Text>
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
    <View style={{ paddingTop: 5 }} >
      <View style={{ backgroundColor: colors.white, height: 22, width: 40, borderRadius: 10, justifyContent: "space-evenly", flexDirection: 'row', marginRight: 230 }}>
        <H14BlackText>1</H14BlackText>
        <H14BlackText>👍</H14BlackText>
      </View>
    </View>
  )
}



export const All = () => {
  return (
    <View style={{ marginHorizontal: 25, marginTop: 20 }}>
      <View style={[flexRow, spaceBetween]}>
        <View style={flexRow}>
          <Image source={ProfileImg} />
          <View style={[pl15, spaceBetween]}>
            <H14BlackText>Horace Keene</H14BlackText>
            <Text>Active 4Min Ago</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H16BlackText>👍</H16BlackText>
        </View>
      </View>
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
              { borderBottomColor: activeTab === tabInfo.label ? colors.purpleVar3 : "" },
            ]}
            onPress={() => onTabPress(tabInfo.label)}
          >
            <View style={[flexRow, pb10]}>
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === tabInfo.label ? colors.purpleVar3 : colors.purpleVar3 },
                ]}
              >
                {tabInfo.label}
              </Text>
              {tabInfo.count !== undefined && tabInfo.count > 0 && (
                <View
                  style={[
                    styles.roundNumber, { backgroundColor: 'rgba(128, 0, 128, 0.2)' },
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
    fontSize: 18,
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
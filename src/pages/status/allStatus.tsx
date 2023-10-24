import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh10, mh20, mt20, mt5, pl13 } from '../../components/commonStyles';
import { H14font400Black, H14font400Gray4, H15Grey, H15font500Black } from '../../components/commonText';
import { BottomTabBar, CustomModal } from '../../components/commonComponents'
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { labels } from '../../utils/labels';
import { DevHeight, DevWidth } from '../../utils/device';
import { mutedStatusData, statusData, threeDotIcon, viewedStatusData } from '../../utils/data/statusData';
import { AfterNavigation, BeforeNavigation, StatusOptionModalComponent } from './statusContainer';
import { screenName } from '../../utils/screenName';
import { isDark } from '../../Theme/ThemeContext';
import { StatusView, StatusView1 } from '../../utils/svg';
export interface StatusData {
  id: number;
  image: any;
  name: string;
  time: string;
}
export interface RecentStatusItemProps {
  data: StatusData;
  onPress: () => void;
  statusView?: React.ReactNode;
  isMuted?: boolean;
}

export const StatusItem: React.FC<RecentStatusItemProps> = ({ data, onPress, statusView, isMuted }) => (
  <View>
    <View style={isMuted ? [styles.card2,{backgroundColor:isDark() ? colors.darkModeVar7 : colors.white,}] 
    : 
    [styles.card1,{backgroundColor:isDark() ? colors.darkModeVar7 : colors.white,}]}>
      <TouchableOpacity onPress={onPress}>
        <View style={[alignItemsCenter, justyfyCenter]}>
          {statusView}
          <Image source={data.image} style={styles.img} />
        </View>
      </TouchableOpacity>
      <View style={[mh10, mt5]}>
        <H15font500Black>{data.name}</H15font500Black>
        <H14font400Gray4>{data.time}</H14font400Gray4>
      </View>
    </View>
  </View>
);

export const statusText = (value: string,) => {
  return (
    <View style={[mh20]}>
      <H14font400Black>{value}</H14font400Black>
    </View>
  )
}

export type AllStatusProps = {
  selectedCards: number[];
  onCardSelection: (cardId: number) => void;
}

const AllStatus = (props: AllStatusProps) => {
  const navigation = useNavigation();
  const [callOptionModal, setCallOptionModal] = useState(false);
  const route = useRoute();
  const showSecondScreen = route.params?.showSecondScreen === true;


  const closeCallOptionModal = () => {
    setCallOptionModal(false);
  }
  const handleStatusItemClick = (id: number) => {
    navigation.navigate(screenName.FriendStatus as never);
  };

  return (
    <View style={[{ backgroundColor: isDark() ? colors.darkModeVar2 : colors.white }, flex1, mt20, styles.whiteBg]}>
      <View style={flex1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {showSecondScreen ? <AfterNavigation /> : <BeforeNavigation />}
          {statusText(labels.recentStatus)}
          <View>
            {statusData.map((data, index) => (
              <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView />} />
            ))}
          </View>
          <View style={[mt20]}>
            {statusText(labels.viewedStatus)}
          </View>
          <View>
            {viewedStatusData.map((data) => (
              <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView1 />} />
            ))}
          </View>
          <View style={[mt20]}>
            {statusText(labels.mutedStatus)}
          </View>
          <View style={{ opacity: 0.5 }}>
            {mutedStatusData.map((data) => (
              <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView1 />} isMuted={true} />
            ))}
          </View>
        </ScrollView>
      </View>
      <CustomModal
        isVisible={callOptionModal}
        width={DevWidth * 0.55}
        height={DevHeight * 0.4}
        modalData={<StatusOptionModalComponent />}
        marginTop={160}
        onClose={closeCallOptionModal}
      />
      <BottomTabBar />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpleVar4,
    margin: 20,
    padding: 10,
  },
  card1: {
    padding: 10,
    elevation: 2,
    marginHorizontal: 20,
    marginTop: 18,
    flexDirection: 'row',
    borderRadius: 6
  },
  card2: {
    padding: 10,
    marginHorizontal: 20,
    marginTop: 18,
    flexDirection: 'row',
    borderRadius: 6,
  },
  whiteBg: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    overflow: 'hidden'
  },
  img: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 100
  }

});

export default AllStatus

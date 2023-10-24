import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { MainContainer } from '../../components/commonView';
import { StatusImg1, UserImg } from '../../utils/png';
import ProgressBar from 'react-native-progress/Bar';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { MyStatusPic } from '../../utils/svg';
import { myStatusView } from '../../utils/data/statusData';
import { H14font400Gray4, H14font400White, H15font500Black, H15font500White, H16font500Black, H16font500White } from '../../components/commonText';
import { CustomModal } from '../../components/commonComponents';
import { DevWidth, DevHeight } from '../../utils/device';
import { StatusOptionModalComponent } from './statusContainer';
import { alignItemsCenter, flex1, flexRow, mb30, mh10, mh20, mh8, ml15, mt10, mv10, spaceBetween } from '../../components/commonStyles';
import { isDark } from '../../Theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export type MyStatusProps = {};

export const MyStatusView = ({image}) => {
  return (
    <View>{image}</View>
  )
};

const MyStatus = (props: MyStatusProps) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [callOptionModal, setCallOptionModal] = useState(false);
  const navigation=useNavigation();

  const handleCallOptionModal = () => {
    setCallOptionModal(!callOptionModal);
  }
  const closeCallOptionModal = () => {
    setCallOptionModal(false);
  }

  const translateY = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      translateY.setValue(gestureState.dy);
    },
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dy < -50) {
        setCardOpen(true);
        Animated.timing(translateY, { toValue: -200, duration: 300, useNativeDriver: false }).start();
      } else {
        setCardOpen(false);
        Animated.timing(translateY, { toValue: 0, duration: 300, useNativeDriver: false }).start();
      }
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress1 < 1) {
        setProgress1(progress1 + 0.01);
      } else if (progress2 < 1) {
        setProgress2(progress2 + 0.01);
      } else {
        clearInterval(interval);
      }
    }, 2);

    return () => {
      clearInterval(interval);
    };
  }, [progress1, progress2]);

  const toggleCard = () => {
    if (translateY._value === 0) {
      setCardOpen(false);
      Animated.timing(translateY, { toValue: 0, duration: 300, useNativeDriver: false }).start();
    } else {
      setCardOpen(true);
      Animated.timing(translateY, { toValue: -200, duration: 300, useNativeDriver: false }).start();
    }
  };

  const closeCard = () => {
    setCardOpen(false);
    Animated.timing(translateY, { toValue: 0, duration: 300, useNativeDriver: false }).start();
  };

  return (
    <MainContainer>
      <TouchableHighlight onPress={closeCard} style={[flex1]}>
        <Image source={StatusImg1} style={styles.image} />
      </TouchableHighlight>
      <View style={styles.progressBarsContainer}>
        <View style={[flex1, flexRow]}>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              progress={progress1} 
              width={null}
              height={4}
              color={'white'}
              borderColor={'transparent'}
              backgroundColor={colors.greyVar3}
            />
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              progress={progress2}
              width={null}
              height={4}
              color={colors.white}
              borderColor={'transparent'}
              backgroundColor={colors.greyVar3}
            />
          </View>
        </View>
        <View style={[flexRow,alignItemsCenter,ml15,mt10]}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <CustomIcon name='chevron-left' size={15} color={colors.white} type='octicons' />
          </TouchableOpacity>
          <View style={[mh10]}>
            <MyStatusView image={<MyStatusPic />} />
          </View>
          <View>
            <H15font500White>{labels.MyStatus}</H15font500White>
            <H14font400White>{labels.muteTime1}</H14font400White>
          </View>
        </View>
      </View>
      {cardOpen ? (
        <View style={[styles.viewContainer, { backgroundColor: isDark()?colors.darkModeVar4: colors.white }]} >
          <View style={[styles.viewTopContainer,{backgroundColor:isDark()?colors.darkModeVar6:colors.purpleVar1}]}>
            <View style={[mh10, spaceBetween, flexRow]}>
              <H16font500Black>{labels.viewedBy15}</H16font500Black>
              <TouchableOpacity
                onPress={handleCallOptionModal}
              >
                <CustomIcon name='dots-three-vertical' type='entypo' color={isDark()?colors.white:colors.greyVar4} size={15} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[mt10,mb30]}>
            {myStatusView.map((item) => {
              return (
                <View key={item.id} style={ [flexRow,mh20,mv10,alignItemsCenter]}>
                  <Image style={{ height: 42, width: 42 }} source={item.image} />
                  <View style={[mh8]}>
                    <H15font500Black>{item.name}</H15font500Black>
                    <H14font400Gray4>{item.time}</H14font400Gray4>
                  </View>
                </View>
              )
            })}
          </View>
          <CustomModal
            isVisible={callOptionModal}
            width={DevWidth * 0.50}
            height={DevHeight * 0.4}
            modalData={<StatusOptionModalComponent />}
            marginTop={350}
            onClose={closeCallOptionModal}
          />
        </View>
      ) : (
        <Animated.View
          style={[styles.swipeableContainer, { transform: [{ translateY }] }]}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity style={{ flex: 1 }} onPress={toggleCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CustomIcon name='eye' size={20} color={colors.white} type='octicons' />
              <H16font500White style={{ color: colors.white }}>{labels.No25}</H16font500White>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  progressBarsContainer: {
    left: 8,
    right: 8,
    marginTop: 10,
    position: 'absolute',
    flex: 1,
  },
  progressBarContainer: {
    flex: 1,
    marginRight: 8,
  },
  swipeableContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  viewContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  },
  viewTopContainer: {
    height: 42, 
    backgroundColor: colors.purpleVar1, 
    marginTop: 20, 
    width: '90%', 
    alignSelf: 'center', 
    borderRadius: 6, 
    justifyContent: 'center',
  }
});

export default MyStatus;
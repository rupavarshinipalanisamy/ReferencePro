import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { MainContainer, RowSpaceBetween } from '../../components/commonView';
import { StatusImg1, StatusPic3 } from '../../utils/png';
import ProgressBar from 'react-native-progress/Bar';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { friendStatusModal } from '../../utils/data/statusData';
import { H14font400White, H15Grey, H15font500White, H16font600Black } from '../../components/commonText';
import { CustomModal } from '../../components/commonComponents';
import { DevWidth, DevHeight } from '../../utils/device';
import { alignItemsCenter, flexRow, justyfyCenter, mh20, mt20, mv20, pl13 } from '../../components/commonStyles';
import { FooterChatView } from '../chatView/Messagecomponents/messages';
import { IconModal } from '../../components/commonModal';
import { SmallButton } from '../../components/commonButtons';

export type MyStatusProps = {};


export const FrndStatusOptionModalComponent = () => {

    const [showIconModal, setShowIconModal] = useState(false);

    const openIconModal = () => {
        setShowIconModal(true);
    }

    const closeIconModal = () => {
        setShowIconModal(false);
    }
    const selectedItemId = 1; 
    return (
        <View>
            {
                friendStatusModal.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() =>{if (item.id === selectedItemId) {
                            openIconModal()
                        }}} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                            <View style={[flexRow]}>
                                <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                    <H15Grey>{item.title}</H15Grey>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }

<IconModal
                isVisible={showIconModal}
                onClose={closeIconModal}
                contentComponent={<ModalContent1/>}
                iconName='block-flipped'
                iconType='MaterialIcons'
                iconSize={25}
            />
        </View>
    )
}


const ModalContent1 = ({ }) => {
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
    };

    const handleDeleteChatButton = () => {

    };

    return (
        <View style={[mh20]}>
            <H16font600Black>{labels.blockModalTitle}</H16font600Black>
            <Text style={[mt20]}>New Status updates from Horace Keene {'\n'}won’t appear under recent updates {'\n'}anymore.</Text>
            <RowSpaceBetween style={[mv20]}>
                <SmallButton
                    title={labels.cancel}
                    onChange={handleCancelButton}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    borderWidth={isCancelButtonActive ? 0 : 1}
                    width={DevWidth / 2.6}
                />
                <SmallButton
                    title={labels.mute}
                    onChange={handleDeleteChatButton}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    borderWidth={isCancelButtonActive ? 1 : 0}
                    width={DevWidth / 2.6}
                />
            </RowSpaceBetween>
        </View>
    )
}



export const MyStatusView = ({ image }) => {
  return (
    <View>{image}</View>
  )
};

const FriendStatus = (props: MyStatusProps) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [callOptionModal, setCallOptionModal] = useState(false);
  
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
      <TouchableHighlight onPress={closeCard} style={{ flex: 1 }}>
        <Image source={StatusImg1} style={styles.image} />
      </TouchableHighlight>
      <View style={styles.progressBarsContainer}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              progress={progress1} // Adjust the progress as needed
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
       <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 15 }}>
          <CustomIcon name='chevron-left' size={15} color={colors.white} type='octicons' />
          <View style={{ marginHorizontal: 10 }}>
            <Image source={StatusPic3} style={{height:42,width:42}}/>
          </View>
          <View>
            <H15font500White>{labels.horaceKeene}</H15font500White>
           <H14font400White>{labels.muteTime1}</H14font400White>
          </View>
        </View>
        <View>
        <TouchableOpacity style={{right:15}}
          onPress={handleCallOptionModal}
        >
          <CustomIcon name='dots-three-vertical' type='entypo' color={colors.white} size={15} />
        </TouchableOpacity>
        </View>
       </View>
       <CustomModal
          isVisible={callOptionModal}
          width={DevWidth * 0.50}
          height={DevHeight * 0.4}
          modalData={<FrndStatusOptionModalComponent /> }
          marginTop={40}
          
          onClose={closeCallOptionModal}
        />
      
      </View>
      {cardOpen ? (

        <View style={{
          backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%',
          borderTopRightRadius: 25, borderTopLeftRadius: 25
        }} >
            <FooterChatView />
        </View>
      ) : (
        <Animated.View
          style={[styles.swipeableContainer, { transform: [{ translateY }] }]}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity style={{ flex: 1 }} onPress={toggleCard}>
            <View style={{  alignItems: 'center' }}>
              <CustomIcon name='chevron-up' size={20} color={colors.white} type='octicons' />
              <Text style={{ color: colors.white }}>Reply</Text>
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
});

export default FriendStatus;

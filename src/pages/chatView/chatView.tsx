import React, { Fragment, useState, useRef } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, StatusBar,Animated } from 'react-native';
import { colors } from '../../utils/colors';
import { flex1, flexRow, mh20, pl10, pl6, pt10 } from '../../components/commonStyles';
import { labels } from '../../utils/labels';
import { FooterChatView, HeaderChatView, LongPressedHaeder, ReplyFooterView, SentMessage2, SentMessage6, receiveMessage1, receiveMessage2, receiveMessage3, receiveMessage4, sentMessage1, sentMessage3, sentMessage4, sentMessage5 } from './Messagecomponents/messages';
import Modal from 'react-native-modal';
import { DevWidth } from '../../utils/device';
import { screenName } from '../../utils/screenName';
import { ChatBackgroundImg } from '../../utils/png';
import { isDark, useTheme } from '../../Theme/ThemeContext';
import { EditModal, EditModal2, IconModal, ReactModal } from '../../components/commonModal';
import { ClearChatModal } from '../../ModalContents/IconModelContents';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { tabs } from '../../utils/data/chatViewData';
import { Emojidata } from '../../utils/data/chatViewData';
import { Bluetick, DayDetails, Reactmsg, Tick } from '../../components/chatViewComponents';
import ChatMessage from '../../components/chatView/chatMessages';
import {
  PanGestureHandler,
  State as GestureState,
} from 'react-native-gesture-handler';
import { H12font400Grey } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { EmojiText } from '../../styledComponent/styledComponent';

const ChatView = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const [selectedModalId, setSelectedModalId] = useState(null);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isSwiped, setIsSwiped] = useState(false);
  const [emojiModal, setEmojiModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';


  const toggleCardSelection = (cardId: number) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter(id => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };
  const IconcloseModal = () => {
    setSelectedModalId(null);
  };
  const openModal = (id: number) => {
    setSelectedModalId(id);
  }

  const handleSwipeAction = () => {
    setIsSwiped(true);
  };
  const handleReplyFooterIconClick = () => {
    setIsSwiped(false);
  };
  const handleReactMsg = () => {
    setModalVisible(true)
  }

  const handleCardSelectionChange = (event, cardId) => {
    if (event && event.nativeEvent) {
      const isSentMsg = chatMessages1.find((message) => message.id === cardId)?.type === 'sentmsg';
      const modalTop = event.nativeEvent.pageY;
      const modalLeft = isSentMsg ? DevWidth / 3 : 20;
      setModalPosition({ x: modalLeft, y: modalTop });
      setEmojiModal(true);
    }
  };

  
  const renderHeader = () => {
    if (selectedCards.length > 0) {
      return (
        <LongPressedHaeder
          messageType={chatMessages1.find((message) => selectedCards.includes(message.id))?.type}
        />
      );
    } else {
      return (
        <HeaderChatView
          backgroundColor={colors.purpleVar3}
          profileNavigate={screenName.UserProfile}
          videoNavigate={screenName.SingleVideoCall}
          audioNavigate={screenName.SingleAudioCallRing}
          title={labels.horaceKeene}
          subTitle={labels.online}
          clearChatopenModal={openModal}
        />
      );
    }
  };
  const chatMessages1 = [
    { id: 1, message: receiveMessage1(isDarkTheme), type: "receivemsg", time: "8:16 PM" },
    { id: 2, message: sentMessage1("Good Morning Mam", isDarkTheme), type: "sentmsg", time: "8:17 PM", icon: Bluetick() },
    { id: 3, message: receiveMessage2(isDarkTheme), type: "receivemsg", time: "8:16 PM" },
    { id: 4, message: SentMessage2(isDarkTheme), type: "sentmsg", time: "8:17 PM", icon: Bluetick() },
    { id: 5, message: SentMessage6(isDarkTheme), type: "sentmsg" },
    { id: 6, message: receiveMessage3(isDarkTheme), type: "receivemsg", time: "8:16 PM" },
    { id: 7, message: sentMessage3(isDarkTheme), type: "sentmsg", time: "8:17 PM", icon: Bluetick(), msg: Reactmsg() },
    { id: 8, message: receiveMessage4(isDarkTheme), type: "receivemsg", time: "8:16 PM" },
    { id: 9, message: sentMessage4(isDarkTheme), type: "sentmsg", time: "8:17 PM", icon: Tick(), text: 'Edited', iconName: 'circle', iconType: 'font-awesome' },
    { id: 10, message: sentMessage5(isDarkTheme), type: "sentmsg" }


  ];

  const translateXValues = chatMessages1.map(() => useRef(new Animated.Value(0)));
  const onSwipeGestureEventForItem = (index) =>
    Animated.event(
      [
        {
          nativeEvent: {
            translationX: translateXValues[index].current,
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    );
  const onSwipeGestureStateChangeForItem = (event, index) => {
    if (event.nativeEvent.oldState === GestureState.ACTIVE) {
      const swipeDistance = event.nativeEvent.translationX;
      if (swipeDistance > 50) {
        handleSwipeAction();
        console.log('Hi');
      }
      Animated.spring(translateXValues[index].current, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.purpleVar3} />
      <GestureHandlerRootView style={flex1}>
        <View style={flex1}>
          <ImageBackground
            source={ChatBackgroundImg}
            style={styles.backgroundImage}
            imageStyle={{ opacity: 0.1, backgroundColor: isDark() ? 'rgba(194, 194, 194,0.1)' : 'rgba(220, 198, 224, 0.1)' }} >
            {renderHeader()}
            <ScrollView style={flex1}>
              <View style={[{ alignItems: 'center' }, pt10]}>
                <DayDetails />
              </View>
              {chatMessages1.map((item, index) => (
                <PanGestureHandler
                  key={item.id}
                  onGestureEvent={(event) => onSwipeGestureEventForItem(index)(event)}
                  onHandlerStateChange={(event) => onSwipeGestureStateChangeForItem(event, index)}
                  activeOffsetX={[-200, 50]}
                >
                  <Animated.View
                    style={[
                      {
                        transform: [{ translateX: translateXValues[index].current }],
                      },
                    ]}
                  >
                    <TouchableOpacity style={[item.type === 'sentmsg' ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }, { backgroundColor: selectedCards.includes(item.id) ? (isDark() ? colors.darkModeVar6 : colors.purpleVar4) : 'transparent', paddingHorizontal:20, marginBottom: 4 }]}
                      onPress={() => {
                        if (selectedCards.length === 0) {
                          console.log('--');
                        } else {
                          toggleCardSelection(item.id); // Use the toggle function from props
                        }
                      }}
                      onLongPress={(event) => {
                        handleCardSelectionChange(event, item.id);
                        if (!selectedCards.includes(item.id)) {
                          toggleCardSelection(item.id);
                        }
                      }}
                    >
                      {item.id === 10 || item.id === 5 ?
                        null : <View style={flexRow}>
                          <H12font400Grey>{item.time}</H12font400Grey>
                          {item.id === 9 && (
                            <View style={flexRow}>
                              <View style={{ justifyContent: 'center', marginRight: 8, marginLeft: 8, bottom: 1 }}>
                                <CustomIcon name='circle' type="font-awesome" size={6} color={isDark()?colors.greyVar4:colors.greyVar3} />
                              </View>
                              <H12font400Grey>{item.text}</H12font400Grey>
                            </View>
                          )}
                          <View style={pl6}>{item.icon}</View>
                        </View>
                      }
                      {item.message}
                      {item.id === 7 && <TouchableOpacity onPress={handleReactMsg}>{item.msg}</TouchableOpacity>}
                    </TouchableOpacity>
                  </Animated.View>
                </PanGestureHandler>

              ))}
            </ScrollView>
            {isSwiped ? (
              <ReplyFooterView onIconClick={handleReplyFooterIconClick} />
            ) : (
              <FooterChatView />
            )}
          </ImageBackground>
        </View>
        {isModalVisible && (
          <ReactModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            selectedTab={selectedTab}
            handleTabPress={handleTabPress}
            tabs={tabs}
          />
        )}
        {selectedModalId === 8 && (
          <IconModal
            isVisible={true}
            onClose={IconcloseModal}
            contentComponent={<ClearChatModal />}
            iconName='trash-o'
            iconType='FontAwesome'
            iconSize={25}
          />
        )}

        {emojiModal && (
          <Modal isVisible={emojiModal} onBackdropPress={() => setEmojiModal(false)} backdropOpacity={0} animationIn={chatMessages1.find((message) => message.id === selectedCards[0])?.type === 'sentmsg' ? 'fadeInRight' : 'fadeInLeft'}
            style={{
              position: 'absolute',
              left: modalPosition.x,
              top: modalPosition.y - 100,
              alignItems: chatMessages1.find((message) => message.id === selectedCards[0])?.type === 'sentmsg' ? 'flex-start' : 'flex-end',
            }}
          >
            <View style={[styles.modalContent, { backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.white }]}>
              {Emojidata.map((item) => (
                <TouchableOpacity key={item.id}  >
                  <EmojiText>{item.emoji}</EmojiText>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
        )}
      </GestureHandlerRootView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  modalContent: {
    height: 42,
    width: 221,
    borderRadius: 20,
    padding: 4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 2

  },

});

export default ChatView;

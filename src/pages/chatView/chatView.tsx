import React, { Fragment, useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { colors } from '../../utils/colors';
import { pt10 } from '../../components/commonStyles';
import { labels } from '../../utils/labels';
import { FooterChatView, HeaderChatView, LongPressedHaeder, ReplyFooterView } from './Messagecomponents/messages';
import Modal from 'react-native-modal';
import { DevWidth } from '../../utils/device';
import { screenName } from '../../utils/screenName';
import { ChatBackgroundImg } from '../../utils/png';
import { isDark } from '../../Theme/ThemeContext';
import { EditModal, EditModal2, IconModal, ReactModal } from '../../components/commonModal';
import { ClearChatModal } from '../../ModalContents/IconModelContents';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { chatMessages, tabs } from '../../utils/data/chatViewData';
import { Emojidata } from '../../utils/data/chatViewData';
import { DayDetails } from '../../components/chatViewComponents';
import ChatMessage from '../../components/chatView/chatMessages';

const ChatView = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [selectedModalId, setSelectedModalId] = useState(null);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [editModal, setEditModal] = useState(false);
  const [editModal2, setEditModal2] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);
  const [emojiModal, setEmojiModal] = useState(false)


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
  const openModalEdit = () => {
    setEditModal(true)
    setEditModal2(true)

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
  const handleCardSelectionChange = () => {

    setEmojiModal(true)
  };



  const [editedMessageText, setEditedMessageText] = useState(null);

  const handleEditModal2Press = (text) => {
    setEditedMessageText(text);
    setEditModal2(false);
    setEditModal(false)
  };


  const renderHeader = () => {
    if (selectedCards.length > 0) {
      return (
        <LongPressedHaeder
          messageType={chatMessages.find((message) => selectedCards.includes(message.id))?.type}
          EditModal={openModalEdit}
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

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.purpleVar3} />
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDark() ? colors.black : colors.white }}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={ChatBackgroundImg}
            style={styles.backgroundImage}
            imageStyle={{ opacity: 0.1, backgroundColor: 'rgba(200, 150, 255, 0.1)' }} >
            {renderHeader()}
            <ScrollView style={{ flex: 1 }}>
              <View style={[{ alignItems: 'center' }, pt10]}>
                <DayDetails />
              </View>
              {chatMessages.map((message) => (
                <ChatMessage key={message.id} message={message}
                  onSwipeRight={handleSwipeAction}
                  onPress={handleReactMsg}
                  hanldeLogPress={handleCardSelectionChange}
                  selectedCards={selectedCards}
                  toggleCardSelection={toggleCardSelection}
                  editedMessageText={editedMessageText}

                />
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

        {editModal && <EditModal isVisible={editModal} onClose={() => setEditModal(false)}  />}
        {editModal2 && <EditModal2 isVisible={editModal} onClose={() => setEditModal(false)}   onEditModal2Press={handleEditModal2Press}/>}

        {emojiModal && (
          <Modal isVisible={emojiModal} onBackdropPress={() => setEmojiModal(false)} backdropOpacity={0}
            style={{
              position: 'absolute',
              top: modalPosition.top,
              left: modalPosition.left,
            }}
          >
            <View style={styles.modalContent}>
              {Emojidata.map((item) => (
                <TouchableOpacity key={item.id} >
                  <Text style={{ fontSize: 15, color: colors.yellow }}>{item.emoji}</Text>
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
  receiveMsgCard: {
    backgroundColor: colors.white,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10
  },
  sndMsgCard: {
    backgroundColor: colors.purpleVar1,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10
  },
  footerView: {
    backgroundColor: colors.white,
    height: 100,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    borderTopStartRadius: 10,
  },
  sideMenuStyle: {
    margin: 0,
    width: DevWidth * 0.65,
  },
  modal: {
    backgroundColor: 'white',
    height: 200,
    margin: 0, 
    alignItems: undefined,
    justifyContent: undefined,
  },
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
  modalContent: {
    height: 40,
    width: 200,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 2

  },

});

export default ChatView;



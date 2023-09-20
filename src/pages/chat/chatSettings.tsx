import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { ButtonFull } from '../../components/commonButtons';
import labels from '../../utils/labels';

export type ChatSettingsProps = {};

const ChatSettings = (props: ChatSettingsProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };



  return (
    <View>
      <Text>chatSettings component</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={{ color: 'black', fontSize: 25 }}>Theme</Text>
        <ButtonFull
          disabled={false}
          funCallback={() => { }}
          label={labels.chat}
          style={{ marginVertical: 0 }}
        />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* Add your modal content here */}
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}
          >
            <Text>This is your theme modal</Text>
            {/* Add more content and controls for your theme settings */}
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatSettings;

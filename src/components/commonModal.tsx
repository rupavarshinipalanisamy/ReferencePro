import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Modal as RNmodal, TextInput } from 'react-native';
import { colors } from '../utils/colors';
import { labels } from '../utils/labels';
import { HalfCircle, HalfCircle2, ModalBg, ModalContainer, ModalContent, ModalContent1 } from '../styledComponent/styledComponent';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh10, mh20, mh30, mt10, mt15, mv20, spaceBetween } from './commonStyles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../utils/screenName';
import { H14BlackText, H14font400Gray4, H16fontNormalGray4, H18fontBoldBlack } from './commonText';
import { chooseTheme } from '../utils/data/modalData';
import { RadioButton, RadioButtonRound, RowSpaceBetween, SelectedRadioBtn } from './commonView';
import CustomIcon from '../utils/Icons';
import { LongPurpleButton, SmallButton } from './commonButtons';
import { isDark, useTheme } from '../Theme/ThemeContext';
import { DevHeight, DevWidth } from '../utils/device';
import { All, ReactMsgTabControl } from './chatViewComponents';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CreatePasswordLogo2 } from '../utils/svg';


export const ThemeModal: React.FC<CommonModalProps & { onThemeSelect: (themeName: string) => void, selectedTheme: string }> = ({
  isVisible,
  onClose,
  onThemeSelect,
  selectedTheme,

}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);

  };
  const { toggleTheme } = useTheme();
  useEffect(() => {
    async function loadSelectedTheme() {
      try {
        const storedTheme = await AsyncStorage.getItem('selectedTheme');
        if (storedTheme !== null) {
          setSelectedStatus(storedTheme);
        }
      } catch (error) {
        console.error('Error loading selected theme from AsyncStorage:', error);
      }
    }
    loadSelectedTheme();
  }, []);

  const renderRadio = (status: string) => {
    return (
      <RadioButton
        onPress={() => handleStatusSelect(status)}>

        <RadioButtonRound style={{
          backgroundColor: selectedStatus === status ? colors.purpleVar3 : isDark() ? colors.darkModeVar6 : colors.white,
          borderColor: isDark() ? colors.darkModeVar5 : colors.greyVar2
        }}>
          {selectedStatus === status && (
            <SelectedRadioBtn />
          )}
        </RadioButtonRound>
        <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
      </RadioButton>
    );
  };

  const resetRadioSelection = () => {
    setSelectedStatus(selectedTheme);
    setIsCancelButtonActive(false);
  };

  const buttonPress = async () => {
    setIsCancelButtonActive(true);
    if (selectedStatus !== selectedTheme) {
      onThemeSelect(selectedStatus);
      console.log(`Selected status: ${selectedStatus}`);
      try {
        await AsyncStorage.setItem('selectedTheme', selectedStatus);
      } catch (error) {
        console.error('Error saving selected theme to AsyncStorage:', error);
      }
      toggleTheme();
      onClose();
    }
  };

  return (
    <View style={[flex1]}>
      <RNmodal transparent={true} animationType="slide" visible={isVisible} onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View >
              <View style={{ backgroundColor: colors.purpleVar3, height: 47, width: 47, borderRadius: 25, bottom: 43, alignSelf: 'center', justifyContent: 'center' }}>
                <View style={[alignItemsCenter, justyfyCenter]}>
                  <CustomIcon name="device-mobile" size={16} color={colors.white} type={'octicons'} />
                </View>
              </View>
              <H18fontBoldBlack style={{ bottom: 15 }}>{labels.chooseTheme}</H18fontBoldBlack>
              <View >
                {chooseTheme.map((data, index) => {
                  return (
                    <View key={data.id} style={[flexRow, spaceBetween]}>
                      <View style={{ paddingVertical: 10 }}>
                        <TouchableOpacity>
                          <View key={data.id}>
                            {renderRadio(data.status)}
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>

            <RowSpaceBetween style={[mt15]}>
              <SmallButton
                width={DevWidth / 3.15}
                title={labels.cancel}
                backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                textColor={isCancelButtonActive ? colors.white : isDark() ? colors.redVar3 : colors.greyVar4}
                onChange={() => {
                  resetRadioSelection();
                  onClose();
                }}
                borderWidth={isCancelButtonActive ? 0 : 1} />
              <SmallButton
                width={DevWidth / 3.15}
                title={labels.ok}
                backgroundColor={isCancelButtonActive ? (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white) : colors.purpleVar3}
                textColor={isCancelButtonActive ? isDark() ? colors.redVar3 : colors.greyVar4 : colors.white}
                onChange={buttonPress}
                borderWidth={isCancelButtonActive ? 1 : 0} />
            </RowSpaceBetween>
          </ModalContent>
        </ModalContainer>
      </RNmodal>
    </View>
  );
};




export type CommonModalProps = {
  isVisible: boolean;
  onClose: () => void;

}


export const CommonModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const navigation = useNavigation();

  const myAppBtnPress = () => {
    navigation.navigate(screenName.Chats as never);
    onClose();
  }

  return (
    <View style={{ flex: 1 }}>
      <RNmodal transparent={true} animationType="none" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle />
          <ModalContent>
            <ModalBg>
              <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 50 }}>
                <CreatePasswordLogo2 />
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 25 }}>
                <H18fontBoldBlack>{labels.pwdChanged}</H18fontBoldBlack>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <H14font400Gray4 >{labels.pwdChangedContent}</H14font400Gray4>
                <H14font400Gray4 >{labels.suceessfully}</H14font400Gray4>
              </View>
              <View style={{ margin: 20 }}>
                <LongPurpleButton
                  title={labels.backToMyapp}
                  onChange={myAppBtnPress}
                />
              </View>
            </ModalBg>
          </ModalContent>
        </ModalContainer>
      </RNmodal>
    </View>
  );
};






// =========================================================  ICON MODAL  =======================================

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  contentComponent: React.ReactNode;
  iconName: string;
  iconType: string;
  iconSize: number;
}


export const IconModal: React.FC<CustomModalProps> = ({ isVisible, onClose, contentComponent, iconName, iconType, iconSize }) => {
  return (
    <RNmodal transparent={true} animationType="none" visible={isVisible} onRequestClose={onClose} >
      <View style={{ flex: 1 }}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent1 style={{}}>
            <View style={{ backgroundColor: colors.purpleVar3, height: 47, width: 47, borderRadius: 25, bottom: 25, alignSelf: 'center', justifyContent: 'center' }}>
              <View style={[alignItemsCenter, justyfyCenter]}>
                <CustomIcon name={iconName} size={iconSize} color={colors.white} type={iconType} />
              </View>
            </View>
            {contentComponent}
          </ModalContent1>
        </ModalContainer>
      </View>
    </RNmodal>
  );
};
// =========================================================  Emoji MODAL  =======================================

export const ReactModal = ({ isVisible, closeModal, selectedTab, handleTabPress, tabs }) => {
  return (
    <Modal
      style={{ margin: 0, position: 'absolute', bottom: 0, width: '100%' }}
      isVisible={isVisible}
      onBackdropPress={closeModal}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: DevHeight / 3.3,
              backgroundColor: colors.white,
              paddingTop: 40,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30
            }}
          >
            <View>
              <ReactMsgTabControl tabs={tabs} activeTab={selectedTab} onTabPress={handleTabPress} />
              {selectedTab === "All" && (
                <All />
              )}
              {selectedTab === "👍" && <All />}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};


// =========================================================  EDIT MODAL  =======================================
export const EditModal = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5} style={{ alignItems: 'flex-end', marginTop: DevHeight / 1.5 }}>
      <View style={{ backgroundColor: colors.purpleVar1, borderTopLeftRadius: 8, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, padding: 10 }}>
        <H14BlackText>
          Thank You Mam
        </H14BlackText>
      </View>
    </Modal >
  );
};
export const EditModal2 = ({ isVisible, onClose, onEditModal2Press }) => {

  const [inputText, setInputText] = useState('');
  const [editText, setEditText] = useState('Thank You Mam')
  const handleDone = () => {
    onEditModal2Press(inputText); // Pass the input text to the function in the parent component
  };
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0} style={{ margin: 0, position: 'absolute', bottom: 0, width: '100%' }}>
      <View style={{ backgroundColor: colors.white, alignItems: 'center', height: DevHeight / 9.5, paddingHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ width: DevWidth / 1.3, height: 40, backgroundColor: 'white', borderColor: colors.greyVar2, borderWidth: 2, borderRadius: 6, marginTop: 30, bottom: 8 }}>
          <View style={{ flexDirection: 'row', width: '80%', height: 40, paddingHorizontal: 2, alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
              <CustomIcon name='smiley' type="octicons" size={16} color={colors.greyVar4} />
              <TextInput
                value={editText}
                style={{ flex: 1, marginLeft: 5, color: colors.greyVar4, fontSize: 14, fontWeight: '400' }}
                placeholder=""
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: colors.purpleVar3, height: 40, width: 40, borderRadius: 12, marginLeft: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', bottom: 15 }}
          onPress={handleDone}
        >
          <CustomIcon name='done' type="MaterialIcons" color={colors.white} size={18} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};



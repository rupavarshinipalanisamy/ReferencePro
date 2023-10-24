import React, { useState ,useEffect} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback, Modal as RNmodal, TextInput, Platform } from 'react-native';
import { colors } from '../utils/colors';
import { labels } from '../utils/labels';
import { ButtonContainer1, CheckBox, HalfCircle, HalfCircle2, ModalBg, ModalContainer, ModalContent, ModalContent1 } from '../styledComponent/styledComponent';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mb15, mh10, mh15, mh5, mr5, mt20, p5, pl10, pr10, pr13, spaceBetween } from './commonStyles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../utils/screenName';
import { H12font400Grey, H14BlackText, H14font400Gray4, H14font400grey3black2, H16font600Black, H16fontNormalGray, H16fontNormalGray4, H18fontBoldBlack } from './commonText';
import { chooseTheme, clearAllChats, deleteAllChats, groupsData, lastSee, profilePic } from '../utils/data/modalData';
import { GreyTabView, RadioButton, RadioButtonRound, RowSpaceBetween, SelectedRadioBtn } from './commonView';
import CustomIcon from '../utils/Icons';
import { LongPurpleButton, SmallButton } from './commonButtons';
import { RadioBtn } from './commonComponents';
import { isDark, useTheme } from '../Theme/ThemeContext';
import { DevHeight, DevWidth } from '../utils/device';
import { All, ReactMsgTabControl, Tick } from './chatViewComponents';
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

            <RowSpaceBetween style={[mt14]}>
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
              backgroundColor: isDark() ? colors.darkModeVar4 : colors.white,

              borderTopLeftRadius: 30,
              borderTopRightRadius: 30
            }}
          >
            <GreyTabView />

            <View style={{ paddingTop: 20 }}>
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
      <View style={[flexRow]}>
        <H12font400Grey style={pr10}>8:17 PM</H12font400Grey>
        <Tick />

      </View>

      <View style={{ backgroundColor: isDark() ? colors.darkModeVar4 : colors.purpleVar1, borderTopLeftRadius: 8, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, padding: 10,marginTop:5}}>
        <H14font400grey3black2>
          Thank You Mam
        </H14font400grey3black2>
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
      <View style={{ backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, alignItems: 'center', height: DevHeight / 9.5, paddingHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ width: DevWidth / 1.3, height: 40, backgroundColor: isDark() ? colors.darkModeVar6 : colors.white, borderColor: isDark() ? 'rgba(78,80,114,0.5)' : colors.greyVar2, borderWidth: 2, borderRadius: 6, marginTop: 30, bottom: 8 }}>
          <View style={{ flexDirection: 'row', width: '80%', height: 40, paddingHorizontal: 2, alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
              <CustomIcon name='smiley' type="octicons" size={16} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
              <TextInput
                value={editText}
                style={{ flex: 1, marginLeft: 5, color: isDark() ? colors.greyVar3 : colors.greyVar4, fontSize: 14, fontWeight: '400' }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: colors.purpleVar3, height: 40, width: 40, borderRadius: 12, marginLeft: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', bottom: Plat.OS === 'ios' ? 8 : 15 }}
          onPress={handleDone}
        >
          <CustomIcon name='done' type="MaterialIcons" color={colors.white} size={18} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};



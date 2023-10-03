import React, { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import CreatePasswordLogo from '../../assets/images/modal-logo.svg';
import GalleryLogo from '../../assets/images/gallery-icon.svg';
import OnlineLogo from '../../assets/images/lastseen-logo.svg';
import GroupLogo from '../../assets/images/group-logo.svg';
import ThemeLogo from '../../assets/images/theme-logo.svg';
import ArchieveLogo from '../../assets/images/archieve-logo.svg';
import DeleteLogo from '../../assets/images/delete1-logo.svg';


import { ButtonBook, ButtonSaveandCancel } from './commonButtons';
import { colors } from '../utils/colors';
import { labels } from '../utils/labels';
import { ButtonContainer1, CheckBox, HalfCircle, HalfCircle2, ModalContainer, ModalContent } from '../styledComponent/styledComponent';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mh10, mt20, p5, pl10, pr10, spaceBetween } from './commonStyles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../utils/screenName';
import { H16fontNormalGray, H16fontNormalGray4, H18fontBoldBlack } from './commonText';
import { chooseTheme, clearAllChats, deleteAllChats, groupsData, lastSee, profilePic } from '../utils/data/modalData';
import { RadioButton, RadioButtonRound, SelectedRadioBtn } from './commonView';
import CustomIcon from '../utils/Icons';

export type CommonModalProps = {
  isVisible: boolean;
  onClose: () => void;
}

export const ThemeModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
  };

  const renderRadio = (status: string) => {
    return (
      <RadioButton
        onPress={() => handleStatusSelect(status)}>
        <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
          {selectedStatus === status && (
            <SelectedRadioBtn />
          )}
        </RadioButtonRound>
        <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
      </RadioButton>
    );
  };

  const buttonPress = () => {
    if (selectedStatus) {
      console.log(`Selected status: ${selectedStatus}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <ThemeLogo />
            </View>
            <View >
              <H18fontBoldBlack>{labels.chooseTheme}</H18fontBoldBlack>
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
            <ButtonContainer1 >
              <ButtonSaveandCancel style={{
                backgroundColor: colors.white
              }}
                textStyle={{ color: colors.greyVar4 }}
                funCallback={buttonPress}
                label={labels.cancel} />
              <ButtonSaveandCancel style={{
                backgroundColor: colors.purpleVar3,
              }}
                textStyle={{ color: colors.white }}
                funCallback={buttonPress}
                label={labels.ok} />
            </ButtonContainer1>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};



export const SettingsModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
  };

  const renderRadio = (status: string) => {
    return (
      <RadioButton
        onPress={() => handleStatusSelect(status)}>
        <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
          {selectedStatus === status && (
            <SelectedRadioBtn />
          )}
        </RadioButtonRound>
        <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
      </RadioButton>
    );
  };

  const buttonPress = () => {
    if (selectedStatus) {
      console.log(`Selected status: ${selectedStatus}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <GalleryLogo />
            </View>
            <View style={[]}>
              <H18fontBoldBlack>{labels.profilePhoto}</H18fontBoldBlack>
              <H16fontNormalGray>{labels.profilePicContent}</H16fontNormalGray>
              {profilePic.map((data, index) => {
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
            <ButtonContainer1 >
              <ButtonSaveandCancel style={{
                backgroundColor: colors.white
              }}
                textStyle={{ color: colors.greyVar4 }}
                funCallback={buttonPress}
                label={labels.cancel} />
              <ButtonSaveandCancel style={{
                backgroundColor: colors.purpleVar3,
              }}
                textStyle={{ color: colors.white }}
                funCallback={buttonPress}
                label={labels.saveChange} />
            </ButtonContainer1>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};

export const ArchieveChatModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const buttonPress = () => {
    if (selectedStatus) {
      console.log(`Selected status: ${selectedStatus}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <ArchieveLogo />
            </View>
            <H18fontBoldBlack>{labels.archieveAllChats}</H18fontBoldBlack>
            <H16fontNormalGray>{labels.archiveChatMessage}</H16fontNormalGray>
            <View style={[mt20]}>
              <ButtonContainer1 >
                <ButtonSaveandCancel style={{
                  backgroundColor: colors.white
                }}
                  textStyle={{ color: colors.greyVar4 }}
                  funCallback={buttonPress}
                  label={labels.cancel} />
                <ButtonSaveandCancel style={{
                  backgroundColor: colors.purpleVar3,
                }}
                  textStyle={{ color: colors.white }}
                  funCallback={buttonPress}
                  label={labels.ok} />
              </ButtonContainer1>
            </View>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};


export const LastSeenModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
  };

  const renderRadio = (status: string) => {
    return (
      <RadioButton
        onPress={() => handleStatusSelect(status)}>
        <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
          {selectedStatus === status && (
            <SelectedRadioBtn />
          )}
        </RadioButtonRound>
        <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
      </RadioButton>
    );
  };

  const buttonPress = () => {
    if (selectedStatus) {
      console.log(`Selected status: ${selectedStatus}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <OnlineLogo />
            </View>
            <View>
              <H18fontBoldBlack>{labels.lastSeenandOnline}</H18fontBoldBlack>
              <H16fontNormalGray>{labels.lastseenCon}</H16fontNormalGray>
              {profilePic.map((data, index) => {
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
            <View>
              <H16fontNormalGray>{labels.onlineCon}</H16fontNormalGray>
              {lastSee.map((data, index) => {
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
            <ButtonContainer1 >
              <ButtonSaveandCancel style={{
                backgroundColor: colors.white
              }}
                textStyle={{ color: colors.greyVar4 }}
                funCallback={buttonPress}
                label={labels.cancel} />
              <ButtonSaveandCancel style={{
                backgroundColor: colors.purpleVar3,
              }}
                textStyle={{ color: colors.white }}
                funCallback={buttonPress}
                label={labels.saveChange} />
            </ButtonContainer1>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};


export const DeleteModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [isChecked, setIsChecked] = useState<string | null>(null);


  const toggleCheckbox = (status: string) => {
    setIsChecked(status);
  };

  const renderRadio = (status: string) => {
    return (
      <><RadioButton
        onPress={() => toggleCheckbox(status)}>
        <CheckBox style={{ backgroundColor: isChecked === status ? colors.purpleVar3 : 'transparent' }}>
          {isChecked && (
            <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
        </CheckBox>
        <H16fontNormalGray style={[mh10, justyfyCenter]}>{status}</H16fontNormalGray>
      </RadioButton>
      </>
    );
  };

  const buttonPress = () => {
    if (isChecked) {
      console.log(`Selected status: ${isChecked}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <DeleteLogo />
            </View>
            <View>
              <H18fontBoldBlack>{labels.clearAllChats1}</H18fontBoldBlack>
              <H16fontNormalGray>{labels.deleteMsg}</H16fontNormalGray>
              {clearAllChats.map((data, index) => {
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

            <ButtonContainer1 >
              <ButtonSaveandCancel style={{
                backgroundColor: colors.white
              }}
                textStyle={{ color: colors.greyVar4 }}
                funCallback={buttonPress}
                label={labels.cancel} />
              <ButtonSaveandCancel style={{
                backgroundColor: colors.purpleVar3,
              }}
                textStyle={{ color: colors.white }}
                funCallback={buttonPress}
                label={labels.ok} />
            </ButtonContainer1>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};

export const DeleteAllModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState<string | null>(null);


  const toggleCheckbox = (status: string) => {
    setIsChecked(status);
  };

  const renderRadio = (status: string) => {
    return (
      <><RadioButton
        onPress={() => toggleCheckbox(status)}>
        <CheckBox style={{ backgroundColor: isChecked === status ? colors.purpleVar3 : 'transparent' }}>
          {isChecked && (
            <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
        </CheckBox>
        <H16fontNormalGray style={[mh10, justyfyCenter]}>{status}</H16fontNormalGray>
      </RadioButton>
      </>
    );
  };

  const buttonPress = () => {
    if (isChecked) {
      console.log(`Selected status: ${isChecked}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <DeleteLogo />
            </View>
            <View>
              <H18fontBoldBlack>{labels.deleteAllChats1}</H18fontBoldBlack>
              <H16fontNormalGray>{labels.deleteMsg}</H16fontNormalGray>
              {deleteAllChats.map((data, index) => {
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

            <ButtonContainer1 >
              <ButtonSaveandCancel style={{
                backgroundColor: colors.white
              }}
                textStyle={{ color: colors.greyVar4 }}
                funCallback={buttonPress}
                label={labels.cancel} />
              <ButtonSaveandCancel style={{
                backgroundColor: colors.purpleVar3,
              }}
                textStyle={{ color: colors.white }}
                funCallback={buttonPress}
                label={labels.ok} />
            </ButtonContainer1>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};

export const GroupsModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const navigation = useNavigation();
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
  };

  const renderRadio = (status: string) => {
    return (
      <RadioButton
        onPress={() => handleStatusSelect(status)}>
        <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
          {selectedStatus === status && (
            <SelectedRadioBtn />
          )}
        </RadioButtonRound>
        <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
      </RadioButton>
    );
  };

  const buttonPress = () => {
    if (selectedStatus) {
      console.log(`Selected status: ${selectedStatus}`);
    }
    onClose();
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle2 />
          <ModalContent>
            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
              <GroupLogo />
            </View>
            <View style={[]}>
              <H18fontBoldBlack>{labels.groups}</H18fontBoldBlack>
              <H16fontNormalGray>{labels.groupsCont}</H16fontNormalGray>
              {groupsData.map((data, index) => {
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
            <ButtonContainer1 >
              <ButtonSaveandCancel style={{
                backgroundColor: colors.white
              }}
                textStyle={{ color: colors.greyVar4 }}
                funCallback={buttonPress}
                label={labels.cancel} />
              <ButtonSaveandCancel style={{
                backgroundColor: colors.purpleVar3,
              }}
                textStyle={{ color: colors.white }}
                funCallback={buttonPress}
                label={labels.saveChange} />
            </ButtonContainer1>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};

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
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle />
          <ModalContent>
            <View style={{ backgroundColor: colors.purpleVar1, borderRadius: 6 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 50 }}>
                <CreatePasswordLogo />
              </View>
              <View style={[justyfyCenter, alignItemsCenter]}>
                <H18fontBoldBlack>{labels.pwdChanged}</H18fontBoldBlack>
                <H16fontNormalGray >{labels.pwdChangedContent}</H16fontNormalGray>
                <H16fontNormalGray>{labels.suceessfully}</H16fontNormalGray>
              </View>
              <ButtonBook style={{
                backgroundColor: colors.purpleVar3
              }}
                textStyle={{ color: colors.black }}
                funCallback={myAppBtnPress}
                label={labels.backToMyapp} />
            </View>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};

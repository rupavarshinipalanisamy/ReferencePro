import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback, Modal as RNmodal, TextInput } from 'react-native';
import CreatePasswordLogo from '../../assets/images/modal-logo.svg';
import GalleryLogo from '../../assets/images/gallery-icon.svg';
import OnlineLogo from '../../assets/images/lastseen-logo.svg';
import GroupLogo from '../../assets/images/group-logo.svg';
import ThemeLogo from '../../assets/images/theme-logo.svg';
import ArchieveLogo from '../../assets/images/archieve-logo.svg';
import DeleteLogo from '../../assets/images/delete1-logo.svg';
// import { ButtonBook,  } from './commonButtons';
import { colors } from '../utils/colors';
import { labels } from '../utils/labels';
import { ButtonContainer1, CheckBox, HalfCircle, HalfCircle2, ModalContainer, ModalContent, ModalContent1 } from '../styledComponent/styledComponent';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mb15, mh10, mh15, mh5, mt20, p5, pl10, pr10, spaceBetween } from './commonStyles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../utils/screenName';
import { H14BlackText, H14font400Gray4, H16font600Black, H16fontNormalGray, H16fontNormalGray4, H18fontBoldBlack } from './commonText';
import { chooseTheme, clearAllChats, deleteAllChats, groupsData, lastSee, profilePic } from '../utils/data/modalData';
import { RadioButton, RadioButtonRound, SelectedRadioBtn } from './commonView';
import CustomIcon from '../utils/Icons';
import { LongPurpleButton, SmallButton } from './commonButtons';
import { RadioBtn } from './commonComponents';
import { useTheme } from '../Theme/ThemeContext';
import { DevHeight, DevWidth } from '../utils/device';
import { All, EditFooterView, ReactMsgTabControl } from './chatViewComponents';
import Modal from 'react-native-modal';
import { FooterChatView } from '../pages/chatView/Messagecomponents/messages';


export type CommonModalProps = {
  isVisible: boolean;
  onClose: () => void;

}



// export type CommonModalProps = {
//   isVisible: boolean;
//   onClose: () => void;
// }

export const ThemeModal: React.FC<CommonModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);

  };
  const { toggleTheme } = useTheme();

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
      if (selectedStatus === labels.dark) {
        toggleTheme()
        console.log("Changing to Dark Theme");
      } else {
        toggleTheme();
        console.log("Changing to Light Theme");
      }
    }
    onClose();
  };

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

            <SmallButton
              title='cancel'
              onChange={buttonPress}
              backgroundColor={colors.purpleVar1}


            />
            <SmallButton
              title='ok'
              onChange={buttonPress}
              backgroundColor={colors.white}


            />
            {/* <ButtonContainer1 >
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
            </ButtonContainer1> */}
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};








// export const SettingsModal: React.FC<CommonModalProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

//   const handleStatusSelect = (status: string) => {
//     setSelectedStatus(status);
//   };

//   const renderRadio = (status: string) => {
//     return (
//       <RadioButton
//         onPress={() => handleStatusSelect(status)}>
//         <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
//           {selectedStatus === status && (
//             <SelectedRadioBtn />
//           )}
//         </RadioButtonRound>
//         <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
//       </RadioButton>
//     );
//   };

//   const buttonPress = () => {
//     if (selectedStatus) {
//       console.log(`Selected status: ${selectedStatus}`);
//     }
//     onClose();
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Modal transparent={true} animationType="slide" visible={isVisible}
//         onRequestClose={onClose}>
//         <ModalContainer>
//           <HalfCircle2 />
//           <ModalContent>
//             <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
//               <GalleryLogo />
//             </View>
//             <View style={[]}>
//               <H18fontBoldBlack>{labels.profilePhoto}</H18fontBoldBlack>
//               <H16fontNormalGray>{labels.profilePicContent}</H16fontNormalGray>
//               {profilePic.map((data, index) => {
//                 return (
//                   <View key={data.id} style={[flexRow, spaceBetween]}>
//                     <View style={{ paddingVertical: 10 }}>
//                       <TouchableOpacity>
//                         <View key={data.id}>
//                           {renderRadio(data.status)}
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               })}
//             </View>
//             <ButtonContainer1 >
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.white
//               }}
//                 textStyle={{ color: colors.greyVar4 }}
//                 funCallback={buttonPress}
//                 label={labels.cancel} />
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.purpleVar3,
//               }}
//                 textStyle={{ color: colors.white }}
//                 funCallback={buttonPress}
//                 label={labels.saveChange} />
//             </ButtonContainer1>
//           </ModalContent>
//         </ModalContainer>
//       </Modal>
//     </View>
//   );
// };

// export const ArchieveChatModal: React.FC<CommonModalProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

//   const buttonPress = () => {
//     if (selectedStatus) {
//       console.log(`Selected status: ${selectedStatus}`);
//     }
//     onClose();
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Modal transparent={true} animationType="slide" visible={isVisible}
//         onRequestClose={onClose}>
//         <ModalContainer>
//           <HalfCircle2 />
//           <ModalContent>
//             <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
//               <ArchieveLogo />
//             </View>
//             <H18fontBoldBlack>{labels.archieveAllChats}</H18fontBoldBlack>
//             <H16fontNormalGray>{labels.archiveChatMessage}</H16fontNormalGray>
//             <View style={[mt20]}>
//               <ButtonContainer1 >
//                 <ButtonSaveandCancel style={{
//                   backgroundColor: colors.white
//                 }}
//                   textStyle={{ color: colors.greyVar4 }}
//                   funCallback={buttonPress}
//                   label={labels.cancel} />
//                 <ButtonSaveandCancel style={{
//                   backgroundColor: colors.purpleVar3,
//                 }}
//                   textStyle={{ color: colors.white }}
//                   funCallback={buttonPress}
//                   label={labels.ok} />
//               </ButtonContainer1>
//             </View>
//           </ModalContent>
//         </ModalContainer>
//       </Modal>
//     </View>
//   );
// };


// export const LastSeenModal: React.FC<CommonModalProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

//   const handleStatusSelect = (status: string) => {
//     setSelectedStatus(status);
//   };

//   const renderRadio = (status: string) => {
//     return (
//       <RadioButton
//         onPress={() => handleStatusSelect(status)}>
//         <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
//           {selectedStatus === status && (
//             <SelectedRadioBtn />
//           )}
//         </RadioButtonRound>
//         <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
//       </RadioButton>
//     );
//   };

//   const buttonPress = () => {
//     if (selectedStatus) {
//       console.log(`Selected status: ${selectedStatus}`);
//     }
//     onClose();
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Modal transparent={true} animationType="slide" visible={isVisible}
//         onRequestClose={onClose}>
//         <ModalContainer>
//           <HalfCircle2 />
//           <ModalContent>
//             <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
//               <OnlineLogo />
//             </View>
//             <View>
//               <H18fontBoldBlack>{labels.lastSeenandOnline}</H18fontBoldBlack>
//               <H16fontNormalGray>{labels.lastseenCon}</H16fontNormalGray>
//               {profilePic.map((data, index) => {
//                 return (
//                   <View key={data.id} style={[flexRow, spaceBetween]}>
//                     <View style={{ paddingVertical: 10 }}>
//                       <TouchableOpacity>
//                         <View key={data.id}>
//                           {renderRadio(data.status)}
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               })}
//             </View>
//             <View>
//               <H16fontNormalGray>{labels.onlineCon}</H16fontNormalGray>
//               {lastSee.map((data, index) => {
//                 return (
//                   <View key={data.id} style={[flexRow, spaceBetween]}>
//                     <View style={{ paddingVertical: 10 }}>
//                       <TouchableOpacity>
//                         <View key={data.id}>
//                           {renderRadio(data.status)}
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               })}
//             </View>
//             <ButtonContainer1 >
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.white
//               }}
//                 textStyle={{ color: colors.greyVar4 }}
//                 funCallback={buttonPress}
//                 label={labels.cancel} />
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.purpleVar3,
//               }}
//                 textStyle={{ color: colors.white }}
//                 funCallback={buttonPress}
//                 label={labels.saveChange} />
//             </ButtonContainer1>
//           </ModalContent>
//         </ModalContainer>
//       </Modal>
//     </View>
//   );
// };


// export const DeleteModal: React.FC<CommonModalProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const [isChecked, setIsChecked] = useState<string | null>(null);


//   const toggleCheckbox = (status: string) => {
//     setIsChecked(status);
//   };

//   const renderRadio = (status: string) => {
//     return (
//       <><RadioButton
//         onPress={() => toggleCheckbox(status)}>
//         <CheckBox style={{ backgroundColor: isChecked === status ? colors.purpleVar3 : 'transparent' }}>
//           {isChecked && (
//             <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
//         </CheckBox>
//         <H16fontNormalGray style={[mh10, justyfyCenter]}>{status}</H16fontNormalGray>
//       </RadioButton>
//       </>
//     );
//   };

//   const buttonPress = () => {
//     if (isChecked) {
//       console.log(`Selected status: ${isChecked}`);
//     }
//     onClose();
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Modal transparent={true} animationType="slide" visible={isVisible}
//         onRequestClose={onClose}>
//         <ModalContainer>
//           <HalfCircle2 />
//           <ModalContent>
// <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
//   <DeleteLogo />
// </View>
//             <View>
//               <H18fontBoldBlack>{labels.clearAllChats1}</H18fontBoldBlack>
//               <H16fontNormalGray>{labels.deleteMsg}</H16fontNormalGray>
//               {clearAllChats.map((data, index) => {
//                 return (
//                   <View key={data.id} style={[flexRow, spaceBetween]}>
//                     <View style={{ paddingVertical: 10 }}>
//                       <TouchableOpacity>
//                         <View key={data.id}>
//                           {renderRadio(data.status)}
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               })}
//             </View>

//             <ButtonContainer1 >
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.white
//               }}
//                 textStyle={{ color: colors.greyVar4 }}
//                 funCallback={buttonPress}
//                 label={labels.cancel} />
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.purpleVar3,
//               }}
//                 textStyle={{ color: colors.white }}
//                 funCallback={buttonPress}
//                 label={labels.ok} />
//             </ButtonContainer1>
//           </ModalContent>
//         </ModalContainer>
//       </Modal>
//     </View>
//   );
// };

// export const DeleteAllModal: React.FC<CommonModalProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const navigation = useNavigation();
//   const [isChecked, setIsChecked] = useState<string | null>(null);


//   const toggleCheckbox = (status: string) => {
//     setIsChecked(status);
//   };

//   const renderRadio = (status: string) => {
//     return (
//       <><RadioButton
//         onPress={() => toggleCheckbox(status)}>
//         <CheckBox style={{ backgroundColor: isChecked === status ? colors.purpleVar3 : 'transparent' }}>
//           {isChecked && (
//             <CustomIcon name="check" size={16} color={colors.white} type={'MaterialCommunityIcons'} />)}
//         </CheckBox>
//         <H16fontNormalGray style={[mh10, justyfyCenter]}>{status}</H16fontNormalGray>
//       </RadioButton>
//       </>
//     );
//   };

//   const buttonPress = () => {
//     if (isChecked) {
//       console.log(`Selected status: ${isChecked}`);
//     }
//     onClose();
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Modal transparent={true} animationType="slide" visible={isVisible}
//         onRequestClose={onClose}>
//         <ModalContainer>
//           <HalfCircle2 />
//           <ModalContent>
//             <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
//               <DeleteLogo />
//             </View>
//             <View>
//               <H18fontBoldBlack>{labels.deleteAllChats1}</H18fontBoldBlack>
//               <H16fontNormalGray>{labels.deleteMsg}</H16fontNormalGray>
//               {deleteAllChats.map((data, index) => {
//                 return (
//                   <View key={data.id} style={[flexRow, spaceBetween]}>
//                     <View style={{ paddingVertical: 10 }}>
//                       <TouchableOpacity>
//                         <View key={data.id}>

//                           {renderRadio(data.status)}
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               })}
//             </View>

//             <ButtonContainer1 >
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.white
//               }}
//                 textStyle={{ color: colors.greyVar4 }}
//                 funCallback={buttonPress}
//                 label={labels.cancel} />
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.purpleVar3,
//               }}
//                 textStyle={{ color: colors.white }}
//                 funCallback={buttonPress}
//                 label={labels.ok} />
//             </ButtonContainer1>
//           </ModalContent>
//         </ModalContainer>
//       </Modal>
//     </View>
//   );
// };

// export const GroupsModal: React.FC<CommonModalProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const navigation = useNavigation();
//   const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

//   const handleStatusSelect = (status: string) => {
//     setSelectedStatus(status);
//   };

//   const renderRadio = (status: string) => {
//     return (
//       <RadioButton
//         onPress={() => handleStatusSelect(status)}>
//         <RadioButtonRound style={{ borderColor: selectedStatus === status ? colors.purpleVar3 : colors.black }}>
//           {selectedStatus === status && (
//             <SelectedRadioBtn />
//           )}
//         </RadioButtonRound>
//         <H16fontNormalGray4 style={[mh10]}>{status}</H16fontNormalGray4>
//       </RadioButton>
//     );
//   };

//   const buttonPress = () => {
//     if (selectedStatus) {
//       console.log(`Selected status: ${selectedStatus}`);
//     }
//     onClose();
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <Modal transparent={true} animationType="slide" visible={isVisible}
//         onRequestClose={onClose}>
//         <ModalContainer>
//           <HalfCircle2 />
//           <ModalContent>
//             <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
//               <GroupLogo />
//             </View>
//             <View style={[]}>
//               <H18fontBoldBlack>{labels.groups}</H18fontBoldBlack>
//               <H16fontNormalGray>{labels.groupsCont}</H16fontNormalGray>
//               {groupsData.map((data, index) => {
//                 return (
//                   <View key={data.id} style={[flexRow, spaceBetween]}>
//                     <View style={{ paddingVertical: 10 }}>
//                       <TouchableOpacity>
//                         <View key={data.id}>
//                           {renderRadio(data.status)}
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               })}
//             </View>
//             <ButtonContainer1 >
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.white
//               }}
//                 textStyle={{ color: colors.greyVar4 }}
//                 funCallback={buttonPress}
//                 label={labels.cancel} />
//               <ButtonSaveandCancel style={{
//                 backgroundColor: colors.purpleVar3,
//               }}
//                 textStyle={{ color: colors.white }}
//                 funCallback={buttonPress}
//                 label={labels.saveChange} />
//             </ButtonContainer1>
//           </ModalContent>
//         </ModalContainer>
//       </Modal>
//     </View>
//   );
// };






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
            <View style={{ backgroundColor: colors.purpleVar1, borderRadius: 15 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 50 }}>
                <CreatePasswordLogo />
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
            </View>
          </ModalContent>
        </ModalContainer>
      </Modal>
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
export const EditModal2 = ({ isVisible, onClose,onEditModal2Press }) => {

  const [inputText, setInputText] = useState('');
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
                style={{ flex: 1, marginLeft: 5, color: colors.greyVar4, fontSize: 14, fontWeight: '400' }}
                placeholder="Type here..."
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



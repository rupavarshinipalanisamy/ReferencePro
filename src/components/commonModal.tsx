import React from 'react';
import { Modal, View } from 'react-native';
import CreatePasswordLogo from '../../assets/images/modal-logo.svg';
import { ButtonBook } from './commonButtons';
import { colors } from '../utils/colors';
import {labels} from '../utils/labels';
import { HalfCircle, ModalContainer, ModalContent } from '../styledComponent/styledComponent';
import { alignItemsCenter, b40, b50, justyfyCenter, pl10, pr10, t20 } from './commonStyles';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../utils/screenName';
import { H16fontNormalGray, H18fontBoldBlack } from './commonText';

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
      <Modal transparent={true} animationType="slide" visible={isVisible}
        onRequestClose={onClose}>
        <ModalContainer>
          <HalfCircle />
          <ModalContent>
            <View style={{ backgroundColor: colors.purpleVar1, borderRadius: 6 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <CreatePasswordLogo style={[b50]} />
              </View>
              <View style={[b40, justyfyCenter, alignItemsCenter]}>
                <H18fontBoldBlack>{labels.pwdChanged}</H18fontBoldBlack>
                <View style={[justyfyCenter, alignItemsCenter, t20]}>
                  <H16fontNormalGray style={[pl10, pr10]}>{labels.pwdChangedContent}</H16fontNormalGray>
                  <H16fontNormalGray>{labels.suceessfully}</H16fontNormalGray>
                </View>
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

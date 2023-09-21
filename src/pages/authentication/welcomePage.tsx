import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MainContainer } from '../../components/commonView';
import ChatImage from '../../../assets/images/background_image.svg';
import ToddleImage from '../../../assets/images/welcomepage_center.svg';
import Logo from '../../../assets/images/logo.svg';
import BottomImage from '../../../assets/images/welcomepage_bottom.svg';
import { ButtonContainer, LogoContainer } from '../../styledComponent/styledComponent';
import { ButtonFull } from '../../components/commonButtons';
import labels from '../../utils/labels';
import { colors } from '../../utils/colors';

export type WelcomePageProps = {};

const WelcomePage: React.FC<WelcomePageProps> = (props: WelcomePageProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonLabel: string) => {
    setActiveButton(buttonLabel);
  };

  return (
    <MainContainer>
      <LogoContainer>
        <Logo height={80} width={'50%'} />
        <ToddleImage top={70} />
      </LogoContainer>
      <ChatImage style={{ position: 'absolute' }} />
      <View>
        <ButtonContainer>
          <ButtonFull
            disabled={false}
            funCallback={() => handleButtonClick(labels.logIn)}
            label={labels.logIn}
            color={activeButton === labels.logIn ? 'black' : 'white'} // Change 'white' and 'black' to your desired text colors
            style={{
              marginVertical: 0,
              backgroundColor: activeButton === labels.logIn ? 'white' : 'transparent', // Change 'blue' to your desired background color
            }}
          />
          <ButtonFull
            disabled={false}
            funCallback={() => handleButtonClick(labels.signUp)}
            label={labels.signUp}
            // color={activeButton === labels.signUp ? 'black' : 'white'} 
            style={{
              backgroundColor: activeButton === labels.signUp ? 'white' : 'transparent',
            }}
          />
        </ButtonContainer>
        <BottomImage style={{ position: 'absolute' }} />
      </View>
    </MainContainer>
  );
};

export default WelcomePage;

import React, { useState, Fragment } from 'react';
import { View, StatusBar, Image, ImageBackground, } from 'react-native';
import ToddleImage from '../../../assets/images/welcomepage_center.svg';
import Logo from '../../../assets/images/logo.svg';
import { ButtonContainer, LogoContainer } from '../../styledComponent/styledComponent';
import { ButtonFull } from '../../components/commonButtons';
import {labels} from '../../utils/labels';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { DevHeight, DevWidth } from '../../utils/device';
import { MainContainer } from '../../components/commonView';

export type WelcomePageProps = {};

const WelcomePage: React.FC<WelcomePageProps> = (props: WelcomePageProps) => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonLabel: string) => {
    setActiveButton(buttonLabel);
    if (buttonLabel === labels.logIn) {
      navigation.navigate(screenName.LoginEmail as never);
    } else if (buttonLabel === labels.signUp) {
      navigation.navigate(screenName.SignUp as never);
    }
  };

  return (
    <Fragment>
      <MainContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          source={require('../../../assets/images/png/background-image.png')}
          style={{ width: DevWidth, height: DevHeight, }}>
          <LogoContainer>
            <Logo height={80} width={'50%'} />
            <ToddleImage top={70} />
          </LogoContainer>
          <View>
            <ButtonContainer>
              <ButtonFull
                disabled={false}
                funCallback={() => handleButtonClick(labels.logIn)}
                label={labels.logIn}
                style={{
                  marginVertical: 0,
                  backgroundColor: activeButton === labels.logIn ? colors.white : colors.purpleVar3,
                }}
                textStyle={{ color: activeButton === labels.logIn ? colors.purpleVar3 : colors.white }}
              />
              <ButtonFull
                disabled={false}
                funCallback={() => handleButtonClick(labels.signUp)}
                label={labels.signUp}
                style={{
                  marginVertical: 0,
                  backgroundColor: activeButton === labels.signUp ? colors.white : colors.purpleVar3,
                }}
                textStyle={{ color: activeButton === labels.signUp ? colors.purpleVar3 : colors.white }}
              />
            </ButtonContainer>
            <Image source={require('../../../assets/images/png/welcomepage_bottom.png')}
              style={{ width: DevWidth }} />
          </View>
        </ImageBackground>
      </MainContainer>
    </Fragment>
  );
};

export default WelcomePage;

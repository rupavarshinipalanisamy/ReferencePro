import React, { useState } from 'react';
import { ImageBackground,View } from 'react-native';
import ToddleImage from '../../../assets/images/welcomepage_center.svg';
import Logo from '../../../assets/images/logo.svg';
import { ButtonContainer, LogoContainer } from '../../styledComponent/styledComponent';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { SmallButton } from '../../components/commonButtons';

export type WelcomePageProps = {};

const WelcomePage: React.FC<WelcomePageProps> = (props: WelcomePageProps) => {
  const navigation = useNavigation();
  const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
  const handleCancelButtonClick = () => {
    setIsCancelButtonActive(true);
    navigation.navigate(screenName.LoginEmail as never);

  };

  const handleSaveChangesClick = () => {
    setIsCancelButtonActive(false);
    navigation.navigate(screenName.SignUp as never);

  };

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
      <MainContainer>
        <ImageBackground
          source={require('../../../assets/images/png/background-image.png')}
          style={{ flex: 1 }}>
          <LogoContainer style={{marginTop:50}}>
            <Logo height={80} width={'50%'} />
            <ToddleImage marginTop={70} />
          </LogoContainer>

          <ImageBackground source={require('../../../assets/images/png/welcomepage_bottom.png')}
            style={{ width: '100%', flex: 1 }} >


            {/* <ButtonContainer style={{ position: 'absolute', bottom: 25 }}> */}
           {/* <View style={{flexDirection:'row',position:'absolute',bottom:25, justifyContent:'space-between',alignSelf:'center'}}>
           <SmallButton
              title={labels.logIn}
              width={150}
              backgroundColor={activeButton === labels.logIn ? colors.purpleVar3 : colors.white}
              textColor={activeButton === labels.logIn ? colors.white : colors.purpleVar3}
              onChange={()=>handleButtonClick(labels.logIn)}
              borderWidthColor={'white'}
              borderWidth={isCancelButtonActive ? 0 : 1} 
              />
            <SmallButton
              title={labels.signUp}
              width={150}
              borderWidthColor={'white'}

              backgroundColor={  activeButton === labels.signUp ? colors.white : colors.purpleVar3}
              textColor={activeButton === labels.signUp ? colors.purpleVar3 : colors.white}
              onChange={() => handleButtonClick(labels.signUp)}
              borderWidth={isCancelButtonActive ? 1 : 0} />
           </View> */}
           <View style={{
            marginTop: 300,
            bottom: 20,
            // position:'absolute',
            marginHorizontal:20,
            justifyContent:'space-between',
       
            flexDirection: 'row',
            
          }}>
            <SmallButton
              title={labels.logIn}
              backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
              textColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
              onChange={handleCancelButtonClick}
              borderWidth={isCancelButtonActive ? 1 : 1} 
              borderWidthColor={isCancelButtonActive ? colors.white:colors.white}/>
            <SmallButton
              title={labels.signUp}
              backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
              textColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
              onChange={handleSaveChangesClick}
              borderWidth={isCancelButtonActive ? 1 : 1} 
              borderWidthColor={isCancelButtonActive ? colors.white:colors.white}/>
          </View>
             
          </ImageBackground>
        </ImageBackground>
      </MainContainer>
  );
};

export default WelcomePage;

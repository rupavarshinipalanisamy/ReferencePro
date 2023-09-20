import React from 'react';
import { Text, View } from 'react-native';
import { MainContainer } from '../../components/commonView';
import ChatImage from '../../../assets/images/background_image.svg';
import ToddleImage from '../../../assets/images/welcomepage_center.svg';
import Logo from '../../../assets/images/logo.svg';


export type WelcomePageProps = {
    
};

const WelcomePage: React.FC<WelcomePageProps> = (props: WelcomePageProps) => {
  return (
    <MainContainer>
<View style={{marginTop:}}>
<Logo/>
  </View>       
   <ToddleImage width={50} height={50}/>
       <ChatImage style={{position: "absolute"}}>
       </ChatImage>
    </MainContainer>
  );
};

export default WelcomePage;

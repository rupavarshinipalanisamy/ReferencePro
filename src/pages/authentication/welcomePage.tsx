import React from 'react';
import { Text, View } from 'react-native';
import { MainContainer } from '../../components/commonView';
import ChatImage from '../../../assets/images/background_image.svg';
import ToddleImage from '../../../assets/images/welcomepage_center.svg'

export type WelcomePageProps = {
    
};

const WelcomePage: React.FC<WelcomePageProps> = (props: WelcomePageProps) => {
  return (
    <MainContainer>
        <ToddleImage width={50} height={50}/>
       <ChatImage style={{
      position: "absolute",
   
}}>

      
    </ChatImage>
    </MainContainer>
  );
};

export default WelcomePage;

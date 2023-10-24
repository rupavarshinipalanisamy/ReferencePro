import React, { Fragment, useState } from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import { BtnConatiner, LogoContainer } from '../../styledComponent/styledComponent';
import { labels } from '../../utils/labels';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { colors } from '../../utils/colors';
import { SmallButton, WelcomeButton } from '../../components/commonButtons';
import { ToodleImageDark, ToodleImageLight, WelcomePageLogo, WelcomePageLogoDark } from '../../utils/svg';
import { isDark } from '../../Theme/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthImageBg, AuthImageBottom } from '../../utils/png';
import { flex1, mt20, mt70 } from '../../components/commonStyles';

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

  return (
    <Fragment>
      <View style={[flex1]}>
        <StatusBar backgroundColor={colors.purpleVar3} />
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDark() ? colors.darkModeVar2 : colors.white }}>
          <ImageBackground source={AuthImageBg} style={[flex1]}>
            <LogoContainer>
              <View style={[mt20]}>
                {isDark() ? <WelcomePageLogoDark /> : <WelcomePageLogo />}
              </View>
              <View style={[mt70]}>
                {isDark() ? <ToodleImageDark /> : <ToodleImageLight />}
              </View>
            </LogoContainer>
            <ImageBackground source={AuthImageBottom}
              style={[flex1, { width: '100%' }]} >
              <BtnConatiner>
                <WelcomeButton
                  title={labels.logIn}
                  backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                  textColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                  onChange={handleCancelButtonClick}
                  borderWidth={isCancelButtonActive ? 1 : 1}
                   />
                <WelcomeButton
                  title={labels.signUp}
                  backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                  textColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                  onChange={handleSaveChangesClick}
                  borderWidth={1}
                  borderColor={colors.white}
                   />
              </BtnConatiner>
            </ImageBackground>
          </ImageBackground>
        </GestureHandlerRootView>
      </View>
    </Fragment>
  );
};

export default WelcomePage;
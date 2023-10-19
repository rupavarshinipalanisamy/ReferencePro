import React, { useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './navigation';
import { screenName } from './src/utils/screenName';
import * as Keychain from 'react-native-keychain';
import { getData, storageKeys } from './src/common/asyncStorage';
import { SplashScreenContainer } from './src/styledComponent/styledComponent';
import { h100, w100 } from './src/components/commonStyles';
import { ThemeProvider } from './src/Theme/ThemeContext';

export type AppProps = {};

const App = (props: AppProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    initialCall();
  }, []);

  const initialCall = async () => {
    setTimeout(() => {
      SplashScreen.hide();
      setIsLoading(false);
    }, 1000);

    var loginDetails = await getData(storageKeys.loginDetails);
    if (loginDetails && loginDetails.token) {
    } else {
      await Keychain.resetGenericPassword();
    }
  };

  if (isLoading) {
    return (
      <SplashScreenContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <Image source={require('./assets/images/png/splash_image.png')} style={[w100, h100]} />
      </SplashScreenContainer>
    );
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <RootNavigation initialRouteName={screenName.AddContact} />
      </View>
    </ThemeProvider>
  );
};

export default App;
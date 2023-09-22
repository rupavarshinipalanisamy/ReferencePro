import React from 'react';
import { View, StatusBar } from 'react-native';
import RootNavigation from './navigation';
import { screenName } from './src/utils/screenName';
import { colors } from './src/utils/colors';

export type AppProps = {
  };

const App = (props: AppProps) => {
  return (
    <View style={{flex:1}}>
      
      <RootNavigation initialRouteName={screenName.WelcomePage} />
      {/* <WelcomePage /> */}
    </View>
  );
};

export default App;
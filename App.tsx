import React from 'react';
import { View } from 'react-native';
import RootNavigation from './navigation';
import { screenName } from './src/utils/screenName';

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
import React, { Fragment, useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconBackground, MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { DevHeight } from '../../utils/device';
import { labels } from '../../utils/labels';
import { H15Grey, H16fontBoldBlack, H16fontNormalGray } from '../../components/commonText';
import CustomIcon from '../../utils/Icons';
import { InputContainer1 } from '../../styledComponent/styledComponent';
import { flexRow, mt20, alignItemsCenter, ph10, justyfyCenter, p20, mh20, ph15, m15 } from '../../components/commonStyles';
import { socilProfile } from '../../utils/data/socialServiceData';

export type socialProfilesProps = {};

const Password = (props: socialProfilesProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleToggleClick = () => {
    setIsUnlocked((prevState) => !prevState);
  };

  return (
    <Fragment>
      <MainContainer>
        <StatusBar backgroundColor={colors.white} />

        <View style={styles.topContainerWhiteCard}>
          <View style={[flexRow, mt20, { margin: 15 }]}>
            <View style={[flexRow, alignItemsCenter]}>
              <CustomIcon name='chevron-left' size={20} color={colors.black} type='octicons' />
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '900', paddingHorizontal: 15 }}>{labels.pwdandSec}</Text>
            </View>
          </View>
        </View>
        <View style={[ph15, mt20]}>
          <Text style={{ backgroundColor: colors.purpleVar4, width: '18%', textAlign: 'center', height: 25, color: colors.purpleVar3, borderRadius: 5, fontSize: 14 }}>Security</Text>
          <View style={[mt20, flexRow]}>
            <IconBackground>
              <CustomIcon name='smartphone' size={20} color={colors.purpleVar3} type='Feather' />
            </IconBackground>
            <TouchableOpacity
              style={[styles.toggleButton, isUnlocked ? styles.activeButton : styles.inactiveButton]}
              onPress={handleToggleClick}
            >
              <CustomIcon name={isUnlocked ? 'toggle-on' : 'toggle-off'} size={20} color='white' type='Fontisto' />
            </TouchableOpacity>
          </View>
        </View>
      </MainContainer>
    </Fragment>
  );
};

export default Password;

const styles = StyleSheet.create({
  cardSurface: {
    backgroundColor: colors.purpleVar1,
    padding: 10,
    elevation: 4,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: colors.greyVar3,
  },
  topContainerWhiteCard: {
    backgroundColor: 'white',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    elevation: 4,
    height: DevHeight / 10,
    justifyContent: 'center',
  },
  toggleButton: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  activeButton: {
    backgroundColor: 'green', // Change this to your desired active color
  },
  inactiveButton: {
    backgroundColor: 'red', // Change this to your desired inactive color
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

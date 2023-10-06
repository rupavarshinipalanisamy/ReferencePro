import React, { Fragment, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconBackground, MainContainer, TopContainerWhiteCard } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { StatusBar } from 'react-native';
import CustomIcon from '../../utils/Icons';
import { StyleSheet } from 'react-native';
import SettingAvatar from '../../../assets/images/settings-avatar.svg'
import { justyfyCenter, ml10, alignItemsCenter, flexRow, ph10, mt20, m15 } from '../../components/commonStyles';
import { InputContainer1 } from '../../styledComponent/styledComponent';
import { H14font400Gray4, H15font500Black, H16fontBoldBlack } from '../../components/commonText';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { DevHeight } from '../../utils/device';
import { settingsData } from '../../utils/data/settingsData';

export type settingsScreenProps = {

}

const SettingsScreen = (props: settingsScreenProps) => {
    const navigation = useNavigation()
    const [selectScreen, setSelectScreen] = useState(1);

    const handleTabPress = (screenId: number, screenNameNavigate: string) => {
        setSelectScreen(screenId);
        navigation.navigate(screenNameNavigate as never)
    };

    return (
        <Fragment>
            <MainContainer>
                <StatusBar backgroundColor={colors.white} />
                <TopContainerWhiteCard>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: 17, fontWeight: '900' }}> Settings</Text>
                        <CustomIcon name='search-outline' size={20} color={colors.black} type='Ionicons' />
                    </View>
                </TopContainerWhiteCard>
                <ScrollView>
                    <View style={[m15]}>
                        <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }, styles.cardSurface]}>
                            <View style={{ flexDirection: 'row' }}>
                                <SettingAvatar />
                                <View style={{ paddingHorizontal: 15, }}>
                                    <H15font500Black>Mark Villiams</H15font500Black>
                                    <H14font400Gray4>Hello, I am using Dreamschat</H14font400Gray4>
                                </View>
                            </View>
                            <IconBackground >
                                <CustomIcon name='qr-code' size={20} color={colors.black} type='MaterialIcons' />
                            </IconBackground>
                        </View>
                        <View>
                            {settingsData.map((settingsDatas) => {
                                const isSelected = settingsDatas.id === selectScreen
                                return (
                                    <View key={settingsDatas.id} style={[flexRow, mt20]}>
                                        <InputContainer1>
                                            <View style={[flexRow, alignItemsCenter]}>
                                                <IconBackground>
                                                    <CustomIcon name={settingsDatas.iconName} type={settingsDatas.iconType} size={settingsDatas.iconSize} color={colors.purpleVar3} />
                                                </IconBackground>
                                                <TouchableOpacity key={settingsDatas.id} onPress={() => handleTabPress(settingsDatas.id, settingsDatas.screenName)}>
                                                    <H15font500Black style={[ph10]}>{settingsDatas.name}</H15font500Black>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[justyfyCenter]}>
                                                <TouchableOpacity>
                                                    <CustomIcon name={settingsDatas.iconName1} type={settingsDatas.iconType1} size={settingsDatas.iconSize} color={colors.black} />
                                                </TouchableOpacity>
                                            </View>
                                        </InputContainer1>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </MainContainer>
        </Fragment>
    );
};

export default SettingsScreen


const styles = StyleSheet.create({

    cardSurface: {
        backgroundColor: colors.purpleVar1,
        padding: 10,
        elevation: 4,
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 8,
        shadowColor: colors.greyVar3
    },
    topContainerWhiteCard: {
        backgroundColor: 'white',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        elevation: 4,
        height: DevHeight / 10,
        justifyContent: 'center'
    }

})


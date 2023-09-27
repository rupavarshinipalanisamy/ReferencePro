import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconBackground, MainContainer, TopContainerWhiteCard } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { StatusBar } from 'react-native';
import CustomIcon from '../../utils/Icons';
import { StyleSheet } from 'react-native';
import SettingAvatar from '../../../assets/images/settings-avatar.svg'
import { justyfyCenter, ml10, alignItemsCenter, flexRow, ph10, mt20 } from '../../components/commonStyles';
import { InputContainer1 } from '../../styledComponent/styledComponent';
import { H16fontBoldBlack } from '../../components/commonText';
import { labels } from '../../utils/labels';
import Password from './password';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type settingsScreenProps = {

}

export const SocialIcon = () => {
    const navigation=useNavigation()
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='share-social' size={20} color={colors.purpleVar3} type='Ionicons' />
                    </IconBackground>
                    <TouchableOpacity onPress={na}>
                    <H16fontBoldBlack style={[ph10]}>{labels.socialPro}</H16fontBoldBlack>
                    </TouchableOpacity>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const PasswordIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='fingerprint' size={20} color={colors.purpleVar3} type='entypo' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.pwdandSec}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />

                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const PrivacyIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='lock-closed-outline' size={20} color={colors.purpleVar3} type='Ionicons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.privacy}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const ChatIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='chatbox-outline' size={20} color={colors.purpleVar3} type='Ionicons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.chat}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const NotificationIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='notifications-outline' size={20} color={colors.purpleVar3} type='Ionicons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.notify}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const LanguageIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='language' size={20} color={colors.purpleVar3} type='MaterialIcons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.lang}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const DeviceIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='list' size={20} color={colors.purpleVar3} type='Ionicons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.manageDev}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const TermsandConIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='note-text-outline' size={20} color={colors.purpleVar3} type='MaterialCommunityIcons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.termandCondition}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const PrivacyPolicyIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='privacy-tip' size={20} color={colors.purpleVar3} type='MaterialIcons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.privacyPolicy}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const DeleteIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='trash-outline' size={20} color={colors.purpleVar3} type='Ionicons' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.deleteAcc}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};

export const LogoutIcon = () => {
    return (
        <View style={[flexRow, mt20]}>
            <InputContainer1>
                <View style={[flexRow, alignItemsCenter]}>
                    <IconBackground>
                        <CustomIcon name='logout' size={20} color={colors.purpleVar3} type='AntDesign' />
                    </IconBackground>
                    <H16fontBoldBlack style={[ph10]}>{labels.logout}</H16fontBoldBlack>
                </View>
                <View style={[justyfyCenter]}>
                    <TouchableOpacity>
                        <CustomIcon name='chevron-right' size={20} color={colors.black} type='octicons' />
                    </TouchableOpacity>
                </View>
            </InputContainer1>
        </View>
    );
};


const SettingsScreen = (props: settingsScreenProps) => {
    const navigation=useNavigation()
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
                <View style={{ margin: 15 }}>
                    <View style={styles.cardSurface}>
                        <View>
                            <SettingAvatar />
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>Mark Villiams</Text>
                            <Text style={{ color: colors.greyVar4, fontSize: 14 }}>Hello, I am using Dreamschat</Text>
                        </View>
                    </View>
                    <SocialIcon />
                    <PasswordIcon />
                    <PrivacyIcon />
                    <ChatIcon />
                    <NotificationIcon/>
                    <LanguageIcon/>
                    <DeviceIcon/>
                    <TermsandConIcon/>
                    <PrivacyPolicyIcon/>
                    <DeleteIcon/>
                    <LogoutIcon/>
                </View>
                </ScrollView>
            </MainContainer>
        </Fragment>
    )
}

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
    }

})


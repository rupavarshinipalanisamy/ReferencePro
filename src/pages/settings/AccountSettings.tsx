import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { alignItemsCenter, borderRadius6, flex1, flexRow, justyfyCenter, mh30, ml15, mt20, mv10 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { H12Grey, H15Blackvar2Bold500 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { Chatimg1Img } from '../../utils/png';
import { accountSettingData } from '../../utils/data/settingsData';
import { ImagePicker } from '../../components/commonComponents';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { IconModal } from '../../components/commonModal';
import { StarredAndVerifycodeHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';

export type AccountSettingsProps = {

}


const AccountSettings = (props: AccountSettingsProps) => {
    const [Pic, setPic] = useState('');
    const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

    const navigation = useNavigation();

    const handleImageSelect = (base64Image: string) => {
        setPic(base64Image);
        setIsImagePickerOpen(false);
    };

    const openImagePickerModal = () => {
        setIsImagePickerOpen(true);
    };


    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <StarredAndVerifycodeHeader headerText={labels.AccountSetting} isSearchDot={false} pencilNavigate={() => { navigation.navigate(screenName.EditAccountSettings as never) }} />
            <View style={[mt20, alignItemsCenter, justyfyCenter]}>
                <View>
                    {Pic ? (
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${Pic}` }}
                            style={[{ height: 100, width: 100, borderRadius: 100 }]}
                        />
                    ) : (
                        <Image
                            source={Chatimg1Img}
                            style={[{ height: 100, width: 100, borderRadius: 100 }]}
                        />
                    )}
                    <TouchableOpacity onPress={openImagePickerModal} style={[{ height: 30, width: 30, borderRadius: 100, backgroundColor: colors.purpleVar3 }, styles.status, alignItemsCenter, justyfyCenter]}>
                        <CustomIcon type='font-awesome' name='camera' color={colors.white} size={12} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[mt20]}>
                {
                    accountSettingData.map((item) => {
                        return (
                            <View style={[mh30, mv10, flexRow, alignItemsCenter]} key={item.id}>
                                <View style={[{ height: 34, width: 34, backgroundColor: isDark() ? `rgba(158, 158, 158, 0.1)` : colors.purpleVar4 }, borderRadius6, alignItemsCenter, justyfyCenter]}>
                                    <CustomIcon name={item.iconName} color={isDark() ? colors.greyVar3 : colors.purpleVar3} type={item.iconType} size={18} />
                                </View>
                                <View style={[ml15]}>
                                    <H12Grey>{item.text1}</H12Grey>
                                    <H15Blackvar2Bold500>{item.text2}</H15Blackvar2Bold500>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <IconModal
                isVisible={isImagePickerOpen}
                onClose={() => setIsImagePickerOpen(false)}
                contentComponent={<ImagePicker onImageSelect={handleImageSelect} />}
                iconName='image-plus'
                iconType='MaterialCommunityIcons'
                iconSize={24}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    status: {
        position: 'absolute',
        bottom: 0,
        right: 1
    }
});

export default AccountSettings
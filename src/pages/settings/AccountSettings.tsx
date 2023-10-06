import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { alignItemsCenter, alignSelfCenter, borderRadius6, flex1, flexRow, justifyStart, justyfyCenter, mh15, mh20, mh30, ml10, ml15, ml30, mr30, mt20, mv10, mv15 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { RowSpaceAround, RowSpaceBetween } from '../../components/commonView';
import { H12Grey, H15Grey, H16BlackText, H16fontBoldBlack, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { Chatimg1AltImg, Chatimg1Img } from '../../utils/png';
import { accountSettingData, settingsData } from '../../utils/data/settingsData';
import { CustomModal, ImagePicker } from '../../components/commonComponents';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ToastAndroid } from 'react-native';
import { screenName } from '../../utils/screenName';

export type AccountSettingsProps = {

}


const AccountSettings = (props: AccountSettingsProps) => {
    const [imagePickerModal, setImagePickerModal] = useState(false);
    const [Pic, setPic] = useState('');
    const navigation = useNavigation();

    const handleImagePickerModal = () => {
        setImagePickerModal(!imagePickerModal);
    }

    const handleImageSelect = (base64Image: string) => {
        setPic(base64Image);
        setImagePickerModal(false);
    };

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <View style={[flexRow, justifyStart, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <TouchableOpacity style={[ml30]}>
                    <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                </TouchableOpacity>
                <RowSpaceBetween style={[flex1, mr30]}>
                    <H18BlackBoldText600 style={[ml10]}>{labels.AccountSetting}</H18BlackBoldText600>
                    <View style={[flexRow]}>
                        <TouchableOpacity>
                            <CustomIcon size={20} name='search' type='Feather' color={colors.blackVar2} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(screenName.EditAccountSettings as never)} style={[ml15]}>
                            <CustomIcon size={20} name='pencil' type='octicons' color={colors.blackVar2} />
                        </TouchableOpacity>
                    </View>
                </RowSpaceBetween>
            </View>
            <View style={[mt20, alignItemsCenter, justyfyCenter]}>
                <View>
                    {Pic ? (
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${Pic}` }}
                            style={[{ height: 100, width: 100, borderRadius: 100 }]}
                        />
                    ) : (
                        <Image
                            source={Chatimg1AltImg}
                            style={[{ height: 100, width: 100, borderRadius: 100 }]}
                        />
                    )}
                    <TouchableOpacity onPress={handleImagePickerModal} style={[{ height: 30, width: 30, borderRadius: 100, backgroundColor: colors.purpleVar3 }, styles.status, alignItemsCenter, justyfyCenter]}>
                        <CustomIcon type='font-awesome' name='camera' color={colors.white} size={12} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[mt20]}>
                {
                    accountSettingData.map((item) => {
                        return (
                            <View style={[mh30, mv10, flexRow, alignItemsCenter]} key={item.id}>
                                <View style={[{ height: 34, width: 34, backgroundColor: colors.purpleVar4 }, borderRadius6, alignItemsCenter, justyfyCenter]}>
                                    <CustomIcon name={item.iconName} color={colors.purpleVar3} type={item.iconType} size={18} />
                                </View>
                                <View style={[ml15]}>
                                    <H12Grey>{item.text1}</H12Grey>
                                    <H16fontBoldBlack>{item.text2}</H16fontBoldBlack>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <ImagePicker onImageSelect={handleImageSelect} />
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
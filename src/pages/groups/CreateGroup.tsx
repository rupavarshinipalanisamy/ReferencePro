import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh20, mh30, ml10, ml30, mr30, mt20, pv20 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { RowSpaceBetween } from '../../components/commonView';
import { Chatimg1Img, UserImg } from '../../utils/png';
import { ButtonContainer, ButtonContainer1, IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { SmallButton } from '../../components/commonButtons';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';
import { IconModal } from '../../components/commonModal';
import { ImagePicker } from '../../components/commonComponents';

export type CreateGroupProps = {

}


const CreateGroup = (props: CreateGroupProps) => {
    const navigation = useNavigation();
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const [Pic, setPic] = useState('');
    const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

    const handleImageSelect = (base64Image: string) => {
        setPic(base64Image);
        setIsImagePickerOpen(false);
    };

    const openImagePickerModal = () => {
        setIsImagePickerOpen(true);
    };

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
    };

    const handleNextButton = () => {
        setIsCancelButtonActive(false);
        navigation.navigate(screenName.CreateGroupUserSelect as never)
    };

    const [formData, setFormData] = useState({
        groupName: '',
        groupType: '',
        groupDescription: '',
    });

    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const inputFields = [
        {
            key: 'groupName',
            label: labels.GroupName,
            iconName: 'users',
            iconType: 'Feather',
        },
        {
            key: 'groupType',
            label: labels.GroupType,
            iconName: 'tago',
            iconType: 'AntDesign',
        },
        {
            key: 'groupDescription',
            label: labels.GroupDescription,
            iconName: 'chatbox-ellipses-outline',
            iconType: 'Ionicons',
        },
    ];

    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.CreateGroup} searchIcon={true} />
            <View style={[mt20, mh30]}>
                {Pic ? (
                    <Image
                        source={{ uri: `data:image/jpeg;base64,${Pic}` }}
                        style={[{ height: 70, width: 70, borderRadius: 100 }]}
                    />
                ) : (
                    <Image
                        source={UserImg}
                        style={[{ height: 70, width: 70, borderRadius: 100 }]}
                    />
                )}
                {/* <Image source={UserImg} style={[{ height: 70, width: 70, borderRadius: 100 }]} /> */}
                <TouchableOpacity onPress={openImagePickerModal} style={[{ height: 30, width: 30, borderRadius: 100, backgroundColor: colors.purpleVar3 }, styles.status, alignItemsCenter, justyfyCenter]}>
                    <CustomIcon type='Feather' name='camera' color={colors.white} size={12} />
                </TouchableOpacity>
            </View>
            <View style={[flex1, mh30]}>
                {
                    inputFields.map((field) => (
                        <View key={field.key}>
                            <IconInputContainer style = {{borderBottomColor : isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor}}>
                                <View style={[justyfyCenter]}>
                                    <CustomIcon name={field.iconName} size={20} color={colors.greyVar4} type={field.iconType} />
                                </View>
                                <CustomTextInput
                                    placeholder={field.label}
                                    value={formData[field.key]}
                                    onChangeText={(text) => handleInputChange(field.key, text)}
                                />
                            </IconInputContainer>
                        </View>
                    ))
                }
                <RowSpaceBetween style={[{ marginTop: '100%' }]}>
                    <SmallButton
                        title={labels.cancel}
                        onChange={handleCancelButton}
                        backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                        textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                        borderWidth={isCancelButtonActive ? 0 : 1}
                    />
                    <SmallButton
                        title={labels.Next}
                        onChange={handleNextButton}
                        backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                        textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                        borderWidth={isCancelButtonActive ? 1 : 0}
                    />
                </RowSpaceBetween>
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
        borderWidth: 3,
        borderColor: colors.white,
        position: 'absolute',
        bottom: 0,
        left: 45
    }
});

export default CreateGroup
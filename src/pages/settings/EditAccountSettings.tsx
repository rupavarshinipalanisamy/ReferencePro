import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh20, mh30, ml10, ml5, mv20 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { RowSpaceBetween } from '../../components/commonView';
import { IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { useNavigation } from '@react-navigation/native';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';
import { UsFlagTmg } from '../../utils/png';
import { SmallButton } from '../../components/commonButtons';
import { DevWidth } from '../../utils/device';

export type EditAccountSettingsProps = {

}


const EditAccountSettings = (props: EditAccountSettingsProps) => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name: labels.MarkVilliams,
        hello: labels.HelloIamUsingDreamsChat,
        email: labels.InfoEmail,
        phoneNo: labels.PhoneNo,
        dob: labels.Date,
        country: labels.India,
    });
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
        navigation.goBack();
    };

    const handleDeleteChatButton = () => {
        setIsCancelButtonActive(false);
    };

    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const inputFields = [
        {
            key: 'name',
            label: labels.MarkVilliams,
            iconName: 'user',
            iconType: 'Feather',
        },
        {
            key: 'hello',
            label: labels.HelloIamUsingDreamsChat,
            iconName: 'user',
            iconType: 'Feather',
        },
        {
            key: 'email',
            label: labels.InfoEmail,
            iconName: 'envelope',
            iconType: 'SimpleLineIcons',
        },
        {
            key: 'phoneNo',
            label: labels.PhoneNo,
            iconName: 'phone',
            iconType: 'Feather',
        },
        {
            key: 'dob',
            label: labels.Date,
            iconName: 'calendar-blank',
            iconType: 'MaterialCommunityIcons',
        },
        {
            key: 'country',
            label: labels.India,
            iconName: 'calendar-blank',
            iconType: 'MaterialCommunityIcons',
        },

    ];

    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.EditProfile} />
            <View style={[flex1, mh30]}>
                {
                    inputFields.map((field) => (
                        <View key={field.key}>
                            {
                                field.key === 'phoneNo' ? (
                                    <View>
                                        <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name={field.iconName} size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type={field.iconType} />
                                            </View>
                                            <View style={[alignItemsCenter, justyfyCenter, flexRow, ml10]}>
                                                <Image source={UsFlagTmg} style={{ height: 18, width: 18, borderRadius: 100 }} />
                                                <View style={[ml5]}>
                                                    <CustomIcon name='chevron-down-outline' type="Ionicons" color={isDark() ? colors.greyVar0 : colors.blackVar2} size={15} />
                                                </View>
                                            </View>
                                            <CustomTextInput
                                                textColor={isDark() ? colors.greyVar0 : colors.blackVar1}
                                                value={formData[field.key]}
                                                onChangeText={(text) => handleInputChange(field.key, text)}
                                            />
                                        </IconInputContainer>
                                    </View>
                                ) : (
                                    <View>
                                        <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name={field.iconName} size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type={field.iconType} />
                                            </View>
                                            <CustomTextInput
                                                textColor={isDark() ? colors.greyVar0 : colors.blackVar1}
                                                value={formData[field.key]}
                                                onChangeText={(text) => handleInputChange(field.key, text)}
                                            />
                                        </IconInputContainer>
                                    </View>
                                )
                            }
                        </View>
                    ))
                }

            </View>
            <RowSpaceBetween style={[mv20, mh20]}>
                <SmallButton
                    title={labels.cancel}
                    onChange={handleCancelButton}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.white)}
                    textColor={isCancelButtonActive ? colors.white : (isDark() ? colors.redVar3 : colors.greyVar4)}
                    borderWidth={isCancelButtonActive ? 0 : 1}
                    width={DevWidth / 2.3}
                />
                <SmallButton
                    title={labels.saveChange}
                    onChange={handleDeleteChatButton}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    borderWidth={isCancelButtonActive ? 1 : 0}
                    width={DevWidth / 2.3}
                />
            </RowSpaceBetween>
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

export default EditAccountSettings
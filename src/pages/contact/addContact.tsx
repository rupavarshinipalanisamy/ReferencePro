import React, { useState } from 'react';
import { View } from 'react-native';
import { flex1, justyfyCenter, mh20, mh30, mv20 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';
import { IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { LongPurpleButton } from '../../components/commonButtons';
import { isDark } from '../../Theme/ThemeContext';
import { addContactData } from '../../utils/data/contactData';

export type AddContactProps = {
}

const AddContact = (props: AddContactProps) => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        dob: '',
        message: '',
    });

    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }))
    };

    const handleSaveContact = () => {
        navigation.navigate(screenName.ContactPage as never)
    };

    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.addContact} />
            <View style={[flex1, mh30]}>
                {
                    addContactData.map((field) => (
                        <View key={field.key}>
                            <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                                <View style={[justyfyCenter]}>
                                    <CustomIcon name={field.iconName} size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type={field.iconType} />
                                </View>
                                <CustomTextInput
                                    textColor={isDark() ? colors.greyVar0 : colors.blackVar1}
                                    placeholder={field.label}
                                    value={formData[field.key]}
                                    onChangeText={(text) => handleInputChange(field.key, text)}
                                />
                            </IconInputContainer>
                        </View>
                    ))
                }
            </View>
            <View style={[mv20, mh20]}>
                <LongPurpleButton title={labels.saveContact} onChange={handleSaveContact} />
            </View>
        </View>
    )
};

export default AddContact;
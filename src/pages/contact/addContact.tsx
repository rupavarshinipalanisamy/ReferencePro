import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh20, mh30, ml10, ml30, mr30, mt20, mv20, pv20 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { RowSpaceBetween } from '../../components/commonView';
import { UserImg } from '../../utils/png';
import { ButtonContainer, ButtonContainer1, IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { LongPurpleButton } from '../../components/commonButtons';

export type CreateGroupProps = {

}


const AddContact = (props: CreateGroupProps) => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        dob:'',
        message:'',
    });

    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSaveContact = () =>{
        navigation.navigate(screenName.ContactPage as never)
    }

    const inputFields = [
        {
            key: 'firstName',
            label: labels.firstName,
            iconName: 'user',
            iconType: 'Feather',
        },
        {
            key: 'lastName',
            label: labels.lastName,
            iconName: 'user',
            iconType: 'Feather',
        },
        {
            key: 'email',
            label: labels.emailaddress,
            iconName: 'envelope',
            iconType: 'SimpleLineIcons',
        },
        {
            key: 'phoneNo',
            label: labels.phNumber,
            iconName: 'phone',
            iconType: 'Feather',
        },
        {
            key: 'dob',
            label: labels.dob,
            iconName: 'calendar-blank',
            iconType: 'MaterialCommunityIcons',
        },
        {
            key: 'message',
            label: labels.inivitemsg,
            iconName: 'chatbox-ellipses-outline',
            iconType: 'Ionicons',
        },
    ];

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
          <SearchHeader headerText={labels.addContact}  />

           
            <View style={[flex1, mh30]}>
                {
                    inputFields.map((field) => (
                        <View key={field.key}>
                            <IconInputContainer>
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
           
             
            </View>
           <View style={[mv20,mh20]}>
           <LongPurpleButton title={labels.saveContact} onChange={handleSaveContact} />
           </View>
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

export default AddContact
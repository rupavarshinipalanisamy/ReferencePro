import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh20, mh30, ml10, ml30, mr30, mt20, pv20 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { RowSpaceBetween } from '../../components/commonView';
import { UserImg } from '../../utils/png';
import { ButtonContainer, ButtonContainer1, IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { ButtonSaveandCancel } from '../../components/commonButtons';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';

export type EditAccountSettingsProps = {

}


const EditAccountSettings = (props: EditAccountSettingsProps) => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name : labels.MarkVilliams,
        hello : labels.HelloIamUsingDreamsChat,
        email : labels.InfoEmail,
        phoneNo : labels.PhoneNo,
        dob : labels.Date,
        country : labels.India,
    });

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
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <View style={[flexRow, justifyStart, alignSelfCenter, alignItemsCenter, { height: DevHeight * 0.12, width: DevWidth, backgroundColor: colors.white, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }]}>
                <View style={[ml30]}>
                    <CustomIcon name='arrow-back-ios' size={18} color={colors.blackVar2} type='MaterialIcons' />
                </View>
                <RowSpaceBetween style={[flex1, mr30]}>
                    <H18BlackBoldText600 style={[ml10]}>{labels.CreateGroup}</H18BlackBoldText600>
                    <CustomIcon size={20} name='search' type='Feather' color={colors.blackVar2} />
                </RowSpaceBetween>
            </View>
            <View style={[flex1, mh30]}>
                {
                    inputFields.map((field) => (
                        <View key={field.key}>
                            <IconInputContainer>
                                <View style={[justyfyCenter]}>
                                    <CustomIcon name={field.iconName} size={20} color={colors.greyVar4} type={field.iconType} />
                                </View>
                                <CustomTextInput style= {{fontSize : 14, fontWeight : '400', color : colors.greyVar2}}
                                    value={formData[field.key]}
                                    onChangeText={(text) => handleInputChange(field.key, text)}
                                />
                            </IconInputContainer>
                        </View>
                    ))
                }
                <View style={[flex1, justifyEnd]}>
                    <ButtonContainer style={{ position: 'absolute', bottom: 20 }}>
                        <ButtonSaveandCancel style={{
                            backgroundColor: colors.white
                        }}
                            textStyle={{ color: colors.greyVar4 }}
                            funCallback={() => { }}
                            label={labels.cancel} />

                        <ButtonSaveandCancel style={{
                            backgroundColor: colors.purpleVar3,
                        }}
                            textStyle={{ color: colors.white }}
                            funCallback={() => { navigation.navigate(screenName.CreateGroupUserSelect as never) }}
                            label={labels.Next} />
                    </ButtonContainer>
                </View>
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

export default EditAccountSettings
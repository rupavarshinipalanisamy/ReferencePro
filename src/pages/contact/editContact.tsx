import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { alignItemsCenter, alignSelfCenter, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh10, mh15, mh20, mh30, mh5, ml10, ml30, ml5, mr30, mt20, mv20, pv20 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { LongButton, RowSpaceBetween } from '../../components/commonView';
// import { UserImg } from '../../utils/png';
import { ButtonContainer, ButtonContainer1, IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
// import { ButtonSaveandCancel } from '../../components/commonButtons';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';
// import { UsFlagTmg } from '../../utils/png';
import { LongPurpleButton, SmallButton } from '../../components/commonButtons';
import { StatusPic1 } from '../../utils/png';

export type EditContactProps = {

}


const EditContact = (props: EditContactProps) => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name: labels.Horace1,
        hello: labels.Keene,
        email: labels.InfoEmail,
        phoneNo: labels.PhoneNo,
        dob: labels.Date,
        country: labels.inivitemsg,
    });
    // const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);
    // const handleCancelButton = () => {
    //     setIsCancelButtonActive(true);
    //     navigation.goBack();
    // };

    // const handleDeleteChatButton = () => {
    //     setIsCancelButtonActive(false);
    // };

    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };


    const handleSaveChanges =()=>{
        navigation.navigate(screenName.AddContact as never)
    }
    const inputFields1 = [
        {
            key: 'name',
            label: labels.Horace1,
            iconName: 'user',
            iconType: 'Feather',
        },
        {
            key: 'hello',
            label: labels.Keene,
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
            label: labels.inivitemsg,
            iconName: 'message-text-outline',
            iconType: 'MaterialCommunityIcons',
        },

    ];

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.EditProfile} />
            <View style={[flex1, mh30]}>
                {
                    inputFields1.map((field) => (
                        <View key={field.key}>
                            {
                                field.key === 'phoneNo' ? (
                                    <View>
                                        <IconInputContainer style={{ }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name={field.iconName} size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type={field.iconType} />
                                            </View>
                                            <View style={[alignItemsCenter, justyfyCenter, flexRow, ml10]}>
                                                <Image source={StatusPic1} style={{ height: 18, width: 18, borderRadius: 100 }} />
                                                <View style={[ml5]}>
                                                    <CustomIcon name='chevron-down-outline' type="Ionicons" color={isDark() ? colors.greyVar0 : colors.blackVar2} size={15} />
                                                </View>
                                            </View>
                                            <CustomTextInput
                                                textColor={colors.blackVar1}
                                                value={formData[field.key]}
                                                onChangeText={(text) => handleInputChange(field.key, text)}
                                            />
                                        </IconInputContainer>
                                    </View>
                                ) : (
                                    <View>
                                        <IconInputContainer style={{ }}>
                                            <View style={[justyfyCenter]}>
                                                <CustomIcon name={field.iconName} size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type={field.iconType} />
                                            </View>
                                            <CustomTextInput
                                                textColor={colors.blackVar2}
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
            <View style={[mv20, mh20]}>
                <LongPurpleButton
                    title={labels.saveChange}
                    onChange={handleSaveChanges}
                />
            </View>

            {/* <RowSpaceBetween style={[mv20, mh20]}>
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
            </RowSpaceBetween> */}
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

export default EditContact
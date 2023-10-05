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

export type CreateGroupProps = {

}


const CreateGroup = (props: CreateGroupProps) => {
    const navigation = useNavigation();
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
            iconName: 'account-group-outline',
            iconType: 'MaterialCommunityIcons',
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
            <View style={[mt20, mh30]}>
                <Image source={UserImg} style={[{ height: 70, width: 70, borderRadius: 100 }]} />
                <TouchableOpacity style={[{ height: 30, width: 30, borderRadius: 100, backgroundColor: colors.purpleVar3 }, styles.status, alignItemsCenter, justyfyCenter]}>
                    <CustomIcon type='Feather' name='camera' color={colors.white} size={12} />
                </TouchableOpacity>
            </View>
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

export default CreateGroup
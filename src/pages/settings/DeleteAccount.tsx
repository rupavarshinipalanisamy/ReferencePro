import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { alignItemsCenter, alignItemsLeft, alignSelfCenter, borderRadius10, borderRadius15, flex050, flex1, flexRow, justifyEnd, justifyStart, justyfyCenter, mh20, mh30, ml10, ml15, ml30, mr5, mt10, mt15, mt20, mt3, mt30, mt5, mv10, mv15, mv20, textCenter } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { DevHeight, DevWidth } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { H14BlackVar2Bold400Text, H14Blackvar2Bold500, H14GreyVar4Bold400Text, H15PurpleVar3Bold500, H15font600, H18BlackBoldText600 } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { CommonLineDividerPurple, RowSpaceBetween } from '../../components/commonView';
import { IconInputContainer } from '../../styledComponent/styledComponent';
import { CustomTextInput } from '../../components/commonInputFields';
import { UsFlagTmg } from '../../utils/png';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';

export type DeleteAccountProps = {

}


const DeleteAccount = (props: DeleteAccountProps) => {
    const [country, setCountry] = useState('India');
    const [phoneNumber, setPhoneNumber] = useState('9988776655');

    const handleCountry = (country: string) => {
        setCountry(country);
    }
    const handlePhoneNumber = (phoneNumber: string) => {
        setPhoneNumber(phoneNumber);
    }
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.DeleteThisAccount} searchIcon={true} />
            <View style={[alignSelfCenter, mt30, borderRadius10, { backgroundColor: isDark() ? colors.darkModeVar4 : colors.purpleVar1, height: DevHeight * 0.34, width: DevWidth * 0.85 }]}>
                <View style={[flexRow, mh20, mt15]}>
                    <View style={[{ height: 35, width: 35, backgroundColor: isDark() ? `rgba(158, 158, 158,0.1)` : colors.purpleVar4 }, alignItemsCenter, justyfyCenter, borderRadius10, mt3]}>
                        <CustomIcon name='user' type="Feather" color={isDark() ? colors.greyVar3 : colors.purpleVar3} size={18} />
                    </View>
                    <View style={[flex1, mt10]}>
                        <RowSpaceBetween>
                            <H15PurpleVar3Bold500 style={[ml15]}>If you delete this account</H15PurpleVar3Bold500>
                            <CustomIcon name='chevron-up' type="Feather" size={15} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                        </RowSpaceBetween>
                    </View>
                </View>
                <CommonLineDividerPurple style={[mv15]} />
                <View>
                    <View style={[flexRow, mh20]}>
                        <CustomIcon name='checkcircle' type="AntDesign" size={16} color={colors.purpleVar3} />
                        <H14GreyVar4Bold400Text style={[ml10, { letterSpacing: 0.5, fontSize: 15, lineHeight: 21 }]}>The account will be deleted from{'\n'}dreamschat and all your devices</H14GreyVar4Bold400Text>
                    </View>
                    <View style={[flexRow, mh20, mt10]}>
                        <CustomIcon name='checkcircle' type="AntDesign" size={16} color={colors.purpleVar3} />
                        <H14GreyVar4Bold400Text style={[ml10, { letterSpacing: 0.5, fontSize: 15, lineHeight: 21 }]}>Your message history will be erased</H14GreyVar4Bold400Text>
                    </View>
                    <View style={[flexRow, mh20, mt10]}>
                        <CustomIcon name='checkcircle' type="AntDesign" size={16} color={colors.purpleVar3} />
                        <H14GreyVar4Bold400Text style={[ml10, { letterSpacing: 0.5, fontSize: 15, lineHeight: 21 }]}>You will be removed from all your{'\n'}dreamschat groups.</H14GreyVar4Bold400Text>
                    </View>
                    <View style={[flexRow, mh20, mt10]}>
                        <CustomIcon name='checkcircle' type="AntDesign" size={16} color={colors.purpleVar3} />
                        <H14GreyVar4Bold400Text style={[ml10, { letterSpacing: 0.5, fontSize: 15, lineHeight: 21 }]}>Your google drive backup will be deleted</H14GreyVar4Bold400Text>
                    </View>
                </View>
            </View>
            <View style={[mh30, mt20]}>
                <H14Blackvar2Bold500>To delete your account, confirm your country code and enter your phone number.</H14Blackvar2Bold500>
            </View>
            <View style={[mh30, mt20]}>
                <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                    <RowSpaceBetween style={{flex:1}}>
                        <View style = {[flexRow]}>
                            <View style={[justyfyCenter]}>
                                <CustomIcon name='globe' size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type="Feather" />
                            </View>
                            <CustomTextInput
                                textColor={isDark() ? colors.greyVar0 : colors.blackVar1}
                                value={country}
                                onChangeText={(text) => handleCountry(text)}
                            />
                        </View>
                        <View style={[alignItemsCenter, justyfyCenter]}>
                            <CustomIcon name='chevron-down' type="Feather" size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} />
                        </View>
                    </RowSpaceBetween>
                </IconInputContainer>
                <IconInputContainer style={{ borderBottomColor: isDark() ? `rgba(78, 80, 114, 0.3)` : colors.borderBottomColor }}>
                    <View style={[justyfyCenter, alignItemsCenter, flexRow]}>
                        <CustomIcon name='phone' size={20} color={isDark() ? colors.greyVar3 : colors.greyVar4} type="Feather" />
                        <View style={[flexRow, ml15]}>
                            <Image source={UsFlagTmg} style={[{ height: 20, width: 20 }, mr5]} />
                            <CustomIcon name='chevron-down-outline' type="Ionicons" color={isDark() ? colors.greyVar0 : colors.blackVar2} size={15} />
                        </View>
                    </View>
                    <CustomTextInput
                        textColor={isDark() ? colors.greyVar0 : colors.blackVar1}
                        value={phoneNumber}
                        onChangeText={(text) => handlePhoneNumber(text)}
                    />
                </IconInputContainer>
            </View>
            <View style={[styles.longButtonRed, mh20, { backgroundColor: isDark() ? colors.redVar2 : colors.red }]}>
                <H15font600>{labels.deleteAcc}</H15font600>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    longButtonRed: {
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 150,
        bottom: 15
    },
})

export default DeleteAccount
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, ScrollView } from 'react-native';
import { HeaderChatView } from '../chatView/Messagecomponents/messages';
import { colors } from '../../utils/colors';
import { screenName } from '../../utils/screenName';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh10, mh20, mt15, mt5, mv10, mv5, p10, p20, p5, pb5, spaceAround } from '../../components/commonStyles';
import { H14Blackvar2Bold500, H14GreyVar4Bold400, H15Blackvar2Bold500, H15Grey, H16SemiBoldBlack, H16fontBoldBlack, H18fontBoldBlack } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { callHistoryThirddata, callHistoryTodaydata, callHistoryYesterdaydata } from '../../utils/data/callsData';
import { RowSpaceBetween } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { CustomModal } from '../../components/commonComponents';
import { DevWidth } from '../../utils/device';
import { useNavigation } from '@react-navigation/native';
import { CallThreeDotsOption } from '../../utils/data/modalData';
import { isDark } from '../../Theme/ThemeContext';

export type CallHistoryProps = {

}


const CallHistory = (props: CallHistoryProps) => {
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]}>
            <HeaderChatView backgroundColor={colors.purpleVar3} profileNavigate={screenName.UserProfile} videoNavigate={screenName.SingleVideoCall} call = {true} audioNavigate={screenName.Calling} title={labels.horaceKeene} subTitle={labels.online} />
            <ScrollView>
                <View style={[mh20, mt15]}>
                    <H14Blackvar2Bold500 style={[mv5, {}]}>{labels.Today}</H14Blackvar2Bold500>
                    <View>
                        {
                            callHistoryTodaydata.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[p10, mv10, styles.whiteCard, {backgroundColor: isDark() ? colors.darkModeVar4 : colors.white,}]}>
                                        <View style={[flexRow]}>
                                            <View style = {[alignItemsCenter, justyfyCenter]}>
                                                <Image source={item.img} style={styles.profileImg} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={pb5}>
                                                    <H15Blackvar2Bold500>{item.name}</H15Blackvar2Bold500>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                                    {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                                </RowSpaceBetween>
                                                <RowSpaceBetween style={pb5}>
                                                    <H14GreyVar4Bold400>{item.text}</H14GreyVar4Bold400>
                                                    {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                                    <H14GreyVar4Bold400 style={{ color: item.DurationColor }}>{item.duration}</H14GreyVar4Bold400>
                                                </RowSpaceBetween>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={[mh20, mt15]}>
                    <H14Blackvar2Bold500 style={[mv5, {}]}>{labels.Yesterday}</H14Blackvar2Bold500>
                    <View>
                        {
                            callHistoryYesterdaydata.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[p10, mv10, styles.whiteCard, {backgroundColor: isDark() ? colors.darkModeVar4 : colors.white}]}>
                                        <View style={[flexRow]}>
                                            <View style = {[alignItemsCenter, justyfyCenter]}>
                                                <Image source={item.img} style={styles.profileImg} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={pb5}>
                                                    <H15Blackvar2Bold500>{item.name}</H15Blackvar2Bold500>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                                    {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                                </RowSpaceBetween>
                                                <RowSpaceBetween style={pb5}>
                                                    <H14GreyVar4Bold400>{item.text}</H14GreyVar4Bold400>
                                                    {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                                    <H14GreyVar4Bold400 style={{ color: item.DurationColor }}>{item.duration}</H14GreyVar4Bold400>
                                                </RowSpaceBetween>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={[mh20, mt15]}>
                    <H14Blackvar2Bold500 style={[mv5, {}]}>{labels.Aug232023}</H14Blackvar2Bold500>
                    <View>
                        {
                            callHistoryThirddata.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[p10, mv10, styles.whiteCard, {backgroundColor: isDark() ? colors.darkModeVar4 : colors.white}]}>
                                        <View style={[flexRow]}>
                                            <View style = {[alignItemsCenter, justyfyCenter]}>
                                                <Image source={item.img} style={styles.profileImg} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={pb5}>
                                                    <H15Blackvar2Bold500>{item.name}</H15Blackvar2Bold500>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                                    {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                                </RowSpaceBetween>
                                                <RowSpaceBetween style={pb5}>
                                                    <H14GreyVar4Bold400>{item.text}</H14GreyVar4Bold400>
                                                    {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                                    <H14GreyVar4Bold400 style={{ color: item.DurationColor }}>{item.duration}</H14GreyVar4Bold400>
                                                </RowSpaceBetween>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
    status: {
        borderWidth: 3,
        borderColor: colors.white,
        position: 'absolute',
        bottom: 5,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
    whiteCard : {
        height : 70,
        borderRadius : 5,
    }
});

export default CallHistory
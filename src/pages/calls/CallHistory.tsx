import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, ScrollView } from 'react-native';
import { HeaderChatView } from '../chatView/Messagecomponents/messages';
import { colors } from '../../utils/colors';
import { screenName } from '../../utils/screenName';
import { flex1, flexRow, mh10, mh20, mt15, mt5, mv10, mv5, p10, p20, p5, pb5, spaceAround } from '../../components/commonStyles';
import { H15Grey, H16SemiBoldBlack, H16fontBoldBlack, H18fontBoldBlack } from '../../components/commonText';
import { labels } from '../../utils/labels';
import { callHistoryThirddata, callHistoryTodaydata, callHistoryYesterdaydata } from '../../utils/data/callsData';
import { RowSpaceBetween } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { CustomModal } from '../../components/commonComponents';
import { DevWidth } from '../../utils/device';
import { useNavigation } from '@react-navigation/native';
import { CallThreeDotsOption } from '../../utils/data/modalData';

export type CallHistoryProps = {

}


const CallHistory = (props: CallHistoryProps) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const ThreeDotOption = () => {
        const navigation = useNavigation();
        return (
            <View style={mt5}>
                {
                    CallThreeDotsOption.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)}>
                                <View style={[flexRow, spaceAround, p5]}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                    <H15Grey>{item.name}</H15Grey>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={[flex1, { backgroundColor: colors.whiteVar0 }]}>
            <HeaderChatView backgroundColor={colors.purpleVar3} profileNavigate={screenName.UserProfile} videoNavigate={screenName.SingleVideoCall} audioNavigate={screenName.SingleAudioCallRing} title={labels.horaceKeene} subTitle={labels.online}  threeDotOptionNavigate={console.log('ggggggggg')} />
            <ScrollView>
                <View style={[mh20, mt15]}>
                    <H18fontBoldBlack style={[mv5, {}]}>{labels.Today}</H18fontBoldBlack>
                    <View>
                        {
                            callHistoryTodaydata.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[p10, mv10, { backgroundColor: colors.white }]}>
                                        <View style={[flexRow]}>
                                            <View>
                                                <Image source={item.img} style={styles.profileImg} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={pb5}>
                                                    <H16SemiBoldBlack>{item.name}</H16SemiBoldBlack>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                                    {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                                </RowSpaceBetween>
                                                <RowSpaceBetween style={pb5}>
                                                    <H15Grey>{item.text}</H15Grey>
                                                    {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                                    <H15Grey style={{ color: item.DurationColor }}>{item.duration}</H15Grey>
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
                    <H18fontBoldBlack style={[mv5, {}]}>{labels.Yesterday}</H18fontBoldBlack>
                    <View>
                        {
                            callHistoryYesterdaydata.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[p10, mv10, { backgroundColor: colors.white }]}>
                                        <View style={[flexRow]}>
                                            <View>
                                                <Image source={item.img} style={styles.profileImg} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={pb5}>
                                                    <H16SemiBoldBlack>{item.name}</H16SemiBoldBlack>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                                    {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                                </RowSpaceBetween>
                                                <RowSpaceBetween style={pb5}>
                                                    <H15Grey>{item.text}</H15Grey>
                                                    {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                                    <H15Grey style={{ color: item.DurationColor }}>{item.duration}</H15Grey>
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
                    <H18fontBoldBlack style={[mv5, {}]}>{labels.Aug232023}</H18fontBoldBlack>
                    <View>
                        {
                            callHistoryThirddata.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[p10, mv10, { backgroundColor: colors.white }]}>
                                        <View style={[flexRow]}>
                                            <View>
                                                <Image source={item.img} style={styles.profileImg} />
                                            </View>
                                            <View style={[flex1]}>
                                                <RowSpaceBetween style={pb5}>
                                                    <H16SemiBoldBlack>{item.name}</H16SemiBoldBlack>
                                                    <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                                    {/* <Text style={{ fontWeight: call.id === 4 ? '700' : 'normal' }}>{call.duration}</Text> */}
                                                </RowSpaceBetween>
                                                <RowSpaceBetween style={pb5}>
                                                    <H15Grey>{item.text}</H15Grey>
                                                    {/* <CustomIcon name={call.iconName} size={call.iconSize} color={call.iconColor} type={call.iconType} /> */}
                                                    <H15Grey style={{ color: item.DurationColor }}>{item.duration}</H15Grey>
                                                </RowSpaceBetween>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                <CustomModal
                    isVisible={isModalVisible}
                    height={80}
                    width={DevWidth * 0.47}
                    modalData={<ThreeDotOption />}
                    onClose={() => setModalVisible(false)}
                />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    whiteBg: {
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden'
    },
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
});

export default CallHistory
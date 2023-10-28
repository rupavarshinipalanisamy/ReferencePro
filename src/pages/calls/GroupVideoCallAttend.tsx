import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { H14Blackvar2Bold500Same } from '../../components/commonText';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomDataThird, groupVideoCallData } from '../../utils/data/callsData';
import { DevHeight, DevWidth } from '../../utils/device';
import { isDark } from '../../Theme/ThemeContext';
import { colors } from '../../utils/colors';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flexRow, justyfyCenter, mh10, mt15, mt20, mt8, spaceAround } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { labels } from '../../utils/labels';

const GroupVideoCallAttend = () => {

    const renderItem = ({ item }: any) => (
        <View key={item.id} style={{ margin: 5 }}>
            <View style={{ height: DevHeight / 4, width: DevWidth / 2.35, backgroundColor: colors.white, borderColor: colors.blueVar3, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: item.id === 4 ? 2 : 0 }}>
                {
                    item.id === 4 ? (
                        <View>
                            <Image source={item.image} style={[{ borderRadius: item.id === 4 ? 25 : 10, width: item.id === 1 || item.id === 2 || item.id === 3 ? DevWidth / 2.35 : 40 }, alignSelfCenter]} />
                            <H14Blackvar2Bold500Same style={mt8}>{labels.JamesAlbert}</H14Blackvar2Bold500Same>
                        </View>
                    ) : (
                        <Image source={item.image} style={{ borderRadius: item.id === 4 ? 25 : 10, width: item.id === 1 || item.id === 2 || item.id === 3 ? DevWidth / 2.35 : 40, height: '100%' }} />
                    )
                }
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }}>
            <CallCommonHeader />
            <View style={{ marginHorizontal: 20, marginVertical: 20, flex: 1 }}>
                <FlatList
                    data={groupVideoCallData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2} 
                />
            </View>
            <View style={[{ height: DevHeight * 0.12, width: DevWidth, backgroundColor: isDark() ? colors.darkModeVar1 : colors.white, borderTopLeftRadius: 45, borderTopRightRadius: 45 }]}>
                <View style={[alignSelfCenter, mt15, { height: 5, width: DevWidth * 0.2, backgroundColor: colors.greyVar0 }]} />
                <View style={[flexRow, spaceAround, mt20, mh10]}>
                    {
                        callBottomDataThird.map((item) => {
                            return (
                                <View key={item.id}>
                                    {
                                        item.id == 4 ? (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: isDark() ? `rgba(200, 16, 46, 0.2)` : colors.redVar1, bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity style={[{ height: 40, width: 80, backgroundColor: isDark() ? colors.darkModeVar4 : 'transparent', bottom: 5 }, alignItemsCenter, justyfyCenter, borderRadius10]}>
                                                <CustomIcon name={item.iconName} size={item.iconSize} color={item.iconColor} type={item.iconType} />
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    );
};

export default GroupVideoCallAttend;

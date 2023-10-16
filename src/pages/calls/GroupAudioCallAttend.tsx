import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { H14Blackvar2Bold500 } from '../../components/commonText';
import { CallCommonHeader } from '../../components/commonHeaders';
import { callBottomDataThird, groupCallData } from '../../utils/data/callsData';
import { DevHeight, DevWidth } from '../../utils/device';
import { CallBottomTab } from '../../components/commonComponents';
import { isDark } from '../../Theme/ThemeContext';
import { colors } from '../../utils/colors';
import { alignItemsCenter, alignSelfCenter, borderRadius10, flexRow, justyfyCenter, mh10, mt15, mt20, mt8, spaceAround } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';

const GroupAudioCallAttend = () => {

    const renderItem = ({ item }: any) => (
        <View key={item.id} style={{ margin: 5 }}>
            <View style={{ height: DevHeight / 3.8, width: DevWidth / 2.4, borderColor: item.color, borderWidth: 2, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                <Image source={item.image} style={{ height: 50, width: 50, borderRadius: 100, marginTop: 20 }} />
                <H14Blackvar2Bold500 style={mt8}>{item.name}</H14Blackvar2Bold500>
                <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                    <Image source={item.soundImg} style={{ height: 25, width: 100 }} />
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }}>
            <CallCommonHeader />
            <View style={{ marginHorizontal: 20, marginVertical: 20, flex: 1 }}>
                <FlatList
                    data={groupCallData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2} // Set the number of columns here
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

export default GroupAudioCallAttend;

import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { H15BlackBold600 } from '../../components/commonText';
import { CallCommonHeader } from '../../components/commonHeaders';
import { groupCallData } from '../../utils/data/callsData';
import { DevHeight, DevWidth } from '../../utils/device';
import { CallBottomTab } from '../../components/commonComponents';

const GroupAudioCallAttend = () => {

    const renderItem = ({ item }: any) => (
        <View key={item.id} style={{ margin: 5 }}>
            <View style={{ height: DevHeight / 3.8, width: DevWidth / 2.4, borderColor: item.color, borderWidth: 1, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                <Image source={item.image} style={{ height: 50, width: 50, borderRadius: 100, marginTop: 20 }} />
                <H15BlackBold600>{item.name}</H15BlackBold600>
                <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                    <Image source={item.soundImg} style={{ height: 25, width: 100 }} />
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <CallCommonHeader />
            <View style={{ marginHorizontal: 20, marginVertical: 20, flex : 1 }}>
                <FlatList
                    data={groupCallData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2} // Set the number of columns here
                />
            </View>
            <CallBottomTab />
        </View>
    );
};

export default GroupAudioCallAttend;

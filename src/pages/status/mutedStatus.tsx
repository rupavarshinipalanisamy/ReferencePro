import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { flex1, mt20 } from '../../components/commonStyles';
import { BottomTabBar, CustomModal } from '../../components/commonComponents'
import { colors } from '../../utils/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { labels } from '../../utils/labels';
import { DevHeight, DevWidth } from '../../utils/device';
import { recentstatusData } from '../../utils/data/statusData';
import { StatusItem, statusText } from './allStatus';
import { StatusView1 } from '../../utils/svg';
import { AfterNavigation, BeforeNavigation, StatusOptionModalComponent } from './statusContainer';
import { screenName } from '../../utils/screenName';
import { isDark } from '../../Theme/ThemeContext';
import { Platform } from 'react-native';

export type MutedStatusProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}

const MutedStatusScreen = (props: MutedStatusProps) => {
    const navigation = useNavigation();
    const [callOptionModal, setCallOptionModal] = useState(false);
    const route = useRoute();
    const showSecondScreen = route.params?.showSecondScreen === true;

    const closeCallOptionModal = () => {
        setCallOptionModal(false);
    }

    const handleStatusItemClick = (id: number) => {
        navigation.navigate(screenName.FriendStatus as never)
    };


    return (
        <View style={[{ backgroundColor: isDark() ? colors.darkModeVar2 : colors.white }, flex1, mt20, styles.whiteBg]}>
            <View style={flex1}>
                <ScrollView showsVerticalScrollIndicator={false}>
            {showSecondScreen ? <AfterNavigation /> : <BeforeNavigation />}
                    {statusText(labels.viewedStatus)}
                    <View style={{ opacity: 0.5 }}>
                        {recentstatusData.map((data, index) => (
                            <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView1 />} isMuted={true} />
                        ))}
                    </View>
                </ScrollView>
            </View>
            <CustomModal
                isVisible={callOptionModal}
                width={DevWidth * 0.55}
                height={DevHeight * 0.4}
                modalData={<StatusOptionModalComponent />}
                marginTop={Platform.OS === 'ios' ? 100 : 160}
                onClose={closeCallOptionModal}
            />
            <BottomTabBar />
        </View >
    )
}

const styles = StyleSheet.create({
    whiteBg: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden'
    },

});

export default MutedStatusScreen
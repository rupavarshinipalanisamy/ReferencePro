import React, { useState } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { flex1, mt20 } from '../../components/commonStyles';
import { BottomTabBar, CustomModal } from '../../components/commonComponents'
import { colors } from '../../utils/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { labels } from '../../utils/labels';
import { DevHeight, DevWidth } from '../../utils/device';
import { recentstatusData } from '../../utils/data/statusData';
import { StatusItem, statusText } from './allStatus';
import { AfterNavigation, BeforeNavigation, StatusOptionModalComponent } from './statusContainer';
import { screenName } from '../../utils/screenName';
import { StatusView } from '../../utils/svg';
import { useTheme } from '../../Theme/ThemeContext';
import { WhiteBgContact } from '../../styledComponent/styledComponent';

export type RecentStatusProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}

const RecentStatusScreen = (props: RecentStatusProps) => {
    const navigation = useNavigation();
    const [callOptionModal, setCallOptionModal] = useState(false);
    const route = useRoute();
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    const showSecondScreen = route.params?.showSecondScreen === true;

    const closeCallOptionModal = () => {
        setCallOptionModal(false);
    }

    const handleStatusItemClick = (id: number) => {
        navigation.navigate(screenName.FriendStatus as never);
    }

    return (
        <WhiteBgContact style={[{ backgroundColor: isDarkTheme ? colors.darkModeVar2 : colors.white }, flex1, mt20]}>
            <View style={flex1}>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:80}}>
                    {showSecondScreen ? <AfterNavigation /> : <BeforeNavigation />}
                    {statusText(labels.recentStatus)}
                    <View>
                        {recentstatusData.map((data, index) => (
                            <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView />} />
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
        </WhiteBgContact >
    )
};

export default RecentStatusScreen;
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh15, mh20, mt20, pl13, spaceBetween } from '../../components/commonStyles';
import { H14font400Black, H14font400Gray4, H15Grey, H15font500Black } from '../../components/commonText';
import { BottomTabBar, CustomModal } from '../../components/commonComponents'
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { useNavigation } from '@react-navigation/native';
import StatusPro from '../../../assets/images/status-pic.svg'
import StatusView from '../../../assets/images/status-view.svg'
import { labels } from '../../utils/labels';
import { CallThreeDotsOption } from '../../utils/data/modalData';
import { DevHeight, DevWidth } from '../../utils/device';
import { recentstatusData, statusData } from '../../utils/data/statusData';
import { StatusItem, statusText } from './allStatus';


const handleStatusItemClick = (id: string) => {
    // Add your click handling logic here
};

export type AllCallsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}


const RecentStatusScreen = ({ selectedCards, onCardSelection }: AllCallsProps) => {
    const navigation = useNavigation();
    const [callOptionModal, setCallOptionModal] = useState(false);

    const handleCallOptionModal = () => {
        setCallOptionModal(!callOptionModal);
    }

    const closeCallOptionModal = () => {
        setCallOptionModal(false);
    }


    const StatusOptionModalComponent = () => {
        const navigation = useNavigation();
        return (
            <View>
                {
                    CallThreeDotsOption.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                                <View style={[flexRow]}>
                                    <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H15Grey>{item.name}</H15Grey>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const topContainerBefore = () => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={()=>{}}>
                        <StatusPro />

                        <View style={{
                            backgroundColor: 'white',
                            position: 'absolute',
                            top: 25,
                            left: 27,
                            height: 13, width: 13, borderRadius: 13, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View style={{
                                borderRadius: 10,
                                height: 10,
                                width: 10,
                                backgroundColor: 'green',
                                alignItems: 'center'
                            }}>
                                <CustomIcon name='add' type='MaterialIcons' size={9} color={colors.white} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={[mh15, flexRow, spaceBetween, flex1]}>
                        <View >
                            <H15font500Black>{labels.myStatus}</H15font500Black>
                            <H14font400Gray4>{labels.statusUploadCont}</H14font400Gray4>
                        </View>
                        {/* <TouchableOpacity style={[alignItemsCenter, justyfyCenter]}
                            onPress={handleCallOptionModal}
                        >
                            <CustomIcon name='dots-three-horizontal' type='entypo' color={colors.greyVar3} size={15} />
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={[flex1, mt20, styles.whiteBg]}>
            <View style={flex1}>
                {topContainerBefore()}
                <ScrollView showsVerticalScrollIndicator={false}>
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
                marginTop={160}
                onClose={closeCallOptionModal}
            />
            <BottomTabBar />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.purpleVar4,
        margin: 20,
        padding: 10,
    },
    card1: {
        backgroundColor: colors.white,
        padding: 10,
        elevation: 2,
        marginHorizontal: 20,
        marginTop: 18,
        flexDirection: 'row',
        borderRadius: 6
    },
    card2: {
        backgroundColor: colors.white,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 18,
        flexDirection: 'row',
        borderRadius: 6,
    },
    whiteBg: {
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        overflow: 'hidden'
    },
 
  
});

export default RecentStatusScreen
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet ,TextInput, Text} from 'react-native';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh10, mh20, mt20, mt5, pl13 } from '../../components/commonStyles';
import { H14font400Black, H14font400Gray4, H15Grey, H15font500Black } from '../../components/commonText';
import { BottomTabBar, CustomModal } from '../../components/commonComponents'
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import StatusView from '../../../assets/images/status-view.svg'
import StatusView1 from '../../../assets/images/status-view1.svg'
import { labels } from '../../utils/labels';
import { CallThreeDotsOption } from '../../utils/data/modalData';
import { DevHeight, DevWidth } from '../../utils/device';
import { mutedStatusData, statusData, viewedStatusData } from '../../utils/data/statusData';
import { AfterNavigation, BeforeNavigation } from './statusContainer';


export interface StatusData {
    id: number;
    image: any;
    name: string;
    time: string;
}

export interface RecentStatusItemProps {
    data: StatusData;
    onPress: () => void;
    statusView ?: React.ReactNode;
    isMuted?: boolean;
}
const handleStatusItemClick = (id: string) => {
};


export const StatusItem: React.FC<RecentStatusItemProps> = ({ data, onPress, statusView, isMuted }) => (
    <View>
            <View style={isMuted ? styles.card2 : styles.card1}>
        <TouchableOpacity onPress={onPress}>

                
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {statusView}
                    <Image source={data.image} style={{ position: 'absolute', height: 40, width: 40, borderRadius: 100 }} />
                </View>
        </TouchableOpacity>

                <View style={[mh10, mt5]}>
                    <H15font500Black>{data.name}</H15font500Black>
                    <H14font400Gray4>{data.time}</H14font400Gray4>
                </View>
            </View>
    </View>
);

export const statusText = (value: string,) => {
    return (
        <View style={[mh20]}>
            <H14font400Black>{value}</H14font400Black>
        </View>
    )
}



export type AllCallsProps = {
    selectedCards: number[];
    onCardSelection: (cardId: number) => void;
}

const AllStatus = () => {

    const navigation = useNavigation();
    const [callOptionModal, setCallOptionModal] = useState(false);

const route = useRoute();
const showSecondScreen = route.params?.showSecondScreen === true;


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




    return (
        <View style={[flex1, mt20, styles.whiteBg]}>
            <View style={flex1}>
{showSecondScreen ? <AfterNavigation /> : <BeforeNavigation  />}

                <ScrollView showsVerticalScrollIndicator={false}>
                    {statusText(labels.recentStatus)}
                    <View>
                        {statusData.map((data, index) => (
                            <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView />} />
                        ))}

                    </View>
                    <View style={[mt20]}>
                        {statusText(labels.viewedStatus)}

                    </View>
                    <View>
                        {viewedStatusData.map((data, index) => (
                            <StatusItem key={data.id} data={data} onPress={() => handleStatusItemClick(data.id)} statusView={<StatusView1 />} />
                        ))}
                    </View>
                    <View style={[mt20]}>
                        {statusText(labels.mutedStatus)}

                    </View>
                    <View style={{ opacity: 0.3 }}>
                        {mutedStatusData.map((data, index) => (
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
                marginTop={160}
                onClose={closeCallOptionModal}
            />

            <BottomTabBar />


        </View >
    )
}


export const ReplyFooterView = () => {
    const navigation = useNavigation()

    const handlePaperPlaneIconClick = () => {
        navigation.navigate(screenName.NoStatus as never);
       // Call the onToggleView function to toggle the view in AllStatus
    }
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}} >
            <View style={{ width: '86%', backgroundColor: 'white', borderColor: colors.greyVar2, borderWidth: 2, borderRadius: 10,flexDirection:'row' }}>

                <View style={{ flexDirection: 'row', width: '80%', height: 40, paddingHorizontal:2, alignItems: 'center'}}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <CustomIcon name='smiley' type="octicons" size={16} color={colors.greyVar4} />
                        <TextInput
                            style={{ flex: 1, marginLeft: 5,color:colors.greyVar4,fontSize:14,fontWeight:'400'}}
                            placeholder="Add an caption..."
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight:10, transform: [{ rotate: '45deg' }]}}>
                            <CustomIcon name='paperclip' type="Feather" size={18} color={colors.greyVar4} />
                        </View>
                        <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={20} color={colors.greyVar4} />
                    </View>
                </View>
            </View>
            <TouchableOpacity 
            onPress={handlePaperPlaneIconClick}
            >
            <View style={{ backgroundColor: colors.purpleVar3, height: 40, width: 40, borderRadius: 12,  alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', }}>
                <CustomIcon name='paper-plane' type="font-awesome" color={colors.white} size={14} />
            </View>
            </TouchableOpacity>

        </View>
    );
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

export default AllStatus



// import { useNavigation, useRoute ,} from '@react-navigation/native';
// import React, { useState } from 'react';
// import Modal from 'react-native-modal';

// import { Text, View, TouchableOpacity,  } from 'react-native';
// import { screenName } from '../../utils/screenName';
// import { AfterNavigation, BeforeNavigation } from './statusContainer';

// export type allStatusProps = {};


// const AllStatus = (props: allStatusProps) => {
//   const route = useRoute();

//   // Check if the parameter 'showSecondScreen' is set to true

//   return (
//     <View>
//     </View>
//   );
// };

// export default AllStatus;

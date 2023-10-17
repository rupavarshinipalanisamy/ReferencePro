import React from 'react';
import { Text, View } from 'react-native';
import { SearchHeader } from './Media/MediaCommonHeader';
import { colors } from '../utils/colors';
import { Bluetick } from '../components/chatViewComponents';
import { SentMessage2 } from './chatView/Messagecomponents/messages';
import CustomIcon from '../utils/Icons';
import { CommonLineDividerGrey } from '../components/commonView';
import { alignItemsCenter, justyfyCenter } from '../components/commonStyles';
import { MessageStatusData } from '../utils/data/chatViewData';


const MessageInfo = () => {
    return (
        <View>
            <SearchHeader headerText='Message Info' />
            <View style={{ alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: colors.greyVar3 }}>8:17 PM</Text>
                    <Bluetick />
                </View>
                <SentMessage2 />
            </View>
            <View  style={{marginVertical:20}}>
                {MessageStatusData.map((item, index) => (
                    <View key={index}>
                        <CommonLineDividerGrey />
                        <View style={{ marginHorizontal: 25, margin: 12 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={[alignItemsCenter,justyfyCenter]}>
                                <CustomIcon color={item.iconColor} type={item.iconType} name={item.iconName}
                                    size={18}
                                />
                                    </View>

                              
                                <Text style={{fontSize:15,color:colors.blackVar2,fontWeight:'500',lineHeight:23}}>{item.status}</Text>
                            </View>
                            <Text  style={{fontSize:14,color:colors.greyVar4,fontWeight:'400'}}>{item.time}</Text>
                        </View>

                    </View>
                ))}
            </View>



        </View>
    )
}

export default MessageInfo
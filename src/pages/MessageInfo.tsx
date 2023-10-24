import React from 'react';
import { Text, View } from 'react-native';
import { SearchHeader } from './Media/MediaCommonHeader';
import { colors } from '../utils/colors';
import { Bluetick } from '../components/chatViewComponents';
import { SentMessage2 } from './chatView/Messagecomponents/messages';
import CustomIcon from '../utils/Icons';
import { CommonLineDividerGrey } from '../components/commonView';
import { alignItemsCenter, flexRow, justyfyCenter, mh20, mr5, mt10, mt15, mv10, pl13, pr10, pr13, pr7 } from '../components/commonStyles';
import { MessageStatusData } from '../utils/data/chatViewData';
import { H12fontBold400GreyVar4, H14GreyVar4Bold400Text, H15Blackvar2Bold500 } from '../components/commonText';


const MessageInfo = () => {
    return (
        <View>
            <SearchHeader headerText='Message Info'/>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={[mh20, flexRow, mt15]}>
                    <H12fontBold400GreyVar4 style={mr5}>8:17 PM</H12fontBold400GreyVar4>
                    <Bluetick />



                </View>
                <SentMessage2 />
            </View>
            <View style={{ marginVertical: 20 }}>
                {MessageStatusData.map((item, index) => (
                    <View key={index}>
                        <CommonLineDividerGrey />
                        <View style={{ marginHorizontal: 25, margin: 12 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={[alignItemsCenter, justyfyCenter, mr5]}>
                                    <CustomIcon color={item.iconColor} type={item.iconType} name={item.iconName}
                                        size={20}
                                    />
                                </View>


                                <H15Blackvar2Bold500 style={{lineHeight: 23 }}>{item.status}</H15Blackvar2Bold500>
                            </View>
                            <H14GreyVar4Bold400Text>{item.time}</H14GreyVar4Bold400Text>
                        </View>

                    </View>
                ))}
            </View>



        </View>
    )
}

export default MessageInfo
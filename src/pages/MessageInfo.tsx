import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchHeader } from './Media/MediaCommonHeader';
import { colors } from '../utils/colors';
import { Bluetick } from '../components/chatViewComponents';
import SendImg1 from '../../assets/images/sentMsg.svg'
import CustomIcon from '../utils/Icons';
import { CommonLineDividerGrey } from '../components/commonView';
import { alignItemsCenter, flexRow, justyfyCenter, mh20, mr5, mt15} from '../components/commonStyles';
import { MessageStatusData } from '../utils/data/chatViewData';
import { useTheme } from '../Theme/ThemeContext';
import { H12fontBold400GreyVar4, H14GreyVar4Bold400Text, H14font400grey3black2, H15Blackvar2Bold500 } from '../components/commonText';

const MessageInfo = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View>
            <SearchHeader headerText='Message Info' />
            <View style={{ alignItems: 'flex-end' }}>
                <View style={[mh20, flexRow, mt15]}>
                    <H12fontBold400GreyVar4 style={mr5}>8:17 PM</H12fontBold400GreyVar4>
                    <Bluetick />
                </View>
                <View>
                    <View style={[styles.sndMsgCard, { backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                        <H14font400grey3black2>
                            This is my new website design 😍
                        </H14font400grey3black2>
                    </View>
                    <View style={[styles.sndMsgCard, { backgroundColor: isDarkTheme ? colors.darkModeVar4 : colors.purpleVar1 }]}>
                        <SendImg1 />
                    </View>
                </View >
            </View>
            <View style={{ marginVertical: 20 }}>
                {MessageStatusData.map((item, index) => (
                    <View key={index}>
                        <CommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />
                        <View style={{ marginHorizontal: 25, margin: 12 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={[alignItemsCenter, justyfyCenter, mr5]}>
                                    <CustomIcon color={item.iconColor} type={item.iconType} name={item.iconName}
                                        size={20}
                                    />
                                </View>
                                <H15Blackvar2Bold500 style={{ lineHeight: 23 }}>{item.status}</H15Blackvar2Bold500>
                            </View>
                            <H14GreyVar4Bold400Text>{item.time}</H14GreyVar4Bold400Text>
                        </View>

                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sndMsgCard: {
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 10,
        marginTop: 5


    },
})
export default MessageInfo
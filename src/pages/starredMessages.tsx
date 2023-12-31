import React, { useState } from 'react';
import { Text, View,Image, ScrollView } from 'react-native';
import {  FullCommonLineDividerGrey} from '../components/commonView';
import CustomIcon from '../utils/Icons';
import { flex1, flexRow,mb20, mh20, mt15, mt3,  pl10, pl13,pl7, pt10, spaceBetween } from '../components/commonStyles';
import { colors } from '../utils/colors';
import { H12fontBold400GreyVar4,H14BlackVar2Bold400Text} from '../components/commonText';
import { labels } from '../utils/labels';
import { Chatimg1Img } from '../utils/png';
import AlexProfile from '../../assets/images/starredProfile.svg'
import { StarredAndVerifycodeHeader, TextInputHeader } from './Media/MediaCommonHeader';
import { Card1, Card2, Card3, Card4 } from '../components/starredMessages/starredMessages';
import { isDark, useTheme } from '../Theme/ThemeContext';


interface HeaderProps {
    height?: number;
}
interface CardProps {
    backgroundColor?: string

}

export const StarredMsg = [
    {
        id: 1,
        renderItem: <Card1 />

    },
    {
        id: 2,
        renderItem: <Card2 />

    },
    {
        id: 3,
        renderItem: <Card3 />

    },
    {
        id: 4,
        renderItem: <Card4 />

    }
]




const StarredMessages = () => {
    const [isTextInputHeader, setIsTextInputHeader] = useState(false);
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';

    const handleonPress = () => {
        setIsTextInputHeader(true);
    }

    const handleBackToInitialHeader = () => {
        setIsTextInputHeader(false);
    }
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            {isTextInputHeader ? <TextInputHeader onBack={handleBackToInitialHeader} /> :
                <StarredAndVerifycodeHeader headerText='Starred Messages' isSearchDot={true} onPress={handleonPress} />
            }
            <ScrollView style={mb20}>
                {StarredMsg.map((item, index) => (
                    <View key={index} style={mh20}>
                        <View >
                            <View style={[flexRow, spaceBetween, { marginTop: 25 }]}>
                                <View style={[flexRow]}>
                                    <Image source={Chatimg1Img} style={{ borderRadius: 25 }} />
                                    <H14BlackVar2Bold400Text style={[pl13, { lineHeight: 20 }]}>{labels.MarkVilliams}</H14BlackVar2Bold400Text>
                                    <H12fontBold400GreyVar4 style={[pl10, mt3]}>8:16 PM</H12fontBold400GreyVar4>
                                </View>
                                <View style={flexRow}>
                                    <H12fontBold400GreyVar4>24 Aug 2023</H12fontBold400GreyVar4>

                                    <View style={[pl7, { bottom: 2 }]}>
                                        <CustomIcon name='chevron-right' color={isDark() ? colors.greyVar3 : colors.greyVar4} size={20} type="Feather"
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={{ paddingLeft: 52 }}>

                                {item.renderItem}
                                <View style={[flexRow, pt10]}>
                                    <AlexProfile />
                                    <H14BlackVar2Bold400Text style={[pl13, mt3]}>Alex Smith</H14BlackVar2Bold400Text>
                                    <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                        <CustomIcon name='star' color={colors.yellow} size={18} type="font-awesome" />
                                    </View>
                                </View>


                            </View>
                            {index !== StarredMsg.length - 1 &&

                                <View style={[mt15]}>
                                    <FullCommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.darkModeVar3 : colors.greyVar0 }} />
                                </View>
                            }


                        </View>
                    </View>
                ))}
            </ScrollView>


        </View>
    )
}

export default StarredMessages
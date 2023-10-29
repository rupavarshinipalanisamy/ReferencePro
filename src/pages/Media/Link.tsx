
import React from 'react';
import { View, Text } from 'react-native';
import { flex1, flexRow, mh20, mt15, mt20, mt5, mt8, pl15, pt10, pt15, pt5, spaceBetween } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { H12font400Grey, H14GreyVar4Bold400, H15Blackvar2Bold500, H18BlackBoldText } from '../../components/commonText';
import { CommonLineDividerGrey, FullCommonLineDividerGrey } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { isDark, useTheme } from '../../Theme/ThemeContext';
import { LinkData } from '../../utils/data/MediaData';
import { Image } from 'react-native-elements';



const splitTextIntoLines = (text, maxLineLength) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (currentLine.length + word.length <= maxLineLength) {
            currentLine += (currentLine.length > 0 ? ' ' : '') + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    return lines;
};

const Link = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <View style={[flex1,mh20]}>
            <H15Blackvar2Bold500 style={[mt20,{ lineHeight: 20}]}>Recent</H15Blackvar2Bold500>

            {LinkData.map((item, index) => {
                const lines = splitTextIntoLines(item.headertxt, 30);
                return (
                    <View key={index} style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={item.img} style={[{ height: 70, width: 70 }, mt15]} />
                            <View style={[flex1,pl15,{paddingTop: 12 }]}>
                                {lines.map((line, lineIndex) => (
                                    <H15Blackvar2Bold500 key={lineIndex} style={{ lineHeight: 23 }}>
                                        {line}
                                    </H15Blackvar2Bold500>
                                ))}

                                <H12font400Grey style={mt8}>{item.website}</H12font400Grey>
                            </View>
                        </View>
                        <View style={[flexRow, spaceBetween,pt15]}>
                            <H14GreyVar4Bold400>{item.link}</H14GreyVar4Bold400>
                            <CustomIcon name='chevron-right' color={isDark() ? colors.greyVar3 : colors.greyVar4} size={20} type="MaterialIcons" />
                        </View>
                        <View style={pt15}>
                            <FullCommonLineDividerGrey style={{ backgroundColor: isDarkTheme ? colors.greyVar0 : colors.greyVar7 }} />
                        </View>
                    </View>
                );
            })}
        </View>
    );
}


export default Link;



import React from 'react';
import { View, Text } from 'react-native';
import LinkImg1 from '../../../assets/images/linkimg1.svg';
import LinkImg2 from '../../../assets/images/linkimg2.svg';
import LinkImg3 from '../../../assets/images/linkimg3.svg';
import LinkImg4 from '../../../assets/images/linkimg4.svg';
import { flex1, flexRow, mh20, mt15, mt5, pt10, pt5, spaceBetween } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { H12font400Grey, H14GreyVar4Bold400, H15Blackvar2Bold500, H18BlackBoldText } from '../../components/commonText';
import { CommonLineDividerGrey } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { isDark } from '../../Theme/ThemeContext';

// export type LinkProps = {};

export const LinkData = [
    {
        id: 1,
        img: <LinkImg1 />,
        headertxt: 'Figma for Edu: Advanced proptotyping workshop',
        website: 'Workshop file here:https://www.figma.co',
        link: 'https://youtu.be/LfldqERs0aw?feature=sh..',
    },
    {
        id: 2,
        img: <LinkImg2 />,
        headertxt: 'Architecture Studio Landing Page',
        website: 'dribble.com',
        link: 'Studio Design Sample',
    },
    {
        id: 3,
        img: <LinkImg3 />,
        headertxt: 'Accounting Software Landing Page',
        website: 'behance.net',
        link: 'Accounting Landing Page',
    },
    {
        id: 4,
        img: <LinkImg4 />,
        headertxt: 'Awesome Skills UI UX Designing #youtubeshorts #design',
        website: 'youtube.com',
        link: 'UI UX Design Skills',
    },
];

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
    return (
        <View style={{ flex: 1,marginHorizontal:20 }}>
            <H15Blackvar2Bold500 style={{ lineHeight:20, marginTop: 20}}>Recent</H15Blackvar2Bold500>

            {LinkData.map((item, index) => {
                const lines = splitTextIntoLines(item.headertxt, 30);
                return (
                    <View key={index} style={{  flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={mt15}>{item.img}</View>
                            <View style={{ flex: 1, paddingLeft: 15, paddingTop: 12 }}>
                                {lines.map((line, lineIndex) => (
                                    <H15Blackvar2Bold500 key={lineIndex} style={{lineHeight:23}}>
                                        {line}
                                    </H15Blackvar2Bold500>
                                ))}

                                <H12font400Grey style={{ marginTop:8}}>{item.website}</H12font400Grey>
                            </View>
                        </View>
                        <View style={[flexRow, spaceBetween,{ paddingTop: 15 }]}>
                            <H14GreyVar4Bold400>{item.link}</H14GreyVar4Bold400>
                            <CustomIcon name='chevron-right' color={isDark()?colors.greyVar3:colors.greyVar4} size={20} type="MaterialIcons"/>

                        </View>
                        <View style={{ paddingTop: 15 }}>
                            <CommonLineDividerGrey />
                        </View>

                    </View>
                );
            })}
        </View>
    );
}


export default Link;


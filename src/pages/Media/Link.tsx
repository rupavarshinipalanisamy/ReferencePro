
import React from 'react';
import { View, Text } from 'react-native';
import LinkImg1 from '../../../assets/images/linkimg1.svg';
import LinkImg2 from '../../../assets/images/linkimg2.svg';
import LinkImg3 from '../../../assets/images/linkimg3.svg';
import LinkImg4 from '../../../assets/images/linkimg4.svg';
import { flex1, flexRow, mh20, mt15, mt5, pt10, pt5 } from '../../components/commonStyles';
import { colors } from '../../utils/colors';
import { H18BlackBoldText } from '../../components/commonText';
import { CommonLineDividerGrey } from '../../components/commonView';

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
        <View style={{ flex: 1 }}>
            <H18BlackBoldText style={{ marginVertical: 10, marginTop: 20, marginHorizontal: 20 }}>Recent</H18BlackBoldText>

            {LinkData.map((item, index) => {
                const lines = splitTextIntoLines(item.headertxt, 30);
                return (
                    <View key={index} style={{ marginHorizontal: 20, flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={mt15}>{item.img}</View>
                            <View style={{ flex: 1, paddingLeft: 15, paddingTop: 12 }}>
                                {lines.map((line, lineIndex) => (
                                    <Text
                                        key={lineIndex}
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            color: colors.black,
                                            letterSpacing: 0.2,
                                            lineHeight: 23,
                                        }}
                                    >
                                        {line}
                                    </Text>
                                ))}

                                <Text style={{ marginTop: 8, fontSize: 12, color: colors.greyVar4 }}>{item.website}</Text>
                            </View>
                        </View>
                        <View style={[flexRow, { paddingTop: 15 }]}>
                            <Text style={{ fontSize: 14, color: colors.greyVar4 }}>{item.link}</Text>
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


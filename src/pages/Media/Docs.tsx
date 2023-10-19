import React from 'react';
import { Text, View, Image } from 'react-native';
import { H12font400Grey, H15Blackvar2Bold500, H18BlackBoldText } from '../../components/commonText';
import { colors } from '../../utils/colors';
import { flexRow, mb15, mt10, mt15, mt5, p10, p5, pl0, pl10, pl13, spaceBetween } from '../../components/commonStyles';
import { CommonLineDividerGrey } from '../../components/commonView';
import { DocImg1, DocImg2, DocImg3, DocImg4, DocImg5, DocImg6, DocImg7, DocImg8 } from '../../utils/png';

export type DocsProps = {

}


export const recentDocsData = [
    {
        id: 1,
        docName: 'Time Estimation.xls',
        storage: '183 MB',
        date: '24 Aug 2023',
        img: DocImg1
    },
    {
        id: 2,
        docName: 'Update Guidelien.doc',
        storage: '183 MB',
        date: '23 Aug 2023',
        img: DocImg2
    },
    {
        id: 3,
        docName: 'sample Design.ppt',
        storage: '165 MB',
        date: '22 Aug 2023',
        img: DocImg3
    }
]

export const lastweekDocsData = [
    {
        id: 1,
        docName: 'Kanakku Preview.psd',
        storage: '236 MB',
        date: '18 Aug 2023',
        img: DocImg4
    },
    {
        id: 2,
        docName: 'Dreamschat Logo.ai',
        storage: '962 MB',
        date: '17 Aug 2023',
        img: DocImg5
    },
    {
        id: 3,
        docName: 'Dreamschat.fig',
        storage: '456 MB',
        date: '17 Aug 2023',
        img: DocImg6
    },
    {
        id: 4,
        docName: 'Dreamschat Mobile.xd',
        storage: '369 MB',
        date: '16 Aug 2023',
        img: DocImg7
    },
    {
        id: 5,
        docName: 'Banner Add.in',
        storage: '862 MB',
        date: '13 Aug 2023',
        img: DocImg8
    }
]

const Docs = () => {
    return (
        <View >
            <View style={{ marginHorizontal: 20 }}>
                <H15Blackvar2Bold500 style={{ marginTop: 20 }}>Recent</H15Blackvar2Bold500>


            </View>
            <View style={{ marginHorizontal: 10 }}>
                {recentDocsData.map((item, index) => (
                    <View key={index} >
                        <View style={[flexRow, spaceBetween, p10, mt10]} >
                            <View style={flexRow}>
                                <Image source={item.img} />
                                <View style={pl13}>
                                    <H15Blackvar2Bold500 style={{lineHeight:23}}>{item.docName}</H15Blackvar2Bold500>
                                    <H12font400Grey style={{lineHeight:16}}>{item.storage}</H12font400Grey>
                                </View>
                            </View>
                            <H12font400Grey >{item.date}</H12font400Grey>
                        </View>
                        {index !== recentDocsData.length - 1 && <CommonLineDividerGrey />}
                    </View>
                ))}
            </View>
            <View style={{ marginHorizontal: 20 }}>

                <H15Blackvar2Bold500 style={{ marginTop: 20 }}>Last Week</H15Blackvar2Bold500>
            </View>
            <View style={{ marginHorizontal: 10 }}>

                {lastweekDocsData.map((item, index) => (
                    <View key={index}>
                        <View key={index} style={[flexRow, spaceBetween, p10, mt10]} >
                            <View style={flexRow}>
                                <Image source={item.img} />

                                <View style={pl13}>
                                    <H15Blackvar2Bold500  style={{lineHeight:23}}>{item.docName}</H15Blackvar2Bold500>
                                    <H12font400Grey style={{lineHeight:16}}>{item.storage}</H12font400Grey>
                                </View>
                            </View>
                            <H12font400Grey>{item.date}</H12font400Grey>
                        </View>
                        {index !== lastweekDocsData.length - 1 && <CommonLineDividerGrey />}
                    </View>


                ))}
            </View>



        </View>
    )
}

export default Docs
import React from 'react';
import { Text, View } from 'react-native';
import Excel from '../../../assets/images/excel.svg'
import PowerPoint from '../../../assets/images/PowerPoint.svg'
import PhotoShop from '../../../assets/images/Photoshop.svg'
import AI from '../../../assets/images/AI.svg'
import Fig from '../../../assets/images/Docs.svg'
import Xd from '../../../assets/images/Xd.svg'
import Id from '../../../assets/images/Id.svg'

import { H18BlackBoldText } from '../../components/commonText';
import { colors } from '../../utils/colors';
import { flexRow, mb15, mt10, mt15, mt5, p10, p5, pl0, pl10, pl13, spaceBetween } from '../../components/commonStyles';
import { CommonLineDividerGrey } from '../../components/commonView';

export type DocsProps = {

}


export const recentDocsData = [
    {
        id: 1,
        docName: 'Time Estimation.xls',
        storage: '183 MB',
        date: '24 Aug 2023',
        img: <Excel />
    },
    {
        id: 2,
        docName: 'Update Guidelien.doc',
        storage: '183 MB',
        date: '23 Aug 2023',
        img: <PowerPoint />
    },
    {
        id: 3,
        docName: 'sample Design.ppt',
        storage: '165 MB',
        date: '22 Aug 2023',
        img: <PowerPoint />
    }
]

export const lastweekDocsData = [
    {
        id: 1,
        docName: 'Kanakku Preview.psd',
        storage: '236 MB',
        date: '18 Aug 2023',
        img: <PhotoShop />
    },
    {
        id: 2,
        docName: 'Dreamschat Logo.ai',
        storage: '962 MB',
        date: '17 Aug 2023',
        img: <AI />
    },
    {
        id: 3,
        docName: 'Dreamschat.fig',
        storage: '456 MB',
        date: '17 Aug 2023',
        img: <Fig />
    },
    {
        id: 4,
        docName: 'Dreamschat Mobile.xd',
        storage: '369 MB',
        date: '16 Aug 2023',
        img: <Xd />
    },
    {
        id: 5,
        docName: 'Banner Add.in',
        storage: '862 MB',
        date: '13 Aug 2023',
        img: <Id />
    }
]



const Docs = (props: DocsProps) => {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <H18BlackBoldText style={{ marginTop: 20 }}>Recent</H18BlackBoldText>
            <View>
                {recentDocsData.map((item, index) => (
                    <View key={index} >
                        <View style={[flexRow, spaceBetween, p10, mt10]} >
                            <View style={flexRow}>
                                <View>{item.img}</View>
                                <View style={pl13}>
                                    <Text style={{ fontSize: 16, color: colors.black }}>{item.docName}</Text>
                                    <Text>{item.storage}</Text>
                                </View>
                            </View>
                            <Text>{item.date}</Text>
                        </View>
                        {index !== recentDocsData.length - 1 && <CommonLineDividerGrey />}
                    </View>
                ))}


            </View>
            <H18BlackBoldText style={{ marginTop: 20 }}>Last Week</H18BlackBoldText>
            {lastweekDocsData.map((item, index) => (
                <View key={index}>
                    <View key={index} style={[flexRow, spaceBetween, p10, mt10]} >
                        <View style={flexRow}>
                            <View>{item.img}</View>
                            <View style={pl13}>
                                <Text style={{ fontSize: 16, color: colors.black }}>{item.docName}</Text>
                                <Text>{item.storage}</Text>
                            </View>
                        </View>
                        <Text>{item.date}</Text>
                    </View>
                    {index !== lastweekDocsData.length - 1 && <CommonLineDividerGrey />}
                </View>

            ))}

        </View>
    )
}

export default Docs
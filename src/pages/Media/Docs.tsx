import React from 'react';
import { Text, View, Image } from 'react-native';
import { H12font400Grey, H15Blackvar2Bold500, H18BlackBoldText } from '../../components/commonText';
import { colors } from '../../utils/colors';
import { flexRow, mb15, mt10, mt15, mt5, p10, p5, pl0, pl10, pl13, spaceBetween } from '../../components/commonStyles';
import { CommonLineDividerGrey } from '../../components/commonView';
import { DocImg1, DocImg2, DocImg3, DocImg4, DocImg5, DocImg6, DocImg7, DocImg8 } from '../../utils/png';
import { lastweekDocsData, recentDocsData } from '../../utils/data/MediaData';

export type DocsProps = {

}




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
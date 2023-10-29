import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { StarredAndVerifycodeHeader } from './Media/MediaCommonHeader';
import { QrCodeImg } from '../utils/png';
import { QrImgView } from '../styledComponent/styledComponent';
import { flex1, mh20, mt30, mt8, spaceBetween } from '../components/commonStyles';
import { H14GreyVar4Bold400} from '../components/commonText';
import { LongPurpleButton } from '../components/commonButtons';
import { MiddleData } from '../utils/data/VerfifyCodeData';

const VerifyCode = () => {
        const [data, setData] = useState(MiddleData);
    return (
        <View style={flex1} >
            <StarredAndVerifycodeHeader headerText='Verify Security Code' isSearchDot={true} />
            <QrImgView>
                <Image source={QrCodeImg} />
            </QrImgView>
            <View style={[{ marginHorizontal: 40 }, mt30]}>
                <FlatList
                    columnWrapperStyle={[mt8, spaceBetween]}
                    numColumns={4}
                    data={data} 
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => (
                        <View>
                            <H14GreyVar4Bold400>{item.num}</H14GreyVar4Bold400>
                        </View>
                    )}
                />
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 40 }}>
                <H14GreyVar4Bold400 style={{ textAlign: 'center', letterSpacing: 0.3, lineHeight: 20 }}>
                    To verify that messages and calls with Horace{'\n'} Keene are end-to-end encrypted, scan this code{'\n'} on their phone. You can also compare the {'\n'} number above instead.
                </H14GreyVar4Bold400>
            </View>
            <View style={[mh20,flex1,{justifyContent: 'flex-end',bottom:25}]}>
                <LongPurpleButton title='Scan Code' />
            </View>
        </View>
    )
}

export default VerifyCode
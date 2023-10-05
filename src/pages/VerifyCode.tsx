import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { StarredAndVerifycodeHeader } from './Media/MediaCommonHeader';
import { QrCodeImg } from '../utils/png';
import { QrImgView } from '../styledComponent/styledComponent';
import { flex1, mt30, mt8, spaceBetween } from '../components/commonStyles';
import { H14Grey, H15Grey } from '../components/commonText';
import { ButtonNow } from '../components/commonButtons';


export const MiddleData = () => [
    {
        id: 1,
        num: '85003'
    },
    {
        id: 2,
        num: '88073'
    },
    {
        id: 3,
        num: '47603'
    },
    {
        id: 4,
        num: '13723'
    },
    {
        id: 5,
        num: '02003'
    },
    {
        id: 6,
        num: '09613'
    },
    {
        id: 7,
        num: '42890'
    },
    {
        id: 8,
        num: '86292'
    },
    {
        id: 9,
        num: '53034'
    },
    {
        id: 10,
        num: '18293'
    },
    {
        id: 11,
        num: '78578'
    },
    {
        id: 12,
        num: '75513'
    },
]

const VerifyCode = () => {
    const handleSave=()=>{

    }
    const [data, setData] = useState(MiddleData);
    return (
        <View style={flex1} >
            <StarredAndVerifycodeHeader headerText='Verify Security Code' />
            <QrImgView>
                <Image source={QrCodeImg} />
            </QrImgView>
            <View style={[{ marginHorizontal: 40 }, mt30]}>
                <FlatList
                    columnWrapperStyle={[mt8, spaceBetween]}
                    numColumns={4}
                    data={data} // Use the state variable as data source
                    keyExtractor={(item) => item.id.toString()} // Provide a unique key for each item
                    renderItem={({ item }) => (
                        <View>
                            <H15Grey>{item.num}</H15Grey>
                        </View>
                    )}
                />
            </View>
            <View style={{ marginHorizontal:25, marginVertical: 40 }}>
                <H14Grey style={{ textAlign: 'center', letterSpacing: 0.3 ,lineHeight:20}}>
                    To verify that messages and calls with Horace{'\n'} Keene are end-to-end encrypted, scan this code{'\n'} on their phone. You can also compare the {'\n'} number above instead.
                </H14Grey>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'flex-end',flex:1}}>
                <ButtonNow
               
                    label='Scan  Code' />
            </View>


        </View>
    )
}

export default VerifyCode
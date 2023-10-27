import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { MediaHeader } from './MediaCommonHeader';
import { DevHeight, DevWidth } from '../../utils/device';
import ImageViewImg from '../../../assets/images/ImageView.svg'
import { colors } from '../../utils/colors';
import { isDark } from '../../Theme/ThemeContext';
import { ImageViewData, recentImages } from '../../utils/data/MediaData';
import { MediaImg1 } from '../../utils/png';

export type ImageViewProps = {

}
const ImageView = (props: ImageViewProps) => {

    const renderItem = ({ item }) => (
        <View>
            <Image source={item.img} style={{ width: DevWidth, height: DevHeight/1.24 }} />
        </View>
    );

    return (
        <View>
            <MediaHeader height={DevHeight / 7} startDot={true} Imagess={false} imageViewModal={true} />
            <View style={{ marginHorizontal: 20,marginTop:20}}>

                <FlatList
                    data={ImageViewData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    snapToAlignment='center'
                />


            </View>


        </View>
    )
}

export default ImageView
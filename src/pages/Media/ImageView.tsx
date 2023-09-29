import React from 'react';
import { Text, View } from 'react-native';
import { MediaHeader } from './MediaCommonHeader';
import { DevHeight } from '../../utils/device';
import ImageViewImg from '../../../assets/images/ImageView.svg'

export type ImageViewProps = {

}


const ImageView = (props: ImageViewProps) => {
    return (
        <View style={{ flex: 1 }}>
            <MediaHeader height={DevHeight / 7} startDot={true} Imagess={false} />
            <View style={{alignItems:'center',justifyContent:'center',marginVertical:25}}>
            <ImageViewImg />
            </View>
        </View>
    )
}

export default ImageView
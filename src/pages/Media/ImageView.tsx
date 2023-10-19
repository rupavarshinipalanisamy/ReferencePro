import React from 'react';
import {  View } from 'react-native';
import { MediaHeader } from './MediaCommonHeader';
import { DevHeight } from '../../utils/device';
import ImageViewImg from '../../../assets/images/ImageView.svg'
import { colors } from '../../utils/colors';
import { isDark } from '../../Theme/ThemeContext';

export type ImageViewProps = {

}


const ImageView = (props: ImageViewProps) => {
    return (
        <View style={{ flex: 1 ,backgroundColor:isDark()?colors.darkModeVar2:colors.whiteVar0}}>
            <MediaHeader height={DevHeight / 7} startDot={true} Imagess={false} imageViewModal={true} />
            <View style={{alignItems:'center',justifyContent:'center',marginVertical:25}}>
            <ImageViewImg />
            </View>
        </View>
    )
}

export default ImageView
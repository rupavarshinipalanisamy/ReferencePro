import React from 'react';
import { View, FlatList, ImageBackground,Text } from 'react-native';
import { MediaHeader } from './MediaCommonHeader';
import { DevHeight, DevWidth } from '../../utils/device';
import ImageViewImg from '../../../assets/images/ImageView.svg'
import { colors } from '../../utils/colors';
import { isDark } from '../../Theme/ThemeContext';
import { ImageViewData, VideoViewData, recentImages } from '../../utils/data/MediaData';
import { MediaImg1 } from '../../utils/png';
import CustomIcon from '../../utils/Icons';
import { alignItemsCenter, justyfyCenter, mh20, mt20 } from '../../components/commonStyles';

export type ImageViewProps = {

}
const ImageView = (props: ImageViewProps) => {

    const renderItem = ({ item }) => (
        <View>
            <ImageBackground source={item.img} style={[alignItemsCenter,justyfyCenter,{ width: DevWidth, height: DevHeight/1.24}]} >
                <CustomIcon name="play-circle-o" size={40} color={colors.white} type="font-awesome" />
            </ImageBackground>

        </View>
    );

    return (
        <View >
            <MediaHeader height={DevHeight / 7} startDot={true} Imagess={false} imageViewModal={true} />
            <View style={[mh20,mt20]}>
            <FlatList
                data={VideoViewData}
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
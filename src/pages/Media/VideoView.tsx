import React from 'react';
import { ImageBackground, View } from 'react-native';
import { MediaHeader } from './MediaCommonHeader';
import { DevHeight } from '../../utils/device';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';

export type VideoViewProps = {

}


const VideoView = (props: VideoViewProps) => {
    return (
        <View style={{ flex: 1 }}>
            <MediaHeader height={DevHeight / 7} startDot={true} Imagess={false} />
            <View style={{paddingBottom:'35%',padding:25}}>
                <ImageBackground source={require('../../../assets/images/png/VideoView.png')}
                    style={{ width: '100%',height:'100%',alignItems:'center',justifyContent:'center'}}
                >
                    <CustomIcon name="play-circle-o" size={40} color={colors.white} type="font-awesome" />

                </ImageBackground>
            </View>
        </View>
    )
}

export default VideoView
import React from 'react';
import { Text, View } from 'react-native';
import { SearchHeader } from './Media/MediaCommonHeader';
import { DevHeight } from '../utils/device';

export type ChooseWallperProps = {
    
    }


const ChooseWallper = (props: ChooseWallperProps) => {
    return (
        <View>
            <SearchHeader headerText='Choose Wallpaper' height={DevHeight/8}/>
            <Text>ChooseWallper component</Text>
        </View>
    )
}

export default ChooseWallper
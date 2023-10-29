import React, { useState } from 'react';
import {View} from 'react-native';
import { MediaHeader } from './MediaCommonHeader';
import { colors } from '../../utils/colors';
import { DevHeight } from '../../utils/device';
import { isDark } from '../../Theme/ThemeContext';
import { flex1 } from '../../components/commonStyles';



const Media = () => {
    return (
        <View style={[flex1,{backgroundColor: isDark()?colors.darkModeVar2:colors.whiteVar0}]}>
            <MediaHeader Imagess={true} height={DevHeight/5} />
        </View>
    )
}


export default Media
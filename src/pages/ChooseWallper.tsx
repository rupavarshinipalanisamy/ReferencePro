import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SearchHeader } from './Media/MediaCommonHeader';
import { screenName } from '../utils/screenName';
import { useNavigation } from '@react-navigation/native';
import { LongPurpleButton } from '../components/commonButtons';
import { isDark } from '../Theme/ThemeContext';
import { colors } from '../utils/colors';

export type ChooseWallperProps = {

}


export const ChooseWallperData = [
    {
        id: 1,
        img: require('../../assets/images/png/wallpaper1.png')
    },
    {
        id: 2,
        img: require('../../assets/images/png/wallpaper2.png')
    },
    {
        id: 3,
        img: require('../../assets/images/png/wallpaper3.png')
    },
    {
        id: 4,
        img: require('../../assets/images/png/wallpaper4.png')
    },
    {
        id: 5,
        img: require('../../assets/images/png/wallpaper5.png')
    },
    {
        id: 6,
        img: require('../../assets/images/png/wallpaper6.png')
    },
    {
        id: 7,
        img: require('../../assets/images/png/wallpaper7.png')
    },
    {
        id: 8,
        img: require('../../assets/images/png/wallpaper8.png')
    },
    {
        id: 9,
        img: require('../../assets/images/png/wallpaper9.png')
    },
    {
        id: 10,
        img: require('../../assets/images/png/wallpaper10.png')
    },
    {
        id: 11,
        img: require('../../assets/images/png/wallpaper11.png')
    },
    {
        id: 12,
        img: require('../../assets/images/png/wallpaper12.png')
    },

]

const ChooseWallper = (props: ChooseWallperProps) => {
    const navigation = useNavigation()


    const renderImages = (images: any) => {
        return images.map((item: any) => (
            <TouchableOpacity key={item.id} onPress={handleImagePress} style={styles.touchable}>
                <Image source={item.img} style={styles.image} />
            </TouchableOpacity>
        ));
    };

    const handleImagePress = () => {
        navigation.navigate(screenName.Chats as never)
    };

    return (
        <View style={{ flex: 1, backgroundColor: isDark() ? colors.darkModeVar1 : colors.whiteVar0 }}>
            <ScrollView style={{ flex: 1 }}>
                <SearchHeader headerText='Choose Wallpaper' />
                <View style={styles.container}>
                    <View style={styles.gridContainer}>
                        {renderImages(ChooseWallperData)}
                    </View>
                </View>
                <View style={{ marginTop: '35%', bottom: '4%', marginHorizontal: 25 }}>
                    <LongPurpleButton title='Done' />
                </View>
            </ScrollView>

        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
    },
    touchable: {
        // aspectRatio: 1,
        width: (Dimensions.get('window').width - 80) / 3,
        margin: 5,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        borderRadius: 12,
        width: '100%',
        minHeight: 138
    },
});
export default ChooseWallper
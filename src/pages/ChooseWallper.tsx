import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SearchHeader } from './Media/MediaCommonHeader';
import { DevHeight } from '../utils/device';
import { H18BlackBoldText } from '../components/commonText';
import { screenName } from '../utils/screenName';
import { useNavigation } from '@react-navigation/native';

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
        navigation.navigate(screenName.ImageView as never)
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchHeader headerText='Choose Wallpaper' />
            <View style={styles.container}>
                <View style={styles.gridContainer}>
                    {renderImages(ChooseWallperData)}
                </View>
            </View>

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
        marginVertical: 10,
    },
    touchable: {
        aspectRatio: 1,
        width: (Dimensions.get('window').width - 80) / 3,
        margin:5,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        borderRadius:12,
        width:'100%',
        minHeight:138
    
    },
});
export default ChooseWallper
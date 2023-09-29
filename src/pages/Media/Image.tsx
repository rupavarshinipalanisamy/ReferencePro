
import React from "react";
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { H18BlackBoldText } from "../../components/commonText";
import { useNavigation } from "@react-navigation/native";
import { screenName } from "../../utils/screenName";
export const recentImages = [
    {
        id: 1,
        img: require('../../../assets/images/png/recentimg1.png')
    },
    {
        id: 2,
        img: require('../../../assets/images/png/recentimg2.png')
    },
    {
        id: 3,
        img: require('../../../assets/images/png/recentimg3.png')
    },
    {
        id: 4,
        img: require('../../../assets/images/png/recentimg4.png')
    },
    {
        id: 5,
        img: require('../../../assets/images/png/recentimg5.png')
    },
    {
        id: 6,
        img: require('../../../assets/images/png/recentimg6.png')
    },
    {
        id: 7,
        img: require('../../../assets/images/png/recentimg7.png')
    },
    {
        id: 8,
        img: require('../../../assets/images/png/recentimg7.png')
    },

]

const ImageScreen = () => {

 const navigation =useNavigation()


    const renderImages = (images:any) => {
        return images.map((item:any) => (
            <TouchableOpacity key={item.id} onPress={ handleImagePress} style={styles.touchable}>
                <Image source={item.img} style={styles.image} />
            </TouchableOpacity>
        ));
    };

    const handleImagePress = () => {
        navigation.navigate(screenName.ImageView as never)
    };

    return (
        <View style={styles.container}>
            <H18BlackBoldText style={{ marginVertical: 10, marginTop: 20, margin: 5 }}>Recent</H18BlackBoldText>
            <View style={styles.gridContainer}>
                {renderImages(recentImages)}
            </View>

            <H18BlackBoldText style={{ marginTop: 10, marginVertical: 10, margin: 5 }}>Last week</H18BlackBoldText>
            <View style={styles.gridContainer}>
                {renderImages(recentImages)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    touchable: {
        aspectRatio: 1,
        width: (Dimensions.get('window').width - 56) / 3,
        margin: 3,
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
    },
});

export default ImageScreen;



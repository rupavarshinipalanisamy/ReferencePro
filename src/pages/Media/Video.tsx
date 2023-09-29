import React from "react";
import { View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { H18BlackBoldText } from "../../components/commonText";
import { Text } from "react-native-svg";
import CustomIcon from "../../utils/Icons";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { screenName } from "../../utils/screenName";

const ImageScreen = () => {

    const recentVideos = [
        {
            id: 1,
            img: require('../../../assets/images/png/videoimg1.png')
        },
        {
            id: 2,
            img: require('../../../assets/images/png/videoimg2.png')
        },
        {
            id: 3,
            img: require('../../../assets/images/png/videoimg3.png')
        },
    ]

    const lastWeek = [

        {
            id: 1,
            img: require('../../../assets/images/png/videoimg4.png')
        },
        {
            id: 2,
            img: require('../../../assets/images/png/videoimg5.png')
        },
        {
            id: 3,
            img: require('../../../assets/images/png/videoimg6.png')
        },
        {
            id: 4,
            img: require('../../../assets/images/png/videoimg7.png')

        },

    ]

    const lastMonth = [
        {
            id: 1,
            img: require('../../../assets/images/png/videoimg8.png')

        },

        {
            id: 2,
            img: require('../../../assets/images/png/videoimg9.png')

        },
        {
            id: 3,
            img: require('../../../assets/images/png/videoimg10.png')

        }
    ]

const navigation=useNavigation()

    const renderImages = (images: any) => {
        return images.map((item: any) => (
            <TouchableOpacity key={item.id} onPress={handleVideoPress} style={styles.touchable}>
                <ImageBackground key={item.id} source={item.img} style={styles.image}>
                    <View></View>
                    <CustomIcon name="play-circle-o" size={32} color={colors.white} type="font-awesome" />
                </ImageBackground>
            </TouchableOpacity>
        ));
    };
    const handleVideoPress = () => {
       navigation.navigate(screenName.VideoView as never)
    };
    return (
        <View style={styles.container}>
            <H18BlackBoldText style={{ marginVertical: 10, marginTop: 20, margin: 5 }}>Recent</H18BlackBoldText>
            <View style={styles.gridContainer}>
                {renderImages(recentVideos)}
            </View>

            <H18BlackBoldText style={{ marginTop: 10, marginVertical: 10, margin: 5 }}>Last Week</H18BlackBoldText>
            <View style={styles.gridContainer}>
                {renderImages(lastWeek)}
            </View>
            <H18BlackBoldText style={{ marginTop: 10, marginVertical: 10, margin: 5 }}>Last Month</H18BlackBoldText>
            <View style={styles.gridContainer}>
                {renderImages(lastMonth)}
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
    image: {
        margin: 3,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        resizeMode: 'contain',

    },
    touchable: {
        aspectRatio: 1,
        width: (Dimensions.get('window').width - 56) / 3,
        margin: 3,
    },
});

export default ImageScreen;




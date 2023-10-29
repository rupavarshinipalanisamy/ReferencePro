import React from "react";
import { View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { H15Blackvar2Bold500, H18BlackBoldText } from "../../components/commonText";
import { Text } from "react-native-svg";
import CustomIcon from "../../utils/Icons";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { screenName } from "../../utils/screenName";
import { lastMonth, lastWeek, recentVideos } from "../../utils/data/MediaData";
import { m5, mt20 } from "../../components/commonStyles";

const ImageScreen = () => {


    const navigation = useNavigation()

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
            <H15Blackvar2Bold500 style={[mt20,m5,{ lineHeight: 20}]}>Recent</H15Blackvar2Bold500>          
              <View style={styles.gridContainer}>
                {renderImages(recentVideos)}
            </View>

            <H15Blackvar2Bold500 style={[mt20,m5,{ lineHeight: 20}]}>Last Week</H15Blackvar2Bold500>
            <View style={styles.gridContainer}>
                {renderImages(lastWeek)}
            </View>
            <H15Blackvar2Bold500 style={[mt20,m5,{ lineHeight: 20}]}>Last Month</H15Blackvar2Bold500>
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




import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../utils/colors';
import { alignSelfCenter, borderRadius10, flex1, flexRow, mh10, ml15, mt20, mt5, p10, spaceAround, spaceBetween, spaceEvenly } from '../commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Archive from '../../../assets/images/archive-icon.svg'
import { allChatsData } from '../../utils/data/chatsData';
import { screenName } from '../../utils/screenName';
import { useNavigation } from '@react-navigation/native';


export type AllChatsProps = {

}


const AllChats = (props: AllChatsProps) => {
const navigation = useNavigation()

    return (
        <View style={[mt20, styles.whiteBg]}>
            <View style={[flexRow, spaceBetween, mt20, alignSelfCenter, p10, borderRadius10, { height: 50, width: 350, backgroundColor: colors.purpleVar1 }]}>
                <View style={[flexRow, spaceEvenly]}>
                    {/* <Icon name="archive-outline" size={25} color={colors.textcolorGray} style={[mh10]} /> */}
                    <View style={mt5}>
                        <Archive />
                    </View>
                    <Text style={[styles.chatHeaderText, ml15]}>Archived</Text>
                </View>
                <View style={[styles.roundNumber, { backgroundColor: colors.red }]}>
                    <Text style={styles.roundNumberText}>10</Text>
                </View>
            </View>
            <View>
                {allChatsData.map((chat) => {
                    return (
                        <TouchableOpacity key={chat.id} onPress={()=>navigation.navigate(screenName.ChatView as never)} style={{}}>
                            <View style={[flexRow]}>
                                <Image
                                    source={chat.profileImg}
                                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
                                />
                                <View style = {[flex1]}>
                                    <View style={[flexRow, spaceBetween]}>
                                        <Text>{chat.name}</Text>
                                        <Text>10:20</Text>
                                    </View>
                                    <View style={[flexRow, spaceBetween]}>
                                        <Text>{chat.name}</Text>
                                        <Text>10:20</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    whiteBg: {
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderRadius: 45
    },
    roundNumber: {
        height: 25,
        width: 25,
        borderRadius: 20,
    },
    chatHeaderText: {
        fontSize: 19,
        color: colors.greyVar4,
        fontWeight: '700',
        top: 2
    },
    roundNumberText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 14,
        fontWeight: '400',
        top: 2
    },
});

export default AllChats
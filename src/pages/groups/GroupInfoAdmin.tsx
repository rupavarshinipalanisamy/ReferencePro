import React, {Fragment} from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { CommonLineDividerGrey, MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { ColorIconTabSecond, GroupInfoCard, GroupProfileCard, Groups, Header, MediaCard } from './GroupInfo';
import { useNavigation } from '@react-navigation/native';
import { alignItemsCenter, flexRow, justyfyCenter, mb15, mr5, mt10, pl13, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { H16BlackText } from '../../components/commonText';
import { colorIconsAdminData } from '../../utils/data/groupsData';

export type GroupInfoAdminProps = {

}

const ColorIconTab = () => {
    const navigation = useNavigation();


    return (
        <View>
            {
                colorIconsAdminData.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)}>
                            <View style={[flexRow, spaceBetween, { paddingBottom: 15 }]}>
                                <View style={[flexRow]}>

                                    <View style={{ height: 35, width: 35, borderRadius: 8, backgroundColor: item.bgcolor, alignItems: 'center', justifyContent: 'center' }}>
                                        <CustomIcon name={item.iconName} size={item.iconSize} type={item.iconType} color={item.iconColor} />
                                    </View>
                                    <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                        <H16BlackText>{item.name}</H16BlackText>
                                    </View>
                                </View>
                                {
                                    item.id === 2 ? (
                                        <View style={[flexRow, alignItemsCenter, justyfyCenter]}>
                                            <View style={[styles.roundNumber, { backgroundColor: 'rgba(97, 97, 97, 0.05) ' }, mt10, mr5]}>
                                                <Text style={styles.roundNumberText}>10</Text>
                                            </View>
                                            <View style={[{ transform: [{ rotate: '180deg' }] }]}
                                            >
                                                <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                                                />
                                            </View>
                                        </View>
                                    ) : item.id === 1 ? (
                                        <View>
                                            
                                        </View>
                                    ) : (
                                        <TouchableOpacity style={[{ transform: [{ rotate: '180deg' }] }, flexRow, alignItemsCenter, justyfyCenter]}>
                                            <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                                            />
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
            <View style={[mt10, mb15]}>
                <CommonLineDividerGrey />
            </View>
        </View>
    )
}

const GroupInfoAdmin = (props: GroupInfoAdminProps) => {
    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: colors.whiteVar0, flex: 1 }}>
                <Header />
                <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                    <GroupProfileCard />
                    <GroupInfoCard />
                    <MediaCard />
                    <ColorIconTab />
                    <Groups />
                    <ColorIconTabSecond />
                </ScrollView>
            </MainContainer>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    roundNumber: {
        height: 24,
        width: 24,
        borderRadius: 12,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundNumberText: {

        color: colors.greyVar4,
        fontSize: 12,
    },
    cardSurface: {
        backgroundColor: colors.white,
        padding: 10,
        elevation: 4,
        marginTop: 15,
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: colors.greyVar3
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15
    },
    gridItem: {
        flex: 1,

    },
    gridItemImage: {
        width: (Dimensions.get('window').width - 75) / 4,
        borderRadius: 10
    },
    status: {
        borderWidth: 3,
        borderColor: colors.white,
        position: 'absolute',
        bottom: 3,
        right: 0,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
})

export default GroupInfoAdmin
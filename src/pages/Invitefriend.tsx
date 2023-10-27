import React, { Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { colors } from '../utils/colors';
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mt3, ph10, ph5, pl10, pl13, pl5, pr13, pr6 } from '../components/commonStyles';
import { DevWidth } from '../utils/device';
import { H14font400Gray4, H15Blackvar2Bold500, H15Grey, H16SemiBoldBlack, H18BlackBoldText600 } from '../components/commonText';
import { contactList } from '../utils/data/contactData';
import CustomIcon from '../utils/Icons';
import { SearchHeader } from './Media/MediaCommonHeader';
import { isDark } from '../Theme/ThemeContext';



const InviteFriend = () => {

    const contactsByFirstLetter = contactList.reduce((acc, contact) => {
        const firstLetter = contact.contName.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(contact);
        return acc;
    }, {});

    return (
        <Fragment>
            <StatusBar backgroundColor={colors.purpleVar3} />
            <View style={[flex1, { backgroundColor: isDark()?colors.darkModeVar2:colors.whiteVar0 }]}>
                <SearchHeader headerText='Invite A Friend' searchIcon={true} />
                <View style={flex1}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {Object.keys(contactsByFirstLetter).map((letter) => (
                            <View key={letter}>
                                <H18BlackBoldText600 style={styles.firstLetter}>{letter}</H18BlackBoldText600>
                                {contactsByFirstLetter[letter].map((data) => (
                                    <TouchableOpacity
                                        key={data.id}
                                        style={[
                                            styles.cardContainer,{  backgroundColor:isDark()?colors.darkModeVar4:colors.white}
                                        ]}
                                    >
                                        <View>
                                            <View>{data.profImg}</View>


                                        </View>
                                        <View>
                                            <H15Blackvar2Bold500 style={[pl13,{lineHeight:23}]}>
                                                {data.contName}
                                            </H15Blackvar2Bold500>



                                            <View style={[flexRow,pl10]}>
                                                <View style={[alignItemsCenter,justyfyCenter]}>
                                                <CustomIcon
                                                    name="location-outline"
                                                    size={14}
                                                    color={isDark()?colors.greyVar3:colors.greyVar4}
                                                    type="Ionicons"
                                                />

                                                </View>
                                              
                                                <H14font400Gray4 style={pl5}>{data.location}</H14font400Gray4>
                                            </View>

                                        </View>

                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    // whiteBg: {
    //     backgroundColor: colors.white,
    //     height: '100%',
    //     width: '100%',
    //     borderTopLeftRadius: 45,
    //     borderTopRightRadius: 45,
    //     overflow: 'hidden',
    // },
    firstLetter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginTop: 10,
        marginLeft: 20,
    },
    cardContainer: {
      
        flexDirection: 'row',
        alignItems:'center',
        elevation: 4,
        margin: 15,
        padding: 10,
        borderRadius: 8
    },
    selectedCardContainer: {
        backgroundColor: colors.purpleVar1,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 8
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
        fontSize: 12,
        fontWeight: '400',
        marginTop: 3,
    },
    status: {
        borderWidth: 1.5,
        borderColor: colors.white,
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 15,
        width: 15,
        borderRadius: 100,
    },
    archiveCard: {
        height: 45,
        width: 0.90 * DevWidth,
        backgroundColor: colors.purpleVar1,
        borderRadius: 10
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
});

export default InviteFriend
import React, { Fragment } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { MainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { flexRow,mr5, mt10, mt15, pl10, pt10, spaceBetween } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import { DevHeight } from '../../utils/device';
import Profile from '../../../assets/images/profileView.svg'
import labels from '../../utils/labels';
import { H14BlackText, H14purpleVar3Text, H18BlackText } from '../../components/commonText';
import MessageIcon from '../../../assets/images/messageIcon.svg'
import Media1 from '../../../assets/images/Media1.svg'
import Media2 from '../../../assets/images/Media2.svg'
import Media3 from '../../../assets/images/Media3.svg'


export type UserProfileProps = {

}


export const Header = () => {
    return (
        <View style={[flexRow, spaceBetween, { marginTop: 30, marginHorizontal: 25 }]}>
            <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons" />
            <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />
        </View>
    )
}
export const ProfileCard = () => {
    return (
        <View>
            <View style={{ marginTop: 50 }}>
                <View style={{
                    backgroundColor: colors.white, height: DevHeight / 4.5, width: '100%', borderRadius: 20, elevation: 5, justifyContent: 'center',
                    shadowOpacity: 1, shadowColor: colors.greyVar4
                }}>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <H18BlackText>{labels.horaceKeene}</H18BlackText>
                        <Text style={{ fontSize: 16, color: colors.greyVar4 }}>last seen at 7:15 PM</Text>
                        <View style={[flexRow, { marginTop: 10 }]}>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }]}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={22} color={colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <CustomIcon name='call-outline' type="Ionicons" size={18} color={colors.greyVar4} />
                            </View>
                            <View style={[{ alignItems: 'center', justifyContent: 'center' }, pl10]}>
                                <MessageIcon />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', zIndex: 1, alignSelf: 'center', overflow: 'hidden' }}>
                <Profile />
            </View>
        </View>
    )
}


interface CardHeaderTextProps {
    text: string;
}

export const CardHeaderText: React.FC<CardHeaderTextProps> = ({ text }) => {
    return (
        <View style={{ alignItems: 'flex-start', marginTop: 5 }}>
            <View style={{
                backgroundColor: colors.purpleVar1,
                borderRadius: 8,
                padding: 10
            }}>
                <H14purpleVar3Text style={{ marginHorizontal: 10 }}>
                    {text}
                </H14purpleVar3Text>
            </View>


        </View >
    );
};

export const InfoCard = () => {
    const socialMediaIcon = () => {
        return (

            <View style={[flexRow]}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <CustomIcon name='sc-facebook' type="EvilIcons" size={24} color={colors.black} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <CustomIcon name='twitter' type="entypo" size={20} color={colors.black} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <CustomIcon name='youtube' type="MaterialCommunityIcons" size={22} color={colors.black} />
                </View>
            </View>
        )
    }
    const InfoCardData = [{
        "Phone": "9988776655",
        "Email Address": 'info@example.com',
        "Social Media": socialMediaIcon()
    }]

    return (
        <View>
            <CardHeaderText text='Info' />
            <View style={mt10}>
                <Text style={{ color: colors.greyVar4 }}>Bio</Text>
                <H14BlackText style={pt10}>Hello, I am using DreamsChat</H14BlackText>
                {InfoCardData.map((item) =>
                    Object.entries(item).map(([key, value]) => (
                        <View style={[flexRow, spaceBetween, pt10]} key={key}>
                            <Text style={{ color: colors.greyVar4 }}>{key}</Text>
                            <H14BlackText>{value}</H14BlackText>
                        </View>
                    ))
                )}
            </View>
        </View>
    );
}


export const MediaCard = () => {

    const mediaData = [{
        id: 1,
        image: <Media1 />
    },
    {
        id: 2,
        image: <Media2 />

    },
    {
        id: 3,
        image: <Media3 />

    },
    {
        id: 4,
        image: <Media3 />

    },


    ]
    return (
        <View>
            <View style={[flexRow, spaceBetween]}>
                <CardHeaderText text='Media' />
                <View style={flexRow}>
                    <View style={[styles.roundNumber, { backgroundColor: 'rgba(97, 97, 97, 0.15) ' }, mt10, mr5]}>
                        <Text style={styles.roundNumberText}>68</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '180deg' }] }}>
                        <CustomIcon name='chevron-back-sharp' color={colors.greyVar4} size={16} type="Ionicons"
                        />
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, mt15]}>
                    {mediaData.map((data, index) => (
                        <View key={index}>
                            {data.image}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>

    )
}

export const Groups = () => {
    return (
        <View style={{marginTop:10}}>
            <CardHeaderText text='2 Groups in common' />

        </View>
    )
}
const UserProfile = (props: UserProfileProps) => {
    return (
        <Fragment>
            <MainContainer style={{ backgroundColor: colors.whiteVar0, flex: 1 }}>
                <Header />
                <View style={{ marginHorizontal: 20 }}>
                    <ProfileCard />
                    <View style={{ marginTop: 20 }}>
                        <InfoCard />
                        <MediaCard />
                        <Groups />
                    </View>

                </View>
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
})
export default UserProfile

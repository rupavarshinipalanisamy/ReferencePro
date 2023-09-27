import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../../utils/colors';
import { flex1, flexRow, pt10, pl10, spaceBetween, alignItemsCenter, justyfyCenter, pt5, pl13, p5 } from '../../../components/commonStyles';
import CustomIcon from '../../..//utils/Icons';
import { H14BlackText, H14blueVar1Text, H16WhiteText, H18WhiteText } from '../../../components/commonText';
import { labels } from '../../../utils/labels';
import { DevHeight, DevWidth } from '../../../utils/device';
import AudioImg from '../../../../assets/images/Audio.svg'
import SendImg1 from '../../../../assets/images/sentMsg.svg'
import SendImg2 from '../../../../assets/images/sendMsg1.svg'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../utils/screenName';

interface HeaderChatViewProps {
    backgroundColor: string,
    onPress?: () => void;
    navigate: string;
    groups?: boolean;

}

export const HeaderChatView = (props: HeaderChatViewProps) => {
    const navigation = useNavigation()
    return (
        <View style={{ height: DevWidth / 4, backgroundColor: props.backgroundColor, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, position: 'relative' }}>
            <View style={[{ marginHorizontal: 25 }, flex1, justyfyCenter]}>
                <View style={[flexRow]}>
                    <View style={pt10} >
                        <CustomIcon name='chevron-back-sharp' color={colors.white} size={16} type="Ionicons" />
                    </View>
                    <View style={[flexRow, spaceBetween, flex1]}>
                        <TouchableOpacity style={[pl10, flexRow]} onPress={() => { navigation.navigate(props.navigate as never) }}>
                            {props.groups ? <Image source={require('../../../../assets/images/png/groupimg1.png')} /> :
                                <Image source={require('../../../../assets/images/png/profile.png')} />
                            }

                            <View style={pl13}>
                                <H18WhiteText>{labels.horaceKeene}</H18WhiteText>
                                <H16WhiteText>{labels.online}</H16WhiteText>
                            </View>
                        </TouchableOpacity>
                        <View style={[flexRow, alignItemsCenter]}>
                            <TouchableOpacity style={pl10} onPress={() => { navigation.navigate(props.navigate as never) }}>
                                <CustomIcon name='video-outline' type="MaterialCommunityIcons" size={22} color={colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(screenName.Calling as never)} style={pl10}>
                                <CustomIcon name='call-outline' type="Ionicons" size={18} color={colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={pl10}>
                                <CustomIcon name='dots-vertical' type="MaterialCommunityIcons" size={22} color={colors.white} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

}
export const FooterChatView = () => {
    return (
        <View style={{ backgroundColor: colors.white, height: DevHeight / 8, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20 }}>
            <View style={[{ marginHorizontal: 20 }, flexRow, spaceBetween]}>
                <View style={{ flex: 1 }}>
                    <View style={{ position: 'absolute', paddingTop: 15, paddingLeft: 20 }}>
                        <CustomIcon name='smiley' type="octicons" size={20} color={colors.greyVar4} />
                    </View>
                    <View>
                        <TextInput
                            style={{
                                borderColor: colors.greyVar2,
                                borderWidth: 2,
                                borderRadius: 8,
                                fontWeight: '600',
                                padding: 8,
                                paddingLeft: 50,
                                color: colors.greyVar2
                            }}
                            placeholder="Type Here..."

                        />
                        <View style={{ alignItems: 'flex-end', marginHorizontal: 8 }}>
                            <View style={{ position: 'absolute', paddingTop: 15, bottom: 10, paddingRight: 32 }}>
                                <CustomIcon name='attachment' type="MaterialIcons" size={26} color={colors.greyVar4} />
                            </View>
                            <View style={{ position: 'absolute', paddingTop: 15, bottom: 12 }}>
                                <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={24} color={colors.greyVar4} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.purpleVar3, height: 50, width: 50, borderRadius: 12, marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomIcon name='microphone-outline' type="MaterialCommunityIcons" color={colors.white} size={25} />
                </View>
            </View>
        </View>
    )
}


export const receiveMessage1 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={[styles.receiveMsgCard]}>
                <H14BlackText>
                    {labels.helloAlex}
                </H14BlackText>
            </View>
        </View>
    );
};
export const receiveMessage2 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={[styles.receiveMsgCard, flexRow]}>
                <CustomIcon name="play-circle-o" size={20} color={colors.purpleVar3} type="font-awesome" />
                <View style={pl10}>
                    <AudioImg />
                </View>
                <Text style={pl13}>00:30</Text>
            </View>
        </View >
    );
};
export const receiveMessage3 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={styles.receiveMsgCard}>
                <View style={[{ backgroundColor: colors.whiteVar1, alignItems: 'center', padding: 10, width: DevWidth / 1.4, borderRadius: 8 }, flexRow, spaceBetween]}>
                    <View style={[flexRow]}>
                        <View style={justyfyCenter}>
                            <CustomIcon name='document-text-outline' type="Ionicons" color={colors.greyVar4} size={20} />
                        </View>
                        <View style={pl13}>
                            <H14BlackText>Design_Brief.pdf</H14BlackText>
                            <H14BlackText>243 KB</H14BlackText>
                        </View>
                    </View>
                    <CustomIcon name='download' type="Feather" color={colors.greyVar4} size={20} />
                </View>
                <View style={pt5}>
                    <H14BlackText>{labels.checkThisFile}</H14BlackText>
                </View>
            </View>
        </View >

    );
};
export const receiveMessage4 = () => {
    return (
        <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 20 }}>
            <View style={styles.receiveMsgCard}>
                <ImageBackground
                    source={require('../../../../assets/images/receivemsg.png')}
                    style={{ height: 180, width: DevWidth / 1.4 }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <CustomIcon name='play' type="Feather" size={20} color={colors.white} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 28, width: 90, borderRadius: 14, alignItems: 'center', justifyContent: "space-evenly", bottom: 10, flexDirection: 'row', marginLeft: 15 }}>
                        <View style={{ marginTop: 3 }}>
                            <CustomIcon name='file-download' type="MaterialIcons" size={18} color={colors.white} />
                        </View>
                        <Text style={{ color: colors.white, fontSize: 14 }}>2.8 MB</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

export const sentMessage1 = (text: string) => {
    return (
        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 20 }}>
            <View style={[styles.sndMsgCard]}>
                <H14BlackText>
                    {text}
                </H14BlackText>
            </View>
        </View >
    );
};
export const sentMessage2 = () => {
    return (
        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 5 }}>
            <View style={[styles.sndMsgCard]}>
                <H14BlackText>
                    This is my new website design
                </H14BlackText>
            </View>
            <View style={pt10}>
                <View style={[styles.sndMsgCard]}>
                    <SendImg1 />
                </View></View>

        </View >
    );
};
export const sentMessage3 = () => {
    return (
        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 5 }}>
            <View style={styles.sndMsgCard}>
                <SendImg2 />
                <H14blueVar1Text style={p5}>{labels.chatLink}</H14blueVar1Text>
            </View>

        </View >
    );
};
const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        // backgroundColor: 'rgba(180,0,0,0.5)'// You can adjust the resizeMode as needed
    },
    receiveMsgCard: {
        backgroundColor: colors.white,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 10
    },
    sndMsgCard: {
        backgroundColor: colors.purpleVar1,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 10
    },

    footerView: {
        backgroundColor: colors.white,
        height: 100,
        padding: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
        borderTopStartRadius: 10,

    },

});
import React, { Fragment } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { MainContainer, PurpleMainContainer } from '../../components/commonView';
import { colors } from '../../utils/colors';
import { flexRow } from '../../components/commonStyles';
import CustomIcon from '../../utils/Icons';
import ProfileAvatar from '../../../assets/images/profileAvatar.svg'
import ProfileImg from '../../../assets/images/profileImg.svg'

export type chatViewProps = {

}


export const HeaderChatView = () => {
    return (
        <View style={{ flex: 0.1, backgroundColor: colors.purple, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
            <View style={flexRow}>
                <CustomIcon name='chevron-back-sharp' color={colors.white} size={22} type="Ionicons" />


            </View>
        </View>

    )

}

const ChatView = (props: chatViewProps) => {
    return (
        <Fragment>
            <MainContainer>
                <StatusBar backgroundColor={colors.purpleVar3} />
                <HeaderChatView />
                <ProfileAvatar />
                <ProfileImg />
                <Text>chatView component</Text>
            </MainContainer>
        </Fragment>
    )
    
}

export default ChatView
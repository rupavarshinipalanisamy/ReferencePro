import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../utils/colors';
import { flex1, flexRow, mh15, mt30, mv10, spaceBetween } from '../../components/commonStyles';
import { labels } from '../../utils/labels';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { ProfileCard } from '../../components/commonComponents';
import { personDetail } from '../../utils/data/contactData';
import CustomIcon from '../../utils/Icons';
import { H12font400Grey, H15Blackvar2Bold500 } from '../../components/commonText';
import { isDark } from '../../Theme/ThemeContext';

export type contactDetailsProps = {

}

const ContactDetails = (props: contactDetailsProps) => {
    return (
        <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
            <SearchHeader headerText={labels.contactDetails} editDotIcon={true} />
            <View style={{ margin: 20 }}>
                <ProfileCard />
                <View style={[mt30]}>
                    {
                        personDetail.map((data, index) => (
                            <View key={data.id} style={[mv10]}>
                                {index === 0 ? (
                                    <View style={[flexRow, spaceBetween]}>
                                        <View>
                                            <H12font400Grey>{data.title}</H12font400Grey>
                                            <H15Blackvar2Bold500>{data.subTitle}</H15Blackvar2Bold500>
                                        </View>
                                        <View style={[flexRow]}>
                                            <View style={[styles.iconContainer, mh15]}>
                                                <CustomIcon name='chatbox-outline' size={15} color={colors.white} type='Ionicons' />
                                            </View>
                                            <View style={[styles.iconContainer,]}>
                                                <CustomIcon name={data.iconName} size={15} color={colors.white} type={data.iconType} />
                                            </View>
                                        </View>
                                    </View>

                                ) : (
                                    <View style={[flexRow, spaceBetween]}>
                                        <View>
                                            <H12font400Grey>{data.title}</H12font400Grey>
                                            <H15Blackvar2Bold500>{data.subTitle}</H15Blackvar2Bold500>
                                        </View>
                                        <View style={styles.iconContainer}>
                                            <CustomIcon name={data.iconName} size={15} color={colors.white} type={data.iconType} />
                                        </View>
                                    </View>
                                )}
                            </View>
                        ))
                    }
                </View>

            </View>
        </View>
    )
}

export default ContactDetails

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.purpleVar3,
        height: 32,
        width: 32,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
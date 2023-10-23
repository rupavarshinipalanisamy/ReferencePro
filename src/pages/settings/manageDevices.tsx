import React, { Fragment } from 'react';
import { View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { labels } from '../../utils/labels';
import { colors } from '../../utils/colors';
import { H14font400Gray4, H14redText, H15font500Black } from '../../components/commonText';
import { manageDevicesdata } from '../../utils/data/manageDeviceData';
import { RowSpaceBetween } from '../../components/commonView';
import { flex1, mh10, mt10, mt5, mv5 } from '../../components/commonStyles';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { isDark } from '../../Theme/ThemeContext';

interface CardHeaderTextProps {
    text: string;
}

export const CardHeaderText1: React.FC<CardHeaderTextProps> = ({ text }) => {
    return (
        <View style={[mt5,{ alignItems: 'flex-start'}]}>
            <View style={[styles.headerCard, {
                backgroundColor: (isDark() ? `rgba(200, 16, 46, 0.2)` : colors.redVar1),
            }]}>
                <H14redText style={[mh10]}>
                    {text}
                </H14redText>
            </View>
        </View >
    );
};

export const cardDetails = () => {
    return (
        <View >
            {manageDevicesdata.map((item) => {
                return (
                    <View key={item.id}>
                        <View style={[styles.cardContainer,{
                            backgroundColor: isDark() ? colors.darkModeVar4 : colors.white,
                            borderColor: isDark() ? colors.darkModeVar5 : colors.greyVar0
                        }]} >
                            <View>
                                <RowSpaceBetween style={[mv5]}>
                                    <H15font500Black>{item.date}</H15font500Black>
                                    <H14font400Gray4>{item.dateAndtime}</H14font400Gray4>
                                </RowSpaceBetween>
                                <RowSpaceBetween style={[mv5]}>
                                    <H15font500Black>{item.device}</H15font500Black>
                                    <H14font400Gray4>{item.deviceName}</H14font400Gray4>
                                </RowSpaceBetween>
                                <RowSpaceBetween style={[mv5]}>
                                    <H15font500Black>{item.ipAdd}</H15font500Black>
                                    <H14font400Gray4>{item.ipId}</H14font400Gray4>
                                </RowSpaceBetween>
                                <RowSpaceBetween style={[mv5]}>
                                    <H15font500Black>{item.location}</H15font500Black>
                                    <H14font400Gray4>{item.devLoc}</H14font400Gray4>
                                </RowSpaceBetween>
                                <RowSpaceBetween style={[mv5]}>
                                    <H15font500Black style={[mt10]}>{item.status}</H15font500Black>
                                    <CardHeaderText1 text={labels.Delete} />
                                </RowSpaceBetween>
                            </View>
                        </View>
                    </View>
                )
            })
            }
        </View>

    )
}

export type manageDevicesProps = {

}

const ManageDevices = (props: manageDevicesProps) => {
    return (
        <Fragment>
            <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <StatusBar backgroundColor={isDark() ? colors.darkModeVar1 : colors.white} />
                <SearchHeader headerText={labels.manageDev} />
                <ScrollView>
                    {cardDetails()}
                    {cardDetails()}
                    {cardDetails()}
                </ScrollView>
            </View>
        </Fragment>
    )
}

export default ManageDevices
const styles = StyleSheet.create({
    headerCard: {
        borderRadius: 8,
        padding: 10
    },
    cardContainer: {
        borderRadius: 10,
        padding: 15,
        margin: 20,
        borderWidth: 2,
    }
})
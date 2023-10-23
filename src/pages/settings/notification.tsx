import React, { Fragment, useState } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { CardHeaderText, ToggleSwitch } from '../../components/commonComponents';
import { RowSpaceBetween } from '../../components/commonView';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { labels } from '../../utils/labels';
import { colors } from '../../utils/colors';
import { flex1, justyfyCenter, mh20, mt15, mt20 } from '../../components/commonStyles';
import { H12Grey, H14font500Gray4, H14font500Gray41 } from '../../components/commonText';
import { notificationData1, notificationData2 } from '../../utils/data/notificationData';
import CustomIcon from '../../utils/Icons';
import { isDark } from '../../Theme/ThemeContext';

export type NotificationProps = {}

const Notification = (props: NotificationProps) => {
    const [toggleVisible, setToggleVisible] = useState(false);
    const [toggleVisible1, setToggleVisible1] = useState(false);
    const [toggleVisible2, setToggleVisible2] = useState(false);
    const [toggleVisible3, setToggleVisible3] = useState(false);
    const [toggleVisible4, setToggleVisible4] = useState(false);

    const handleToggle = () => {
        setToggleVisible(!toggleVisible);
    }
    const handleToggle1 = () => {
        setToggleVisible1(!toggleVisible1);
    }
    const handleToggle2 = () => {
        setToggleVisible2(!toggleVisible2);
    }
    const handleToggle3 = () => {
        setToggleVisible3(!toggleVisible3);
    }
    const handleToggle4 = () => {
        setToggleVisible4(!toggleVisible4);
    }

    const text = (value: string) => {
        return (
            <H14font500Gray41>{value}</H14font500Gray41>
        )
    }

    const notifyData = () => {
        return (
            <View >
                {notificationData1.map((item) => {
                    return (
                        <View style={[mt20]} key={item.id}>
                            <RowSpaceBetween>
                                <View>
                                    <H14font500Gray41>{item.title}</H14font500Gray41>
                                    <H12Grey>{item.subtitle}</H12Grey>
                                </View>
                                <View style={[justyfyCenter]}>
                                    <CustomIcon name='chevron-right' size={15} color={isDark() ? colors.greyVar3 : colors.greyVar4} type='octicons' />
                                </View>
                            </RowSpaceBetween>
                        </View>
                    )
                })
                }
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[flex1, { backgroundColor: isDark() ? colors.darkModeVar2 : colors.whiteVar0 }]} >
                <StatusBar backgroundColor={isDark() ? colors.darkModeVar1 : colors.white} />
                <SearchHeader headerText={labels.notify} />
                <ScrollView>
                    <View style={[mh20, mt20]}>
                        <RowSpaceBetween>
                            {text(labels.conversationTones)}
                            <ToggleSwitch value={toggleVisible} onToggle={handleToggle} />
                        </RowSpaceBetween>
                        <View style={[mt20]}>
                            <CardHeaderText text={labels.msg} />
                        </View>
                        {notifyData()}
                        <View style={[mt20]}>
                            <RowSpaceBetween>
                                <H14font500Gray41>{labels.useHighPrioNotify}</H14font500Gray41>
                                <ToggleSwitch value={toggleVisible1} onToggle={handleToggle1} />
                            </RowSpaceBetween>
                            <RowSpaceBetween style={[mt15]}>
                                <H14font500Gray41>{labels.reactionNotify}</H14font500Gray41>
                                <ToggleSwitch value={toggleVisible2} onToggle={handleToggle2} />
                            </RowSpaceBetween>
                        </View>
                        <View style={[mt20]}>
                            <CardHeaderText text={labels.Group} />
                            {notifyData()}
                            <View style={[mt20]}>
                                <RowSpaceBetween>
                                    <H14font500Gray41>{labels.useHighPrioNotify}</H14font500Gray41>
                                    <ToggleSwitch value={toggleVisible3} onToggle={handleToggle3} />
                                </RowSpaceBetween>
                                <RowSpaceBetween style={[mt15]}>
                                    <H14font500Gray4>{labels.reactionNotify}</H14font500Gray4>
                                    <ToggleSwitch value={toggleVisible4} onToggle={handleToggle4} />
                                </RowSpaceBetween>
                            </View>
                            <View style={[mt20]}>
                                <CardHeaderText text={labels.Calls} />
                                <View >
                                    {notificationData2.map((item) => {
                                        return (
                                            <View style={[mt20]} key={item.id}>
                                                <RowSpaceBetween>
                                                    <View>
                                                        <H14font500Gray41>{item.title}</H14font500Gray41>
                                                        <H12Grey>{item.subtitle}</H12Grey>
                                                    </View>
                                                    <View style={[justyfyCenter]}>
                                                        <CustomIcon name='chevron-right' size={15} color={isDark() ? colors.greyVar3 : colors.greyVar4} type='octicons' />
                                                    </View>
                                                </RowSpaceBetween>
                                            </View>
                                        )
                                    })
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Fragment>
    )
}

export default Notification
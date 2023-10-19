import React, { Fragment, useState } from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';
import { ToggleSwitch } from '../../components/commonComponents';
import { MainContainer, RowSpaceBetween } from '../../components/commonView';
import { SearchHeader } from '../Media/MediaCommonHeader';
import { labels } from '../../utils/labels';
import { DevHeight } from '../../utils/device';
import { colors } from '../../utils/colors';
import { flexRow, justyfyCenter, mh20, mt15, mt20, mv20, spaceBetween } from '../../components/commonStyles';
import { H12Grey, H14font500Gray4 } from '../../components/commonText';
import { CardHeaderText } from '../chatView/UserProfile';
import { notificationData1, notificationData2 } from '../../utils/data/notificationData';
import CustomIcon from '../../utils/Icons';
import styled from 'styled-components';

export type NotificationProps = {

}




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
            <H14font500Gray4>{value}</H14font500Gray4>

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
                                    <H14font500Gray4>{item.title}</H14font500Gray4>
                                    <H12Grey>{item.subtitle}</H12Grey>
                                </View>
                                <View style={[justyfyCenter]}>
                                    <CustomIcon name='chevron-right' size={15} color={colors.greyVar4} type='octicons' />
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
            <MainContainer>
                <StatusBar backgroundColor={colors.white} />
                <SearchHeader headerText={labels.notify} height={DevHeight / 12} />
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
                                <H14font500Gray4>{labels.useHighPrioNotify}</H14font500Gray4>
                                <ToggleSwitch value={toggleVisible1} onToggle={handleToggle1} />
                            </RowSpaceBetween>
                            <RowSpaceBetween style={[mt15]}>
                                <H14font500Gray4>{labels.reactionNotify}</H14font500Gray4>
                                <ToggleSwitch value={toggleVisible2} onToggle={handleToggle2} />
                            </RowSpaceBetween>
                        </View>


                        <View style={[mt20]}>
                            <CardHeaderText text={labels.Group} />
                            {notifyData()}
                            <View style={[mt20]}>
                                <RowSpaceBetween>
                                    <H14font500Gray4>{labels.useHighPrioNotify}</H14font500Gray4>
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
                                                        <H14font500Gray4>{item.title}</H14font500Gray4>
                                                        <H12Grey>{item.subtitle}</H12Grey>

                                                    </View>
                                                    <View style={[justyfyCenter]}>
                                                        <CustomIcon name='chevron-right' size={15} color={colors.greyVar4} type='octicons' />
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

            </MainContainer>
        </Fragment>
    )
}

export default Notification
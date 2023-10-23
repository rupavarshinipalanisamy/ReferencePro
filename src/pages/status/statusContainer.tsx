import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconModal } from "../../components/commonModal";
import { screenName } from "../../utils/screenName";
import { colors } from "../../utils/colors";
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh15, pl13, spaceBetween } from "../../components/commonStyles";
import { H14font400Gray4, H15Grey, H15font500Black } from "../../components/commonText";
import { DevHeight, DevWidth } from "../../utils/device";
import { labels } from "../../utils/labels";
import { MyStatusPic, StatusView1 } from "../../utils/svg";
import CustomIcon from "../../utils/Icons";
import { CustomModal, StatusModal } from "../../components/commonComponents";
import { threeDotIcon } from "../../utils/data/statusData";
import { isDark } from "../../Theme/ThemeContext";
import { CircleBg, CircleBg1, TopCard } from "../../styledComponent/styledComponent";

export const StatusOptionModalComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            {
                threeDotIcon.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={()=>{}} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
                            <View style={[flexRow]}>
                                <CustomIcon name={item.iconName} type={item.iconType} size={item.iconSize} color={colors.blackVar1} />
                                <View style={[alignItemsCenter, justyfyCenter, pl13]}>
                                    <H15Grey>{item.name}</H15Grey>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export const AfterNavigation = () => {
    const [callOptionModal, setCallOptionModal] = useState(false);

    const handleCallOptionModal = () => {
        setCallOptionModal(!callOptionModal);
    }

    const closeCallOptionModal = () => {
        setCallOptionModal(false);
    }

    const navigation = useNavigation();

    const navigateToAnotherPage = () => {
        navigation.navigate(screenName.MyStatus as never);
    }

    return (
        <TopCard>
            <View style={[flexRow]}>
                <TouchableOpacity onPress={navigateToAnotherPage}>
                    <View style={[alignItemsCenter,justyfyCenter]}>
                        <StatusView1 />
                        <View style={{ position: 'absolute' }}>
                            <MyStatusPic />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={[mh15, flexRow, spaceBetween, flex1]}>
                    <View>
                        <H15font500Black>{labels.myStatus}</H15font500Black>
                        <H14font400Gray4>{labels.muteTime1}</H14font400Gray4>
                    </View>
                    <TouchableOpacity
                        style={[alignItemsCenter, justyfyCenter]}
                        onPress={handleCallOptionModal}
                    >
                        <CustomIcon name='dots-three-horizontal' type='entypo' color={colors.greyVar3} size={15} />
                    </TouchableOpacity>
                </View>
                <CustomModal
                    isVisible={callOptionModal}
                    width={DevWidth * 0.50}
                    height={DevHeight * 0.4}
                    modalData={<StatusOptionModalComponent />}
                    marginTop={160}
                    onClose={closeCallOptionModal}
                />
            </View>
        </TopCard>
    );
}

export const BeforeNavigation = () => {
    const [Pic, setPic] = useState('');
    const [showIconModal, setShowIconModal] = useState(false);
    const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

    const openIconModal = () => {
        setShowIconModal(true);
    }

    const handleImageSelect = (base64Image: string) => {
        setPic(base64Image);
        setIsImagePickerOpen(false);
    };

    return (
        <TopCard>
            <View style={[flexRow]}>
                <TouchableOpacity onPress={openIconModal}>
                    <MyStatusPic />
                    <CircleBg>
                        <CircleBg1>
                            <CustomIcon name='add' type='MaterialIcons' size={9} color={isDark() ? colors.darkModeVar6 : colors.white} />
                        </CircleBg1>
                    </CircleBg>
                </TouchableOpacity>
                <View style={[mh15, flexRow, spaceBetween, flex1]}>
                    <View >
                        <H15font500Black>{labels.myStatus}</H15font500Black>
                        <H14font400Gray4>{labels.statusUploadCont}</H14font400Gray4>
                    </View>
                    <IconModal
                        isVisible={showIconModal}
                        onClose={() => setIsImagePickerOpen(false)}
                        contentComponent={<StatusModal onImageSelect={handleImageSelect} />}
                        iconName='image-plus'
                        iconType='MaterialCommunityIcons'
                        iconSize={25}
                    />
                </View>
            </View>
        </TopCard>
    );
}
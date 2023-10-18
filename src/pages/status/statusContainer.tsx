import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconModal } from "../../components/commonModal";
import { screenName } from "../../utils/screenName";
import { colors } from "../../utils/colors";
import { SmallButton } from "../../components/commonButtons";
import { alignItemsCenter, flex1, flexRow, justyfyCenter, mh15, mh20, mt20, mv20, pl13, spaceBetween } from "../../components/commonStyles";
import { H14font400Gray4, H15Grey, H15font500Black, H16font600Black } from "../../components/commonText";
import { RowSpaceBetween } from "../../components/commonView";
import { DevHeight, DevWidth } from "../../utils/device";
import { labels } from "../../utils/labels";
import { MyStatusPic } from "../../utils/svg";
import CustomIcon from "../../utils/Icons";
import StatusView1 from '../../../assets/images/status-view1.svg'
import { CustomModal } from "../../components/commonComponents";
import { CallThreeDotsOption } from "../../utils/data/modalData";

export const StatusOptionModalComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            {
                CallThreeDotsOption.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.screenName as never)} style={{ padding: 4, marginHorizontal: 10, paddingVertical: 10 }}>
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
     <View style={styles.container}>
         <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={navigateToAnotherPage}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
     </View>
    );
  }
  
export const BeforeNavigation = () => {
    const [showIconModal, setShowIconModal] = useState(false);

    const openIconModal = () => {
        setShowIconModal(true);
    }

    const closeIconModal = () => {
        setShowIconModal(false);
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={openIconModal}>
                <MyStatusPic />
                <View style={{
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 25,
                    left: 27,
                    height: 13, width: 13, borderRadius: 13, justifyContent: 'center', alignItems: 'center'
                }}>
                    <View style={{
                        borderRadius: 10,
                        height: 10,
                        width: 10,
                        backgroundColor: 'green',
                        alignItems: 'center'
                    }}>
                        <CustomIcon name='add' type='MaterialIcons' size={9} color={colors.white} />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={[mh15, flexRow, spaceBetween, flex1]}>
                <View >
                    <H15font500Black>{labels.myStatus}</H15font500Black>
                    <H14font400Gray4>{labels.statusUploadCont}</H14font400Gray4>
                </View>
            <IconModal
                isVisible={showIconModal}
                onClose={closeIconModal}
                contentComponent={<ModalContent />}
                iconName='image-plus'
                iconType='MaterialCommunityIcons'
                iconSize={25}
            />
            </View>
        </View>
        </View>
    );
}

const ModalContent = ({  }) => {
    const navigation = useNavigation();
    const [isCancelButtonActive, setIsCancelButtonActive] = useState(false);

    const handleCancelButton = () => {
        setIsCancelButtonActive(true);
    };

    const handleDeleteChatButton = () => {
        navigation.navigate(screenName.StatusAdd as never)
    };

    return (
        <View style={[mh20]}>
            <H16font600Black>Choose Image?</H16font600Black>
            <Text style={[mt20]}>Choose image picking options.</Text>
            <RowSpaceBetween style={[mv20]}>
                <SmallButton
                    title={labels.Camera}
                    onChange={handleCancelButton}
                    backgroundColor={isCancelButtonActive ? colors.purpleVar3 : colors.white}
                    textColor={isCancelButtonActive ? colors.white : colors.greyVar4}
                    borderWidth={isCancelButtonActive ? 0 : 1}
                    width={DevWidth / 2.6}
                />
                <SmallButton
                    title={labels.Gallery}
                    onChange={handleDeleteChatButton}
                    backgroundColor={isCancelButtonActive ? colors.white : colors.purpleVar3}
                    textColor={isCancelButtonActive ? colors.greyVar4 : colors.white}
                    borderWidth={isCancelButtonActive ? 1 : 0}
                    width={DevWidth / 2.6}
                />
            </RowSpaceBetween>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purpleVar4,
        margin: 20,
        padding: 10,
    },
});

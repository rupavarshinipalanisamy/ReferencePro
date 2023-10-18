// import React, { Fragment } from 'react';
// import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { MainContainer, TopContainerWhiteCard1 } from '../../components/commonView';
// import { colors } from '../../utils/colors';
// import { DevHeight } from '../../utils/device';
// import CustomIcon from '../../utils/Icons';
// import { justyfyCenter, alignItemsCenter, mh15, flexRow, mh20, mh10, mh5, mr5, ml5, ml15, spaceBetween, mt30, mv20, mv30 } from '../../components/commonStyles';
// import StatusUploadImg from '../../../assets/images/status-image1.svg'
// import { useNavigation } from '@react-navigation/native';
// import { screenName } from '../../utils/screenName';








// const StatusAdd = (props: statusAddProps) => {
//     return (
//         <Fragment>
//             <MainContainer>
// <StatusBar backgroundColor={colors.white} />
// {/* <TopContainerWhiteCard1 height={DevHeight / 12} {...props}>

// <TouchableOpacity style={[flexRow, spaceBetween, { marginTop: 25, }]}>
//     <View style={{ flexDirection: 'row' }}>
//         <View style={[mh5, ml15]}>
//             <CustomIcon name='crop' color={colors.greyVar4} size={20} type='entypo' />
//         </View>
//         <View style={[mh5]}>
//             <CustomIcon name='sticker-circle-outline' color={colors.greyVar4} size={20} type='MaterialCommunityIcons' />
//         </View>
//         <View style={[mh5]}>
//             <CustomIcon name='format-text' color={colors.greyVar4} size={20} type='MaterialCommunityIcons' />
//         </View>
//         <View style={[mh5]}>
//             <CustomIcon name='pencil' color={colors.greyVar4} size={20} type='octicons' />
//         </View>

//         <View style={[mh5]}>
//             <CustomIcon name='image-plus' color={colors.greyVar4} size={20} type='MaterialCommunityIcons' />

//         </View>
//     </View>

//     <View style={[mh20]}>
//         <CustomIcon name='x' type="Feather" size={20} color={colors.greyVar4} />
//     </View>
// </TouchableOpacity>
//                 </TopContainerWhiteCard1> */}

//                 {/* <View style={[justyfyCenter, alignItemsCenter, { bottom: 0, marginTop: 30 }]}> */}
//                     <StatusUploadImg />
//                 {/* </View> */}
//                 {/* <View style={{ justifyContent: 'flex-end', bottom: 0, marginTop: 50, flex: 1 }}> */}
//                     <ReplyFooterView />

//                 {/* </View> */}
//             </MainContainer>
//         </Fragment>

//     )
// }

// export default StatusAdd


// // export type statusAddProps = {};




// // const StatusAdd = (props: statusAddProps) => {
// //   const navigation = useNavigation();

// //   // Function to navigate and send a parameter
// //   const navigateToAllStatusWithParam = () => {
// //     navigation.navigate(screenName.NoStatus, { showSecondScreen: true });
// //   };

// //   return (
// //     <View>
// //       <TouchableOpacity onPress={navigateToAllStatusWithParam}>
// //         <Text>Go to AllStatus with Parameter</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default StatusAdd;



import React from 'react';
import { Text, View, TouchableOpacity, TextInput,StatusBar } from 'react-native';
import { MainContainer, TopContainerWhiteCard1 } from '../../components/commonView';
import CustomIcon from '../../utils/Icons';
import { colors } from '../../utils/colors';
import StatusUploadImg from '../../../assets/images/status-image1.svg'
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/screenName';
import { DevHeight } from '../../utils/device';
import { flexRow, spaceBetween, mh5, ml15, mh20 } from '../../components/commonStyles';
export type statusAddProps = {
    height?: number;
}

const ReplyFooterView = () => {
    const navigation = useNavigation()

    const handlePaperPlaneIconClick = () => {
        navigation.navigate(screenName.NoStatus, { showSecondScreen: true });

    }
    return (
        <View style={{backgroundColor:'white',height:70}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 ,backgroundColor:'white'}} >
            <View style={{ width: '86%', backgroundColor: 'white', borderColor: colors.greyVar2, borderWidth: 2, borderRadius: 10, flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row', width: '80%', height: 40, paddingHorizontal: 2, alignItems: 'center' }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <CustomIcon name='smiley' type="octicons" size={16} color={colors.greyVar4} />
                        <TextInput
                            style={{ flex: 1, marginLeft: 5, color: colors.greyVar4, fontSize: 14, fontWeight: '400' }}
                            placeholder="Add an caption..."
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 10, transform: [{ rotate: '45deg' }] }}>
                            <CustomIcon name='paperclip' type="Feather" size={18} color={colors.greyVar4} />
                        </View>
                        <CustomIcon name='camera-outline' type="MaterialCommunityIcons" size={20} color={colors.greyVar4} />
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={handlePaperPlaneIconClick}

            >
                <View style={{ backgroundColor: colors.purpleVar3, height: 40, width: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', }}>
                    <CustomIcon name='paper-plane' type="font-awesome" color={colors.white} size={14} />
                </View>
            </TouchableOpacity>

        </View>
        </View>
    );
}

const StatusAdd = (props: statusAddProps) => {
    return (
        <MainContainer>
                <StatusBar backgroundColor={colors.white} />

            <TopContainerWhiteCard1 height={DevHeight / 12} {...props}>


                <TouchableOpacity style={[flexRow, spaceBetween, { marginTop: 25, }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[mh5, ml15]}>
                            <CustomIcon name='crop' color={colors.greyVar4} size={20} type='entypo' />
                        </View>
                        <View style={[mh5]}>
                            <CustomIcon name='sticker-circle-outline' color={colors.greyVar4} size={20} type='MaterialCommunityIcons' />
                        </View>
                        <View style={[mh5]}>
                            <CustomIcon name='format-text' color={colors.greyVar4} size={20} type='MaterialCommunityIcons' />
                        </View>
                        <View style={[mh5]}>
                            <CustomIcon name='pencil' color={colors.greyVar4} size={20} type='octicons' />
                        </View>

                        <View style={[mh5]}>
                            <CustomIcon name='image-plus' color={colors.greyVar4} size={20} type='MaterialCommunityIcons' />

                        </View>
                    </View>

                    <View style={[mh20]}>
                        <CustomIcon name='x' type="Feather" size={20} color={colors.greyVar4} />
                    </View>
                </TouchableOpacity>
            </TopContainerWhiteCard1>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
                <StatusUploadImg />


            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                <ReplyFooterView />


            </View>

        </MainContainer>
    )
}

export default StatusAdd
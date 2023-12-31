import styled from "styled-components";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { colors } from "../utils/colors";
import { DevHeight, DevWidth } from "../utils/device";
import { isDark } from "../Theme/ThemeContext";

export const LogoContainer = styled(View)`
alignItems:center;
marginTop:50px;
`
export const ButtonContainer = styled(View)`
flexDirection:row;
zIndex:1;
align-self:center;
justifyContent:space-between;
`
export const ButtonContainer1 = styled(View)`
flexDirection:row;
justifyContent:space-around;
`
export const LoginLogoBigCircle = styled(View)` 
height: 110px;
width: 110px;
border-radius: 100px;
alignItems:center;
justify-content: center;
margin-top:30px;
`
export const LoginLogoCircle = styled(View)`
height: 80px;
width: 80px;
border-radius: 100px;
justify-content: center;
alignItems:center;
`
export const SocialLogoCircle = styled(View)`
height: 60px;
width: 60px;
border-radius: 100px;
justify-content: center;
alignItems:center;
`
export const InputData = styled(TextInput)`
font-size: 14px;

padding:10px;
`
export const IconInputContainer = styled(View)`
borderBottomWidth: 1px;
flexDirection: row;
marginVertical:10px;
`
export const InputContainer1 = styled(View)`
flexDirection: row;
justifyContent: space-between;
flex: 1px;

`
export const CheckBoxContainer = styled(View)`
alignItems:center;
justifyContent: space-around;
flexDirection: row;
`
export const CheckBoxContainer1 = styled(View)`
justifyContent: space-between;
flexDirection: row;
marginTop:10px;
`
export const CheckBox = styled(View)`
width: 20px;
height: 20px;
borderWidth: 1px;
borderColor: ${colors.greyVar4};
borderRadius: 4px;
justifyContent: center;
alignItems: center;
`
export const BottomStyle = styled(View)`
borderBottomWidth: 1px;
width: 30%;
`
export const SocialLogoContainer = styled(View)`
flexDirection:row;
justifyContent: space-evenly;
alignItems: center;
margin:30px;
`
export const TextContainer = styled(View)`
flexDirection:row;
alignSelf:center;
justifyContent:flex-end;
marginBottom:30px;
paddingTop:100px;
`
export const TextContainer1 = styled(View)`
flexDirection:row;
alignSelf:center;
justifyContent:flex-end;
`
export const OtpInput = styled(TextInput)`
borderWidth: 1px;
fontSize: 20px;
textAlign: center;
width: 45px;
height: 45px;
borderRadius:7px;
justifyContent: space-around;
color: ${colors.black}
`
export const SplashScreenContainer = styled(View)`
flex: 1px;
justifyContent: center;
alignItems:center;
`
export const ModalContainer = styled(View)`
 flex: 1;
 justify-content: center;
 align-items: center;
 background-color: rgba(0, 0, 0, 0.5);
`;


// export const ModalContent = styled(View)`
//  background-color: ${colors.white};
//  padding: 20px;
//  borderRadius: 10px;
//  width: 80%;
//  max-width: 400px; 
// `;




export const ModalContainerSecond = styled(View)`
flex: 1px;
justifyContent: center;
alignItems: center;

`
export const HalfCircleSecond = styled(View)`
backgroundColor: ${colors.white};
borderTopLeftRadius: 100px;
borderTopRightRadius: 100px;
width:20%;
height:40px;
alignSelf: center;
zIndex:-1;
top:15px;
`
export const ModalContentSecond = styled(View)`
backgroundColor: ${colors.white};
paddingHorizontal: 20px;
paddingVertical:20px;
borderRadius: 10px;
`





export const HalfCircle = styled(View)`
  background-color:  ${props => isDark() ? colors.darkModeVar4 : colors.white};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  width: 30%;
  height: 60px;
  align-self: center;
  top: 15px;
  overflow: hidden;
`;
export const HalfCircle2 = styled(View)`
  background-color:  ${props => isDark() ? colors.darkModeVar4 : colors.white};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  width:16%;
  height:48px;
  align-self: center;
  top: 15px;
  overflow: hidden;
`;
export const ModalContent = styled(View)`
  background-color: ${props => isDark() ? colors.darkModeVar4 : colors.white};
  padding: 20px;
  borderRadius: 15px;
  width: 80%;
  max-width: 400px; 
`;

export const ModalContent1 = styled(View)`
  background-color: ${props => isDark() ? colors.darkModeVar4 : colors.white};
  borderRadius: 15px;
  width:${DevWidth / 1.3}px;
  max-width:400px; 
`;

export const Textwithg = styled(Text)`
backgroundColor: ${colors.purpleVar4};
textAlign:center;
borderRadius: 5px;
height:25px;
color:${colors.purpleVar3}
`
export const QrImgView = styled(View)`
backgroundColor:${colors.white};
padding: 10px;
elevation: 4;
marginTop: 35px;
borderRadius:10px;
shadowColor:${colors.greyVar3};
alignSelf:center;
`
export const BtnConatiner = styled(View)`
marginTop:330px;
bottom:35px;
marginHorizontal: 20px;
justifyContent: space-between;
flexDirection:row;
`
export const ModalBg = styled(View)`
borderRadius: 15px;
background-color: ${props => isDark() ? colors.darkModeVar6 : colors.purpleVar1};
`

export const Card1 = styled(View)`
padding: 10px;
elevation: 2;
marginHorizontal: 20px;
marginTop: 18px;
flexDirection: row;
borderRadius: 6px;
background-color: ${props => isDark() ? colors.darkModeVar7 : colors.purpleVar1};
`

export const TopCard = styled(View)`
padding: 10px;
margin:20px;
`
export const CircleBg = styled(View)`
position: absolute;
top: 25px;
left: 27px;
height: 13px; 
width: 13px; 
borderRadius: 13px;
justifyContent: center;
alignItems: center;
`

export const CircleBg1 = styled(View)`
height: 10px; 
width: 10px; 
borderRadius: 10px;
alignItems: center;
background-color: ${colors.green};
`
export const IconConatiner2 = styled(TouchableOpacity)`
backgroundColor:${colors.purpleVar3};
height:32px;
width:32px;
borderRadius:32px;
justifyContent: center;
alignItems: center;
`
export const WhiteBgContact = styled(View)`
height:100%;
width:100%;
borderTopLeftRadius:45px;
borderTopRightRadius:45px;
overflow: hidden;
`
export const progressBarsContainer = styled(View)`
left:8px;
right:px;
marginTop:10px;
position: absolute;
flex: 1px;
`

export const EmojiText = styled(Text)`
font-size:18px;
color:${colors.yellow};
margin:5px;
`
export const ChatViewCommonHeader = styled(View)`
height: ${DevWidth / 4.2}px;
borderBottomRightRadius: 25px;
borderBottomLeftRadius: 25px;
elevation: 1;
`
export const FooterFirstView = styled(View)`
alignItems:center;
height:${DevHeight / 9.5}px;
paddingHorizontal: 20px;
borderTopLeftRadius: 20px;
borderTopRightRadius: 20px;
flexDirection:row; 
justifyContent:center; 
`
export const FooterSecondView = styled(View)`
width: ${DevWidth / 1.3}px;
height:40px;
borderWidth:2px;
borderRadius:6px; 
marginTop:30px;
bottom:8px;
`
export const ReplyFooterSecondView = styled(View)`
width:86%;
height:117px;
borderWidth:2px;
borderRadius:6px; 
marginTop:30px;
bottom:8px;
`
export const ReplyFooterThirdView = styled(View)`
width:98%;
height:67px;
borderRadius:5px; 
bottom:8px;
marginHorizontal:3px;
borderLeftWidth: 1.5px;
marginTop:12px;
borderLeftColor:${colors.purpleVar3}
`

export const FooterIconView = styled(View)`
backgroundColor: ${colors.purpleVar3};
height: 40px; 
width: 40px;
borderRadius: 12px; 
marginLeft: 15px;
alignItems: center; 
justifyContent:center; 
alignSelf:flex-end;
`
export const UserProfRoundNum = styled(View)`
height: 24px;
width: 24px;
borderRadius: 15px;
marginLeft: 10px;
alignItems: 'center';
justifyContent: 'center';
marginRight:5px;

`




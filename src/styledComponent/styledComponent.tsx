import styled from "styled-components";
import { View, TextInput, Text } from 'react-native';
import { colors } from "../utils/colors";
import { DevWidth } from "../utils/device";

export const LogoContainer = styled(View)`
alignItems:center;
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
background-color: rgba(248, 236, 258, 0.7);
alignItems:center;
justify-content: center;
margin-top:30px;
`
export const LoginLogoCircle = styled(View)`
height: 80px;
width: 80px;
border-radius: 100px;
background-color: rgba(90, 7, 139, 0.03);
justify-content: center;
alignItems:center;
`
export const SocialLogoCircle = styled(View)`
height: 60px;
width: 60px;
border-radius: 100px;
background-color: rgba(90, 7, 139, 0.03);
justify-content: center;
alignItems:center;
`
export const InputData = styled(TextInput)`
font-size: 16px;
color:${colors.black};
padding:15px;
`
export const IconInputContainer = styled(View)`
borderBottomWidth: 1px;
borderBottomColor: ${colors.borderBottomColor};
flexDirection: row;
marginTop:15px;
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
marginTop:30px;
`
export const CheckBox = styled(View)`
width: 24px;
height: 24px;
borderWidth: 1px;
borderColor: ${colors.greyVar4};
borderRadius: 4px;
justifyContent: center;
alignItems: center;
`
export const BottomStyle = styled(View)`
borderBottomWidth: 1px;
borderBottomColor: ${colors.borderBottomColor};
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
paddingTop:60px;
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
export const SplashScreenContainer= styled(View)`
flex: 1px;
justifyContent: center;
alignItems:center;
`
export const ModalContainer = styled(View)`
  flex: 1px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;


export const HalfCircle = styled(View)`
  background-color: ${colors.white};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  width: 30%;
  height: 60px;
  align-self: center;
  top: 15px;
  overflow: hidden;
`;
export const HalfCircle2 = styled(View)`
  background-color: ${colors.white};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  width: 17%;
  height: 34px;
  align-self: center;
  top: 15px;
  overflow: hidden;
`;
export const ModalContent = styled(View)`
  background-color: ${colors.white};
  padding: 20px;
  borderRadius: 10px;
  width: 80%;
  max-width: 400px; 
`;


export const Textwithg=styled(Text)`
backgroundColor: ${colors.purpleVar4};
textAlign:center;
borderRadius: 5px;
height:25px;
color:${colors.purpleVar3}

`
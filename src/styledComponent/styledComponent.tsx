import styled from "styled-components";
import { View } from 'react-native';
import { colors } from "../utils/colors";

export const LogoContainer = styled(View)`
marginTop:45px;
alignItems:center;
`
export const ButtonContainer = styled(View)`
flexDirection:row;
top:300px;
zIndex:1;
justifyContent:space-around;
bottom:0px;
`


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

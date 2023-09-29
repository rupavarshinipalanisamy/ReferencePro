import styled from "styled-components";
import {View} from 'react-native';
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

interface ProfileTabProps {

    isSelected: boolean;
}
export const ProfileTabButton = styled(View) <ProfileTabProps>`
    border-bottom-width: ${(props) => (props.isSelected ? '3px' : '0')};
    border-bottom-color: ${(props) => (props.isSelected ? colors.blueVar1 : 'transparent')};
    
    `;
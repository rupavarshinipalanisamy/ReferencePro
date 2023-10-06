import React,{ReactNode} from 'react';
import { Text, View } from 'react-native';
import { HalfCircle2, ModalContainer, ModalContent } from '../styledComponent/styledComponent';

export type customModalProps = {
    content : ReactNode
    }


const CustomModal = (props: customModalProps) => {
    return (
        <View>
            <ModalContainer>
                <HalfCircle2/>
                <ModalContent>
                    {props.content}
                </ModalContent>
            </ModalContainer>
        </View>
    )
}

export default CustomModal
import React, { Fragment } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import LoginLogo from '../../../assets/images/login-logo.svg';
import { LoginLogoBigCircle, LoginLogoCircle } from '../../styledComponent/styledComponent';
import { m30, pv8 } from '../../components/commonStyles';
import { H18fontNormalGray, H6fontRegularBlack } from '../../components/commonText';
import labels from '../../utils/labels';
import { DevHeight, DevWidth } from '../../utils/device';
import { MainContainer } from '../../components/commonView';

export type loginEmailProps = {
}

const LoginEmail = (props: loginEmailProps) => {
    return (
        <Fragment>
            <MainContainer>
                <StatusBar translucent backgroundColor='transparent' />
                <ImageBackground source={require('../../../assets/images/background-image.png')} style={{ width: DevWidth, height: DevHeight, }}>
                    <View style={m30}>
                        <LoginLogoBigCircle>
                            <LoginLogoCircle>
                                <LoginLogo/>    
                            </LoginLogoCircle>    
                        </LoginLogoBigCircle>
                    </View>
                    <View style={{paddingHorizontal:30}}>
                        <H6fontRegularBlack>{labels.logIn}</H6fontRegularBlack>
                        <H18fontNormalGray style={[pv8]}>{labels.message}</H18fontNormalGray>
                    </View>
                </ImageBackground>
            </MainContainer>
        </Fragment>
    )
}

export default LoginEmail
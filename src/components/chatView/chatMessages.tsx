
import React, { Fragment, useState, useRef } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, Animated, StatusBar } from 'react-native';
import { flexRow, pb10, pl15, pl6, pt10, spaceBetween } from '../../components/commonStyles'
import {
    PanGestureHandler,
    State as GestureState,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { colors } from '../../utils/colors';

const ChatMessage = ({ message, onSwipeRight, onPress, hanldeLogPress, selectedCards, toggleCardSelection }) => {
    const translateX = useRef(new Animated.Value(0)).current;

    const onSwipeGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: translateX,
                },
            },
        ],
        {
            useNativeDriver: false,
        }
    );

    const onSwipeGestureStateChange = (event) => {
        if (event.nativeEvent.oldState === GestureState.ACTIVE) {
            const swipeDistance = event.nativeEvent.translationX;
            if (swipeDistance > 50) {
                onSwipeRight();
                console.log('Hi');
            }
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: false,
            }).start();
        }
    };

    return (
        <PanGestureHandler
            onGestureEvent={onSwipeGestureEvent}
            onHandlerStateChange={onSwipeGestureStateChange}
            activeOffsetX={[-200, 50]}
        >
            <Animated.View
                style={[
                    {
                        backgroundColor: selectedCards.includes(message.id) ? colors.purpleVar4 : 'transparent', // Use the prop here
                        transform: [{ translateX: translateX }],
                    },
                ]}
            >
                <TouchableOpacity
                    style={[
                        message.type === 'sentmsg' ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' },
                        { paddingTop: 10, marginHorizontal: 20, position: 'relative' },
                    ]}
                    key={message.id}
                    onPress={() => {
                        if (selectedCards.length === 0) {
                            console.log('--');
                        } else {
                            toggleCardSelection(message.id); // Use the toggle function from props
                        }
                    }}
                    onLongPress={() => {
                        hanldeLogPress(true); // Use the function from props and pass any necessary parameters
                        if (!selectedCards.includes(message.id)) {
                            toggleCardSelection(message.id); // Use the toggle function from props
                        }
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: colors.greyVar4 }}>{message.time}</Text>
                        <Text style={pl6}> {message.icon}</Text>
                    </View>
                    <Text>{message.message}</Text>
                    <TouchableOpacity onPress={onPress}>{message.msg}</TouchableOpacity>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>
    );
};

export default ChatMessage;



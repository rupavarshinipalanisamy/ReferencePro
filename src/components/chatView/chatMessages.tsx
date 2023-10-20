
import React, { useRef } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { pl6 } from '../../components/commonStyles'
import {
    PanGestureHandler,
    State as GestureState,
} from 'react-native-gesture-handler';
import { colors } from '../../utils/colors';
import CustomIcon from '../../utils/Icons';
import { isDark } from '../../Theme/ThemeContext';

const ChatMessage = ({ message, onSwipeRight, onPress, hanldeLogPress, selectedCards, toggleCardSelection, editedMessageText }) => {
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
                        backgroundColor: selectedCards.includes(message.id) ? (isDark()?colors.darkModeVar6:colors.purpleVar4 ): 'transparent', // Use the prop here
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

                    onLongPress={(event) => {
                        hanldeLogPress(event,message.id);
                        if (!selectedCards.includes(message.id)) {
                          toggleCardSelection(message.id);
                        }
                      }}
        
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: colors.greyVar4 }}>{message.time}</Text>
                        {message.id === 8 && (
                            <>
                                {editedMessageText == null ? (
                                    <Text>{editedMessageText}</Text>
                                ) : (
                                    <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 5, marginLeft: 5 }}>
                                        <CustomIcon name='circle' type="font-awesome" size={6} color={colors.greyVar3} />
                                    </View>
                                )}
                            </>
                        )} 

                        {editedMessageText == null ? <Text>{editedMessageText}</Text> : <Text>{message.text}</Text>}
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



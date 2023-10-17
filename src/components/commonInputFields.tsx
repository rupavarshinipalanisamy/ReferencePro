import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../utils/colors';
import { InputData } from '../styledComponent/styledComponent';
import { isDark } from '../Theme/ThemeContext';

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  value?: string|undefined;
  onChangeText?: (text: string) => void;
  textColor ?: string; 
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  textColor,
}) => {
  return (
    <View >
      <InputData
        style = {{color : textColor || colors.black}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={isDark() ? colors.greyVar3 : colors.greyVar4}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

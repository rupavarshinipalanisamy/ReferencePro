import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../utils/colors';
import { InputData } from '../styledComponent/styledComponent';
import { isDark, useTheme } from '../Theme/ThemeContext';

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
  const {theme}=useTheme()  
  const isDarkTheme = theme === 'dark';


  return (
    <View >
      <InputData
        style = {{color : textColor ||isDarkTheme?colors.white: colors.black}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={isDarkTheme ? colors.greyVar3 : colors.greyVar4}
      />
    </View>
  );
};

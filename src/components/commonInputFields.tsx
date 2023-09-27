import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../utils/colors';
import { InputData } from '../styledComponent/styledComponent';

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  value?: string|undefined;
  onChangeText?: (text: string) => void;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View >
      <InputData
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.greyVar4}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}

      />
    </View>
  );
};

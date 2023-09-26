import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';


export interface IconProps {
  name: string;
  size: number;
  color: string;
  type: 'font-awesome' | 'octicons' | 'entypo' | 'Ionicons' | 'MaterialIcons' | 'MaterialCommunityIcons';
}
const CustomIcon: React.FC<IconProps> = ({ name, size, color, type }) => {
  let IconComponent;

  switch (type) {
    case 'font-awesome':
      IconComponent = FontAwesome;
      break;
    case 'octicons':
      IconComponent = OctIcon;
      break;
    case 'entypo':
      IconComponent = EntypoIcon;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    default:
      IconComponent = FontAwesome;
      break;
  }

  return (
    <View>
      <IconComponent name={name} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;


import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';

export interface IconProps {
  name: string;
  size: number;
  color: string;
  type: 'font-awesome' | 'octicons' | 'entypo' | 'Ionicons' | 'MaterialIcons' | 'MaterialCommunityIcons' | 'Foundation' | 'Feather' | "EvilIcons" | 'AntDesign';
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
    case 'Foundation':
      IconComponent = Foundation;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'EvilIcons':
      IconComponent = EvilIcons;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
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


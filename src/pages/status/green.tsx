// import React from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import { StatusPic1 } from '../../utils/png';

// interface BangleShapeProps {
//   size: number;
//   spaceBetween: number;
// }

// const BangleShape: React.FC<BangleShapeProps> = ({ size, spaceBetween }) => {
//   const radius = size / 2;

//   return (
//     <View style={styles.container}>
//       <View style={[styles.bangleContainer, { width: size, height: size, }]}>
//         <View style={[styles.halfCircle, styles.leftHalf, { borderTopLeftRadius: radius, borderBottomLeftRadius: radius }]} />
//         <View style={{ width: spaceBetween ,}} />
// <Image source={StatusPic1} style={[{ borderWidth:1 }]} />

//         <View style={[styles.halfCircle, styles.rightHalf, { borderTopRightRadius: radius, borderBottomRightRadius: radius }]} />
//       </View>
//       {/* <Image source={require('./your-image.png')} style={styles.image} />
//        */}


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute', // Container for relative positioning
//   },
//   bangleContainer: {
//     flexDirection: 'row',
//   },
//   halfCircle: {
//     width: '50%',
//     height: '100%',
//   },
//   leftHalf: {
//     backgroundColor: 'green',
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//   },
//   rightHalf: {
//     backgroundColor: 'green',
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//   },
//   image: {
//     position: 'absolute', // Position the image absolutely
//     top: -50, // Adjust the top value to position the image above the circle
//     left: 0, // Adjust the left value as needed
//     width: 100, // Adjust the width and height as needed
//     height: 100,
//   },
// });

// export default BangleShape;
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomComponent = () => {
  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    top: 8.5,
    left: 6,
    backgroundColor: '#1BA345',
  },
});

export default CustomComponent;

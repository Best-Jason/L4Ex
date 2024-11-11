// //////////////////Exercise 1////////////////////////
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <Text style={{ fontSize: 24 }}>RP Values</Text>
//         <Text style={{ color: 'green' }}>Excellence</Text>
//         <Text style={{ backgroundColor: "yellow" }}>Customer centric</Text>
//         <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
//         <Text style={{ textAlign: 'center' }}>teamwork </Text>
//         <Text style={{  backgroundColor: "black", color: 'white'}}>Enterprising</Text>
//
//
//       </View>
//   );
// };
// export default Exercise1;


// //////////////////Exercise 2 ////////////////////////
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop:30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{ marginTop: 50, margin: 20 }}>
//         <View style={styles.greenBox}>
//           <Text style={styles.title}>Who We Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise2;


// // // //////////////////Exercise 3A ////////////////////////
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection :'row',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth:5
//
//   },
//   Child: {
//     borderWidth:2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}> Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}> Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}> Child 3</Text>
//       </View>
//
//   );
// };
//
// export default Exercise3A;
//


// // // //////////////////Exercise 3B ////////////////////////
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection :'column',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth:5
//
//   },
//   Child: {
//     flex: 1,
//     borderWidth:2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}> Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}> Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}> Child 3</Text>
//       </View>
//
//   );
// };
//
// export default Exercise3B;
//

// // // //////////////////Exercise 3C ////////////////////////
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection :'column',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth:5
//
//   },
//   Child: {
//     flex: 1,
//     borderWidth:2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue', maxWidth:90}]}> Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}> Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue', maxHeight:120}]}> Child 3</Text>
//       </View>
//
//   );
// };
//
// export default Exercise3C;
//

// // //////////////////Exercise 3D ////////////////////////
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//
//     flexDirection :'row',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth:5
//
//   },
//   Child: {
//
//     borderWidth:2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue',  flex:1  }]}> Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue', flex:2  }]}> Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue', flex:3}]}> Child 3</Text>
//       </View>
//
//   );
// };
//
// export default Exercise3D;

// // //////////////////Exercise 3E ////////////////////////
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//   Parent: {
//
//     flexDirection :'column',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth:5,
//     // justifyContent:'flex-start',
//     // justifyContent:'flex-end',
//     // justifyContent:'space-around',
//     // justifyContent:'space-between',
//     justifyContent:'space-around',
//     flex:1
//
//   },
//   Child: {
//
//     borderWidth:2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue'  }]}> Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'  }]}> Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}> Child 3</Text>
//       </View>
//
//   );
// };
//
// export default Exercise3D;

// //////////////////Exercise 4 ////////////////////////
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor: 'white'}]} ><Text>Child 1</Text></View>
            <View style={styles.child} />
            <View style={styles.child} ><Text>Super man, Super Man </Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 50,
        justifyContent: 'space-around', // Centers children vertically
        alignItems: 'center', // Centers children horizontally
        flexDirection: 'row',
    },
    child: {
        width: 80,
        height: 80,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center'
    },
});

export default Exercise4;

import react,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';

 const Stack=createNativeStackNavigator();

 function LoginScreen({navigation}) {
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");

   const handleLogin=()=>{
     Alert.alert('Login Info','Email:${email}\nPassword:${password}');
     navigation.navigate('Home',{email});
   };
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
    style={styles.input}
    placeholder="Enter Email"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoCapitalize="none"
    />
    
    <TextInput
    style={styles.input}
    placeholder="Enter Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    autoCapitalize="none"
    />
    
    <Button title="Login" onPress={handleLogin}
    />
    </View>
  );
 }

 function HomeScreen({route}) {
   const email=route?.params?.email ||"";
   return(
     <View style={styles.container}>
     <Text style={styles.title}>Welcome!</Text>
     <Text>{email?'You logged in as:${email':'No email provided'}</Text>
     </View>
   );
 }

 export default function App() {
   return(
     <NavigationContainer>
     <Stack.Navigator intialRouteName="Login">
     <Stack.Screen name="Login" 
     component={LoginScreen}/>
     <Stack.Screen name="Home"
     component={HomeScreen}/>
     </Stack.Navigator>
     </NavigationContainer>
   );
 }

 const styles=StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     padding:20,  
   },
   title:{
     fontSize:24,
     fontWeight:'bold',
     marginBottom:20,
   },
   input:{
     width:'100%',
     borderWidth:1,
     borderColor:'#ccc',
     padding:10,
     marginBottom:12,
     borderRadius:6,
   },

 });
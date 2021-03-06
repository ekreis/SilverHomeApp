import React from 'react';
import colors from "../config/colors";
import syles from "../config/styles";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import HomeScreen from './HomeScreen';


//const Stack = createStackNavigator();


export default class App extends React.Component {
  state={       //this is for the future, when we actually want to log someone in
    email:"",
    password:""
  }
  //handleOnPress = () => {alert="you forgot lmao"}
  /*constructor(){
  super();
  this.onPressButton = this.onPressButton.bind(this);
  }*/
  render(){
    
    return (
      
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require('../assets/logo.png')}/>
        <Text style={styles.logo}>SilverHome</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Type your email here..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry //this makes it so the characters are not shown in the password
            style={styles.inputText}
            placeholder="Type your password here..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        
        <TouchableOpacity 
          onPress={() => this.onPressButton} 
          style={styles.forgotBtn}
          >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} title = 'TouchableOpacity'>
          <Text style={styles.loginText}>LOGIN</Text>
          
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </SafeAreaView>
    
    );
    
  }
/*
  onPressButton() {
    const { navigate } = this.props.navigation;
    var options = {
      title: strings.app_name,
      content: strings.create_message,
      positiveText: strings.OK,
      onPositive: () => console.log("this works")};
  } */
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"normal",
    fontSize:50,
    color:"white",
    marginBottom:80
  },
  image:{
    justifyContent: 'center',
    width: 100,
    height: 100,
    marginBottom: 15
  },
  inputView:{ 
    width:"80%",
    backgroundColor: colors.medium,
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    fontWeight: "bold",
    height:80,
    color:"black"
  },
  forgot:{
    fontWeight: 'bold',
    color:"white",
    fontSize:18
  },

  forgotBtn:{
    width:"60%",
    backgroundColor:"grey",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  },

  
  loginBtn:{
    width:"80%",
    backgroundColor: colors.accent,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  
  loginText:{
    color:"white",
    fontWeight: 'bold',
    fontSize:18
  }
});

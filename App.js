import { StatusBar } from 'expo-status-bar';
import { Image,Alert,StyleSheet, Text,  TextInput, TouchableOpacity, View  } from 'react-native';

export default function App() {

  function alertLogin(){
    Alert.alert("Bienvenido!","Usuario ingresado")
  }

  function alertProfile(){
    Alert.alert("Alerta!","Por favor ingrese su registro")
  }

  return (
    <View style={styles.container}>
          <Image
      style={styles.img}
      source={require('./assets/profile.png')}
      />
      <Text style= {styles.txt1}>Bienvenido!!</Text>
      
      <Text style={styles.txt2}>Usuario:
      </Text>

      <TextInput 
      style={styles.input1}
      placeholder='Ingrese su usuario:'
      keyboardType="email-address">
      </TextInput>

      <Text style={styles.txt2}>Contraseña:</Text>

      <TextInput 
      style={styles.input1}
      placeholder='Ingrese su contraseña:'>
        
      </TextInput>

      <TouchableOpacity
      style={styles.btn1} onPress={alertLogin}
      >
        <Text style={{fontSize:20, color: '#c0c0c0'}}>Ingresar</Text>
        <Image style={styles.img2}
        source={require("./assets/login(2).png")}></Image>
      </TouchableOpacity>


      <TouchableOpacity
      style={styles.btn2} onPress={alertProfile}
      >
        <Text style={{fontSize:20, color: '#c0c0c0'}}>Registrarse</Text>
        <Image style={styles.img3}
        source={require("./assets/signup.png")}></Image>
      </TouchableOpacity>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1:{
    color:'white',
    fontSize:30
  
  },
  input1:{
    backgroundColor:'white',
    paddingHorizontal: 50,
    width:'90%',
    height:'10%',
    borderRadius:29
  },
  txt2:{
    fontSize:20,
    alignSelf:'flex-start',
    paddingHorizontal: 28
  },
  input2:{
    backgroundColor:'white',
    paddingHorizontal: 50,
    width:'90%',
    height:'10%',
    borderRadius:29
  },
  btn1:{
  backgroundColor:'#c0c0c0',
  top: 30,
  width:'60%',
  height:'7%',
  borderRadius:10
  },
  btn2:{
    backgroundColor:'#c0c0c0',
    top: 40,
    width:'60%',
    height:'7%',
    borderRadius:10
    },
  img:{
    width:"40%",
    height:"19%"
  },
  img2:{
    width:"20%",
    height:"80%",
    left:100,
    top:-20,
  },
  img3:{
    width:"20%",
    height:"80%",
    left:100,
    top:-20
  },
  
});

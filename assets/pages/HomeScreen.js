import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView, TouchableOpacity, Image,  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('') 
  const [nameField, setNameField] = useState('')
  const [emaiField, setEmail] = useState('')
  const [emailField, setEmailField] = useState('')
  const [gmailField, setGmailField] = useState('')
  const [gmaiField, setGmaiField] = useState('')
  const [password, setPassword] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [confirmPasswordField, setConfirmPasswordField] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPasswordField, setNewPasswordField] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassField, setConfirmPassField] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [forgotPass, setForgotPass] = useState('')
  const [nuber, setNuber] = useState('')
  const [nuberField, setNuberField] = useState('')
  const [surnameField, setsurnameField] = useState('')
  const [cpfField, setCpfField] = useState('')
  const [passworField, setPassworField] = useState('')
  const [signUp, setSignUp] = useState('')
  const [homeButton, setHomeButton] = useState('1')
  const [googleButton, setGoogle] = useState('1')
  const [googleButtonConf, setGoogleConf ] = useState('1')

  const handleAboutClick = () => {
    if(emailField != '' && passwordField != ''){
      navigation.navigate('Profile')
    }else{
      alert('Não encontramos essa conta, por favor tente novamento!')
    }
  }

  const handleForgotButton = () => {
    setForgotPass('1')
    setSignUp('0')
    setHomeButton('0')
  }
  const handleBackButton = () => {
    setForgotPass('0')
    setSignUp('0')
    setHomeButton('1')
    setGoogle('1')
  }
  
  // Função do Botão Entrar
  const handleLoginButton = () => {
    setPassword(passwordField)
    alert(emailField)
  }
  const handleSignUp = () => {
    alert(nameField)
    alert(surnameField)
    alert(cpfField)
    alert(nuberField)
    alert(emailField)
    alert('Cadastro realizado com sucesso')
    
    setForgotPass('0')
    setSignUp('0')
    setHomeButton('1')
  }
  const handleConfirmButton = () => {
    if(confirmPassField == newPasswordField){
      alert('Senha alterada com sucesso!')
    }else{
      alert('As senhas inseridas devem ser idênticas!')
    }
  }

  // Função do Cadastre-se
  const handleSignUpButton = () => {
    setForgotPass('0')
    setSignUp('1')
    setHomeButton('0')
2
    
    setNameField('')
    setEmailField('')
    setNuberField('')
  }
  const handleGoogleButton = () => {
    setForgotPass('0')
    setSignUp('0')
    setHomeButton('0')
    setGoogle('2')
  }

  const handleGoogleButtonConfir = () => {
    if(gmaiField != '' && confirmPassword != ''){
      navigation.navigate('Profile')
    }else{
      alert('Não encontramos essa conta, por favor tente novamento!')
    }
    
    setForgotPass('0')
    setSignUp('0')
    setHomeButton('1')

  }

  return (
    <ScrollView style={styles.scrollview}>
      {forgotPass != '1' && signUp != '1' && homeButton == '1' &&  googleButton == '1' &&
        <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../Twitter-Emblema.png')}/>
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='email@email.com.br'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='_____ _____' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAboutClick}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        

        
        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonGg} onPress={handleGoogleButton}>
          <Image
            style={styles.logoGoogle}
            source={require('../google_PNG19635.png')}
          />
          <Text style={styles.buttonGoogle}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFk} onPress={handleLoginButton}>
          <Image
            style={styles.logoFacebook}
            source={require('../facebook-llogo.png')}
          />
          <Text style={styles.buttonFacebook}>Facebook</Text>
        </TouchableOpacity>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Lays Rodrigues</Text>
        </View>
      </View>
      
        </>
      }
      {forgotPass === '1' &&
        <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          <Image style={styles.backImg} source={require('../back.png')}/>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../Twitter-Emblema.png')}/>
        <Text style={styles.h1}>Recuperação de Senha</Text>
        <Text style={styles.h2}>Bem vindo(a)! Crie sua nova senha baixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='email@email.com.br'
            placeholderTextColor='#d1d1d1'
            value={gmailField}
            onChangeText={t => setGmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Nova senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='----- -----' 
            placeholderTextColor='#d1d1d1'
            value={newPasswordField}
            onChangeText={text => setNewPasswordField(text)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Confirme sua senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='----- -----' 
            placeholderTextColor='#d1d1d1'
            value={confirmPassField}
            onChangeText={text => setConfirmPassField(text)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.confirma} onPress={handleConfirmButton}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Lays Rodrigues</Text>
        </View>
      </View>
        </>
      }
      {signUp === '1' &&
        <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          <Image style={styles.backImg} source={require('../back.png')}/>
        </TouchableOpacity>

        <Text style={styles.h1}>Sistema de Cadastro</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Nome</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite o seu nome' 
            placeholderTextColor='#d1d1d1'
            value={nameField}
            onChangeText={t => setNameField(t)}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Sobrenome</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite o seu sobrenome' 
            placeholderTextColor='#d1d1d1'
            value={surnameField}
            onChangeText={t => setsurnameField(t)}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>CPF</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder=' CPF' 
            placeholderTextColor='#d1d1d1'
            value={cpfField}
            onChangeText={t => setCpfField(t)}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Celular (com DDD)</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='(00) 00000-0000' 
            placeholderTextColor='#d1d1d1'
            value={nuberField}
            onChangeText={t => setNuberField(t)}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
            style={styles.inputField}
            placeholder='Digite seu e-mail'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#d1d1d1'
            value={passworField}
            onChangeText={t => setPassworField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Confirmar senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#d1d1d1'
            value={confirmPasswordField}
            onChangeText={t => setConfirmPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.confirma} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
        </>
      }
      {googleButton === '2' &&
        <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          <Image style={styles.backImg} source={require('../back.png')}/>
        </TouchableOpacity>

        <Text style={styles.h1}>Fazer login</Text>
        <Text style={styles.h2}>Use sua Conta do Google</Text>
        
        

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
            style={styles.inputField}
            placeholder='Digite seu e-mail'
            placeholderTextColor='#d1d1d1'
            value={gmaiField}
            onChangeText={t => setGmaiField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua senha' 
            placeholderTextColor='#d1d1d1'
            value={confirmPassword}
            onChangeText={t => setConfirmPassword(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        

        <TouchableOpacity style={styles.confirma} onPress={handleGoogleButtonConfir}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
        </>
      }
    </ScrollView>
  )
}

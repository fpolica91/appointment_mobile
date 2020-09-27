import React, { useRef, useCallback } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Image,
  Platform,
  ScrollView,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {
  Container,
  Title,
  CreateAccountButton,
  CreateAccountText,
} from './styles'
import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import Button from '../../components/button'
import LogoImage from '../../assets/logo.png'

const Login = ({ navigation }) => {
  const formRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const focusPasswordInput = useCallback(() => {}, [])
  const handleSignin = useCallback((data) => {
    console.log(data)
  })

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={LogoImage} />
            <View>
              <Title>Login</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignin}>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                icon="mail"
                ref={emailRef}
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <Input
                ref={passwordRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Password"
                returnKeyType="send"
              />
              <Button onPress={() => formRef.current?.submitForm()}>
                Sign In
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#Ff9000" />
        <CreateAccountText onPress={() => navigation.navigate('Signup')}>
          Create Account
        </CreateAccountText>
      </CreateAccountButton>
    </>
  )
}

export default Login

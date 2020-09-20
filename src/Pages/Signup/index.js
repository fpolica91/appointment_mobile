import React, { useRef } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Image,
  Platform,
  ScrollView,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Form } from '@unform/mobile'
import { Container, Title, BackToSignIn, BackToSignInText } from './styles'
import LogoImage from '../../assets/logo.png'
import Input from '../../components/Input/input'

const Signup = ({ navigation }) => {
  const formRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
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
              <Title>Create Account</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={() => {
                console.log('submitting')
              }}
            >
              <Input
                name="name"
                autoCorrect={false}
                autoCapitalize="words"
                icon="user"
                placeholder="name"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
              />
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
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#Ff9000" />
        <BackToSignInText>Back to login</BackToSignInText>
      </BackToSignIn>
    </>
  )
}

export default Signup

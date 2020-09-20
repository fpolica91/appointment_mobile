import React, { useRef } from 'react'
import {
    KeyboardAvoidingView,
    View,
    Image,
    Platform,
    ScrollView,
} from 'react-native'
import { Form } from '@unform/mobile';
import { Container, Title } from './styles'
import LogoImage from '../../assets/logo.png'
import Input from '../../components/Input/input'

const Signup = () => {
    const formRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
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
                        <Form ref={formRef} onSubmit={() => { console.log('submitting') }}>
                            <Input name="name" />
                            <Input name="email" ref={emailRef} />
                            <Input name="password" ref={passwordRef} />
                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

export default Signup

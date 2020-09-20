import React, { useRef } from 'react'
import {
    KeyboardAvoidingView,
    View,
    Image,
    Platform,
    ScrollView,
    Text
} from 'react-native';
import { Container, Title } from './styles';
import { Form } from '@unform/mobile';
import Input from '../../components/Input/input';
import LogoImage from '../../assets/logo.png'

const Login = ({ navigation }) => {
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
                        <Title>Login</Title>
                    </View>
                    <Form ref={formRef} onSubmit={() => { console.log('submitting') }}>
                        <Input name="email" ref={emailRef} />
                        <Input name="password" ref={passwordRef} />
                    </Form>
                    <View>
                        <Text onPress={() => navigation.navigate('Signup')}>New user? Create an account</Text>
                    </View>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    </>
    )
}

export default Login;
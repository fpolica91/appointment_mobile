import React from 'react';
import { KeyboardAvoidingView, View, Image, Platform, ScrollView } from 'react-native'
import { Container, Title } from './styles'
import LogoImage from '../../assets/logo.png';


export default function Signup() {
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}>
                    <Container>
                        <Image source={LogoImage} />
                        <View>
                            <Title>Create Account</Title>
                        </View>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}
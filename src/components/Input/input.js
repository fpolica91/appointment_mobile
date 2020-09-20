import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container, TextInput } from './styles'

const Input = ({ name }) => {
    const inputElementRef = useRef(null);
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef({ value: defaultValue });

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [fieldName, registerField]);
    return (
        <Container isFocused={false} isErrored={false}>
            <TextInput
                onChangeText={(value) => (inputValueRef.current.value = value)}
                keyboardAppearance="dark"
                placeholderTextColor="#666360"
                placeholder={fieldName}
            />
        </Container>
    )
}

export default Input
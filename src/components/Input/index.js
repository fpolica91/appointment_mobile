import React, {
  useRef,
  useEffect,
  forwardRef,
  useState,
  useCallback,
  useImperativeHandle,
} from 'react'
import { useField } from '@unform/core'
import { Container, TextInput, Icon } from './styles'

const Input = ({ name, icon, ...rest }, ref) => {
  const inputElementRef = useRef(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef({ value: defaultValue })
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef?.current,
      path: 'value',
      setValue(ref, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      console.log(inputElementRef, 'the input element')
      inputElementRef.current?.focus()
    },
  }))

  return (
    <Container isFocused={isFocused} isErrored={false}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#ff9000' : '#666360'}
      />
      <TextInput
        {...rest}
        ref={inputElementRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(value) => (inputValueRef.current.value = value)}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        placeholder={fieldName}
      />
    </Container>
  )
}

export default forwardRef(Input)

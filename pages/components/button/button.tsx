import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styledComponents'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    onPress?: () => void
}

export const Button = ({ onPress, title, disabled }: MyButtonProps) => {
  return (
        <ButtonContainer onPress={onPress} disabled={disabled}> {title} </ButtonContainer>
  )
}

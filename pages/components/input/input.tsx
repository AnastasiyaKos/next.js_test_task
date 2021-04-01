import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styledComponents'

export const Input = ({ onChange, value, placeholder, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
        <InputContainer
            {...props}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
  )
}

import { FC, InputHTMLAttributes, useId } from 'react'
import './TextInput.css'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

export const TextInput: FC<TextInputProps> = ({
  label,
  error,
  id,
  ...props
}) => {
  const inputId = id || useId()

  return (
    <div className={`input ${error ? 'input--error' : ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`input__label ${props.disabled ? 'input__label--disabled' : ''}`}>
          {label}
        </label>
      )}
      <input id={inputId} className='input__field' {...props} />
    </div>
  )
}

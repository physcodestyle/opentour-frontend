import { FC, InputHTMLAttributes } from 'react'
import './TextInput.css'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

export const TextInput: FC<TextInputProps> = ({ label, error, ...props }) => {
  return (
    <div className={`input ${error ? 'input--error' : ''}`}>
      {label && <label className='input__label'>{label}</label>}
      <input className='input__field' {...props} />
    </div>
  )
}

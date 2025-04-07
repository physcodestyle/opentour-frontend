import './RadioInput.css'
import { FC, InputHTMLAttributes } from 'react'

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const RadioInput: FC<RadioInputProps> = ({ label, id, ...props }) => {
  const inputId = id || 'radioInputId'

  return (
    <div className='inputRadio'>
      <input
        className='inputRadio__field'
        type='radio'
        id={inputId}
        {...props}
      />
      <label className='inputRadio__label' htmlFor={inputId}>
        {label}
      </label>
    </div>
  )
}

import './CheckboxInput.css'
import { FC, InputHTMLAttributes } from 'react'

interface CheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const CheckboxInput: FC<CheckboxInputProps> = ({ label, id, ...props }) => {
  const inputId = id || 'CheckboxInputId'

  return (
    <div className='inputCheckbox'>
      <input
        className='inputCheckbox__field'
        type='checkbox'
        id={inputId}
        {...props}
      />
      <label className='inputCheckbox__label' htmlFor={inputId}>
        {label}
      </label>
    </div>
  )
}
import { FC, TextareaHTMLAttributes, useId } from 'react'
import './TextArea.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: boolean
}

export const TextArea: FC<TextAreaProps> = ({ label, error, id, ...props }) => {
  const textareaId = id || useId()
  return (
    <div className={`textarea ${error ? 'textarea--error' : ''}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className={`textarea__label ${props.disabled ? 'textarea__label--disabled' : ''}`}>
          {label}
        </label>
      )}
      <textarea id={textareaId} className='textarea__field' {...props} />
    </div>
  )
}

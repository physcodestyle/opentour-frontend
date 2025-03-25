import { color } from 'bun'
import './SelectInput.css'

interface ISelect extends React.ComponentProps<'select'> {
  options: { value: string; title: string }[]
  placeholder: string
  label?: string
  error?: boolean
  disabled?: boolean
}

export const SelectInput = ({
  label,
  options,
  error,
  disabled,
  placeholder,
  ...props
}: ISelect) => {
  return (
    <label className={`select-input ${error && 'error'}`}>
      {label && <span className='select-input__label caption'>{label}</span>}

      <select
        className='select-input__input input'
        disabled={disabled}
        {...props}
      >
        <option value='' disabled={false} className='input__placeholder'>
          {placeholder}
        </option>
        {options.map((el, index) => (
          <option
            selected
            key={el.title + index}
            value={el.value}
            className='select-input__placeholder'
          >
            {el.title}
          </option>
        ))}
      </select>

      <span className='select-input__button'>
        <svg
          className='select-input__icon'
          width='12'
          height='7'
          viewBox='0 0 12 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='select-input__icon-path'
            d='M11.6569 0.656854H8.82843L6 3.48528L3.5 0.65686L0.343146 0.656854L6 6.31371L11.6569 0.656854Z'
            fill='black'
          />
        </svg>
      </span>
    </label>
  )
}

import { ButtonHTMLAttributes, FC } from 'react'
import './RegularButton.css'

interface RegularButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export const RegularButton: FC<RegularButtonProps> = ({ text, ...props }) => {
	return (
		<div className='button__wrapper'>
			<button className='button__element' {...props}>
				{text}
			</button>
		</div>
	)
}

import { ButtonHTMLAttributes, FC } from 'react'
import './PrimaryButton.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	state?: 'default' | 'hover' | 'pressed' | 'focused' | 'disabled'
}

export const PrimaryButton: FC<ButtonProps> = ({ ...props }) => {
	return (
		<div className={'button__wrapper'}>
			<button className={`primary-button `} {...props}>
				Caption
			</button>
		</div>
	)
}

export default PrimaryButton

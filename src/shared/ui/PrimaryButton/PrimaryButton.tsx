import { ButtonHTMLAttributes, FC } from 'react';
import './PrimaryButton.css';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export const PrimaryButton: FC<ButtonProps> = ({ text, ...props }) => {
	return (
		<div className={'button__wrapper'}>
			<button className='primary-button' {...props}>
				{text}
			</button>
		</div>
	);
};

export default PrimaryButton;

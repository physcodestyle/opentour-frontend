import { FC } from 'react';

import {
	convertAbbreviatedLanguages,
	LanguagesTypes,
} from '@/shared/ui/LanguageSign/consts';
import './LanguageSign.css';


interface LanguageSignProps {
	language: LanguagesTypes
}

export const LanguageSign: FC<LanguageSignProps> = ({ language }) => {
	return (
		<div className='langElem__wrapper'>
			{convertAbbreviatedLanguages[language]}
		</div>
	);
};

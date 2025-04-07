export enum LanguagesEnum {
	RUSSIAN = 'Russian',
	ENGLISH = 'English',
	GERMANY = 'Germany',
}

export type LanguagesTypes = (typeof LanguagesEnum)[keyof typeof LanguagesEnum]

export const convertAbbreviatedLanguages = {
	[LanguagesEnum.RUSSIAN]: 'RU',
	[LanguagesEnum.ENGLISH]: 'EN',
	[LanguagesEnum.GERMANY]: 'GE',
};

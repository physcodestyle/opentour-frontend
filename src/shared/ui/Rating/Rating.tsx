import React, { FC } from 'react';
import './Rating.css';
import Image from 'next/image';


interface RatingProps {
	rating: number
	allVotes: number
}

const Rating: FC<RatingProps> = ({ rating, allVotes }) => {
	return (
		<div className='rating__wrapper'>
			<Image
				src='/icons/stars/star-full.svg'
				width={24}
				height={24}
				alt='star'
			/>
			{rating} / {allVotes}
		</div>
	);
};

export default Rating;

'use client';
import React, { useState, useCallback, forwardRef } from 'react';
import Image from 'next/image';
import './LikeSign.css';


interface LikeSignProps {
	isLiked?: boolean
	onClick?: (liked: boolean) => void
	className?: string
}

export const LikeSign = forwardRef<HTMLDivElement, LikeSignProps>(
	({ isLiked = false, onClick, className = '' }, ref) => {
		const [liked, setLiked] = useState(isLiked);

		const handleClick = useCallback(() => {
			const newLikedState = !liked;
			setLiked(newLikedState);
			onClick?.(newLikedState);
		}, [liked, onClick]);

		return (
			<div
				ref={ref}
				className={`like-sign__wrapper ${className}`}
				onClick={handleClick}
				role='button'
				aria-pressed={liked}>
				<Image
					src={
						liked
							? '/icons/favorites/heart-active.svg'
							: '/icons/favorites/heart-default.svg'
					}
					alt={liked ? 'Unlike' : 'Like'}
					width={24}
					height={24}
				/>
			</div>
		);
	},
);

import Image from 'next/image'
import './ProfileImage.css'
import { FC } from 'react'

interface IPhoto {
  photo: string | null
}

export const ProfileImag: FC<IPhoto> = ({ photo }) => {
  return (
    <div className='image__container'>
      <Image
        src={photo ?? '/icons/group-count/single.svg'}
        width={86}
        height={86}
        alt='фото профиля'
        className='profile__photo'
      />
    </div>
  )
}

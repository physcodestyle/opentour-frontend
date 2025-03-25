import Image from 'next/image'
import './ProfileImage.css'

/* запрос на получение фото
const imagePhoto = require('') */

const imagePhoto = ''

export function ProfileImage() {
  return (
    <div className='image__container'>
      {imagePhoto ? (
        <Image
          src={imagePhoto}
          width={86}
          height={86}
          alt='фото профиля'
          className='profile__photo'
        />
      ) : (
        <Image
          src='/icons/group-count/single.svg'
          height={90}
          width={90}
          alt='Иконка'
          className='icon__photo'
        />
      )}
    </div>
  )
}

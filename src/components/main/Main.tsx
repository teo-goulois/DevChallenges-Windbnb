import React from 'react'
// Components
import Post from './Post';
// Types
import { PostType } from "../../types/Types";

interface Props {
  data: PostType[];
}

const Main = ({data}: Props) => {
  const showNumberOfStay = () => {
    if(data.length > 11) return '12+'
    return data.length
  }
  return (
    <div className='px-2 font-["Montserrat"]'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-lg md:text-2xl md:pl-10'>Stays in Finland</h1>
        <p className='font-normal text-sm'>{`${showNumberOfStay( )} stays`}</p>
      </div>

      <div className='flex flex-wrap justify-center'>
        {data.map((item, index) => {
          return <Post item={item} />
        })}
      </div>
    </div>
  )
}

export default Main
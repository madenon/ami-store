import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
  const params = useParams()
  return (
    <div className='mt-10'>

      {params?.categoryName}
    </div>
  )
}

export default CategoryProduct